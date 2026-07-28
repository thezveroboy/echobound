import * as THREE from 'three';
import { generateHeightMap, buildTerrain, getHeightAt, getTerrainSize } from './world/terrain.js';
import { scatterObjects, updateShrines } from './world/objects.js';
import { buildHeroine, setWardrobe, getCurrentOutfit } from './character/heroine.js';
import { generateMonster, updateMonsterAnim } from './monster/monster-gen.js';
import { CombatSystem } from './combat/combat.js';
import { WEAPONS, createWeaponMesh } from './combat/weapons.js';
import { UIManager } from './ui/ui.js';

// ─── SETUP ──────────────────────────────────────────────────────────────────

const ui = new UIManager();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6a8cba);
scene.fog = new THREE.Fog(0x6a8cba, 40, 100);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 150);
camera.position.set(0, 6, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.prepend(renderer.domElement);

ui.setLoadProgress(10);

// ─── LIGHTING ───────────────────────────────────────────────────────────────

const ambientLight = new THREE.AmbientLight(0x446688, 0.4);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffeedd, 1.4);
sunLight.position.set(30, 50, 20);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 100;
sunLight.shadow.camera.left = -40;
sunLight.shadow.camera.right = 40;
sunLight.shadow.camera.top = 40;
sunLight.shadow.camera.bottom = -40;
scene.add(sunLight);

const fillLight = new THREE.DirectionalLight(0x8899cc, 0.3);
fillLight.position.set(-20, 10, -30);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0xccddff, 0.2);
rimLight.position.set(-10, 20, -30);
scene.add(rimLight);

ui.setLoadProgress(20);

// ─── WORLD GENERATION (CHUNKED) ────────────────────────────────────────────

const seed = Math.floor(Math.random() * 10000);
const CHUNK_SIZE = getTerrainSize();

const loadedChunks = new Map();
const monsters = [];
const worldObjects = [];

function chunkKey(cx, cz) { return `${cx},${cz}`; }

function spawnChunkMonsters(cx, cz, seed) {
  const T = CHUNK_SIZE;
  const originX = cx * T;
  const originZ = cz * T;
  const count = 1 + Math.floor(Math.random() * 4);
  const result = [];
  for (let i = 0; i < count; i++) {
    const x = originX + (Math.random() - 0.5) * T * 0.7;
    const z = originZ + (Math.random() - 0.5) * T * 0.7;
    const h = getHeightAt(x, z, seed);
    if (h < -0.5 || h > 10) continue;
    const tierRoll = Math.random();
    const tier = tierRoll < 0.5 ? 0 : tierRoll < 0.75 ? 1 : tierRoll < 0.9 ? 2 : 3;
    const monster = generateMonster(tier, seed + cx * 1000 + cz * 100 + i * 100);
    monster.position.set(x, h, z);
    monster.userData.alive = true;
    monster.userData.homePos = new THREE.Vector3(x, h, z);
    monster.userData.patrolAngle = Math.random() * Math.PI * 2;
    monster.userData.patrolTimer = 0;
    monster.userData.aggroRange = 6 + tier * 3;
    monster.userData.aggroCooldown = 2 + Math.random() * 3;
    monster.userData.attackTimer = 0;
    scene.add(monster);
    result.push(monster);
  }
  return result;
}

const _chestMat = new THREE.MeshStandardMaterial({ color: 0xcc8844, roughness: 0.6, metalness: 0.3, flatShading: true });
const _trimMat = new THREE.MeshStandardMaterial({ color: 0xffdd66, roughness: 0.2, metalness: 0.6 });
const _glowMat = new THREE.MeshBasicMaterial({ color: 0xffdd88, transparent: true, opacity: 0.15 });
function spawnChunkChests(cx, cz, seed) {
  const T = CHUNK_SIZE;
  const originX = cx * T;
  const originZ = cz * T;
  const count = 1 + Math.floor(Math.random() * 2);
  const result = [];
  for (let i = 0; i < count; i++) {
    const x = originX + (Math.random() - 0.5) * T * 0.6;
    const z = originZ + (Math.random() - 0.5) * T * 0.6;
    const h = getHeightAt(x, z, seed);
    if (h < -0.5 || h > 12) continue;
    const group = new THREE.Group();
    group.position.set(x, h, z);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.4), _chestMat);
    base.position.y = 0.1;
    base.castShadow = true;
    group.add(base);
    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.08, 0.38), _chestMat);
    lid.position.y = 0.22;
    lid.castShadow = true;
    group.add(lid);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.02), _trimMat);
    trim.position.set(0, 0.15, 0.2);
    group.add(trim);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.6), _glowMat);
    glow.position.y = 0.12;
    group.add(glow);
    // Loot roll (deterministic per chest position)
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
    group.userData.type = 'chest';
    group.userData.loot = loot;
    scene.add(group);
    result.push(group);
  }
  return result;
}

function loadChunk(cx, cz) {
  const key = chunkKey(cx, cz);
  if (loadedChunks.has(key)) return;
  const heights = generateHeightMap(seed, cx, cz);
  const mesh = buildTerrain(heights, seed, cx, cz);
  scene.add(mesh);
  const objs = scatterObjects(seed, scene, cx, cz);
  const mons = spawnChunkMonsters(cx, cz, seed);
  const chests = spawnChunkChests(cx, cz, seed);
  loadedChunks.set(key, { mesh, objects: objs, monsters: mons, chests });
  worldObjects.push(...objs);
  monsters.push(...mons);
  interactables.push(...chests);
}

function unloadChunk(key) {
  const chunk = loadedChunks.get(key);
  if (!chunk) return;
  scene.remove(chunk.mesh);
  chunk.mesh.geometry.dispose();
  chunk.mesh.material.dispose();
  for (const obj of chunk.objects) {
    scene.remove(obj);
    const idx = worldObjects.indexOf(obj);
    if (idx !== -1) worldObjects.splice(idx, 1);
  }
  for (const m of chunk.monsters) {
    scene.remove(m);
    const idx = monsters.indexOf(m);
    if (idx !== -1) monsters.splice(idx, 1);
  }
  for (const c of chunk.chests) {
    scene.remove(c);
    const idx = interactables.indexOf(c);
    if (idx !== -1) interactables.splice(idx, 1);
  }
  loadedChunks.delete(key);
}

function getChunkCoord(value) {
  // Chunk (cx) covers world range [cx*T, cx*T + T)
  return Math.floor(value / CHUNK_SIZE + 0.5);
}

function updateChunks(playerX, playerZ) {
  const pcx = getChunkCoord(playerX);
  const pcz = getChunkCoord(playerZ);
  const needed = new Set();
  for (let dz = -1; dz <= 1; dz++) {
    for (let dx = -1; dx <= 1; dx++) {
      const cx = pcx + dx;
      const cz = pcz + dz;
      const key = chunkKey(cx, cz);
      needed.add(key);
      if (!loadedChunks.has(key)) {
        loadChunk(cx, cz);
      }
    }
  }
  for (const key of loadedChunks.keys()) {
    if (!needed.has(key)) {
      unloadChunk(key);
    }
  }
}

let interactables = [];
let nearInteractable = null;

// Initial load of 3x3 chunks centered on (0,0)
updateChunks(0, 0);

ui.setLoadProgress(50);

// ─── HEROINE ───────────────────────────────────────────────────────────────

const heroine = buildHeroine();
const spawnH = getHeightAt(0, 0, seed);
heroine.position.set(0, spawnH, 0);
scene.add(heroine);

ui.setLoadProgress(60);

ui.setLoadProgress(70);

// ─── COMBAT ─────────────────────────────────────────────────────────────────

const combat = new CombatSystem(scene, camera);
const playerWeapons = ['sword', 'greatsword', 'polearm', 'bow', 'catalyst'];
let currentWeaponIndex = 0;
let currentWeaponId = playerWeapons[0];

// Equip initial weapon on heroine
function updateWeaponVisual() {
  const old = heroine.userData.weaponMesh;
  if (old) heroine.remove(old);

  const mesh = createWeaponMesh(currentWeaponId, heroine);
  mesh.position.set(0.22, 0.52, 0.06);
  mesh.rotation.x = 0.1;
  mesh.rotation.z = 0.15;
  heroine.add(mesh);
  heroine.userData.weaponMesh = mesh;
}
updateWeaponVisual();

ui.initWeaponSlots(playerWeapons);
ui.setLoadProgress(80);

// ─── PARTICLE SYSTEM ───────────────────────────────────────────────────────

const particleGeo = new THREE.BufferGeometry();
const particleCount = 400;
const posArray = new Float32Array(particleCount * 3);
const sizeArray = new Float32Array(particleCount);
const velArray = [];

for (let i = 0; i < particleCount; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 5 + Math.random() * 30;
  posArray[i * 3] = Math.cos(angle) * radius;
  posArray[i * 3 + 1] = 0.5 + Math.random() * 5;
  posArray[i * 3 + 2] = Math.sin(angle) * radius;
  sizeArray[i] = 0.02 + Math.random() * 0.04;
  velArray.push({
    x: (Math.random() - 0.5) * 0.3,
    z: (Math.random() - 0.5) * 0.3,
  });
}

particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(posArray, 3));
particleGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizeArray, 1));

const particleMat = new THREE.ShaderMaterial({
  uniforms: {
    uColor: { value: new THREE.Color(0xaaccff) },
    uTime: { value: 0 },
  },
  vertexShader: `
    attribute float size;
    uniform float uTime;
    varying float vAlpha;
    void main() {
      vec3 pos = position;
      pos.y += sin(uTime * 0.5 + position.x * 0.3 + position.z * 0.3) * 0.3;
      vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * 200.0 / (-mvPos.z);
      gl_Position = projectionMatrix * mvPos;
      vAlpha = 0.3 + 0.3 * sin(uTime + position.x + position.z);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vAlpha;
    void main() {
      float d = distance(gl_PointCoord, vec2(0.5));
      if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.0, d) * vAlpha;
      gl_FragColor = vec4(uColor, a * 0.6);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});

const particles = new THREE.Points(particleGeo, particleMat);
scene.add(particles);

ui.setLoadProgress(90);

// ─── GAME STATE ─────────────────────────────────────────────────────────────

const gameState = {
  hp: 100,
  maxHp: 100,
  stamina: 100,
  maxStamina: 100,
  invulnerable: 0,
  moving: false,
  running: false,
  coins: 0,
};

// Independent camera orbit (radians). Yaw = horizontal, Pitch = vertical.
let cameraOrbit = 0;
let cameraPitch = 0.45; // ~25° look-down default

// ─── INPUT ──────────────────────────────────────────────────────────────────

const keys = {};
let mouseX = 0, mouseY = 0;
let rightMouseDown = false;

document.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (e.code >= 'Digit1' && e.code <= 'Digit5') {
    const idx = parseInt(e.code.charAt(5)) - 1;
    if (idx < playerWeapons.length) {
      currentWeaponIndex = idx;
      currentWeaponId = playerWeapons[idx];
      ui.setActiveWeapon(idx);
      updateWeaponVisual();
    }
  }
  if (e.code === 'KeyI') {
    ui.toggleInventory();
  }
  if (e.code === 'KeyE' && nearInteractable) {
    interact(nearInteractable);
  }
});
document.addEventListener('keyup', (e) => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
document.addEventListener('mousedown', (e) => {
  if (e.button === 0) handleAttack();
  if (e.button === 2) rightMouseDown = true;
});
document.addEventListener('mouseup', (e) => {
  if (e.button === 2) rightMouseDown = false;
});
document.addEventListener('mousemove', (e) => {
  if (rightMouseDown) {
    cameraOrbit -= e.movementX * 0.005;
    cameraPitch = Math.max(-0.3, Math.min(1.2, cameraPitch + e.movementY * 0.005));
  }
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Touch support
let touchStartX = 0;
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  handleAttack();
});
document.addEventListener('touchmove', (e) => {
  const dx = e.touches[0].clientX - touchStartX;
  cameraOrbit -= dx * 0.005;
  touchStartX = e.touches[0].clientX;
});

function awardCoins(monster) {
  const rewards = [1, 3, 8, 20, 100];
  const coins = rewards[Math.min(monster.userData.tier, 4)] || 1;
  gameState.coins += coins;
  const spos = monster.position.clone();
  spos.y += 1.5;
  const screenPos = spos.clone().project(camera);
  const cx = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
  const cy = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
  ui.showDamage(cx, cy, '+' + coins + '🪙', false, true);
}

function handleAttack() {
  combat.playerAttack(heroine, currentWeaponId, monsters, (monster, dmg) => {
    monster.userData.health -= dmg;
    monster.userData.hitFlash = 1.0;

    const pos = monster.position.clone();
    pos.y += 1.5;
    const screenPos = pos.clone().project(camera);
    const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
    ui.showDamage(x, y, dmg, Math.random() > 0.8);

    if (monster.userData.health <= 0) {
      monster.userData.alive = false;
      monster.userData.deathTimer = 0;
      awardCoins(monster);
    }
    if (monster.userData.isBoss) {
      ui.showBossHP(monster.userData.name, Math.max(0, monster.userData.health), monster.userData.maxHealth);
      if (monster.userData.health <= 0) {
        ui.hideBossHP();
      }
    }
  });
}

function interact(obj) {
  if (obj.userData.type === 'chest') {
    const loot = obj.userData.loot;
    if (loot.type === 'weapon') {
      if (!playerWeapons.includes(loot.id)) {
        playerWeapons.push(loot.id);
        ui.initWeaponSlots(playerWeapons);
      }
      ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
    } else if (loot.type === 'coins') {
      gameState.coins += loot.amount;
      ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
    } else if (loot.type === 'heal') {
      gameState.hp = Math.min(gameState.maxHp, gameState.hp + loot.amount);
      ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
    }
    scene.remove(obj);
    const idx = interactables.indexOf(obj);
    if (idx >= 0) interactables.splice(idx, 1);
  }
}

// ─── CAMERA ─────────────────────────────────────────────────────────────────

function updateCamera(delta) {
  const dist = 6;
  const yaw = cameraOrbit;
  const pitch = cameraPitch;

  const orbitOffset = new THREE.Vector3(
    dist * Math.cos(pitch) * Math.sin(yaw),
    dist * Math.sin(pitch),
    dist * Math.cos(pitch) * Math.cos(yaw)
  );

  const targetPos = heroine.position.clone().add(orbitOffset);
  targetPos.y = Math.max(targetPos.y, getHeightAt(targetPos.x, targetPos.z, seed) + 0.3);

  camera.position.lerp(targetPos, 0.08);

  const lookTarget = heroine.position.clone().add(new THREE.Vector3(0, 1.0, 0));
  camera.lookAt(lookTarget);
}

// ─── PLAYER MOVEMENT ────────────────────────────────────────────────────────

function updatePlayer(delta) {
  gameState.moving = false;
  if (gameState.hp <= 0) return;

  const speed = gameState.running ? 4.5 : 2.8;
  let moveX = 0, moveZ = 0;

  if (keys['KeyW']) { moveZ -= 1; gameState.moving = true; }
  if (keys['KeyS']) { moveZ += 1; gameState.moving = true; }
  if (keys['KeyA']) { moveX -= 1; gameState.moving = true; }
  if (keys['KeyD']) { moveX += 1; gameState.moving = true; }

  gameState.running = (keys['ShiftLeft'] || keys['ShiftRight']) && gameState.stamina > 0;
  if (gameState.running && gameState.moving) {
    gameState.stamina = Math.max(0, gameState.stamina - 12 * delta);
  } else if (!gameState.running) {
    gameState.stamina = Math.min(gameState.maxStamina, gameState.stamina + 6 * delta);
  }
  if (gameState.stamina <= 0) gameState.running = false;

  if (gameState.moving) {
    // Forward = direction camera is looking (projected on ground)
    const camForward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraOrbit);
    const camRight = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraOrbit);

    const movement = new THREE.Vector3();
    movement.add(camForward.clone().multiplyScalar(-moveZ));
    movement.add(camRight.clone().multiplyScalar(moveX));
    if (movement.length() > 0.01) movement.normalize().multiplyScalar(speed * delta);
    else movement.set(0, 0, 0);

    // Face movement direction
    if (movement.length() > 0.001) {
      const wantedAngle = Math.atan2(movement.x, movement.z);
      let diff = wantedAngle - heroine.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      heroine.rotation.y += diff * 0.15;
    }

    const newPos = heroine.position.clone().add(movement);
    // Soft world bound (10 chunks in each direction)
    const bound = CHUNK_SIZE * 10;
    newPos.x = Math.max(-bound, Math.min(bound, newPos.x));
    newPos.z = Math.max(-bound, Math.min(bound, newPos.z));
    const h = getHeightAt(newPos.x, newPos.z, seed);
    newPos.y = h;

    for (const m of monsters) {
      if (!m.userData.alive) continue;
      if (newPos.distanceTo(m.position) < 0.8) {
        newPos.add(newPos.clone().sub(m.position).normalize().multiplyScalar(0.5));
      }
    }

    heroine.position.copy(newPos);
  }

  // A/D also rotate camera when not moving (keyboard-friendly)
  if (!gameState.moving && !rightMouseDown) {
    if (keys['KeyA']) cameraOrbit += 2.0 * delta;
    if (keys['KeyD']) cameraOrbit -= 2.0 * delta;
  }

  // Snap to terrain + idle bob (no drift)
  const terrainY = getHeightAt(heroine.position.x, heroine.position.z, seed);
  const breath = Math.sin(Date.now() * 0.003) * 0.005;
  heroine.position.y = terrainY + breath;
}

// ─── MONSTER AI ────────────────────────────────────────────────────────────

function updateMonsters(delta, time) {
  for (const m of monsters) {
    if (!m.userData.alive) {
      // Death animation
      m.userData.deathTimer = (m.userData.deathTimer || 0) + delta;
      m.position.y -= delta * 0.5;
      m.rotation.x += delta * 2;
      m.rotation.z += delta * 1.5;
      if (m.userData.deathTimer > 2) {
        scene.remove(m);
      }
      continue;
    }

    const data = m.userData;
    const distToPlayer = m.position.distanceTo(heroine.position);

    // Aggro cooldown — monsters hesitate before charging
    const wasInRange = distToPlayer < data.aggroRange;
    if (wasInRange) {
      data.aggroCooldown = Math.max(0, data.aggroCooldown - delta);
    } else {
      // Reset cooldown when player leaves range so next approach is delayed
      data.aggroCooldown = 2 + Math.random() * 3;
    }
    const isMoving = wasInRange && data.aggroCooldown <= 0;

    if (isMoving) {
      // Chase player
      const dir = new THREE.Vector3().copy(heroine.position).sub(m.position);
      dir.y = 0;
      dir.normalize();
      m.position.add(dir.multiplyScalar(data.speed * delta));

      // Face player
      const angle = Math.atan2(dir.x, dir.z);
      let diff = angle - m.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      m.rotation.y += diff * 0.1;

      // Attack if close
      if (distToPlayer < 1.5) {
        data.attackTimer -= delta;
        if (data.attackTimer <= 0) {
          data.attackTimer = 1.5;
          if (gameState.invulnerable <= 0) {
            gameState.hp -= data.attackPower;
            gameState.invulnerable = 0.5;
            if (gameState.hp <= 0) {
              gameState.hp = 0;
              // Respawn logic
              setTimeout(() => {
                gameState.hp = gameState.maxHp;
                const h = getHeightAt(0, 0, seed);
                heroine.position.set(0, h, 0);
              }, 2000);
            }
          }
        }
      } else {
        data.attackTimer = Math.min(data.attackTimer + delta, 1.5);
      }
    } else {
      // Patrol
      data.patrolTimer += delta;
      if (data.patrolTimer > 3) {
        data.patrolTimer = 0;
        data.patrolAngle += (Math.random() - 0.5) * 1.5;
      }
      const patrolDir = new THREE.Vector3(Math.sin(data.patrolAngle), 0, Math.cos(data.patrolAngle));
      const patrolPos = data.homePos.clone().add(patrolDir.multiplyScalar(2));
      const diff = patrolPos.clone().sub(m.position);
      diff.y = 0;
      if (diff.length() > 0.3) {
        diff.normalize();
        m.position.add(diff.multiplyScalar(data.speed * 0.3 * delta));
        const angle = Math.atan2(diff.x, diff.z);
        let rDiff = angle - m.rotation.y;
        while (rDiff > Math.PI) rDiff -= Math.PI * 2;
        while (rDiff < -Math.PI) rDiff += Math.PI * 2;
        m.rotation.y += rDiff * 0.05;
      }
    }

    // Terrain snapping
    const mh = getHeightAt(m.position.x, m.position.z, seed);
    m.position.y = mh;

    // Update animation
    updateMonsterAnim(m, time, isMoving, distToPlayer < 1.5);
  }
}

// ─── CHEST SPAWNER ──────────────────────────────────────────────────────────



ui.setLoadProgress(100);

// ─── GAME LOOP ──────────────────────────────────────────────────────────────

let lastTime = 0;
function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  const delta = Math.min((time - lastTime) / 1000, 0.05);
  lastTime = time;

  // Invulnerability timer
  gameState.invulnerable = Math.max(0, gameState.invulnerable - delta);

  // Update
  updatePlayer(delta);
  updateCamera(delta);
  updateMonsters(delta, time * 0.001);
  updateChunks(heroine.position.x, heroine.position.z);
  updateShrines(worldObjects, time * 0.001);

  // Combat
  const hitResult = combat.update(delta, monsters);
  if (hitResult) {
    const m = hitResult.monster;
    m.userData.health -= hitResult.damage;
    m.userData.hitFlash = 1.0;
    if (m.userData.health <= 0) {
      m.userData.alive = false;
      m.userData.deathTimer = 0;
      awardCoins(m);
    }
    if (m.userData.isBoss) {
      ui.showBossHP(m.userData.name, Math.max(0, m.userData.health), m.userData.maxHealth);
      if (m.userData.health <= 0) ui.hideBossHP();
    }
  }

  // Check all monsters for boss death (in case boss dies from non-combat path)
  let bossAlive = false;
  for (const m of monsters) {
    if (m.userData.isBoss && m.userData.alive) { bossAlive = true; break; }
  }
  if (!bossAlive) ui.hideBossHP();

  // Particles
  const pPos = particles.geometry.attributes.position.array;
  for (let i = 0; i < particleCount; i++) {
    pPos[i * 3] += velArray[i].x * delta;
    pPos[i * 3 + 2] += velArray[i].z * delta;
    // Wrap around
    const T = getTerrainSize() / 2;
    if (Math.abs(pPos[i * 3]) > T) velArray[i].x *= -1;
    if (Math.abs(pPos[i * 3 + 2]) > T) velArray[i].z *= -1;
  }
  particles.geometry.attributes.position.needsUpdate = true;
  particleMat.uniforms.uTime.value = time * 0.001;

  // UI updates
  ui.updateHP(gameState.hp, gameState.maxHp);
  ui.updateStamina(gameState.stamina, gameState.maxStamina);
  ui.updateCoins(gameState.coins);

  // Detect nearby interactables
  nearInteractable = null;
  for (const obj of interactables) {
    const dist = heroine.position.distanceTo(obj.position);
    if (dist < 2) {
      nearInteractable = obj;
      ui.showInteract('Press E to open');
      break;
    }
  }
  if (!nearInteractable) ui.hideInteract();

  // Update outfit display
  const outfit = getCurrentOutfit(heroine);
  const weaponDef = WEAPONS.find(w => w.id === currentWeaponId);
  ui.updateInventory(outfit, weaponDef ? weaponDef.name : '');

  // Render
  renderer.render(scene, camera);
}

requestAnimationFrame(gameLoop);

// ─── RESIZE ─────────────────────────────────────────────────────────────────

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
