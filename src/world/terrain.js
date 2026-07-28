import * as THREE from 'three';
import { fbm, ridgedNoise, smoothNoise, hash } from './noise.js';

const T_SIZE = 120;
const T_RES = 1.2;
const HEIGHT_SCALE = 18;

export function computeHeight(wx, wz, seed) {
  const nx = wx * 0.025;
  const nz = wz * 0.025;

  let h = fbm(nx, nz, 5, seed);

  const ridges = ridgedNoise(nx * 0.5 + 50, nz * 0.5 + 50, 4, seed + 200);

  const mask = smoothstep(0.45, 0.7, h);
  h = h * (1 - mask) + (h + ridges * 0.3) * mask;

  const plat = smoothNoise(nx * 0.15 + 100, nz * 0.15 + 100, seed + 300);
  if (plat > 0.65) {
    h = Math.max(h, plat * 0.8);
  }

  return h * HEIGHT_SCALE - 2;
}

export function generateHeightMap(seed, cx = 0, cz = 0) {
  const heights = [];
  const originX = cx * T_SIZE;
  const originZ = cz * T_SIZE;
  for (let z = 0; z < T_SIZE; z += T_RES) {
    const row = [];
    for (let x = 0; x < T_SIZE; x += T_RES) {
      const wx = originX + x - T_SIZE / 2;
      const wz = originZ + z - T_SIZE / 2;
      row.push(computeHeight(wx, wz, seed));
    }
    heights.push(row);
  }
  return heights;
}

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function biomesForPosition(x, z, seed) {
  const nx = x * 0.015;
  const nz = z * 0.015;
  const moisture = fbm(nx + 30, nz + 30, 3, seed + 500);
  const temp = fbm(nx + 60, nz + 60, 3, seed + 600);

  if (temp < 0.3) return 'snow';
  if (moisture < 0.3) return 'desert';
  if (moisture > 0.6 && temp > 0.5) return 'forest';
  return 'grassland';
}

export function buildTerrain(heights, seed, cx = 0, cz = 0) {
  const cols = heights.length;
  const rows = heights[0].length;
  const vertices = [];
  const colors = [];
  const indices = [];
  const uvs = [];
  const normals = [];
  const offsetX = cx * T_SIZE;
  const offsetZ = cz * T_SIZE;

  // Biome colors (painterly palette)
  const biomeColors = {
    grassland: [0.45, 0.7, 0.35],
    forest: [0.3, 0.6, 0.25],
    desert: [0.8, 0.7, 0.4],
    snow: [0.9, 0.92, 0.95],
  };

  const biomeAccents = {
    grassland: [0.55, 0.8, 0.4],
    forest: [0.4, 0.7, 0.3],
    desert: [0.85, 0.75, 0.45],
    snow: [0.95, 0.96, 1.0],
  };

  for (let z = 0; z < cols; z++) {
    for (let x = 0; x < rows; x++) {
      const wx = offsetX - T_SIZE / 2 + x * T_RES;
      const wz = offsetZ - T_SIZE / 2 + z * T_RES;
      const h = heights[z][x];

      vertices.push(wx, h, wz);

      // Biome
      const biome = biomesForPosition(wx, wz, seed);
      let base = biomeColors[biome];
      const accent = biomeAccents[biome];

      // Height-based variation
      const hNorm = (h + 2) / HEIGHT_SCALE;
      if (hNorm > 0.6) {
        base = base.map((c, i) => c + (accent[i] - c) * (hNorm - 0.6) * 2);
      } else if (hNorm < 0.15) {
        // Low = darker
        base = base.map(c => c * 0.7);
      }

      // Slight random variation
      const v = hash(wx * 0.1, wz * 0.1, seed + 999) * 0.06 - 0.03;
      colors.push(base[0] + v, base[1] + v, base[2] + v);

      uvs.push(x / rows, z / cols);
    }
  }

  // Indices
  for (let z = 0; z < cols - 1; z++) {
    for (let x = 0; x < rows - 1; x++) {
      const a = z * rows + x;
      const b = z * rows + x + 1;
      const c = (z + 1) * rows + x;
      const d = (z + 1) * rows + x + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  // Compute normals
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0.5, 0.7, 0.4) },
      uShadowColor: { value: new THREE.Color(0.3, 0.4, 0.25) },
      uHighlightColor: { value: new THREE.Color(0.7, 0.9, 0.6) },
      uRimPower: { value: 2.0 },
      uRimColor: { value: new THREE.Color(0.7, 0.85, 0.6) },
      uAmbientLight: { value: new THREE.Color(0.35, 0.35, 0.4) },
      uMainLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
      uMainLightColor: { value: new THREE.Color(1.0, 0.9, 0.8) },
      uUseHeightColor: { value: true },
      uLowColor: { value: new THREE.Color(0.35, 0.5, 0.3) },
      uHighColor: { value: new THREE.Color(0.7, 0.8, 0.6) },
    },
    vertexShader: `
      attribute vec3 color;
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying float vHeight;
      void main() {
        vColor = color;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPos.xyz;
        vHeight = position.y;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uShadowColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform vec3 uAmbientLight;
      uniform vec3 uMainLightDir;
      uniform vec3 uMainLightColor;

      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying float vHeight;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        vec3 lightDir = normalize(uMainLightDir);

        float NdotL = dot(normal, lightDir);
        float lightBand = smoothstep(0.1, 0.45, NdotL);

        vec3 base = vColor;
        vec3 shadowed = base * uShadowColor;
        vec3 lit = base;

        vec3 ambient = base * uAmbientLight;
        vec3 diffuse = mix(shadowed, lit, lightBand);
        diffuse = mix(diffuse, lit * 1.15, smoothstep(0.6, 1.0, NdotL) * 0.25);

        vec3 finalColor = ambient + diffuse * uMainLightColor;

        // Rim light
        float rim = 1.0 - max(0.0, dot(normal, viewDir));
        rim = pow(rim, uRimPower);
        finalColor += uRimColor * rim * 0.4;

        // Fog
        float depth = length(vViewPosition);
        float fog = smoothstep(30.0, 80.0, depth);
        finalColor = mix(finalColor, vec3(0.55, 0.65, 0.7), fog * 0.3);

        finalColor = pow(finalColor, vec3(0.88));
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  return mesh;
}

export function getTerrainSize() {
  return T_SIZE;
}

export function getHeightAt(wx, wz, seed) {
  return computeHeight(wx, wz, seed);
}
