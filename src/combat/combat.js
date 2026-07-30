import * as THREE from 'three';
import { WEAPONS, createProjectile } from './weapons.js';

export class CombatSystem {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.projectiles = [];
    this.slashVFX = [];

    // Attack state machine
    this.attackState = null; // { phase: 'startup'|'active'|'recovery', timer, def, combo }
    this.attackCooldown = 0;
    this.comboCount = 0;
    this.comboWindow = 0;
  }

  canAttack() {
    return !this.attackState && this.attackCooldown <= 0;
  }

  playerAttack(heroine, weaponId, monsters, levelBonus = 0) {
    if (!this.canAttack()) return false;

    const def = WEAPONS.find(w => w.id === weaponId) || WEAPONS[0];
    const cooldown = 1.0 / def.speed;
    const comboChain = this.comboWindow > 0 ? (this.comboCount % 3) : 0;

    // Start attack with startup phase
    this.attackState = {
      phase: 'startup',
      timer: def.startup,
      activeTimer: def.active,
      recoveryTimer: def.recovery,
      def,
      levelBonus,
      combo: comboChain,
      heroinePos: heroine.position.clone(),
      heroineQuat: heroine.quaternion.clone(),
      hits: new Set(),
    };
    this.attackCooldown = 0.1; // small buffer between attacks

    // Telegraph VFX — flash during startup
    this.spawnTelegraph(heroine, def);

    return true;
  }

  update(delta, monsters) {
    this.comboWindow = Math.max(0, this.comboWindow - delta);
    this.attackCooldown = Math.max(0, this.attackCooldown - delta);

    // Process attack state machine
    if (this.attackState) {
      const s = this.attackState;
      s.timer -= delta;

      if (s.phase === 'startup' && s.timer <= 0) {
        // Enter active phase — deal damage
        s.phase = 'active';
        s.timer = s.activeTimer;
        this.executeHit(s, monsters, this.camera);
      }

      if (s.phase === 'active' && s.timer <= 0) {
        // Enter recovery phase
        s.phase = 'recovery';
        s.timer = s.recoveryTimer;
      }

      if (s.phase === 'recovery' && s.timer <= 0) {
        // Attack finished — open combo window
        this.attackState = null;
        this.comboCount = (this.comboCount + 1) % 3;
        this.comboWindow = 0.4;
      }
    }

    // Update projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.userData.age += delta;
      p.userData.mat.uniforms.uTime.value = p.userData.age;

      if (p.userData.age > p.userData.lifetime) {
        this.scene.remove(p);
        this.projectiles.splice(i, 1);
        continue;
      }

      p.position.add(p.userData.velocity.clone().multiplyScalar(delta));

      for (const m of monsters) {
        if (!m.userData.alive) continue;
        const dist = p.position.distanceTo(m.position);
        if (dist < 0.8) {
          this.scene.remove(p);
          this.projectiles.splice(i, 1);
          return { monster: m, damage: p.userData.damage, projectile: true };
        }
      }
    }

    // Update VFX
    for (let i = this.slashVFX.length - 1; i >= 0; i--) {
      const vfx = this.slashVFX[i];
      vfx.userData.age += delta;
      vfx.userData.mat.uniforms.uTime.value = vfx.userData.age / vfx.userData.lifetime;
      if (vfx.userData.age > vfx.userData.lifetime) {
        this.scene.remove(vfx);
        this.slashVFX.splice(i, 1);
      }
    }

    return null;
  }

  executeHit(s, monsters, camera) {
    const pos = s.heroinePos.clone();
    pos.y += 0.8;
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(s.heroineQuat);

    const def = s.def;

    if (def.type === 'melee') {
      for (const monster of monsters) {
        if (!monster.userData.alive) continue;
        if (s.hits.has(monster)) continue;
        const mPos = monster.position.clone();
        mPos.y = 0;
        const pPos = pos.clone();
        pPos.y = 0;
        const dist = pPos.distanceTo(mPos);
        if (dist < def.range) {
          const toMonster = mPos.clone().sub(pPos).normalize();
          const dot = forward.dot(toMonster);
          if (dot > 0.2) {
            s.hits.add(monster);
            const dmg = (def.damage + s.levelBonus) * (0.85 + Math.random() * 0.3);
            this.applyDamage(monster, Math.round(dmg), def, pos, mPos, camera);
          }
        }
      }
      this.spawnSlashArc(pos, forward, def.color);
    } else if (def.type === 'ranged') {
      this.rangedShot(s, monsters);
    } else if (def.type === 'magic') {
      this.magicBolt(s, monsters);
    }
  }

  applyDamage(monster, damage, def, pos, hitPos, camera) {
    // Posture damage
    const posture = monster.userData.posture || 0;
    const maxPosture = monster.userData.maxPosture || 50;
    monster.userData.posture = Math.min(maxPosture, posture + def.postureDmg);

    // Stagger if posture broken
    if (monster.userData.posture >= maxPosture) {
      monster.userData.posture = 0;
      monster.userData.staggerTimer = 0.8;
      monster.userData.staggerDmgMult = 1.5;
    }

    // Knockback
    const kb = new THREE.Vector3().copy(hitPos).sub(pos).normalize().multiplyScalar(2);
    monster.position.x += kb.x;
    monster.position.z += kb.z;

    // Slash VFX
    this.spawnSlashEffect(pos, hitPos, def.color);

    // Hitstop
    this.hitstop = 0.06;

    // Callback
    if (this._onDamage) this._onDamage(monster, damage);
  }

  rangedShot(s, monsters) {
    const pos = s.heroinePos.clone();
    pos.y += 0.8;
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(s.heroineQuat);

    let target = null;
    let minDist = Infinity;
    for (const m of monsters) {
      if (!m.userData.alive) continue;
      const d = pos.distanceTo(m.position);
      if (d < minDist) { minDist = d; target = m; }
    }

    const targetPos = target ? target.position.clone() : pos.clone().add(forward.multiplyScalar(10));
    const proj = createProjectile(pos, targetPos, s.def.color, s.def.damage + s.levelBonus);
    this.scene.add(proj);
    this.projectiles.push(proj);
  }

  magicBolt(s, monsters) {
    for (let i = -1; i <= 1; i++) {
      const pos = s.heroinePos.clone();
      pos.y += 0.8;
      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(s.heroineQuat);
      const right = new THREE.Vector3(1, 0, 0);
      right.applyQuaternion(s.heroineQuat);
      const spread = right.multiplyScalar(i * 0.3);
      const targetPos = pos.clone().add(forward.multiplyScalar(10)).add(spread);
      const proj = createProjectile(pos, targetPos, s.def.color, Math.round(s.def.damage * 0.7 + s.levelBonus));
      this.scene.add(proj);
      this.projectiles.push(proj);
    }
  }

  spawnTelegraph(heroine, def) {
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(heroine.quaternion);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(def.color) },
        uTime: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `uniform vec3 uColor;uniform float uTime;varying vec2 vUv;void main(){float a=1.0-smoothstep(0.0,1.0,uTime);float d=length(vUv-0.5)*2.0;float r=smoothstep(1.0,0.0,d);gl_FragColor=vec4(uColor,r*a*0.3);}`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(def.range * 1.5, 0.5), mat);
    const p = heroine.position.clone().add(forward.multiplyScalar(def.range * 0.5));
    p.y += 0.3;
    mesh.position.copy(p);
    mesh.lookAt(this.camera.position);
    mesh.userData = { lifetime: def.startup, age: 0, mat };
    this.scene.add(mesh);
    this.slashVFX.push(mesh);
  }

  spawnSlashEffect(pos, hitPos, color) {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uTime: { value: 0 },
      },
      vertexShader: `varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `uniform vec3 uColor;uniform float uTime;varying vec2 vUv;void main(){float d=distance(vUv,vec2(0.5));float r=0.5-d;r=smoothstep(0.0,0.5,r);float a=r*(1.0-uTime);gl_FragColor=vec4(uColor,a*0.6);}`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const geo = new THREE.PlaneGeometry(0.3, 0.3);
    const mesh = new THREE.Mesh(geo, mat);
    const mid = pos.clone().add(hitPos).multiplyScalar(0.5);
    mesh.position.copy(mid);
    mesh.lookAt(this.camera.position);
    mesh.userData = { lifetime: 0.3, age: 0, mat };
    this.scene.add(mesh);
    this.slashVFX.push(mesh);
  }

  spawnSlashArc(pos, forward, color) {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uTime: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `uniform vec3 uColor;uniform float uTime;varying vec2 vUv;void main(){float a=1.0-abs(vUv.x-0.5)*2.0;a=smoothstep(0.0,0.8,a);float r=1.0-distance(vUv,vec2(0.5,0.3))*2.0;float alpha=a*r*(1.0-uTime)*0.5;gl_FragColor=vec4(uColor,alpha);}`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const geo = new THREE.PlaneGeometry(0.8, 0.3);
    const mesh = new THREE.Mesh(geo, mat);
    const p = pos.clone().add(forward.multiplyScalar(1.2));
    mesh.position.copy(p);
    mesh.position.y += 0.3;
    mesh.lookAt(this.camera.position);
    mesh.userData = { lifetime: 0.25, age: 0, mat };
    this.scene.add(mesh);
    this.slashVFX.push(mesh);
  }
}

export function getAttackPhase(combat) {
  if (!combat.attackState) return null;
  return combat.attackState.phase;
}
