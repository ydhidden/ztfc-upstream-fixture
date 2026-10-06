import { test } from 'node:test';
import assert from 'node:assert/strict';
import { range } from '../src/range.js';

test('empty when start is after end', () => {
  assert.deepEqual(range(3, 1), []);
});

test('includes the end value (regression for #1)', () => {
  assert.deepEqual(range(1, 3), [1, 2, 3]);
  assert.deepEqual(range(2, 2), [2]);
});
