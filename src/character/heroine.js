import * as THREE from 'three';

// ─── SKIN MATERIAL ───────────────────────────────────────────────────────────

const SKIN_COLOR = 0xffd4c0;
const SKIN_COLOR2 = 0xfac8b4;

function makeSkinMat(baseColor) {
  return new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: 0.4,
    metalness: 0,
  });
}

// ─── HEROINE ─────────────────────────────────────────────────────────────────

export function buildHeroine() {
  const root = new THREE.Group();
  root.position.set(0, 0, 0);

  const skin = makeSkinMat(SKIN_COLOR);
  const skin2 = makeSkinMat(SKIN_COLOR2);

  // Store default skin colors for reset
  const defaultColors = { skin: SKIN_COLOR, skin2: SKIN_COLOR2 };
  root.userData._defaultColors = defaultColors;

  const parts = {};

  // Legs
  const legs = [];
  for (let side = -1; side <= 1; side += 2) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.055, 0.42, 14), skin2);
    leg.position.set(side * 0.08, 0.21, 0);
    leg.castShadow = true;
    root.add(leg);
    legs.push(leg);
  }
  parts.legs = legs;

  // Body (trapezoid)
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.18, 0.44, 4), skin);
  body.position.y = 0.64;
  body.scale.z = 0.55;
  body.castShadow = true;
  root.add(body);
  root.userData.torso = body;
  parts.body = body;

  // Breasts
  const breasts = [];
  for (let side = -1; side <= 1; side += 2) {
    const breast = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.08, 8), skin);
    breast.position.set(side * 0.06, 0.77, 0.10);
    breast.rotation.x = Math.PI / 2;
    breast.castShadow = true;
    root.add(breast);
    breasts.push(breast);
  }
  parts.breasts = breasts;

  // Neck
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.06, 10), makeSkinMat(SKIN_COLOR));
  neck.position.y = 0.88;
  neck.castShadow = true;
  root.add(neck);
  parts.neck = neck;

  // Head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 20), makeSkinMat(SKIN_COLOR));
  head.position.y = 1.00;
  head.scale.set(1, 1.05, 0.88);
  head.castShadow = true;
  root.add(head);
  root.userData.head = head;
  parts.head = head;

  // Arms
  const arms = [];
  for (let side = -1; side <= 1; side += 2) {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.032, 0.28, 10), skin2);
    arm.position.set(side * 0.150, 0.73, 0.01);
    arm.rotation.z = side * 0.260;
    arm.rotation.x = -0.06;
    arm.castShadow = true;
    root.add(arm);
    arms.push(arm);
  }
  parts.arms = arms;

  // Hair — short bob (slanted hemisphere)
  const hairMat = new THREE.MeshStandardMaterial({ color: 0xff88aa, roughness: 0.5 });

  const bob = new THREE.Mesh(new THREE.SphereGeometry(0.15, 20, 20), hairMat);
  bob.position.set(0, 1.07, -0.04);
  bob.scale.set(1.05, 0.85, 0.90);
  bob.rotation.x = -0.08;
  bob.castShadow = true;
  root.add(bob);
  parts.hairMain = bob;

  // Eyes
  const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const pupilMat = new THREE.MeshPhysicalMaterial({ color: 0x445577, roughness: 0.1, metalness: 0, ior: 1.4, transmission: 0.3 });
  for (let side = -1; side <= 1; side += 2) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), whiteMat);
    eye.position.set(side * 0.055, 1.02, 0.12);
    eye.scale.set(1, 0.9, 0.18);
    root.add(eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.025, 10, 10), pupilMat);
    pupil.position.set(side * 0.055, 1.02, 0.13);
    pupil.scale.set(1, 0.9, 0.08);
    root.add(pupil);
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    hl.position.set(side * 0.065, 1.04, 0.135);
    hl.scale.set(1, 0.9, 0.08);
    root.add(hl);
  }

  // Eyebrows
  for (let side = -1; side <= 1; side += 2) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.005, 0.01), new THREE.MeshBasicMaterial({ color: 0x667788 }));
    b.position.set(side * 0.055, 1.04, 0.125);
    b.rotation.z = side * 0.08;
    root.add(b);
  }

  // Mouth
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.015, 0.003, 4, 8), new THREE.MeshBasicMaterial({ color: 0xcc8899 }));
  mouth.position.set(0, 0.96, 0.125);
  mouth.rotation.x = Math.PI / 2;
  mouth.rotation.z = 0.08;
  mouth.scale.set(1, 0.35, 1);
  root.add(mouth);

  root.userData.parts = parts;
  root.userData.currentOutfit = { dress: null, legwear: null, armwear: null, headwear: null };
  return root;
}

// ─── BODY PART COLOR ────────────────────────────────────────────────────────

export function setBodyPartColor(root, slot, hexColor) {
  const parts = root.userData.parts;
  if (!parts) return;
  const c = new THREE.Color(hexColor);
  switch (slot) {
    case 'dress':
      if (parts.body) {
        parts.body.material = parts.body.material.clone();
        parts.body.material.color.set(c);
      }
      parts.breasts.forEach(b => {
        b.material = b.material.clone();
        b.material.color.set(c);
      });
      break;
    case 'legwear':
      parts.legs.forEach(l => {
        l.material = l.material.clone();
        l.material.color.set(c);
      });
      break;
    case 'armwear':
      parts.arms.forEach(a => {
        a.material = a.material.clone();
        a.material.color.set(c);
      });
      break;
    case 'headwear':
      if (parts.hairMain) parts.hairMain.material.color.set(c);
      break;
  }
}

export function clearBodyPartColor(root, slot) {
  const def = root.userData._defaultColors;
  if (!def) return;
  switch (slot) {
    case 'dress':
      setBodyPartColor(root, 'dress', def.skin);
      break;
    case 'legwear':
      parts.legs.forEach(l => { l.material = makeSkinMat(def.skin2); });
      break;
    case 'armwear':
      parts.arms.forEach(a => { a.material = makeSkinMat(def.skin2); });
      break;
    case 'headwear':
      setBodyPartColor(root, 'headwear', 0xff88aa);
      break;
  }
}

export function setWardrobe(root, slot, id) {
  // Clothing items are applied via setBodyPartColor; this tracks the selection
  root.userData.currentOutfit[slot] = id;
}

export function getCurrentOutfit(root) {
  return root.userData.currentOutfit || { dress: null, legwear: null, armwear: null, headwear: null };
}

// ─── CLOTHING CATALOG ───────────────────────────────────────────────────────

const COLORS = {
  red: 0xcc3333, orange: 0xdd7733, yellow: 0xddbb33, green: 0x44aa44,
  teal: 0x339999, blue: 0x3366cc, purple: 0x8844aa, pink: 0xdd6699,
  white: 0xeeeeee, black: 0x333333, gray: 0x999999,
};

export const CLOTHING_CATALOG = [
  // Dresses
  { id: 'dress_red', slot: 'dress', color: COLORS.red, name: 'Red Dress' },
  { id: 'dress_orange', slot: 'dress', color: COLORS.orange, name: 'Orange Dress' },
  { id: 'dress_yellow', slot: 'dress', color: COLORS.yellow, name: 'Yellow Dress' },
  { id: 'dress_green', slot: 'dress', color: COLORS.green, name: 'Green Dress' },
  { id: 'dress_teal', slot: 'dress', color: COLORS.teal, name: 'Teal Dress' },
  { id: 'dress_blue', slot: 'dress', color: COLORS.blue, name: 'Blue Dress' },
  { id: 'dress_purple', slot: 'dress', color: COLORS.purple, name: 'Purple Dress' },
  { id: 'dress_pink', slot: 'dress', color: COLORS.pink, name: 'Pink Dress' },
  { id: 'dress_white', slot: 'dress', color: COLORS.white, name: 'White Dress' },
  { id: 'dress_black', slot: 'dress', color: COLORS.black, name: 'Black Dress' },
  { id: 'dress_gray', slot: 'dress', color: COLORS.gray, name: 'Gray Dress' },
  // Legwear
  { id: 'legs_red', slot: 'legwear', color: COLORS.red, name: 'Red Legwear' },
  { id: 'legs_orange', slot: 'legwear', color: COLORS.orange, name: 'Orange Legwear' },
  { id: 'legs_yellow', slot: 'legwear', color: COLORS.yellow, name: 'Yellow Legwear' },
  { id: 'legs_green', slot: 'legwear', color: COLORS.green, name: 'Green Legwear' },
  { id: 'legs_teal', slot: 'legwear', color: COLORS.teal, name: 'Teal Legwear' },
  { id: 'legs_blue', slot: 'legwear', color: COLORS.blue, name: 'Blue Legwear' },
  { id: 'legs_purple', slot: 'legwear', color: COLORS.purple, name: 'Purple Legwear' },
  { id: 'legs_pink', slot: 'legwear', color: COLORS.pink, name: 'Pink Legwear' },
  { id: 'legs_white', slot: 'legwear', color: COLORS.white, name: 'White Legwear' },
  { id: 'legs_black', slot: 'legwear', color: COLORS.black, name: 'Black Legwear' },
  // Armwear
  { id: 'arms_red', slot: 'armwear', color: COLORS.red, name: 'Red Armwear' },
  { id: 'arms_orange', slot: 'armwear', color: COLORS.orange, name: 'Orange Armwear' },
  { id: 'arms_yellow', slot: 'armwear', color: COLORS.yellow, name: 'Yellow Armwear' },
  { id: 'arms_green', slot: 'armwear', color: COLORS.green, name: 'Green Armwear' },
  { id: 'arms_teal', slot: 'armwear', color: COLORS.teal, name: 'Teal Armwear' },
  { id: 'arms_blue', slot: 'armwear', color: COLORS.blue, name: 'Blue Armwear' },
  { id: 'arms_purple', slot: 'armwear', color: COLORS.purple, name: 'Purple Armwear' },
  { id: 'arms_pink', slot: 'armwear', color: COLORS.pink, name: 'Pink Armwear' },
  { id: 'arms_white', slot: 'armwear', color: COLORS.white, name: 'White Armwear' },
  { id: 'arms_black', slot: 'armwear', color: COLORS.black, name: 'Black Armwear' },
  // Hair dyes
  { id: 'hair_red', slot: 'headwear', color: COLORS.red, name: 'Red Hair' },
  { id: 'hair_orange', slot: 'headwear', color: COLORS.orange, name: 'Orange Hair' },
  { id: 'hair_yellow', slot: 'headwear', color: COLORS.yellow, name: 'Yellow Hair' },
  { id: 'hair_green', slot: 'headwear', color: COLORS.green, name: 'Green Hair' },
  { id: 'hair_teal', slot: 'headwear', color: COLORS.teal, name: 'Teal Hair' },
  { id: 'hair_blue', slot: 'headwear', color: COLORS.blue, name: 'Blue Hair' },
  { id: 'hair_purple', slot: 'headwear', color: COLORS.purple, name: 'Purple Hair' },
  { id: 'hair_pink', slot: 'headwear', color: COLORS.pink, name: 'Pink Hair' },
  { id: 'hair_white', slot: 'headwear', color: COLORS.white, name: 'White Hair' },
  { id: 'hair_black', slot: 'headwear', color: COLORS.black, name: 'Black Hair' },
];

export function getClothingItem(id) {
  return CLOTHING_CATALOG.find(c => c.id === id) || null;
}
