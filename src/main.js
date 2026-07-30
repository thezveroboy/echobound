import * as THREE from 'three';
import { seededRandom } from './world/noise.js';
import { generateHeightMap, buildTerrain, getHeightAt, getTerrainSize, biomesForPosition } from './world/terrain.js';
import { scatterObjects, updateShrines } from './world/objects.js';
import { buildHeroine, setBodyPartColor, clearBodyPartColor, getClothingItem, CLOTHING_CATALOG } from './character/heroine.js';
import { generateMonster, updateMonsterAnim } from './monster/monster-gen.js';
import { CombatSystem, getAttackPhase } from './combat/combat.js';
import { audio } from './audio/audio.js';
import { updateVfx, burstAt, ringAt, sparkleAt, clearVfx, initVfx } from './vfx/vfx.js';
import { WEAPONS, createWeaponMesh } from './combat/weapons.js';
import { UIManager } from './ui/ui.js';

// ─── SETUP ──────────────────────────────────────────────────────────────────

const ui = new UIManager();

const scene = new THREE.Scene();
initVfx(scene);
scene.background = new THREE.Color(0x6a8cba);
scene.fog = new THREE.Fog(0x6a8cba, 40, 100);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 150);
camera.position.set(0, 6, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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
sunLight.shadow.camera.far = 60;
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
  const rng = seededRandom(seed + cx * 1000 + cz * 100 + 54000);
  const count = 1 + Math.floor(rng() * 4);
  const result = [];
  for (let i = 0; i < count; i++) {
    const x = originX + (rng() - 0.5) * T * 0.7;
    const z = originZ + (rng() - 0.5) * T * 0.7;
    const h = getHeightAt(x, z, seed);
    if (h < -0.5 || h > 10) continue;
    const tierRoll = rng();
    const tier = tierRoll < 0.5 ? 0 : tierRoll < 0.75 ? 1 : tierRoll < 0.9 ? 2 : 3;
    const monster = generateMonster(tier, seed + cx * 1000 + cz * 100 + i * 100);
    monster.position.set(x, h, z);
    monster.userData.alive = true;
    monster.userData.homePos = new THREE.Vector3(x, h, z);
    monster.userData.patrolAngle = rng() * Math.PI * 2;
    monster.userData.patrolTimer = 0;
    monster.userData.aggroRange = 6 + tier * 3;
    monster.userData.aggroCooldown = 2 + rng() * 3;
    monster.userData.attackTimer = 0;
    monster.userData.posture = 0;
    monster.userData.maxPosture = 30 + tier * 20;
    monster.userData.staggerTimer = 0;
    monster.userData.staggerDmgMult = 1.0;
    monster.userData.aiState = 'patrol';
    monster.userData.retreatTimer = 0;
    monster.userData.investigateTimer = 0;
    monster.userData.wasInRange = false;
    monster.userData.attackTelegraph = 0;
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
  const rng = seededRandom(seed + cx * 1000 + cz * 100 + 55000);
  const count = 1 + Math.floor(rng() * 2);
  const result = [];
  const placed = [];
  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let x, z, h;
    do {
      x = originX + (rng() - 0.5) * T * 0.6;
      z = originZ + (rng() - 0.5) * T * 0.6;
      h = getHeightAt(x, z, seed);
      attempts++;
    } while ((h < -0.5 || h > 12 || placed.some(p => Math.hypot(p.x - x, p.z - z) < 10)) && attempts < 10);
    if (h < -0.5 || h > 12) continue;
    placed.push({ x, z });
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
    } else if (r < 0.35) {
      const ci = Math.floor(Math.abs(seed * 3.1 + x * 17.3 + z * 53.7) % CLOTHING_CATALOG.length);
      const c = CLOTHING_CATALOG[ci];
      loot = { type: 'clothing', id: c.id, label: c.name };
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
  const appleTrees = objs.filter(o => o.userData.type === 'appleTree' && o.userData.appleCount > 0);
  const mushrooms = objs.filter(o => o.userData.type === 'mushroom');
  const houseChests = objs.filter(o => o.userData.type === 'chest');
  loadedChunks.set(key, { mesh, objects: objs, monsters: mons, chests, appleTrees });
  worldObjects.push(...objs);
  monsters.push(...mons);
  interactables.push(...chests, ...appleTrees, ...houseChests, ...mushrooms);
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
  for (const a of chunk.appleTrees) {
    const idx = interactables.indexOf(a);
    if (idx !== -1) interactables.splice(idx, 1);
  }
  for (const c of chunk.objects) {
    if (c.userData.type === 'chest') {
      const idx = interactables.indexOf(c);
      if (idx !== -1) interactables.splice(idx, 1);
    }
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
let stepTimer = 0;
let currentBiome = 'grassland';

// Initial load of 3x3 chunks centered on (0,0)
updateChunks(0, 0);

ui.setLoadProgress(50);

// ─── HEROINE ───────────────────────────────────────────────────────────────

const heroine = buildHeroine();
const spawnH = getHeightAt(0, 0, seed);
heroine.position.set(0, spawnH, 0);
scene.add(heroine);

ui.setLoadProgress(60);

// Connect UI equip events → hero body part colors
ui.onEquip = (slot, itemId) => {
  if (itemId) {
    const item = getClothingItem(itemId);
    if (item) setBodyPartColor(heroine, slot, item.color);
  } else {
    clearBodyPartColor(heroine, slot);
  }
};

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
  mesh.position.set(0.22, 0.52, 0.10);
  mesh.rotation.x = 0.5;
  mesh.rotation.z = 0.2;
  heroine.add(mesh);
  heroine.userData.weaponMesh = mesh;
}
updateWeaponVisual();

const weaponLevels = {};
ui.initWeaponSlots(playerWeapons);
playerWeapons.forEach(id => { weaponLevels[id] = 0; });
ui.equip('dress', 'dress_gray');
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
let cameraPitch = 0.45;
let cameraShake = 0;
let lockOnTarget = null;
let isLockedOn = false;
let _frameCount = 0;

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
  if (e.code === 'KeyM') {
    const el = document.getElementById('minimap');
    if (el) el.style.display = el.style.display === 'none' ? '' : 'none';
  }
  if (e.code === 'KeyQ') {
    isLockedOn = !isLockedOn;
    if (!isLockedOn) lockOnTarget = null;
  }
});
document.addEventListener('keyup', (e) => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
document.addEventListener('mousedown', (e) => {
  audio.unlock();
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
  if (!combat.canAttack()) return;
  combat._onDamage = (monster, dmg) => {
    // Apply stagger damage multiplier
    const mult = monster.userData.staggerDmgMult || 1.0;
    const finalDmg = Math.round(dmg * mult);
    monster.userData.health -= finalDmg;
    monster.userData.hitFlash = 1.0;
    audio.playSfx('hit');
    burstAt(monster.position, new THREE.Color(0xffaa44));
    ringAt(monster.position, new THREE.Color(0xffaa44));
    cameraShake = 0.12;

    const pos = monster.position.clone();
    pos.y += 1.5;
    const screenPos = pos.clone().project(camera);
    const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
    ui.showDamage(x, y, finalDmg, Math.random() > 0.8);

    if (monster.userData.health <= 0) {
      monster.userData.alive = false;
      monster.userData.deathTimer = 0;
      audio.playSfx('death');
      awardCoins(monster);
    }
    if (monster.userData.isBoss) {
      ui.showBossHP(monster.userData.name, Math.max(0, monster.userData.health), monster.userData.maxHealth);
      if (monster.userData.health <= 0) {
        ui.hideBossHP();
      }
    }
  };
  combat.playerAttack(heroine, currentWeaponId, monsters, weaponLevels[currentWeaponId] || 0);
  audio.playSfx('swing');
}

function interact(obj) {
  if (obj.userData.type === 'chest') {
    const loot = obj.userData.loot;
    if (loot.type === 'weapon') {
      if (playerWeapons.includes(loot.id)) {
        weaponLevels[loot.id] = (weaponLevels[loot.id] || 0) + 1;
        const idx = playerWeapons.indexOf(loot.id);
        ui.setWeaponLevel(idx, weaponLevels[loot.id]);
        ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.id.toUpperCase() + ' +' + weaponLevels[loot.id], false, true);
      } else {
        playerWeapons.push(loot.id);
        weaponLevels[loot.id] = 0;
        ui.initWeaponSlots(playerWeapons);
        playerWeapons.forEach((id, i) => {
          if (weaponLevels[id]) ui.setWeaponLevel(i, weaponLevels[id]);
        });
        ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
      }
      audio.playSfx('pickup');
      sparkleAt(obj.position, new THREE.Color(0xffdd44));
    } else if (loot.type === 'coins') {
      gameState.coins += loot.amount;
      ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
      audio.playSfx('coin');
      sparkleAt(obj.position, new THREE.Color(0xffdd44));
    } else if (loot.type === 'clothing') {
      if (ui.addItem({ type: 'clothing', id: loot.id, label: loot.label })) {
        ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
        audio.playSfx('pickup');
        sparkleAt(obj.position, new THREE.Color(0xff88cc));
      }
    } else if (loot.type === 'heal') {
      gameState.hp = Math.min(gameState.maxHp, gameState.hp + loot.amount);
      ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, loot.label, false, true);
      audio.playSfx('heal');
      sparkleAt(obj.position, new THREE.Color(0x44ff88));
    }
    scene.remove(obj);
    const idx = interactables.indexOf(obj);
    if (idx >= 0) interactables.splice(idx, 1);
  } else if (obj.userData.type === 'appleTree') {
    const meshes = obj.userData.appleMeshes;
    const stalks = obj.userData.stalkMeshes;
    if (meshes.length > 0) {
      const apple = meshes.pop();
      const stalk = stalks.pop();
      obj.remove(apple);
      obj.remove(stalk);
      obj.userData.appleCount = meshes.length;
      const heal = 1 + Math.floor(Math.random() * 3);
      gameState.hp = Math.min(gameState.maxHp, gameState.hp + heal);
      ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, '+' + heal + ' ❤', false, true);
      audio.playSfx('heal');
      sparkleAt(obj.position, new THREE.Color(0x44ff88));
      if (meshes.length === 0) {
        const idx2 = interactables.indexOf(obj);
        if (idx2 >= 0) interactables.splice(idx2, 1);
      }
    }
  } else if (obj.userData.type === 'mushroom') {
    gameState.hp = Math.min(gameState.maxHp, gameState.hp + obj.userData.healAmount);
    ui.showDamage(window.innerWidth / 2, window.innerHeight / 2, '+' + obj.userData.healAmount + ' ❤', false, true);
    audio.playSfx('heal');
    sparkleAt(obj.position, new THREE.Color(0xdd88ff));
    scene.remove(obj);
    const idx = interactables.indexOf(obj);
    if (idx >= 0) interactables.splice(idx, 1);
  }
}

// ─── CAMERA ─────────────────────────────────────────────────────────────────

let _camRaycaster = new THREE.Raycaster();
let _camRayDir = new THREE.Vector3();
let _camTargetPos = new THREE.Vector3();
let _camLookTarget = new THREE.Vector3();
let _camOrbitOffset = new THREE.Vector3();
let _shakeOffset = new THREE.Vector3();
let _occludedDist = 0;

function updateCamera(delta) {
  // Lock-on
  if (isLockedOn) {
    if (lockOnTarget && lockOnTarget.userData.alive) {
      _camRayDir.copy(lockOnTarget.position).sub(heroine.position);
      cameraOrbit = Math.atan2(_camRayDir.x, _camRayDir.z);
      cameraPitch = 0.3;
    } else {
      isLockedOn = false;
      lockOnTarget = null;
      let nearest = null;
      let nearDist = Infinity;
      for (const m of monsters) {
        if (!m.userData.alive) continue;
        const d = m.position.distanceTo(heroine.position);
        if (d < nearDist) { nearDist = d; nearest = m; }
      }
      lockOnTarget = nearest;
      if (lockOnTarget) isLockedOn = true;
    }
  }

  let dist = isLockedOn ? 5 : 6;
  const yaw = cameraOrbit;
  const pitch = cameraPitch;

  _camOrbitOffset.set(
    dist * Math.cos(pitch) * Math.sin(yaw),
    dist * Math.sin(pitch),
    dist * Math.cos(pitch) * Math.cos(yaw)
  );

  _camTargetPos.copy(heroine.position).add(_camOrbitOffset);
  _camTargetPos.y = Math.max(_camTargetPos.y, getHeightAt(_camTargetPos.x, _camTargetPos.z, seed) + 0.3);

  // Occlusion — raycast from hero to camera, shorten if blocked
  _camRayDir.copy(_camTargetPos).sub(heroine.position);
  const maxDist = _camRayDir.length();
  _camRayDir.normalize();
  _camRaycaster.set(heroine.position.clone().add(new THREE.Vector3(0, 1, 0)), _camRayDir);
  _camRaycaster.far = maxDist;
  const intersects = _camRaycaster.intersectObjects(worldObjects, true);
  let hitDist = dist;
  if (intersects.length > 0) {
    const hit = intersects[0];
    if (hit.distance < maxDist - 0.5) {
      hitDist = Math.max(1.5, hit.distance - 0.5);
    }
  }
  // Smoothly interpolate occlusion distance to avoid jitter
  _occludedDist += (hitDist - _occludedDist) * Math.min(1, delta * 8);
  dist = _occludedDist;

  _camOrbitOffset.set(
    dist * Math.cos(pitch) * Math.sin(yaw),
    dist * Math.sin(pitch),
    dist * Math.cos(pitch) * Math.cos(yaw)
  );
  _camTargetPos.copy(heroine.position).add(_camOrbitOffset);
  _camTargetPos.y = Math.max(_camTargetPos.y, getHeightAt(_camTargetPos.x, _camTargetPos.z, seed) + 0.3);

  camera.position.lerp(_camTargetPos, 0.08);

  // Camera shake
  if (cameraShake > 0) {
    cameraShake -= delta;
    _shakeOffset.set(
      (Math.random() - 0.5) * cameraShake * 0.5,
      (Math.random() - 0.5) * cameraShake * 0.5,
      (Math.random() - 0.5) * cameraShake * 0.5
    );
    camera.position.add(_shakeOffset);
  }

  _camLookTarget.copy(heroine.position).add(new THREE.Vector3(0, 1.0, 0));
  camera.lookAt(_camLookTarget);
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

    applyWorldCollision(newPos, worldObjects);

    heroine.position.copy(newPos);

    // Footstep audio
    stepTimer -= delta;
    if (stepTimer <= 0) {
      audio.playSfx('step');
      stepTimer = gameState.running ? 0.3 : 0.5;
    }
  } else {
    stepTimer = 0;
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

// ─── WORLD COLLISION ──────────────────────────────────────────────────────────

function applyWorldCollision(pos, objects) {
  for (const obj of objects) {
    const tr = obj.userData.trunkR;
    if (tr) {
      const dx = pos.x - obj.position.x;
      const dz = pos.z - obj.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const minDist = tr + 0.1;
      if (dist < minDist && dist > 0.001) {
        pos.x += (dx / dist) * (minDist - dist);
        pos.z += (dz / dist) * (minDist - dist);
      }
      continue;
    }
    if (obj.userData.type !== 'house' && obj.userData.type !== 'cityBuilding') continue;
    const walls = obj.userData.walls;
    if (!walls) continue;
    const ry = obj.rotation.y;
    const cosA = Math.cos(ry);
    const sinA = Math.sin(ry);
    const dx = pos.x - obj.position.x;
    const dz = pos.z - obj.position.z;
    const lx = dx * cosA + dz * sinA;
    const lz = -dx * sinA + dz * cosA;
    let plx = lx, plz = lz;
    for (const wall of walls) {
      const wdx = plx - wall.cx;
      const wdz = plz - wall.cz;
      const overlapX = wall.hw + 0.15 - Math.abs(wdx);
      const overlapZ = wall.hd + 0.15 - Math.abs(wdz);
      if (overlapX > 0 && overlapZ > 0) {
        if (overlapX < overlapZ) {
          plx += (wdx > 0 ? 1 : -1) * overlapX;
        } else {
          plz += (wdz > 0 ? 1 : -1) * overlapZ;
        }
      }
    }
    pos.x = obj.position.x + plx * cosA - plz * sinA;
    pos.z = obj.position.z + plx * sinA + plz * cosA;
  }
  return pos;
}

// ─── MONSTER AI ────────────────────────────────────────────────────────────────

function updateMonsters(delta, time) {
  for (const m of monsters) {
    if (!m.userData.alive) {
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
    const distFromHome = m.position.distanceTo(data.homePos);

    // Stagger
    if (data.staggerTimer > 0) {
      data.staggerTimer -= delta;
      m.position.y = getHeightAt(m.position.x, m.position.z, seed);
      updateMonsterAnim(m, time, false, false);
      if (data.staggerTimer <= 0) data.staggerDmgMult = 1.0;
      continue;
    }

    // Leash — if too far from home, return
    const leashRange = data.aggroRange * 3;
    if (distFromHome > leashRange) {
      const returnDir = new THREE.Vector3().copy(data.homePos).sub(m.position);
      returnDir.y = 0;
      returnDir.normalize();
      m.position.add(returnDir.multiplyScalar(data.speed * 1.5 * delta));
      const angle = Math.atan2(returnDir.x, returnDir.z);
      let diff = angle - m.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      m.rotation.y += diff * 0.1;
      data.aiState = 'return';
      applyWorldCollision(m.position, worldObjects);
      m.position.y = getHeightAt(m.position.x, m.position.z, seed);
      updateMonsterAnim(m, time, true, false);
      continue;
    }

    // HP-based retreat
    const hpPct = data.health / data.maxHealth;
    if (hpPct < 0.25 && distToPlayer < data.aggroRange * 0.5 && data.aiState !== 'return') {
      data.retreatTimer = (data.retreatTimer || 0) + delta;
      if (data.retreatTimer > 1.0) {
        const retreatDir = new THREE.Vector3().copy(m.position).sub(heroine.position);
        retreatDir.y = 0;
        retreatDir.normalize();
        m.position.add(retreatDir.multiplyScalar(data.speed * 0.8 * delta));
        const angle = Math.atan2(retreatDir.x, retreatDir.z);
        let diff = angle - m.rotation.y;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        m.rotation.y += diff * 0.1;
        data.aiState = 'retreat';
        applyWorldCollision(m.position, worldObjects);
        m.position.y = getHeightAt(m.position.x, m.position.z, seed);
        updateMonsterAnim(m, time, true, false);
        continue;
      }
    } else {
      data.retreatTimer = 0;
    }

    // Investigate — briefly pause when first noticing player
    data.investigateTimer = data.investigateTimer || 0;
    const wasInRange = distToPlayer < data.aggroRange;
    if (wasInRange && !data.wasInRange && distToPlayer > 2) {
      data.investigateTimer = 0.5;
    }
    data.wasInRange = wasInRange;

    if (data.investigateTimer > 0) {
      data.investigateTimer -= delta;
      // Face player during investigate
      const lookDir = new THREE.Vector3().copy(heroine.position).sub(m.position);
      lookDir.y = 0;
      if (lookDir.length() > 0.01) {
        const angle = Math.atan2(lookDir.x, lookDir.z);
        let diff = angle - m.rotation.y;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        m.rotation.y += diff * 0.1;
      }
      applyWorldCollision(m.position, worldObjects);
      m.position.y = getHeightAt(m.position.x, m.position.z, seed);
      updateMonsterAnim(m, time, false, false);
      continue;
    }

    // Aggro cooldown
    if (wasInRange) {
      data.aggroCooldown = Math.max(0, data.aggroCooldown - delta);
    } else {
      data.aggroCooldown = 1.5 + Math.random() * 2;
    }
    const isMoving = wasInRange && data.aggroCooldown <= 0;

    if (isMoving) {
      data.aiState = 'chase';
      const dir = new THREE.Vector3().copy(heroine.position).sub(m.position);
      dir.y = 0;
      dir.normalize();
      m.position.add(dir.multiplyScalar(data.speed * delta));

      const angle = Math.atan2(dir.x, dir.z);
      let diff = angle - m.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      m.rotation.y += diff * 0.1;

      // Telegraph before attack
      if (distToPlayer < 2.5 && data.attackTimer > 0.5 && data.attackTimer < 1.0 && !data._telegraphed) {
        data._telegraphed = true;
        ringAt(m.position, new THREE.Color(0xff4444), 0.8);
        burstAt(m.position, new THREE.Color(0xff4444), 3, 0.5);
      }
      if (data.attackTimer <= 0.5) data._telegraphed = false;

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
    } else if (wasInRange) {
      // In aggro range but cooldown active — stand still and face player
      data.aiState = 'wait';
      const lookDir = new THREE.Vector3().copy(heroine.position).sub(m.position);
      lookDir.y = 0;
      if (lookDir.length() > 0.01) {
        const angle = Math.atan2(lookDir.x, lookDir.z);
        let diff = angle - m.rotation.y;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        m.rotation.y += diff * 0.05;
      }
    } else {
      data.aiState = 'patrol';
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

    applyWorldCollision(m.position, worldObjects);

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
    const mult = m.userData.staggerDmgMult || 1.0;
    const finalDmg = Math.round(hitResult.damage * mult);
    m.userData.health -= finalDmg;
    m.userData.hitFlash = 1.0;
    // Posture from projectile
    const pDef = WEAPONS.find(w => w.type === 'ranged' || w.type === 'magic');
    if (pDef) {
      m.userData.posture = Math.min(m.userData.maxPosture || 50, (m.userData.posture || 0) + (pDef.postureDmg || 5));
      if (m.userData.posture >= (m.userData.maxPosture || 50)) {
        m.userData.posture = 0;
        m.userData.staggerTimer = 0.8;
        m.userData.staggerDmgMult = 1.5;
      }
    }
    const pos = m.position.clone();
    pos.y += 1.5;
    const screenPos = pos.clone().project(camera);
    const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
    ui.showDamage(x, y, finalDmg, false);
    audio.playSfx('hit');
    if (m.userData.health <= 0) {
      m.userData.alive = false;
      m.userData.deathTimer = 0;
      audio.playSfx('death');
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
  ui.updateMinimap(heroine.position, interactables, monsters, cameraOrbit);

  // Biome music
  const biome = biomesForPosition(heroine.position.x, heroine.position.z, seed);
  if (biome !== currentBiome) {
    currentBiome = biome;
    audio.startMusic(biome);
  }

  // VFX update
  updateVfx(delta);

  // Detect nearby interactables
  nearInteractable = null;
  for (const obj of interactables) {
    const dist = heroine.position.distanceTo(obj.position);
    if (dist < 2) {
      nearInteractable = obj;
      const hint = obj.userData.type === 'appleTree' ? 'Press E to pick' :
                    obj.userData.type === 'mushroom' ? 'Press E to collect' : 'Press E to open';
      ui.showInteract(hint);
      break;
    }
  }
  if (!nearInteractable) ui.hideInteract();

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
