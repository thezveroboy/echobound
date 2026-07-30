import * as THREE from 'three';

const POOL_SIZE = 40;
let quality = 'high';
let _scene = null;

export function setVfxQuality(q) { quality = q; }
export function getVfxQuality() { return q; }
export function initVfx(scene) { _scene = scene; }

// Shared pool
let pool = [];
let poolIdx = 0;

function getParticle() {
  for (let i = 0; i < 5; i++) {
    const idx = (poolIdx++) % POOL_SIZE;
    if (idx >= pool.length) {
      const geo = new THREE.SphereGeometry(0.03, 4, 4);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const m = new THREE.Mesh(geo, mat);
      m.visible = false;
      pool.push(m);
    }
    const p = pool[idx];
    if (!p.parent || !p.visible) return p;
  }
  return null;
}

export function burstAt(position, color, count = 6, speed = 2) {
  if (!_scene) return;
  if (quality === 'low') count = Math.ceil(count * 0.4);
  for (let i = 0; i < count; i++) {
    const p = getParticle();
    if (!p) break;
    p.position.copy(position);
    p.material.color.copy(color);
    p.material.opacity = 0.8;
    p.scale.setScalar(0.5 + Math.random() * 0.8);
    p.userData.vel = new THREE.Vector3(
      (Math.random() - 0.5) * speed,
      Math.random() * speed * 0.8,
      (Math.random() - 0.5) * speed
    );
    p.userData.life = 0.3 + Math.random() * 0.3;
    p.userData.age = 0;
    p.visible = true;
    _scene.add(p);
  }
}

export function ringAt(position, color, radius = 0.3) {
  if (!_scene || quality === 'low') return;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.6, radius, 12),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.position.copy(position);
  ring.position.y += 0.05;
  ring.rotation.x = -Math.PI / 2;
  ring.userData = { life: 0.3, age: 0, scale: 1 };
  _scene.add(ring);
}

export function sparkleAt(position, color) {
  if (!_scene || quality === 'low') return;
  const g = new THREE.SphereGeometry(0.015, 4, 4);
  const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 });
  const s = new THREE.Mesh(g, m);
  s.position.copy(position);
  s.position.y += 0.1;
  s.userData = { life: 0.4, age: 0, vel: new THREE.Vector3((Math.random() - 0.5) * 0.5, 0.5 + Math.random() * 0.5, (Math.random() - 0.5) * 0.5) };
  _scene.add(s);
}

export function updateVfx(delta) {
  // Update burst particles in pool
  for (const p of pool) {
    if (!p.visible || !p.parent) continue;
    p.userData.age += delta;
    const t = p.userData.age / p.userData.life;
    if (t >= 1) {
      p.visible = false;
      if (p.parent) _scene.remove(p);
      continue;
    }
    p.position.add(p.userData.vel.clone().multiplyScalar(delta));
    p.material.opacity = 0.8 * (1 - t);
    p.scale.setScalar((0.5 + Math.random() * 0.8) * (1 - t * 0.5));
    p.userData.vel.y -= delta * 1.5;
  }

  // Scan scene for ring/sparkle meshes with userData.life
  const toRemove = [];
  _scene.traverse((child) => {
    if (child.isMesh && child.userData.life && !pool.includes(child)) {
      child.userData.age += delta;
      const t = child.userData.age / child.userData.life;
      if (t >= 1) {
        toRemove.push(child);
        return;
      }
      if (child.userData.vel) {
        child.position.add(child.userData.vel.clone().multiplyScalar(delta));
      }
      if (child.geometry.type === 'RingGeometry') {
        const s = 1 + t * 2;
        child.scale.setScalar(s);
        child.material.opacity = 0.6 * (1 - t);
      } else {
        child.material.opacity = 0.9 * (1 - t);
      }
    }
  });
  for (const r of toRemove) {
    _scene.remove(r);
    if (r.geometry && r.geometry.type !== 'SphereGeometry') r.geometry.dispose();
    if (r.material) r.material.dispose();
  }
}

export function clearVfx() {
  for (const p of pool) {
    if (p.parent) { _scene.remove(p); p.visible = false; }
  }
}
