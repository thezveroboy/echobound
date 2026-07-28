import * as THREE from 'three';

// Anime-style heroine builder with modular wardrobe
const SHARED = {
  ambient: new THREE.Color(0.35, 0.35, 0.4),
  lightDir: new THREE.Vector3(0.5, 0.8, 0.3).normalize(),
  lightColor: new THREE.Color(1.0, 0.9, 0.8),
  rimPower: 3.0,
  rimColor: new THREE.Color(0.9, 0.85, 1.0),
};

function makeCharMat(baseColor, shadowMult = 0.5, rimMult = 1.3) {
  const c = new THREE.Color(baseColor);
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: c },
      uShadowColor: { value: c.clone().multiplyScalar(shadowMult) },
      uRimColor: { value: c.clone().multiplyScalar(rimMult) },
      uAmbientLight: { value: SHARED.ambient },
      uMainLightDir: { value: SHARED.lightDir },
      uMainLightColor: { value: SHARED.lightColor },
      uRimPower: { value: SHARED.rimPower },
    },
    vertexShader: `
      varying vec3 vNormal; varying vec3 vViewPosition; varying vec3 vWorldPos;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor; uniform vec3 uShadowColor; uniform vec3 uRimColor;
      uniform float uRimPower; uniform vec3 uAmbientLight; uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor; varying vec3 vNormal; varying vec3 vViewPosition;
      varying vec3 vWorldPos;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.5;
        // Soft outline
        float outline = 1.0 - max(0.0, dot(n, v));
        outline = smoothstep(0.75, 0.8, outline);
        final *= (1.0 - outline * 0.5);
        final = pow(final, vec3(0.88));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });
}

export function buildHeroine() {
  const root = new THREE.Group();
  root.position.set(0, 0, 0);

  const skin = new THREE.MeshStandardMaterial({ color: 0xffecd6, roughness: 0.4, metalness: 0 });

  // Body layout (y-up, feet at y=0, height ≈1.15):
  // legs 0–0.42, hips 0.42–0.52, torso 0.52–0.82 (includes chest),
  // breasts on torso at y≈0.78, shoulders 0.82–0.88,
  // neck 0.88–0.94, head center 1.00

  // --- Legs (two smooth, longer) ---
  for (let side = -1; side <= 1; side += 2) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.055, 0.42, 12), skin);
    leg.position.set(side * 0.08, 0.21, 0);
    leg.castShadow = true;
    root.add(leg);
  }

  // --- Hips ---
  const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.21, 0.10, 14), skin);
  hips.position.y = 0.48;
  hips.castShadow = true;
  root.add(hips);

  // --- Torso (waist to upper chest, single piece covers breast area) ---
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.17, 0.30, 14), skin);
  torso.position.y = 0.68;
  torso.castShadow = true;
  root.add(torso);
  root.userData.torso = torso;

  // --- Breasts ---
  for (let side = -1; side <= 1; side += 2) {
    const breast = new THREE.Mesh(new THREE.SphereGeometry(0.07, 14, 14), skin);
    breast.position.set(side * 0.07, 0.77, 0.10);
    breast.scale.set(1, 0.85, 0.55);
    breast.castShadow = true;
    root.add(breast);
  }

  // --- Shoulders ---
  const shoulders = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.12, 0.06, 14), skin);
  shoulders.position.y = 0.86;
  shoulders.castShadow = true;
  root.add(shoulders);

  // --- Neck ---
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.06, 10), skin);
  neck.position.y = 0.92;
  neck.castShadow = true;
  root.add(neck);

  // --- Head ---
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 18), skin);
  head.position.y = 1.00;
  head.scale.set(1, 1.05, 0.88);
  head.castShadow = true;
  root.add(head);
  root.userData.head = head;

  // --- Hair (anime-style, blue) ---
  const hair = new THREE.MeshStandardMaterial({ color: 0x88bbdd, roughness: 0.7 });
  const hDark = new THREE.MeshStandardMaterial({ color: 0x6699bb, roughness: 0.7 });
  // Main volume on top
  const vol = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 14), hair);
  vol.position.set(0, 1.06, -0.02);
  vol.scale.set(1.06, 0.48, 0.92);
  vol.castShadow = true;
  root.add(vol);
  // Back tail
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.06, 0.14, 8), hDark);
  tail.position.set(0, 0.91, -0.10);
  tail.rotation.x = -0.2;
  tail.castShadow = true;
  root.add(tail);
  // Front bangs
  for (let side = -1; side <= 1; side += 2) {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.02, 0.09, 6), hair);
    b.position.set(side * 0.04, 1.00, 0.10);
    b.rotation.x = 0.4;
    b.rotation.z = side * 0.08;
    b.castShadow = true;
    root.add(b);
  }
  // Side strands
  for (let side = -1; side <= 1; side += 2) {
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.028, 0.22, 6), hDark);
    s.position.set(side * 0.10, 0.91, 0.02);
    s.rotation.z = side * 0.12;
    s.rotation.x = 0.04;
    s.castShadow = true;
    root.add(s);
  }

  // --- Eyes ---
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x445577 });
  for (let side = -1; side <= 1; side += 2) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 10), white);
    eye.position.set(side * 0.055, 1.02, 0.12);
    eye.scale.set(1, 0.9, 0.18);
    root.add(eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), pupilMat);
    pupil.position.set(side * 0.055, 1.02, 0.13);
    pupil.scale.set(1, 0.9, 0.08);
    root.add(pupil);
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    hl.position.set(side * 0.065, 1.04, 0.135);
    hl.scale.set(1, 0.9, 0.08);
    root.add(hl);
  }

  // --- Eyebrows ---
  const browMat = new THREE.MeshBasicMaterial({ color: 0x667788 });
  for (let side = -1; side <= 1; side += 2) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.005, 0.01), browMat);
    b.position.set(side * 0.055, 1.04, 0.125);
    b.rotation.z = side * 0.08;
    root.add(b);
  }

  // --- Mouth ---
  const m = new THREE.Mesh(new THREE.TorusGeometry(0.015, 0.003, 4, 8), new THREE.MeshBasicMaterial({ color: 0xcc8899 }));
  m.position.set(0, 0.96, 0.125);
  m.rotation.x = Math.PI / 2;
  m.rotation.z = 0.08;
  m.scale.set(1, 0.35, 1);
  root.add(m);

  // --- Arms (single piece per arm, hangs from shoulder to mid-thigh) ---
  for (let side = -1; side <= 1; side += 2) {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.032, 0.28, 10), skin);
    arm.position.set(side * 0.165, 0.74, 0.01);
    arm.rotation.z = side * 0.15;
    arm.rotation.x = -0.06;
    arm.castShadow = true;
    root.add(arm);
  }

  // --- Wardrobe slots (initially empty) ---
  root.userData.slots = {
    headwear: null,
    dress: null,
    legwear: null,
    footwear: null,
    extra: null,
  };

  // Apply default dress (disabled — user wants to see bare body first)
  // equipDress(root, 'seafoam');

  return root;
}

// --- Wardrobe System ---

const dressConfigs = {
  seafoam: { color: 0x7dcec0, trim: 0xa8e6d8, name: 'Seafoam Gown' },
  crimson: { color: 0xcc5555, trim: 0xee8888, name: 'Crimson Dress' },
  lavender: { color: 0x9977bb, trim: 0xbb99dd, name: 'Lavender Robe' },
  solar: { color: 0xdd9944, trim: 0xeecc66, name: 'Solar Mantle' },
  midnight: { color: 0x334466, trim: 0x5577aa, name: 'Midnight Gown' },
};

const headwearConfigs = {
  none: null,
  crown: { color: 0xddbb55, name: 'Crown' },
  flower: { color: 0xff7799, name: 'Flower Band' },
  witch: { color: 0x664488, name: 'Witch Hat' },
  cat: { color: 0xff8844, name: 'Cat Ears' },
};

const legwearConfigs = {
  none: null,
  stockings: { color: 0x223344, name: 'Stockings' },
  thighhighs: { color: 0xffffff, name: 'Thigh-Highs' },
  leggings: { color: 0x444455, name: 'Leggings' },
};

const footwearConfigs = {
  none: null,
  sandals: { color: 0x886644, name: 'Sandals' },
  boots: { color: 0x554433, name: 'Boots' },
  heels: { color: 0xdd88aa, name: 'Heels' },
};

const extraConfigs = {
  none: null,
  halo: { color: 0xffee88, name: 'Halo' },
  wings: { color: 0xffffff, name: 'Angel Wings' },
  ribbon: { color: 0xff4466, name: 'Ribbon' },
  tail: { color: 0xcc8844, name: 'Fox Tail' },
};

export function getDressList() {
  return Object.entries(dressConfigs).map(([k, v]) => ({ id: k, ...v }));
}
export function getHeadwearList() {
  return Object.entries(headwearConfigs).map(([k, v]) => ({ id: k, ...(v || { name: 'None', color: 0 }) }));
}
export function getLegwearList() {
  return Object.entries(legwearConfigs).map(([k, v]) => ({ id: k, ...(v || { name: 'None', color: 0 }) }));
}
export function getFootwearList() {
  return Object.entries(footwearConfigs).map(([k, v]) => ({ id: k, ...(v || { name: 'None', color: 0 }) }));
}
export function getExtraList() {
  return Object.entries(extraConfigs).map(([k, v]) => ({ id: k, ...(v || { name: 'None', color: 0 }) }));
}

function equipDress(root, dressId) {
  // Remove old dress
  if (root.userData.slots.dress) {
    root.remove(root.userData.slots.dress);
  }
  if (!dressConfigs[dressId]) return;

  const cfg = dressConfigs[dressId];
  const dressMat = makeCharMat(cfg.color, 0.45);
  const trimMat = makeCharMat(cfg.trim, 0.5);

  const group = new THREE.Group();

  // Skirt — hips to mid-thigh
  const skirtGeo = new THREE.CylinderGeometry(0.22, 0.38, 0.25, 10);
  const skirt = new THREE.Mesh(skirtGeo, dressMat);
  skirt.position.y = 0.38;
  skirt.castShadow = true;
  group.add(skirt);

  // Bodice — torso, waist to bust
  const bodiceGeo = new THREE.CylinderGeometry(0.16, 0.2, 0.26, 10);
  const bodice = new THREE.Mesh(bodiceGeo, trimMat);
  bodice.position.y = 0.72;
  bodice.castShadow = true;
  group.add(bodice);

  // Ribbon / bow at waist
  const bowMat = makeCharMat(cfg.trim, 0.4);
  for (let side = -1; side <= 1; side += 2) {
    const bow = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.025, 0.02), bowMat);
    bow.position.set(side * 0.1, 0.56, -0.06);
    bow.rotation.y = side * 0.3;
    group.add(bow);
  }

  root.add(group);
  root.userData.slots.dress = group;
  root.userData.currentDress = dressId;
}

function equipHeadwear(root, headwearId) {
  if (root.userData.slots.headwear) {
    root.remove(root.userData.slots.headwear);
  }
  if (!headwearConfigs[headwearId] || headwearId === 'none') return;

  const cfg = headwearConfigs[headwearId];
  const mat = makeCharMat(cfg.color, 0.45);
  const head = root.userData.head;
  const headPos = head.position.clone();
  const group = new THREE.Group();

  if (headwearId === 'crown') {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 6, 12), mat);
    band.position.y = headPos.y + 0.06;
    band.rotation.x = Math.PI / 2;
    group.add(band);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const point = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 4), mat);
      point.position.set(Math.cos(a) * 0.14, headPos.y + 0.09, Math.sin(a) * 0.14);
      group.add(point);
    }
  } else if (headwearId === 'flower') {
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xff88aa, flatShading: true });
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.SphereGeometry(0.025, 5, 5), petalMat);
      petal.position.set(Math.cos(a) * 0.035, headPos.y + 0.05, Math.sin(a) * 0.035 + 0.1);
      petal.scale.set(1, 0.3, 0.5);
      group.add(petal);
    }
    const center = new THREE.Mesh(new THREE.SphereGeometry(0.015, 6, 6), new THREE.MeshStandardMaterial({ color: 0xffee44 }));
    center.position.set(0, headPos.y + 0.05, 0.1);
    group.add(center);
  } else if (headwearId === 'witch') {
    const brim = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.02, 6, 12), mat);
    brim.position.y = headPos.y + 0.08;
    brim.rotation.x = Math.PI / 2;
    group.add(brim);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.16, 8), mat);
    cone.position.y = headPos.y + 0.16;
    group.add(cone);
  } else if (headwearId === 'cat') {
    for (let side = -1; side <= 1; side += 2) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.07, 4), mat);
      ear.position.set(side * 0.07, headPos.y + 0.1, 0.06);
      ear.rotation.x = -0.2;
      ear.rotation.z = side * 0.2;
      group.add(ear);
    }
  }

  root.add(group);
  root.userData.slots.headwear = group;
  root.userData.currentHeadwear = headwearId;
}

function equipLegwear(root, legwearId) {
  if (root.userData.slots.legwear) {
    root.remove(root.userData.slots.legwear);
  }
  if (!legwearConfigs[legwearId] || legwearId === 'none') return;

  const cfg = legwearConfigs[legwearId];
  const mat = makeCharMat(cfg.color, 0.5, 1.2);
  const group = new THREE.Group();

  for (let side = -1; side <= 1; side += 2) {
    if (legwearId === 'stockings' || legwearId === 'thighhighs') {
      const h = legwearId === 'stockings' ? 0.25 : 0.35;
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, h, 6), mat);
      leg.position.set(side * 0.08, 0.15 + h / 2, 0);
      group.add(leg);
    } else {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.048, 0.35, 6), mat);
      leg.position.set(side * 0.08, 0.25, 0);
      group.add(leg);
    }
  }

  root.add(group);
  root.userData.slots.legwear = group;
  root.userData.currentLegwear = legwearId;
}

function equipFootwear(root, footwearId) {
  if (root.userData.slots.footwear) {
    root.remove(root.userData.slots.footwear);
  }
  if (!footwearConfigs[footwearId] || footwearId === 'none') return;

  const cfg = footwearConfigs[footwearId];
  const mat = makeCharMat(cfg.color, 0.5);
  const group = new THREE.Group();

  for (let side = -1; side <= 1; side += 2) {
    if (footwearId === 'sandals') {
      const sole = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.012, 0.06), mat);
      sole.position.set(side * 0.08, 0.02, 0.01);
      group.add(sole);
    } else if (footwearId === 'boots') {
      const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.1, 6), mat);
      boot.position.set(side * 0.08, 0.05, 0);
      group.add(boot);
    } else if (footwearId === 'heels') {
      const heel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.05, 6), mat);
      heel.position.set(side * 0.08, 0.04, 0.03);
      group.add(heel);
      const toe = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.012, 0.02), mat);
      toe.position.set(side * 0.08, 0.03, -0.02);
      group.add(toe);
    }
  }

  root.add(group);
  root.userData.slots.footwear = group;
  root.userData.currentFootwear = footwearId;
}

function equipExtra(root, extraId) {
  if (root.userData.slots.extra) {
    root.remove(root.userData.slots.extra);
  }
  if (!extraConfigs[extraId] || extraId === 'none') return;

  const cfg = extraConfigs[extraId];
  const mat = makeCharMat(cfg.color, 0.4);
  const group = new THREE.Group();

  if (extraId === 'halo') {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.015, 8, 16), mat);
    ring.position.y = 1.25;
    ring.rotation.x = Math.PI / 3;
    ring.material.transparent = true;
    ring.material.blending = THREE.AdditiveBlending;
    group.add(ring);
  } else if (extraId === 'wings') {
    const wingMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
    for (let side = -1; side <= 1; side += 2) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.02), wingMat);
      wing.position.set(side * 0.2, 0.85, 0);
      wing.rotation.z = side * 0.4;
      wing.rotation.y = side * 0.3;
      group.add(wing);
    }
  } else if (extraId === 'ribbon') {
    const ribbonMat = new THREE.MeshStandardMaterial({ color: 0xff4466 });
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.015, 6, 12), ribbonMat);
    band.position.y = 0.72;
    band.scale.set(1, 0.6, 0.3);
    group.add(band);
  } else if (extraId === 'tail') {
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xcc8844 });
    for (let i = 0; i < 5; i++) {
      const seg = new THREE.Mesh(new THREE.SphereGeometry(0.025 - i * 0.003, 6, 6), tailMat);
      seg.position.set(0, 0.45 - i * 0.04, 0.2 + i * 0.03);
      seg.scale.set(1, 1, 1 + i * 0.2);
      group.add(seg);
    }
  }

  root.add(group);
  root.userData.slots.extra = group;
  root.userData.currentExtra = extraId;
}

export function setWardrobe(root, slot, id) {
  switch (slot) {
    case 'dress': equipDress(root, id); break;
    case 'headwear': equipHeadwear(root, id); break;
    case 'legwear': equipLegwear(root, id); break;
    case 'footwear': equipFootwear(root, id); break;
    case 'extra': equipExtra(root, id); break;
  }
}

export function getCurrentOutfit(root) {
  return {
    dress: root.userData.currentDress || 'seafoam',
    headwear: root.userData.currentHeadwear || 'none',
    legwear: root.userData.currentLegwear || 'none',
    footwear: root.userData.currentFootwear || 'none',
    extra: root.userData.currentExtra || 'none',
  };
}
