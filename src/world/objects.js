import * as THREE from 'three';
import { fbm, smoothNoise, hash, seededRandom } from './noise.js';
import { computeHeight, biomesForPosition, getTerrainSize } from './terrain.js';
import { WEAPONS } from '../combat/weapons.js';

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
        } else if (typeRoll < 0.45) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        }
        const bushRoll = hash(wx * 0.17, wz * 0.17, seed + 3333);
        if (bushRoll < 0.35) {
          const bush = createBush(wx, h, wz, seed, 'forest');
          scene.add(bush);
          objects.push(bush);
        }
        const mushroomRoll = hash(wx * 0.19, wz * 0.19, seed + 5555);
        if (mushroomRoll < 0.01) {
          const mushroom = createMushroom(wx, h, wz, seed);
          scene.add(mushroom);
          objects.push(mushroom);
        }
        const appleRoll = hash(wx * 0.13, wz * 0.13, seed + 9999);
        if (appleRoll < 0.008) {
          const appleTree = createAppleTree(wx, h, wz, seed);
          scene.add(appleTree);
          objects.push(appleTree);
        }
      } else if (biome === 'grassland') {
        if (typeRoll < 0.08) {
          const tree = createStylizedTree(wx, h, wz, seed, biome, treeMat);
          scene.add(tree);
          objects.push(tree);
        } else if (typeRoll < 0.12) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        }
        const appleRoll = hash(wx * 0.13, wz * 0.13, seed + 9999);
        if (appleRoll < 0.003) {
          const appleTree = createAppleTree(wx, h, wz, seed);
          scene.add(appleTree);
          objects.push(appleTree);
        }
      } else if (biome === 'desert') {
        if (typeRoll < 0.02) {
          const palm = createPalmTree(wx, h, wz, seed);
          scene.add(palm);
          objects.push(palm);
        } else if (typeRoll < 0.2) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        }
      }
      else if (biome === 'snow') {
        if (typeRoll < 0.25) {
          const pine = createPineTree(wx, h, wz, seed + wx * 100 + wz);
          scene.add(pine);
          objects.push(pine);
        } else if (typeRoll < 0.3) {
          const rock = createRockCluster(wx, h, wz, seed);
          scene.add(rock);
          objects.push(rock);
        }
        const bushRoll = hash(wx * 0.17, wz * 0.17, seed + 4444);
        if (bushRoll < 0.4) {
          const bush = createBush(wx, h, wz, seed, 'snow');
          scene.add(bush);
          objects.push(bush);
        }
      } else if (biome === 'ruins') {
        if (typeRoll < 0.1) {
          const pine = createPineTree(wx, h, wz, seed + wx * 100 + wz);
          scene.add(pine);
          objects.push(pine);
        }
        const appleRoll = hash(wx * 0.13, wz * 0.13, seed + 9999);
        if (appleRoll < 0.015) {
          const appleTree = createAppleTree(wx, h, wz, seed);
          scene.add(appleTree);
          objects.push(appleTree);
        }
      }
    }
  }

  if (cx === 0 && cz === 0) {
    spawnShrines(seed, scene, objects);
  }
  spawnExtraTrees(seed, scene, objects, treeMat, cx, cz);
  spawnPineClusters(seed, scene, objects, cx, cz);
  spawnCityRuins(seed, scene, objects, ruinMat, cx, cz);
  if (hash(cx * 0.1, cz * 0.1, seed + 44444) < 0.5) {
    spawnHouseInChunk(seed, scene, objects, ruinMat, cx, cz);
  }

  return objects;
}

function spawnExtraTrees(seed, scene, objects, treeMat, cx, cz) {
  const T = getTerrainSize();
  const offsetX = cx * T;
  const offsetZ = cz * T;
  const rng = seededRandom(seed + cx * 1000 + cz * 100 + 50000);
  for (let i = 0; i < 20; i++) {
    const x = offsetX + (rng() - 0.5) * T;
    const z = offsetZ + (rng() - 0.5) * T;
    const h = computeHeight(x, z, seed);
    if (h < -0.5 || h > 10) continue;
    const biome = biomesForPosition(x, z, seed);
    if (biome !== 'forest') continue;
    const tree = createStylizedTree(x, h, z, seed + i * 50 + cx * 10000 + cz * 100, biome, treeMat);
    scene.add(tree);
    objects.push(tree);
  }
}

function createPineTree(x, h, z, seed) {
  const group = new THREE.Group();
  group.position.set(x, h, z);
  const trunkH = 3.0 + hash(x, z, seed + 100) * 3.0;
  const trunkR = 0.1 + hash(x, z, seed + 200) * 0.07;
  const barkMat = new THREE.MeshStandardMaterial({ color: 0x5a3e2b, roughness: 0.9 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(trunkR, trunkR * 1.3, trunkH, 5), barkMat);
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  group.add(trunk);
  group.userData.trunkR = trunkR * 1.1;
  const pineMat = new THREE.MeshStandardMaterial({ color: 0x2d5a27 + Math.floor(hash(x, z, seed + 300) * 0x002010), roughness: 0.8, flatShading: true });
  const tiers = 3;
  for (let i = 0; i < tiers; i++) {
    const t = i / tiers;
    const coneR = (1.2 + hash(x, z, seed + 400 + i) * 0.5) * (1 - t * 0.5);
    const coneH = 1.2 + hash(x, z, seed + 500 + i) * 0.6;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(coneR, coneH, 6), pineMat);
    cone.position.y = trunkH + t * 1.8 - 0.1;
    cone.castShadow = true;
    group.add(cone);
  }
  group.rotation.y = hash(x, z, seed + 600) * Math.PI * 2;
  return group;
}

function spawnPineClusters(seed, scene, objects, cx, cz) {
  const T = getTerrainSize();
  const offsetX = cx * T;
  const offsetZ = cz * T;
  const rng = seededRandom(seed + cx * 1000 + cz * 100 + 51000);
  const clusterCount = 6 + Math.floor(rng() * 4);
  for (let c = 0; c < clusterCount; c++) {
    const cx2 = offsetX + (rng() - 0.5) * T;
    const cz2 = offsetZ + (rng() - 0.5) * T;
    const hCenter = computeHeight(cx2, cz2, seed);
    if (hCenter < -0.5 || hCenter > 12) continue;
    const biome = biomesForPosition(cx2, cz2, seed);
    if (biome !== 'snow') continue;
    const count = 10 + Math.floor(rng() * 8);
    for (let i = 0; i < count; i++) {
      const px = cx2 + (rng() - 0.5) * 6.0;
      const pz = cz2 + (rng() - 0.5) * 6.0;
      const ph = computeHeight(px, pz, seed);
      if (ph < -0.5 || ph > 12) continue;
      const pine = createPineTree(px, ph, pz, seed + c * 100 + i * 10 + cx * 10000 + cz * 100);
      scene.add(pine);
      objects.push(pine);
    }
  }
}

function createPalmTree(x, h, z, seed) {
  const group = new THREE.Group();
  group.position.set(x, h, z);
  const trunkH = 2.4 + hash(x, z, seed + 100) * 1.6;
  const trunkR = 0.06 + hash(x, z, seed + 200) * 0.03;
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 0.9 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(trunkR * 0.5, trunkR, trunkH, 7), trunkMat);
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  group.add(trunk);
  group.userData.trunkR = trunkR * 0.75;
  const frondMat = new THREE.MeshStandardMaterial({ color: 0x4a7a3a + Math.floor(hash(x, z, seed + 300) * 0x003020), roughness: 0.7, flatShading: true });
  const frondCount = 9 + Math.floor(hash(x, z, seed + 400) * 4);
  for (let i = 0; i < frondCount; i++) {
    const angle = (i / frondCount) * Math.PI * 2 + hash(x, z, seed + 500 + i) * 0.25;
    const frondLen = 0.6 + hash(x, z, seed + 600 + i) * 0.3;
    const frondW = 0.18 + hash(x, z, seed + 700 + i) * 0.1;
    const yOff = hash(x, z, seed + 800 + i) * 0.2;
    const pivot = new THREE.Object3D();
    pivot.position.set(0, trunkH + yOff, 0);
    pivot.rotation.y = angle;
    const droop = 0.3 + hash(x, z, seed + 900 + i) * 0.5;
    const frond = new THREE.Mesh(new THREE.BoxGeometry(frondLen, 0.015, frondW), frondMat);
    frond.position.x = frondLen / 2;
    frond.rotation.z = -droop;
    frond.castShadow = true;
    pivot.add(frond);
    group.add(pivot);
  }
  group.rotation.y = hash(x, z, seed + 1000) * Math.PI * 2;
  return group;
}

function spawnHouseInChunk(seed, scene, objects, ruinMat, cx, cz) {
  const T = getTerrainSize();
  const offsetX = cx * T;
  const offsetZ = cz * T;
  const rng = seededRandom(seed + cx * 1000 + cz * 100 + 52000);
  for (let i = 0; i < 10; i++) {
    const x = offsetX + (rng() - 0.5) * T * 0.7;
    const z = offsetZ + (rng() - 0.5) * T * 0.7;
    const h = computeHeight(x, z, seed);
    if (h < -0.5 || h > 12) continue;
    const biome = biomesForPosition(x, z, seed);
    if (biome === 'snow') continue;
    const houseResult = createHouseRuin(x, h, z, seed + i * 100 + cx * 1000 + cz * 100, ruinMat);
    scene.add(houseResult.house);
    objects.push(houseResult.house);
    if (houseResult.chest) {
      scene.add(houseResult.chest);
      objects.push(houseResult.chest);
    }
    return;
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

  const trunkH = 2.4 + hash(x * 2, z * 2, seed) * 3.0;
  const trunkR = 0.24 + hash(x, z, seed + 50) * 0.16;

  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(trunkR * 0.7, trunkR, trunkH, 6);
  const trunk = new THREE.Mesh(trunkGeo, mat.clone());
  trunk.material.uniforms.uColor.value.setHSL(0.08, 0.3, 0.25 + hash(x, z, seed + 100) * 0.1);
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  group.add(trunk);
  group.userData.trunkR = trunkR * 0.85;

  // Canopy - multiple sphere-like shapes for painterly look
  const canopyColor = biome === 'forest'
    ? new THREE.Color(0.2 + hash(x, z, seed + 200) * 0.2, 0.45 + hash(x, z, seed + 300) * 0.2, 0.15)
    : new THREE.Color(0.3 + hash(x, z, seed + 200) * 0.2, 0.55 + hash(x, z, seed + 300) * 0.2, 0.2);

  const canopyMat = mat.clone();
  canopyMat.uniforms.uColor.value = canopyColor;
  canopyMat.uniforms.uShadowColor.value = canopyColor.clone().multiplyScalar(0.5);
  canopyMat.uniforms.uRimColor.value = canopyColor.clone().multiplyScalar(1.4);

  const crownR = 1.6 + hash(x * 0.5, z * 0.5, seed + 400) * 1.2;
  const crownY = trunkH + 0.4;

  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2 + hash(x, z, seed + 500 + i) * 0.5;
    const dist = crownR * (0.3 + hash(x, z, seed + 600 + i) * 0.4);
    const r = crownR * (0.5 + hash(x, z, seed + 700 + i) * 0.3);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 7), canopyMat);
    sphere.position.set(
      Math.cos(angle) * dist,
      crownY + hash(x, z, seed + 800 + i) * 0.6 - 0.3,
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

function createBush(x, h, z, seed, biome) {
  const group = new THREE.Group();
  group.position.set(x, h, z);
  let color;
  if (biome === 'snow') {
    color = new THREE.Color(0x2d5a27 + Math.floor(hash(x, z, seed + 200) * 0x003020));
  } else {
    color = new THREE.Color(0.2 + hash(x, z, seed + 200) * 0.2, 0.45 + hash(x, z, seed + 300) * 0.2, 0.15);
  }
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.8, flatShading: true });
  const count = 3 + Math.floor(hash(x, z, seed + 400) * 2);
  for (let i = 0; i < count; i++) {
    const r = 0.12 + hash(x, z, seed + 500 + i) * 0.1;
    const angle = (i / count) * Math.PI * 2 + hash(x, z, seed + 600 + i) * 0.4;
    const dist = 0.08 + hash(x, z, seed + 700 + i) * 0.1;
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 7), mat);
    sphere.position.set(
      Math.cos(angle) * dist,
      r * 0.6 + hash(x, z, seed + 800 + i) * 0.1,
      Math.sin(angle) * dist
    );
    sphere.scale.y = 0.6 + hash(x, z, seed + 900 + i) * 0.3;
    sphere.castShadow = true;
    group.add(sphere);
  }
  return group;
}

function createMushroom(x, h, z, seed) {
  const group = new THREE.Group();
  group.position.set(x, h, z);
  const capMat = new THREE.MeshStandardMaterial({ color: 0xdd4444, roughness: 0.6, emissive: 0x661111, emissiveIntensity: 0.15 });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0xe8d5c4, roughness: 0.9 });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.08, 6), stemMat);
  stem.position.y = 0.04;
  group.add(stem);
  const capR = 0.06 + hash(x, z, seed + 100) * 0.03;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(capR, 8, 8), capMat);
  cap.position.y = 0.08 + capR * 0.4;
  cap.scale.y = 0.5;
  cap.castShadow = true;
  group.add(cap);
  group.userData.type = 'mushroom';
  group.userData.healAmount = 5 + Math.floor(hash(x, z, seed + 200) * 6);
  return group;
}

function createAppleTree(x, h, z, seed) {
  const group = new THREE.Group();
  group.position.set(x, h, z);

  const trunkH = 1.5 + hash(x * 2, z * 2, seed) * 1.2;
  const trunkR = 0.1 + hash(x, z, seed + 50) * 0.06;
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6b4c3b, roughness: 0.9 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(trunkR * 0.6, trunkR, trunkH, 6), trunkMat);
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  group.add(trunk);
  group.userData.trunkR = trunkR * 0.8;

  const canopyColor = new THREE.Color(0.25 + hash(x, z, seed + 100) * 0.15, 0.5 + hash(x, z, seed + 200) * 0.2, 0.15);
  const canopyMat = new THREE.MeshStandardMaterial({ color: canopyColor, roughness: 0.8, flatShading: true });
  const crownR = 0.9 + hash(x * 0.5, z * 0.5, seed + 300) * 0.5;
  const crownY = trunkH + 0.1;
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + hash(x, z, seed + 400 + i) * 0.5;
    const dist = crownR * (0.3 + hash(x, z, seed + 500 + i) * 0.4);
    const r = crownR * (0.4 + hash(x, z, seed + 600 + i) * 0.3);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 6), canopyMat);
    sphere.position.set(
      Math.cos(angle) * dist,
      crownY + hash(x, z, seed + 700 + i) * 0.3 - 0.15,
      Math.sin(angle) * dist
    );
    sphere.scale.y = 0.7 + hash(x, z, seed + 800 + i) * 0.2;
    sphere.castShadow = true;
    group.add(sphere);
  }

  const appleMat = new THREE.MeshStandardMaterial({ color: 0xee3333, roughness: 0.3, emissive: 0x881111, emissiveIntensity: 0.2 });
  const stalkMat = new THREE.MeshStandardMaterial({ color: 0x5a3e2b, roughness: 0.9 });
  const appleMeshes = [];
  const stalkMeshes = [];
  const appleCount = 1 + Math.floor(hash(x, z, seed + 900) * 2);
  for (let i = 0; i < appleCount; i++) {
    const angle = hash(x, z, seed + 1000 + i) * Math.PI * 2;
    const dist = 0.25 + hash(x, z, seed + 1100 + i) * (crownR * 0.5);
    const ax = Math.cos(angle) * dist;
    const az = Math.sin(angle) * dist;
    const appleY = crownY - 0.4 - hash(x, z, seed + 1200 + i) * 0.2;
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, crownY - appleY + 0.05, 3), stalkMat);
    stalk.position.set(ax, (crownY + appleY) / 2, az);
    group.add(stalk);
    stalkMeshes.push(stalk);
    const apple = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), appleMat);
    apple.position.set(ax, appleY, az);
    apple.castShadow = true;
    group.add(apple);
    appleMeshes.push(apple);
  }

  group.userData.appleMeshes = appleMeshes;
  group.userData.stalkMeshes = stalkMeshes;
  group.userData.appleCount = appleCount;
  group.userData.type = 'appleTree';
  group.rotation.y = hash(x, z, seed + 1300) * Math.PI * 2;
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

function createHouseRuin(x, h, z, seed, mat) {
  const group = new THREE.Group();
  group.position.set(x, h, z);
  const w = 1.6 + hash(x, z, seed + 5000) * 0.8;
  const d = 1.4 + hash(x, z, seed + 5100) * 0.6;
  const wallH = 1.0 + hash(x, z, seed + 5200) * 0.5;
  const color = new THREE.Color(
    0.5 + hash(x, z, seed + 5300) * 0.2,
    0.45 + hash(x, z, seed + 5400) * 0.15,
    0.4 + hash(x, z, seed + 5500) * 0.1
  );
  const wallMat = mat.clone();
  wallMat.uniforms.uColor.value = color;
  wallMat.uniforms.uShadowColor.value = color.clone().multiplyScalar(0.6);
  const roofMat = mat.clone();
  const roofColor = new THREE.Color(
    0.4 + hash(x, z, seed + 5600) * 0.15,
    0.25 + hash(x, z, seed + 5700) * 0.1,
    0.15 + hash(x, z, seed + 5800) * 0.1
  );
  roofMat.uniforms.uColor.value = roofColor;
  roofMat.uniforms.uShadowColor.value = roofColor.clone().multiplyScalar(0.5);
  const collapse = hash(x, z, seed + 5900);
  const walls = [];
  const addWall = (cx, cz, hw, hd) => {
    walls.push({ cx, cz, hw, hd });
  };
  const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, wallH, d), wallMat);
  wallLeft.position.set(-w / 2, wallH / 2, 0);
  wallLeft.castShadow = true;
  group.add(wallLeft);
  addWall(-w / 2, 0, 0.08, d / 2);
  const wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, wallH, d), wallMat);
  wallRight.position.set(w / 2, wallH / 2, 0);
  wallRight.castShadow = true;
  group.add(wallRight);
  addWall(w / 2, 0, 0.08, d / 2);
  const wallBack = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, 0.12), wallMat);
  wallBack.position.set(0, wallH / 2, -d / 2);
  wallBack.castShadow = true;
  group.add(wallBack);
  addWall(0, -d / 2, w / 2, 0.06);
  if (collapse < 0.4) {
    wallBack.position.y = wallH * 0.5;
    wallBack.scale.y = 0.5 + hash(x, z, seed + 6000) * 0.3;
  }
  const gap = 0.3;
  const wallFrontL = new THREE.Mesh(new THREE.BoxGeometry(w / 2 - gap, wallH, 0.12), wallMat);
  wallFrontL.position.set(-w / 4 - gap / 2, wallH / 2, d / 2);
  wallFrontL.castShadow = true;
  group.add(wallFrontL);
  addWall(-w / 4 - gap / 2, d / 2, (w / 2 - gap) / 2, 0.06);
  const wallFrontR = new THREE.Mesh(new THREE.BoxGeometry(w / 2 - gap, wallH, 0.12), wallMat);
  wallFrontR.position.set(w / 4 + gap / 2, wallH / 2, d / 2);
  wallFrontR.castShadow = true;
  group.add(wallFrontR);
  addWall(w / 4 + gap / 2, d / 2, (w / 2 - gap) / 2, 0.06);
  if (collapse > 0.7) {
    const debrisCount = 2 + Math.floor(hash(x, z, seed + 6100) * 4);
    for (let i = 0; i < debrisCount; i++) {
      const debris = new THREE.Mesh(
        new THREE.BoxGeometry(0.04 + hash(x, z, seed + 6200 + i) * 0.06, 0.02 + hash(x, z, seed + 6300 + i) * 0.04, 0.04 + hash(x, z, seed + 6400 + i) * 0.06),
        wallMat
      );
      debris.position.set(
        (hash(x, z, seed + 6500 + i) - 0.5) * w * 0.6,
        0.02 + hash(x, z, seed + 6600 + i) * 0.05,
        (hash(x, z, seed + 6700 + i) - 0.5) * d * 0.6
      );
      debris.rotation.set(hash(x, z, seed + 6800 + i) * 0.5, 0, hash(x, z, seed + 6900 + i) * 0.5);
      debris.castShadow = true;
      group.add(debris);
    }
  }
  const roofPitch = 0.15 + hash(x, z, seed + 7000) * 0.1;
  const roofLH = wallH + roofPitch * w * 0.3;
  const roofRH = wallH - roofPitch * w * 0.3;
  for (let side = -1; side <= 1; side += 2) {
    const roof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, 0.05, d * 0.6), roofMat);
    const t = (side + 1) / 2;
    const rY = wallH + roofPitch * w * 0.15 * side;
    roof.position.set(side * w * 0.15, rY, 0);
    roof.rotation.z = side * roofPitch * 0.5;
    roof.rotation.x = hash(x, z, seed + 7100) * 0.1;
    roof.castShadow = true;
    group.add(roof);
  }
  let chest = null;
  if (hash(x, z, seed + 7200) < 0.16) {
    const chestMat = new THREE.MeshStandardMaterial({ color: 0xcc8844, roughness: 0.6, metalness: 0.3, flatShading: true });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0xffdd66, roughness: 0.2, metalness: 0.6 });
    chest = new THREE.Group();
    chest.position.set(x + (hash(x, z, seed + 7300) - 0.5) * 0.3, h, z + (hash(x, z, seed + 7400) - 0.5) * 0.2);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.16, 0.35), chestMat);
    base.position.y = 0.08;
    base.castShadow = true;
    chest.add(base);
    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.07, 0.33), chestMat);
    lid.position.y = 0.19;
    lid.castShadow = true;
    chest.add(lid);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.025, 0.02), trimMat);
    trim.position.set(0, 0.14, 0.17);
    chest.add(trim);
    chest.userData.type = 'chest';
    const r = Math.abs(seed * 12.9898 + x * 78.233 + z * 435.123) % 1;
    let loot;
    if (r < 0.15) {
      const pickIdx = Math.abs(seed * 7.3 + x * 13.7 + z * 29.1) % WEAPONS.length;
      const pick = WEAPONS[Math.floor(pickIdx)];
      loot = { type: 'weapon', id: pick.id, label: '✦ ' + pick.name.toUpperCase() };
    } else if (r < 0.5) {
      const coins = 5 + Math.floor(Math.abs(seed * 3.7 + x * 91.5 + z * 62.3) % 21);
      loot = { type: 'coins', amount: coins, label: '+' + coins + '🪙' };
    } else {
      loot = { type: 'heal', amount: 30, label: '+30 HP' };
    }
    chest.userData.loot = loot;
  }
  group.userData.type = 'house';
  group.userData.walls = walls;
  group.rotation.y = hash(x, z, seed + 7500) * Math.PI * 2;
  return { house: group, chest };
}

function createCityBuilding(x, h, z, seed, mat) {
  const group = new THREE.Group();
  group.position.set(x, h, z);
  const bType = Math.floor(hash(x, z, seed + 10000) * 4);
  const color = new THREE.Color(
    0.5 + hash(x, z, seed + 10100) * 0.15,
    0.48 + hash(x, z, seed + 10200) * 0.12,
    0.42 + hash(x, z, seed + 10300) * 0.1
  );
  const wallMat = mat.clone();
  wallMat.uniforms.uColor.value = color;
  wallMat.uniforms.uShadowColor.value = color.clone().multiplyScalar(0.55);
  const walls = [];
  const addWall = (cx, cz, hw, hd) => walls.push({ cx, cz, hw, hd });

  if (bType === 0) {
    // Small rectangular ruin
    const sw = 1.2 + hash(x, z, seed + 10400) * 0.8;
    const sd = 1.0 + hash(x, z, seed + 10500) * 0.6;
    const sh = 0.8 + hash(x, z, seed + 10600) * 0.6;
    const gap = 0.25;
    const wallBack = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, 0.12), wallMat);
    wallBack.position.set(0, sh / 2, -sd / 2);
    wallBack.castShadow = true;
    group.add(wallBack);
    addWall(0, -sd / 2, sw / 2, 0.06);
    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, sh, sd), wallMat);
    wallLeft.position.set(-sw / 2, sh / 2, 0);
    wallLeft.castShadow = true;
    group.add(wallLeft);
    addWall(-sw / 2, 0, 0.06, sd / 2);
    const wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, sh, sd), wallMat);
    wallRight.position.set(sw / 2, sh / 2, 0);
    wallRight.castShadow = true;
    group.add(wallRight);
    addWall(sw / 2, 0, 0.06, sd / 2);
    const wallFrontL = new THREE.Mesh(new THREE.BoxGeometry(sw / 2 - gap, sh, 0.12), wallMat);
    wallFrontL.position.set(-sw / 4 - gap / 2, sh / 2, sd / 2);
    wallFrontL.castShadow = true;
    group.add(wallFrontL);
    addWall(-sw / 4 - gap / 2, sd / 2, (sw / 2 - gap) / 2, 0.06);
    const wallFrontR = new THREE.Mesh(new THREE.BoxGeometry(sw / 2 - gap, sh, 0.12), wallMat);
    wallFrontR.position.set(sw / 4 + gap / 2, sh / 2, sd / 2);
    wallFrontR.castShadow = true;
    group.add(wallFrontR);
    addWall(sw / 4 + gap / 2, sd / 2, (sw / 2 - gap) / 2, 0.06);
    if (hash(x, z, seed + 10700) < 0.5) {
      wallLeft.scale.y = 0.5 + hash(x, z, seed + 10800) * 0.3;
      wallLeft.position.y = sh * wallLeft.scale.y / 2;
    }
    if (hash(x, z, seed + 10900) < 0.4) {
      wallRight.scale.y = 0.4 + hash(x, z, seed + 11000) * 0.3;
      wallRight.position.y = sh * wallRight.scale.y / 2;
    }
  } else if (bType === 1) {
    // Large hall
    const sw = 2.4 + hash(x, z, seed + 11100) * 1.2;
    const sd = 1.8 + hash(x, z, seed + 11200) * 1.0;
    const sh = 1.2 + hash(x, z, seed + 11300) * 0.8;
    const gap = 0.3;
    const wallBack = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, 0.15), wallMat);
    wallBack.position.set(0, sh / 2, -sd / 2);
    wallBack.castShadow = true;
    group.add(wallBack);
    addWall(0, -sd / 2, sw / 2, 0.075);
    const wallFrontL = new THREE.Mesh(new THREE.BoxGeometry(sw / 2 - gap, sh, 0.15), wallMat);
    wallFrontL.position.set(-sw / 4 - gap / 2, sh / 2, sd / 2);
    wallFrontL.castShadow = true;
    group.add(wallFrontL);
    addWall(-sw / 4 - gap / 2, sd / 2, (sw / 2 - gap) / 2, 0.075);
    const wallFrontR = new THREE.Mesh(new THREE.BoxGeometry(sw / 2 - gap, sh, 0.15), wallMat);
    wallFrontR.position.set(sw / 4 + gap / 2, sh / 2, sd / 2);
    wallFrontR.castShadow = true;
    group.add(wallFrontR);
    addWall(sw / 4 + gap / 2, sd / 2, (sw / 2 - gap) / 2, 0.075);
    // Partial side walls
    const sideH = sh * (0.4 + hash(x, z, seed + 11400) * 0.4);
    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.15, sideH, sd), wallMat);
    wallLeft.position.set(-sw / 2, sideH / 2, 0);
    wallLeft.castShadow = true;
    group.add(wallLeft);
    addWall(-sw / 2, 0, 0.075, sd / 2);
    // Pillars along open side
    const pillarCount = 2 + Math.floor(hash(x, z, seed + 11500) * 2);
    for (let i = 0; i < pillarCount; i++) {
      const ph = sh * (0.6 + hash(x, z, seed + 11600 + i) * 0.4);
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, ph, 5), wallMat);
      pillar.position.set(sw / 2, ph / 2, -sd / 2 + (sd / (pillarCount + 1)) * (i + 1));
      pillar.castShadow = true;
      group.add(pillar);
    }
  } else if (bType === 2) {
    // Tower
    const tw = 0.8 + hash(x, z, seed + 11700) * 0.4;
    const td = 0.8 + hash(x, z, seed + 11800) * 0.4;
    const th = 1.8 + hash(x, z, seed + 11900) * 1.2;
    const gap = 0.2;
    for (let side = -1; side <= 1; side += 2) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(tw, th, 0.12), wallMat);
      wall.position.set(0, th / 2, side * td / 2);
      wall.castShadow = true;
      group.add(wall);
      addWall(0, side * td / 2, tw / 2, 0.06);
    }
    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, th, td), wallMat);
    wallLeft.position.set(-tw / 2, th / 2, 0);
    wallLeft.castShadow = true;
    group.add(wallLeft);
    addWall(-tw / 2, 0, 0.06, td / 2);
    const wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, th * (0.5 + hash(x, z, seed + 12000) * 0.3), td), wallMat);
    wallRight.position.set(tw / 2, th * wallRight.scale.y / 2, 0);
    wallRight.castShadow = true;
    group.add(wallRight);
    addWall(tw / 2, 0, 0.06, td / 2);
    // Top ledge
    const ledge = new THREE.Mesh(new THREE.BoxGeometry(tw + 0.2, 0.08, td + 0.2), wallMat);
    ledge.position.y = th;
    ledge.castShadow = true;
    group.add(ledge);
  } else {
    // L-shaped corner ruin
    const aw = 1.2 + hash(x, z, seed + 12100) * 0.8;
    const ad = 1.0 + hash(x, z, seed + 12200) * 0.6;
    const bw = 1.0 + hash(x, z, seed + 12300) * 0.6;
    const bd = 1.2 + hash(x, z, seed + 12400) * 0.8;
    const ah = 0.7 + hash(x, z, seed + 12500) * 0.5;
    const bh = 0.6 + hash(x, z, seed + 12600) * 0.5;
    const gap = 0.2;
    // Wing A (along X)
    const aBack = new THREE.Mesh(new THREE.BoxGeometry(aw, ah, 0.12), wallMat);
    aBack.position.set(aw / 4, ah / 2, -ad / 2);
    aBack.castShadow = true;
    group.add(aBack);
    addWall(aw / 4, -ad / 2, aw / 2, 0.06);
    const aFrontL = new THREE.Mesh(new THREE.BoxGeometry(aw / 2 - gap, ah, 0.12), wallMat);
    aFrontL.position.set(-aw / 8, ah / 2, ad / 2);
    aFrontL.castShadow = true;
    group.add(aFrontL);
    addWall(-aw / 8, ad / 2, (aw / 2 - gap) / 2, 0.06);
    const aFrontR = new THREE.Mesh(new THREE.BoxGeometry(aw / 2 - gap, ah, 0.12), wallMat);
    aFrontR.position.set(aw / 2 - gap / 4, ah / 2, ad / 2);
    aFrontR.castShadow = true;
    group.add(aFrontR);
    addWall(aw / 2 - gap / 4, ad / 2, (aw / 2 - gap) / 2, 0.06);
    // Wing B (along Z)
    const bBack = new THREE.Mesh(new THREE.BoxGeometry(0.12, bh, bd), wallMat);
    bBack.position.set(-aw / 2, bh / 2, bd / 4);
    bBack.castShadow = true;
    group.add(bBack);
    addWall(-aw / 2, bd / 4, 0.06, bd / 2);
    const bFrontL = new THREE.Mesh(new THREE.BoxGeometry(0.12, bh, bd / 2 - gap), wallMat);
    bFrontL.position.set(-aw / 2, bh / 2, -bd / 8);
    bFrontL.castShadow = true;
    group.add(bFrontL);
    addWall(-aw / 2, -bd / 8, 0.06, (bd / 2 - gap) / 2);
  }

  group.userData.type = 'cityBuilding';
  group.userData.walls = walls;
  group.rotation.y = hash(x, z, seed + 12700) * Math.PI * 2;
  return group;
}

function spawnCityRuins(seed, scene, objects, ruinMat, cx, cz) {
  const T = getTerrainSize();
  const offsetX = cx * T;
  const offsetZ = cz * T;
  const rng = seededRandom(seed + cx * 1000 + cz * 100 + 53000);
  // Quick biome check across chunk to skip non-ruins chunks
  let hasRuins = false;
  for (let s = 0; s < 20; s++) {
    const sx = offsetX + (rng() - 0.5) * T;
    const sz = offsetZ + (rng() - 0.5) * T;
    if (biomesForPosition(sx, sz, seed) === 'ruins') { hasRuins = true; break; }
  }
  if (!hasRuins) return;

  const placed = [];
  const minSpacing = 4.0;
  const count = 120 + Math.floor(rng() * 90);
  const spread = T * 0.6;
  for (let i = 0; i < count; i++) {
    const x = offsetX + (rng() - 0.5) * spread;
    const z = offsetZ + (rng() - 0.5) * spread;
    const h = computeHeight(x, z, seed);
    if (h < -0.5 || h > 12) continue;
    if (biomesForPosition(x, z, seed) !== 'ruins') continue;
    let tooClose = false;
    for (const p of placed) {
      if (Math.sqrt((x - p.x) ** 2 + (z - p.z) ** 2) < minSpacing) {
        tooClose = true; break;
      }
    }
    if (tooClose) continue;
    const building = createCityBuilding(x, h, z, seed + i * 100 + cx * 1000 + cz * 100, ruinMat);
    scene.add(building);
    objects.push(building);
    placed.push({ x, z });
  }
  // Debris pieces scattered between buildings
  const debrisCount = 80 + Math.floor(rng() * 60);
  for (let i = 0; i < debrisCount; i++) {
    const x = offsetX + (rng() - 0.5) * spread;
    const z = offsetZ + (rng() - 0.5) * spread;
    const h = computeHeight(x, z, seed);
    if (h < -0.5 || h > 12) continue;
    if (biomesForPosition(x, z, seed) !== 'ruins') continue;
    const piece = createRuinPiece(x, h, z, seed + i * 50 + cx * 1000 + cz * 100, ruinMat);
    scene.add(piece);
    objects.push(piece);
  }
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
  group.userData.trunkR = 0.35;

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
  const base = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.0, 0.9, 6), shrineMat);
  base.position.y = 0.45;
  base.castShadow = true;
  group.add(base);

  // Pillars
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 2.4, 5), shrineMat);
    pillar.position.set(Math.cos(a) * 1.5, 1.65, Math.sin(a) * 1.5);
    pillar.castShadow = true;
    group.add(pillar);
  }

  // Top
  const top = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.8, 0.45, 6), shrineMat);
  top.position.y = 2.85;
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
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.36, 8, 8), glowMat);
  orb.position.y = 3.3;
  group.add(orb);

  // Store reference for animation
  group.userData.orb = orb;
  group.userData.glowMat = glowMat;
  group.userData.trunkR = 2.5;
  return group;
}

export function updateShrines(objects, time) {
  for (const obj of objects) {
    if (obj.userData && obj.userData.glowMat) {
      obj.userData.glowMat.uniforms.uTime.value = time;
    }
  }
}
