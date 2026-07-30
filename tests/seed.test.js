// Seed-based deterministic world tests
// Usage: node --experimental-vm-modules tests/seed.test.js
// or: npx vite build && node tests/seed.test.js

import { computeHeight } from '../src/world/terrain.js';

// Simple test runner
function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
  } catch (e) {
    console.error(`  ✗ ${name}: ${e.message}`);
    process.exitCode = 1;
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'assertion failed');
}

// ─── SEED CONSISTENCY TESTS ──────────────────────────────────────────────────

console.log('\nSeed determinism:');

const SEED = 12345;
const positions = [
  { x: 0, z: 0, label: 'origin' },
  { x: 50, z: -30, label: 'forest edge' },
  { x: -200, z: 150, label: 'far west' },
  { x: 300, z: -400, label: 'desert area' },
  { x: -500, z: -600, label: 'snow area' },
];

// Run 3 times to verify determinism
const runs = [];
for (let r = 0; r < 3; r++) {
  const heights = positions.map(p => computeHeight(p.x, p.z, SEED));
  runs.push(heights);
}

for (let r = 1; r < 3; r++) {
  for (let i = 0; i < positions.length; i++) {
    const p = positions[i];
    test(`height at ${p.label} (${p.x},${p.z}) run ${r}`, () => {
      assert(
        Math.abs(runs[0][i] - runs[r][i]) < 0.0001,
        `Expected ${runs[0][i]} but got ${runs[r][i]} at run ${r}`
      );
    });
  }
}

// ─── SANITY TESTS ─────────────────────────────────────────────────────────────

console.log('\nHeight sanity:');

for (const p of positions) {
  const h = computeHeight(p.x, p.z, SEED);
  test(`height at ${p.label} is finite`, () => {
    assert(Number.isFinite(h), `height ${h} is not finite`);
  });
  test(`height at ${p.label} in reasonable range`, () => {
    assert(h > -10 && h < 30, `height ${h} out of range [-10, 30]`);
  });
}

// ─── DIFFERENT SEEDS PRODUCE DIFFERENT RESULTS ───────────────────────────────

console.log('\nSeed variability:');

const h1 = computeHeight(10, 20, 100);
const h2 = computeHeight(10, 20, 200);
test('different seeds produce different heights', () => {
  assert(Math.abs(h1 - h2) > 0.001, 'seeds 100 and 200 gave same height');
});

// ─── SYMMETRY ─────────────────────────────────────────────────────────────────

console.log('\nPosition symmetry:');

// computeHeight should not be trivially symmetric (x vs -x should differ)
const hPos = computeHeight(10, 0, SEED);
const hNeg = computeHeight(-10, 0, SEED);
test('x and -x give different heights (no mirror symmetry)', () => {
  assert(Math.abs(hPos - hNeg) > 0.001, 'x and -x gave suspiciously similar heights');
});

// ─── CONTINUITY ───────────────────────────────────────────────────────────────

console.log('\nContinuity (nearby positions have similar heights):');

const baseX = 42, baseZ = 73;
const hBase = computeHeight(baseX, baseZ, SEED);
let maxDelta = 0;
for (let d = 1; d <= 5; d++) {
  const hNear = computeHeight(baseX + d * 0.1, baseZ + d * 0.1, SEED);
  maxDelta = Math.max(maxDelta, Math.abs(hBase - hNear));
}
test('nearby heights differ by < 5 units', () => {
  assert(maxDelta < 5, `max delta ${maxDelta} too large for nearby points`);
});

console.log('\nAll tests completed.\n');
