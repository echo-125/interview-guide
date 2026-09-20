import assert from 'node:assert/strict';
import test from 'node:test';

import { resolveAiStageAfterParse } from './builderAiStage.ts';

test('Case 1：无持久化 + LLM 成功 → done', () => {
  assert.equal(resolveAiStageAfterParse(false, true), 'done');
});

test('Case 2：无持久化 + LLM 失败/超时 → failed', () => {
  assert.equal(resolveAiStageAfterParse(false, false), 'failed');
});

test('Case 3：有持久化恢复 → LLM 不覆盖工作区，状态必须结束（done）', () => {
  assert.equal(resolveAiStageAfterParse(true, true), 'done');
  assert.equal(resolveAiStageAfterParse(true, false), 'done');
});

test('返回值只可能是 done/failed（不出现新的中间状态）', () => {
  const valid = new Set(['done', 'failed']);
  for (const r of [true, false]) {
    for (const s of [true, false]) {
      assert.ok(valid.has(resolveAiStageAfterParse(r, s)));
    }
  }
});