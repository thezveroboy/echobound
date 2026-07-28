import * as THREE from 'three';

// Procedural monster generator with power-scaling appearance law:
// SMALL = cute, BIG = terrifying

const SHARED = {
  ambient: new THREE.Color(0.35, 0.35, 0.4),
  lightDir: new THREE.Vector3(0.5, 0.8, 0.3).normalize(),
  lightColor: new THREE.Color(1.0, 0.9, 0.8),
};

function makeMonsterMat(color, shadowMult = 0.4, rimMult = 1.5, rimPow = 4.0) {
  const c = new THREE.Color(color);
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: c },
      uShadowColor: { value: c.clone().multiplyScalar(shadowMult) },
      uRimColor: { value: c.clone().multiplyScalar(rimMult) },
      uRimPower: { value: rimPow },
      uAmbientLight: { value: SHARED.ambient },
      uMainLightDir: { value: SHARED.lightDir },
      uMainLightColor: { value: SHARED.lightColor },
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
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vViewPosition);
        float ndotl = dot(n, normalize(uMainLightDir));
        float band = smoothstep(0.05, 0.4, ndotl);
        vec3 final = uColor * uAmbientLight + mix(uColor * uShadowColor, uColor, band) * uMainLightColor;
        float rim = 1.0 - max(0.0, dot(n, v));
        rim = pow(rim, uRimPower);
        final += uRimColor * rim * 0.4;
        float outline = 1.0 - max(0.0, dot(n, v));
        outline = smoothstep(0.7, 0.78, outline);
        final *= (1.0 - outline * 0.55);
        final = pow(final, vec3(0.9));
        gl_FragColor = vec4(final, 1.0);
      }
    `,
  });
}

// Monster archetypes
const ARCHETYPES = [
  { name: 'Blob', bodyType: 'sphere', legs: 0, arms: 0, aggressive: 0.3 },
  { name: 'Sprout', bodyType: 'capsule', legs: 2, arms: 0, aggressive: 0.4 },
  { name: 'Imp', bodyType: 'humanoid', legs: 2, arms: 2, aggressive: 0.6 },
  { name: 'Brute', bodyType: 'humanoid', legs: 2, arms: 2, aggressive: 0.8 },
  { name: 'Titan', bodyType: 'giant', legs: 2, arms: 2, aggressive: 1.0 },
];

// Power tiers: determines SIZE, features, visual scariness
function getTierConfig(tier) {
  // tier 0-4, where 0 = cutest, 4 = most terrifying
  const baseScale = 0.3 + tier * 0.4;
  const isCute = tier <= 1;
  const isTerrifying = tier >= 3;

  return {
    scale: baseScale,
    color: isCute ? 0x88ccaa : isTerrifying ? 0x441122 : 0x886644,
    eyeSize: isCute ? 0.12 : isTerrifying ? 0.04 : 0.06,
    eyeColor: isCute ? 0x334466 : isTerrifying ? 0xff2200 : 0xff8844,
    hornLength: isCute ? 0 : 0.08 + tier * 0.06,
    teethSize: isCute ? 0 : 0.02 + tier * 0.015,
    bodyRoughness: isCute ? 0 : 0.3 + tier * 0.15,
    spikes: isTerrifying ? 2 + tier : 0,
    glowColor: isTerrifying ? 0xff4400 : isCute ? 0x88ddff : 0x000000,
    glowIntensity: isTerrifying ? 0.6 : isCute ? 0.2 : 0,
  };
}

export function generateMonster(tier, seed) {
  // tier: 0 (cute miniblin) to 4 (boss nightmare titan)
  const archetype = ARCHETYPES[tier] || ARCHETYPES[Math.min(tier, 4)];
  const config = getTierConfig(tier);

  const root = new THREE.Group();
  root.userData = {
    tier,
    health: 20 + tier * 30,
    maxHealth: 20 + tier * 30,
    attackPower: 5 + tier * 8,
    speed: 3 - tier * 0.3,
    aggressive: archetype.aggressive,
    isBoss: tier >= 4,
    name: archetype.name,
    hitFlash: 0,
  };

  // Use standard materials for reliability — body must be clearly visible
  const bodyStdMat = new THREE.MeshStandardMaterial({
    color: config.color,
    roughness: 0.5,
    metalness: 0.1,
    flatShading: true,
    emissive: config.glowIntensity > 0 ? new THREE.Color(config.glowColor).multiplyScalar(0.2) : new THREE.Color(0),
  });
  const bodyStdMat2 = new THREE.MeshStandardMaterial({
    color: 0x885544,
    roughness: 0.6,
    metalness: 0.1,
    flatShading: true,
  });

  // Legs (bottom at y=0 so feet touch ground)
  const legHeight = 0.25 + tier * 0.06;
  const legY = legHeight / 2;
  if (archetype.legs > 0) {
    const legMat = makeMonsterMat(config.color * 0.8 + 0x111111, 0.4, 1.0);
    for (let side = -1; side <= 1; side += 2) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04 + tier * 0.015, 0.05 + tier * 0.02, legHeight, 6),
        bodyStdMat2
      );
      leg.position.set(side * 0.12, legY, 0);
      leg.castShadow = true;
      root.add(leg);
      root.userData[`leg${side > 0 ? 'R' : 'L'}`] = leg;
    }
  }

  // Body
  const torsoHeight = 0.35 + tier * 0.08;
  if (archetype.bodyType === 'sphere' || tier <= 1) {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.35 + tier * 0.04, 8, 8), bodyStdMat);
    body.position.y = legY + legHeight / 2 + 0.15;
    body.scale.y = 0.85;
    body.castShadow = true;
    root.add(body);
    root.userData.bodyMesh = body;
  } else {
    const torsoWidth = 0.25 + tier * 0.08;
    // Debug: log body position values
    console.log(`Monster tier ${tier}: legY=${legY}, legH=${legHeight}, torsoH=${torsoHeight}, torso.y=${legY + legHeight / 2 + torsoHeight / 2}`);
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(torsoWidth * 1.0, torsoHeight, torsoWidth * 0.6),
      bodyStdMat
    );
    torso.position.y = legY + legHeight / 2 + torsoHeight / 2;
    torso.castShadow = true;
    root.add(torso);
    root.userData.bodyMesh = torso;

    const headSize = 0.18 + tier * 0.04;
    const head = new THREE.Mesh(new THREE.SphereGeometry(headSize, 8, 8), bodyStdMat2);
    head.position.y = legY + legHeight / 2 + torsoHeight + headSize * 0.6;
    head.castShadow = true;
    root.add(head);
    root.userData.headMesh = head;

    if (archetype.arms > 0) {
      const armLen = 0.2 + tier * 0.06;
      for (let side = -1; side <= 1; side += 2) {
        const arm = new THREE.Mesh(
          new THREE.CylinderGeometry(0.03 + tier * 0.01, 0.04 + tier * 0.015, armLen, 5),
          bodyStdMat2
        );
        arm.position.set(
          side * (torsoWidth * 0.6),
          legY + legHeight / 2 + torsoHeight * 0.7,
          0
        );
        arm.rotation.z = side * 0.25;
        arm.castShadow = true;
        root.add(arm);
        root.userData[`arm${side > 0 ? 'R' : 'L'}`] = arm;

        if (tier >= 3) {
          const claw = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.05, 4), bodyStdMat2);
          claw.position.set(
            side * (torsoWidth * 0.6),
            legY + legHeight / 2 + torsoHeight * 0.7 - armLen / 2,
            0
          );
          claw.rotation.z = side * 0.5;
          root.add(claw);
        }
      }
    }
  }

  // Eyes — positioned based on body/head
  const eyeMat = new THREE.MeshBasicMaterial({ color: config.eyeColor });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const sphereBodyRadius = 0.35 + tier * 0.04;
  const sphereBodyY = legY + legHeight / 2 + 0.15;
  const headSize = 0.18 + tier * 0.04;
  const headY = legY + legHeight / 2 + torsoHeight + headSize * 0.6;

  const bodyZ = (archetype.bodyType === 'sphere' || tier <= 1)
    ? sphereBodyRadius * 0.9
    : headSize * 0.85;

  if (tier <= 1) {
    for (let side = -1; side <= 1; side += 2) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(config.eyeSize, 8, 8), eyeMat);
      eye.position.set(side * 0.12, sphereBodyY + 0.05, bodyZ);
      eye.scale.set(1, 1.1, 0.3);
      root.add(eye);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(config.eyeSize * 0.5, 6, 6), pupilMat);
      pupil.position.set(side * 0.12, sphereBodyY + 0.05, bodyZ + 0.02);
      pupil.scale.set(1, 1.1, 0.3);
      root.add(pupil);

      const hl = new THREE.Mesh(new THREE.SphereGeometry(config.eyeSize * 0.2, 4, 4), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      hl.position.set(side * 0.14, sphereBodyY + 0.07, bodyZ + 0.04);
      hl.scale.set(1, 1.1, 0.3);
      root.add(hl);
    }
  } else {
    for (let side = -1; side <= 1; side += 2) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(config.eyeSize, 6, 6), eyeMat);
      eye.position.set(side * 0.08, headY, bodyZ);
      root.add(eye);

      if (tier >= 3) {
        const brow = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.015, 0.02), new THREE.MeshBasicMaterial({ color: 0x222222 }));
        brow.position.set(side * 0.08, headY + 0.04, bodyZ);
        brow.rotation.z = -side * 0.3;
        root.add(brow);
      }
    }
  }

  // Horns (terrifying monsters)
  if (config.hornLength > 0) {
    const hornMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
    for (let side = -1; side <= 1; side += 2) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.03, config.hornLength, 4), hornMat);
      const hPos = tier <= 1
        ? new THREE.Vector3(side * 0.15, sphereBodyY + sphereBodyRadius * 0.85, sphereBodyRadius * 0.6)
        : new THREE.Vector3(side * 0.1, headY + headSize * 0.65, headSize * 0.7);
      horn.position.copy(hPos);
      horn.rotation.z = side * 0.2;
      horn.rotation.x = -0.3;
      root.add(horn);
    }
  }

  // Spikes (terrifying)
  const bodyCenterY = legY + legHeight / 2 + torsoHeight / 2;
  if (config.spikes > 0) {
    const spikeMat = new THREE.MeshStandardMaterial({ color: 0x332222, roughness: 0.8 });
    for (let i = 0; i < config.spikes * 3; i++) {
      const angle = (i / (config.spikes * 3)) * Math.PI * 2;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.1 + tier * 0.03, 4), spikeMat);
      spike.position.set(
        Math.cos(angle) * 0.4,
        bodyCenterY + Math.sin(i * 2) * 0.15,
        Math.sin(angle) * 0.4
      );
      spike.rotation.x = -Math.atan2(spike.position.x, spike.position.z) + Math.PI / 2;
      spike.rotation.z = angle;
      root.add(spike);
    }
  }

  // Glow effect (terrifying monsters)
  if (config.glowIntensity > 0) {
    const glowMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(config.glowColor) },
        uIntensity: { value: config.glowIntensity },
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
        uniform vec3 uColor; uniform float uIntensity; uniform float uTime;
        varying vec3 vNormal; varying vec3 vViewPosition;
        void main() {
          vec3 n = normalize(vNormal);
          vec3 v = normalize(vViewPosition);
          float rim = 1.0 - max(0.0, dot(n, v));
          rim = pow(rim, 3.0);
          float pulse = 0.7 + 0.3 * sin(uTime * 3.0);
          gl_FragColor = vec4(uColor * rim * uIntensity * pulse, rim * uIntensity * 0.6);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
    });

    // Add glow aura
    const aura = new THREE.Mesh(new THREE.SphereGeometry(0.4 + tier * 0.15, 10, 10), glowMat);
    aura.position.y = bodyCenterY;
    root.add(aura);
    root.userData.glowMat = glowMat;
    root.userData.aura = aura;
  }

  // Scale the whole monster
  root.scale.set(config.scale, config.scale, config.scale);
  root.userData.baseScale = config.scale;

  return root;
}

export function updateMonsterAnim(monster, time, isMoving, isAttacking) {
  const data = monster.userData;
  if (!data) return;

  const t = time;

  // Idle breathing — offset from base position (don't overwrite!)
  const breath = Math.sin(t * 2) * 0.02;
  if (data.bodyMesh) {
    if (data.bodyBaseY === undefined) data.bodyBaseY = data.bodyMesh.position.y;
    data.bodyMesh.position.y = data.bodyBaseY + breath;
  }

  // Glow pulse
  if (data.glowMat) {
    data.glowMat.uniforms.uTime.value = t;
  }

  // Leg animation
  if (isMoving) {
    for (const side of ['L', 'R']) {
      const leg = data[`leg${side}`];
      if (leg) {
        leg.rotation.x = Math.sin(t * 8 + (side === 'L' ? 0 : Math.PI)) * 0.3;
      }
    }
    if (data.armL && data.armR) {
      data.armL.rotation.x = Math.sin(t * 8) * 0.2;
      data.armR.rotation.x = Math.sin(t * 8 + Math.PI) * 0.2;
    }
  }

  // Hit flash
  if (data.hitFlash > 0) {
    data.hitFlash -= 0.05;
    if (data.bodyMesh) {
      const intensity = Math.max(0, data.hitFlash);
      data.bodyMesh.material.emissive.setHSL(0, 1, intensity * 0.5);
      data.bodyMesh.material.emissiveIntensity = intensity;
    }
  }
}
