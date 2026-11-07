/**
 * Next.js 16.0.0–16.4.0 carries critical advisories:
 * GHSA-2464-fhr4-w9xw, GHSA-p3m5-59mp-jv5r and GHSA-673q-mjm6-r5xr.
 *
 * The shared CI audit gate fails the pull request while any of them is
 * installed. This test fails earlier, at unit-test time, so a downgrade or a
 * stale lockfile cannot reintroduce them unnoticed.
 */

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const root = new URL('../', import.meta.url);
const pkg = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
const lock = JSON.parse(readFileSync(new URL('package-lock.json', root), 'utf8'));

/** Lowest patched release for the 16.x advisory range. */
const MINIMUM_PATCHED = [16, 4, 1];

function parseVersion(value) {
  const match = /(\d+)\.(\d+)\.(\d+)/.exec(String(value || ''));
  return match ? match.slice(1, 4).map(Number) : null;
}

function atLeast(version, minimum) {
  for (let index = 0; index < minimum.length; index += 1) {
    if (version[index] > minimum[index]) return true;
    if (version[index] < minimum[index]) return false;
  }
  return true;
}

test('package.json requires a patched Next.js', () => {
  const wanted = parseVersion(pkg.dependencies?.next || pkg.devDependencies?.next);
  assert.ok(wanted, 'next must be declared in package.json');
  assert.ok(
    atLeast(wanted, MINIMUM_PATCHED),
    `next must be >= 16.4.1, found ${pkg.dependencies?.next}`,
  );
});

test('the lockfile resolves a patched Next.js', () => {
  const locked = parseVersion(lock.packages?.['node_modules/next']?.version);
  assert.ok(locked, 'package-lock.json must contain node_modules/next');
  assert.ok(
    atLeast(locked, MINIMUM_PATCHED),
    `locked next must be >= 16.4.1, found ${lock.packages['node_modules/next'].version}`,
  );
});
