import * as THREE from 'three';

const SHARED = {
  ambient: new THREE.Color(0.4, 0.4, 0.45),
  lightDir: new THREE.Vector3(0.5, 0.8, 0.3).normalize(),
  lightColor: new THREE.Color(1.0, 0.95, 0.85),
};

function makeWeaponMat(color, emissive = false) {
  const c = new THREE.Color(color);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: c },
      uShadowColor: { value: c.clone().multiplyScalar(0.4) },
      uRimColor: { value: c.clone().multiplyScalar(1.5) },
      uRimPower: { value: emissive ? 2.0 : 5.0 },
      uAmbientLight: { value: SHARED.ambient },
      uMainLightDir: { value: SHARED.lightDir },
      uMainLightColor: { value: SHARED.lightColor },
      uEmissive: { value: emissive ? 0.3 : 0.0 },
    },
    vertexShader: `
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor; uniform vec3 uShadowColor; uniform vec3 uRimColor;
      uniform float uRimPower; uniform vec3 uAmbientLight; uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor; uniform float uEmissive;
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal); vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.5;
        final += uColor * uEmissive;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });
  return mat;
}

export const WEAPONS = [
  { id: 'sword', name: 'Sword', icon: '🗡️', damage: 12, speed: 1.2, range: 1.8, type: 'melee', color: 0x88bbdd, desc: 'Balanced steel blade' },
  { id: 'greatsword', name: 'Greatsword', icon: '⚔️', damage: 25, speed: 0.6, range: 2.5, type: 'melee', color: 0xcc8844, desc: 'Slow but devastating' },
  { id: 'polearm', name: 'Polearm', icon: '🔱', damage: 15, speed: 1.0, range: 3.0, type: 'melee', color: 0x88cc88, desc: 'Long reach' },
  { id: 'bow', name: 'Bow', icon: '🏹', damage: 18, speed: 0.9, range: 15, type: 'ranged', color: 0xddbb66, desc: 'Precise ranged attacks' },
  { id: 'catalyst', name: 'Catalyst', icon: '🔮', damage: 20, speed: 0.8, range: 12, type: 'magic', color: 0xbb88ee, desc: 'Arcane projectiles' },
  { id: 'dagger', name: 'Dagger', icon: '🗡', damage: 8, speed: 1.8, range: 1.2, type: 'melee', color: 0xaaaaaa, desc: 'Lightning fast strikes' },
];

export function createWeaponMesh(weaponId, owner = null) {
  const def = WEAPONS.find(w => w.id === weaponId) || WEAPONS[0];
  const group = new THREE.Group();
  const mat = makeWeaponMat(def.color, def.type === 'magic');

  switch (weaponId) {
    case 'sword': {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.35, 0.015), mat);
      blade.position.y = 0.2;
      blade.castShadow = true;
      group.add(blade);
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.04), makeWeaponMat(0x886644));
      guard.position.y = 0.02;
      group.add(guard);
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.06, 5), makeWeaponMat(0x553322));
      handle.position.y = -0.04;
      group.add(handle);
      break;
    }
    case 'greatsword': {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.02), mat);
      blade.position.y = 0.35;
      blade.castShadow = true;
      group.add(blade);
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.03, 0.06), makeWeaponMat(0x886644));
      guard.position.y = 0.04;
      group.add(guard);
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.1, 5), makeWeaponMat(0x553322));
      handle.position.y = -0.07;
      group.add(handle);
      break;
    }
    case 'polearm': {
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.6, 5), makeWeaponMat(0x664422));
      shaft.castShadow = true;
      group.add(shaft);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.12, 0.02), mat);
      head.position.y = 0.35;
      head.castShadow = true;
      group.add(head);
      break;
    }
    case 'bow': {
      const bowMat = makeWeaponMat(0x885522);
      const curve = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.015, 6, 12), bowMat);
      curve.rotation.x = Math.PI / 2;
      curve.scale.set(1, 1, 0.08);
      curve.castShadow = true;
      group.add(curve);
      const string = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.4, 3), makeWeaponMat(0xcccccc));
      string.position.z = 0.12;
      string.rotation.x = Math.PI / 2;
      group.add(string);
      break;
    }
    case 'catalyst': {
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), mat);
      orb.castShadow = true;
      group.add(orb);
      // Glow aura
      const glowMat = new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: new THREE.Color(def.color) },
          uTime: { value: 0 },
        },
        vertexShader: `varying vec3 vN; varying vec3 vV; void main(){vN=normalize(normalMatrix*normal);vec4 m=modelViewMatrix*vec4(position,1.0);vV=-m.xyz;gl_Position=projectionMatrix*m;}`,
        fragmentShader: `uniform vec3 uColor;uniform float uTime;varying vec3 vN;varying vec3 vV;void main(){float r=1.0-max(0.0,dot(normalize(vN),normalize(vV)));r=pow(r,3.0);float p=0.7+0.3*sin(uTime*2.0);gl_FragColor=vec4(uColor*r*0.8*p,r*0.4);}`,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      const aura = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), glowMat);
      group.add(aura);
      group.userData.glowMat = glowMat;
      break;
    }
    case 'dagger': {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.2, 0.01), mat);
      blade.position.y = 0.12;
      blade.castShadow = true;
      group.add(blade);
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 0.04, 5), makeWeaponMat(0x553322));
      handle.position.y = -0.04;
      group.add(handle);
      break;
    }
  }

  group.userData.weaponDef = def;
  return group;
}

export function createProjectile(from, to, color, damage) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uTime: { value: 0 },
    },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){vN=normalize(normalMatrix*normal);vec4 m=modelViewMatrix*vec4(position,1.0);vV=-m.xyz;gl_Position=projectionMatrix*m;}`,
    fragmentShader: `uniform vec3 uColor;uniform float uTime;varying vec3 vN;varying vec3 vV;void main(){float r=1.0-max(0.0,dot(normalize(vN),normalize(vV)));r=pow(r,4.0);float p=0.8+0.2*sin(uTime*5.0);gl_FragColor=vec4(uColor*r*p*2.0,r*0.8);}`,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  const proj = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), mat);
  proj.position.copy(from);
  const dir = new THREE.Vector3().copy(to).sub(from);
  const speed = 15;
  dir.normalize();

  proj.userData = { velocity: dir.multiplyScalar(speed), damage, lifetime: 3, age: 0, mat };
  return proj;
}
