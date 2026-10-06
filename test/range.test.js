import { test } from 'node:test';
import assert from 'node:assert/strict';
import { range } from '../src/range.js';

test('empty when start is after end', () => {
  assert.deepEqual(range(3, 1), []);
});
