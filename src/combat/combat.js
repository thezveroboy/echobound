import * as THREE from 'three';
import { WEAPONS, createWeaponMesh, createProjectile } from './weapons.js';

export class CombatSystem {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.projectiles = [];
    this.attackCooldown = 0;
    this.currentCombo = 0;
    this.comboTimer = 0;
    this.hitstop = 0;

    // Visual effects
    this.slashVFX = [];
  }

  playerAttack(heroine, weaponId, monsters, onDamage) {
    if (this.attackCooldown > 0) return false;
    if (this.hitstop > 0) return false;

    const def = WEAPONS.find(w => w.id === weaponId) || WEAPONS[0];
    this.attackCooldown = 1.0 / def.speed;

    // Combo tracking
    this.comboTimer = 0.5;
    this.currentCombo = (this.currentCombo + 1) % 3;

    if (def.type === 'melee') {
      this.meleeSwing(heroine, def, monsters, onDamage);
    } else if (def.type === 'ranged') {
      this.rangedShot(heroine, def, monsters);
    } else if (def.type === 'magic') {
      this.magicBolt(heroine, def, monsters);
    }

    return true;
  }

  meleeSwing(heroine, def, monsters, onDamage) {
    const pos = heroine.position.clone();
    pos.y += 0.8;

    // Get forward direction
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(heroine.quaternion);

    // Check hits
    for (const monster of monsters) {
      if (!monster.userData.alive) continue;
      const mPos = monster.position.clone();
      mPos.y = 0;
      const pPos = pos.clone();
      pPos.y = 0;
      const dist = pPos.distanceTo(mPos);

      if (dist < def.range) {
        // Angle check
        const toMonster = mPos.clone().sub(pPos).normalize();
        const dot = forward.dot(toMonster);
        if (dot > 0.2) {
          const dmg = def.damage * (0.8 + Math.random() * 0.4);
          onDamage(monster, Math.round(dmg));
          this.hitstop = 0.08;

          // Knockback
          const kb = toMonster.multiplyScalar(3);
          monster.position.x += kb.x;
          monster.position.z += kb.z;

          // Slash VFX
          this.spawnSlashEffect(pos, mPos, def.color);
        }
      }
    }

    // Spawn slash arc regardless
    this.spawnSlashArc(pos, forward, def.color);
  }

  rangedShot(heroine, def, monsters) {
    const pos = heroine.position.clone();
    pos.y += 0.8;
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(heroine.quaternion);

    // Find nearest monster to aim at
    let target = null;
    let minDist = Infinity;
    for (const m of monsters) {
      if (!m.userData.alive) continue;
      const d = pos.distanceTo(m.position);
      if (d < minDist) { minDist = d; target = m; }
    }

    const targetPos = target ? target.position.clone() : pos.clone().add(forward.multiplyScalar(10));
    const proj = createProjectile(pos, targetPos, def.color, def.damage);
    this.scene.add(proj);
    this.projectiles.push(proj);
  }

  magicBolt(heroine, def, monsters) {
    // Multiple projectiles
    for (let i = -1; i <= 1; i++) {
      const pos = heroine.position.clone();
      pos.y += 0.8;

      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(heroine.quaternion);
      const right = new THREE.Vector3(1, 0, 0);
      right.applyQuaternion(heroine.quaternion);

      const spread = right.multiplyScalar(i * 0.3);
      const targetPos = pos.clone().add(forward.multiplyScalar(10)).add(spread);

      const proj = createProjectile(pos, targetPos, def.color, Math.round(def.damage * 0.7));
      this.scene.add(proj);
      this.projectiles.push(proj);
    }
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

  update(delta, monsters) {
    this.attackCooldown = Math.max(0, this.attackCooldown - delta);
    this.comboTimer = Math.max(0, this.comboTimer - delta);
    if (this.comboTimer <= 0) this.currentCombo = 0;
    this.hitstop = Math.max(0, this.hitstop - delta);

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

      // Check collision with monsters
      for (const m of monsters) {
        if (!m.userData.alive) continue;
        const dist = p.position.distanceTo(m.position);
        if (dist < 0.8) {
          // Hit
          this.scene.remove(p);
          this.projectiles.splice(i, 1);
          return { monster: m, damage: p.userData.damage, projectile: true };
        }
      }
    }

    // Update slash VFX
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
}
