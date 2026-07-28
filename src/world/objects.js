import * as THREE from 'three';
import { fbm, smoothNoise, hash } from './noise.js';
import { computeHeight, biomesForPosition, getTerrainSize } from './terrain.js';

export function scatterObjects(seed, scene, cx = 0, cz = 0) {
  const objects = [];
  const T = getTerrainSize();
  const step = 2.5;
  const treeMat = createTreeMaterial();
  const ruinMat = createRuinMaterial();
  const offsetX = cx * T;
  const offsetZ = cz * T;

  for (let z = -T / 2 + 1; z < T / 2 - 1; z += step) {
    for (let x = -T / 2 + 1; x < T / 2 - 1; x += step) {
      const wx = offsetX + x;
      const wz = offsetZ + z;
      const placeChance = hash(wx * 0.1, wz * 0.1, seed + 777);
      if (placeChance > 0.55) continue;

      const h = computeHeight(wx, wz, seed);
      if (h < -0.5 || h > 12) continue;

      const biome = biomesForPosition(wx, wz, seed);
      const typeRoll = hash(wx * 0.07, wz * 0.07, seed + 888);

      if (biome === 'forest') {
        if (typeRoll < 0.4) {
          const tree = createStylizedTree(wx, h, wz, seed, biome, treeMat);
          scene.add(tree);
          objects.push(tree);
        } else if (typeRoll < 0.5) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        }
      } else if (biome === 'grassland') {
        if (typeRoll < 0.15) {
          const tree = createStylizedTree(wx, h, wz, seed, biome, treeMat);
          scene.add(tree);
          objects.push(tree);
        } else if (typeRoll < 0.2) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        } else if (typeRoll < 0.25) {
          const ruin = createRuinPiece(wx, h, wz, seed, ruinMat);
          scene.add(ruin);
          objects.push(ruin);
        }
      } else if (biome === 'desert') {
        if (typeRoll < 0.2) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        } else if (typeRoll < 0.25) {
          const ruin = createRuinPiece(wx, h, wz, seed, ruinMat);
          scene.add(ruin);
          objects.push(ruin);
        }
      }
      else if (biome === 'snow' && typeRoll < 0.08) {
        const rock = createRockCluster(wx, h, wz, seed);
        scene.add(rock);
        objects.push(rock);
      }
    }
  }

  if (cx === 0 && cz === 0) {
    spawnShrines(seed, scene, objects);
  }
  spawnExtraTrees(seed, scene, objects, treeMat, cx, cz);

  return objects;
}

function spawnExtraTrees(seed, scene, objects, treeMat, cx, cz) {
  const T = getTerrainSize();
  const offsetX = cx * T;
  const offsetZ = cz * T;
  for (let i = 0; i < 20; i++) {
    const x = offsetX + (Math.random() - 0.5) * T;
    const z = offsetZ + (Math.random() - 0.5) * T;
    const h = computeHeight(x, z, seed);
    if (h < -0.5 || h > 10) continue;
    const biome = biomesForPosition(x, z, seed);
    if (biome === 'snow' || biome === 'desert') continue;
    const tree = createStylizedTree(x, h, z, seed + i * 50 + cx * 10000 + cz * 100, biome, treeMat);
    scene.add(tree);
    objects.push(tree);
  }
}

function createTreeMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0.35, 0.55, 0.25) },
      uShadowColor: { value: new THREE.Color(0.2, 0.35, 0.15) },
      uRimColor: { value: new THREE.Color(0.5, 0.8, 0.4) },
      uAmbientLight: { value: new THREE.Color(0.3, 0.3, 0.35) },
      uMainLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
      uMainLightColor: { value: new THREE.Color(1.0, 0.9, 0.8) },
      uRimPower: { value: 3.0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform vec3 uShadowColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform vec3 uAmbientLight;
      uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor;

      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        vec3 l = normalize(uMainLightDir);
        float ndotl = dot(n, l);
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 ambient = uColor * uAmbientLight;
        vec3 diffuse = mix(uColor * uShadowColor, uColor, band);
        vec3 final = ambient + diffuse * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.5;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });
}

function createRuinMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0.65, 0.6, 0.55) },
      uShadowColor: { value: new THREE.Color(0.4, 0.37, 0.34) },
      uRimColor: { value: new THREE.Color(0.85, 0.8, 0.7) },
      uAmbientLight: { value: new THREE.Color(0.3, 0.3, 0.35) },
      uMainLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
      uMainLightColor: { value: new THREE.Color(1.0, 0.9, 0.8) },
      uRimPower: { value: 4.0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform vec3 uShadowColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform vec3 uAmbientLight;
      uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        vec3 l = normalize(uMainLightDir);
        float ndotl = dot(n, l);
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 ambient = uColor * uAmbientLight;
        vec3 diffuse = mix(uColor * uShadowColor, uColor, band);
        vec3 final = ambient + diffuse * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.3;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });
}

function createStylizedTree(x, h, z, seed, biome, mat) {
  const group = new THREE.Group();
  group.position.set(x, h, z);

  const trunkH = 1.2 + hash(x * 2, z * 2, seed) * 1.5;
  const trunkR = 0.12 + hash(x, z, seed + 50) * 0.08;

  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(trunkR * 0.7, trunkR, trunkH, 6);
  const trunk = new THREE.Mesh(trunkGeo, mat.clone());
  trunk.material.uniforms.uColor.value.setHSL(0.08, 0.3, 0.25 + hash(x, z, seed + 100) * 0.1);
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  group.add(trunk);

  // Canopy - multiple sphere-like shapes for painterly look
  const canopyColor = biome === 'forest'
    ? new THREE.Color(0.2 + hash(x, z, seed + 200) * 0.2, 0.45 + hash(x, z, seed + 300) * 0.2, 0.15)
    : new THREE.Color(0.3 + hash(x, z, seed + 200) * 0.2, 0.55 + hash(x, z, seed + 300) * 0.2, 0.2);

  const canopyMat = mat.clone();
  canopyMat.uniforms.uColor.value = canopyColor;
  canopyMat.uniforms.uShadowColor.value = canopyColor.clone().multiplyScalar(0.5);
  canopyMat.uniforms.uRimColor.value = canopyColor.clone().multiplyScalar(1.4);

  const crownR = 0.8 + hash(x * 0.5, z * 0.5, seed + 400) * 0.6;
  const crownY = trunkH + 0.2;

  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2 + hash(x, z, seed + 500 + i) * 0.5;
    const dist = crownR * (0.3 + hash(x, z, seed + 600 + i) * 0.4);
    const r = crownR * (0.5 + hash(x, z, seed + 700 + i) * 0.3);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 7), canopyMat);
    sphere.position.set(
      Math.cos(angle) * dist,
      crownY + hash(x, z, seed + 800 + i) * 0.3 - 0.15,
      Math.sin(angle) * dist
    );
    sphere.scale.y = 0.8 + hash(x, z, seed + 900 + i) * 0.2;
    sphere.castShadow = true;
    group.add(sphere);
  }

  // Random rotation
  group.rotation.y = hash(x, z, seed + 1000) * Math.PI * 2;

  return group;
}

function createRuinPiece(x, h, z, seed, mat) {
  const group = new THREE.Group();
  group.position.set(x, h, z);

  const type = Math.floor(hash(x, z, seed + 1100) * 3);
  const color = new THREE.Color(0.55 + hash(x, z, seed + 1200) * 0.15, 0.5 + hash(x, z, seed + 1300) * 0.15, 0.45 + hash(x, z, seed + 1400) * 0.1);

  const m = mat.clone();
  m.uniforms.uColor.value = color;
  m.uniforms.uShadowColor.value = color.clone().multiplyScalar(0.6);

  if (type === 0) {
    // Column — tapered shaft with base and capital
    const hCol = 0.6 + hash(x, z, seed + 1500) * 0.8;
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, hCol, 7), m);
    shaft.position.y = hCol / 2;
    shaft.castShadow = true;
    group.add(shaft);
    // Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.08, 7), m);
    base.position.y = 0.04;
    base.castShadow = true;
    group.add(base);
    // Capital
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.06, 7), m);
    cap.position.y = hCol + 0.03;
    cap.castShadow = true;
    group.add(cap);
    // Slight lean
    group.rotation.z = (hash(x, z, seed + 1550) - 0.5) * 0.06;
    group.rotation.x = (hash(x, z, seed + 1551) - 0.5) * 0.06;
  } else if (type === 1) {
    // Arch — pillars on ground, beam on top
    const pLift = 0.4 + hash(x, z, seed + 1600) * 0.3;
    const pW = 0.12, pD = 0.12;
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(pW, pLift, pD), m);
    p1.position.set(-0.3, pLift / 2, 0);
    p1.castShadow = true;
    group.add(p1);
    const p2 = p1.clone();
    p2.position.set(0.3, pLift / 2, 0);
    group.add(p2);
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 0.3), m);
    beam.position.y = pLift + 0.05;
    beam.castShadow = true;
    group.add(beam);
  } else {
    // Broken wall — taller with debris at base
    const hWall = 0.4 + hash(x, z, seed + 1700) * 0.4;
    const wall = new THREE.Mesh(new THREE.BoxGeometry(0.5, hWall, 0.12), m);
    wall.position.y = hWall / 2;
    wall.rotation.z = (hash(x, z, seed + 1800) - 0.5) * 0.12;
    wall.castShadow = true;
    group.add(wall);
    // Small debris chunk
    const debris = new THREE.Mesh(new THREE.DodecahedronGeometry(0.04 + hash(x, z, seed + 1810) * 0.04), m);
    debris.position.set(
      (hash(x, z, seed + 1820) - 0.5) * 0.3,
      0.02,
      (hash(x, z, seed + 1830) - 0.5) * 0.15
    );
    debris.castShadow = true;
    group.add(debris);
  }

  group.rotation.y = hash(x, z, seed + 1900) * Math.PI * 2;
  return group;
}

function createRockCluster(x, h, z, seed) {
  const group = new THREE.Group();
  group.position.set(x, h, z);

  const rockMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0.5, 0.48, 0.45) },
      uShadowColor: { value: new THREE.Color(0.3, 0.28, 0.25) },
      uRimColor: { value: new THREE.Color(0.7, 0.68, 0.6) },
      uAmbientLight: { value: new THREE.Color(0.3, 0.3, 0.35) },
      uMainLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
      uMainLightColor: { value: new THREE.Color(1.0, 0.9, 0.8) },
      uRimPower: { value: 5.0 },
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
      uniform vec3 uMainLightColor; varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal); vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v)); rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.3;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });

  const count = 2 + Math.floor(hash(x, z, seed + 2000) * 3);
  for (let i = 0; i < count; i++) {
    const r = 0.15 + hash(x, z, seed + 2100 + i) * 0.15;
    const geo = new THREE.DodecahedronGeometry(r);
    const rock = new THREE.Mesh(geo, rockMat);
    rock.position.set(
      (hash(x, z, seed + 2200 + i) - 0.5) * 0.5,
      r * 0.5 + hash(x, z, seed + 2300 + i) * 0.1,
      (hash(x, z, seed + 2400 + i) - 0.5) * 0.5
    );
    rock.rotation.set(
      hash(x, z, seed + 2500 + i) * 6,
      hash(x, z, seed + 2600 + i) * 6,
      hash(x, z, seed + 2700 + i) * 6
    );
    rock.castShadow = true;
    group.add(rock);
  }

  return group;
}

function spawnShrines(seed, scene, objects) {
  // Place 3-5 shrine locations
  const count = 3 + Math.floor(hash(seed, 0, 3000) * 3);
  for (let i = 0; i < count; i++) {
    const angle = hash(seed, i, 3100) * Math.PI * 2;
    const dist = 15 + hash(seed, i, 3200) * 20;
    const x = Math.cos(angle) * dist;
    const z = Math.sin(angle) * dist;
    const h = computeHeight(x, z, seed);
    if (h < 0 || h > 8) continue;

    const shrine = createShrine(x, h, z, seed + i);
    scene.add(shrine);
    objects.push(shrine);
  }
}

function createShrine(x, h, z, seed) {
  const group = new THREE.Group();
  group.position.set(x, h, z);

  const shrineMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0.7, 0.65, 0.55) },
      uShadowColor: { value: new THREE.Color(0.4, 0.37, 0.3) },
      uRimColor: { value: new THREE.Color(0.9, 0.85, 0.7) },
      uAmbientLight: { value: new THREE.Color(0.35, 0.35, 0.4) },
      uMainLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
      uMainLightColor: { value: new THREE.Color(1.0, 0.9, 0.8) },
      uRimPower: { value: 3.0 },
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
      uniform vec3 uMainLightColor; varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal); vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v)); rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.4;
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });

  // Base
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.0, 0.3, 6), shrineMat);
  base.position.y = 0.15;
  base.castShadow = true;
  group.add(base);

  // Pillars
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.8, 5), shrineMat);
    pillar.position.set(Math.cos(a) * 0.5, 0.55, Math.sin(a) * 0.5);
    pillar.castShadow = true;
    group.add(pillar);
  }

  // Top
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.15, 6), shrineMat);
  top.position.y = 0.95;
  top.castShadow = true;
  group.add(top);

  // Glowing orb
  const glowMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0.8, 0.6, 1.0) },
      uTime: { value: 0 },
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
      uniform vec3 uColor; uniform float uTime;
      varying vec3 vNormal; varying vec3 vViewPosition;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        float pulse = 0.7 + 0.3 * sin(uTime * 2.0);
        float rim = 1.0 - max(0.0, dot(n, v));
        vec3 col = uColor * pulse + vec3(1.0) * pow(rim, 3.0) * 0.5;
        gl_FragColor = vec4(col, 0.9);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), glowMat);
  orb.position.y = 1.1;
  group.add(orb);

  // Store reference for animation
  group.userData.orb = orb;
  group.userData.glowMat = glowMat;

  return group;
}

export function updateShrines(objects, time) {
  for (const obj of objects) {
    if (obj.userData && obj.userData.glowMat) {
      obj.userData.glowMat.uniforms.uTime.value = time;
    }
  }
}
