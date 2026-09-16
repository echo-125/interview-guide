import assert from 'node:assert/strict';
import test from 'node:test';

import { afterSegments, beforeSegments, charDiff } from './diff.ts';

const join = (segments: ReturnType<typeof charDiff>) => segments.map(s => s.text).join('');

test('内容相同时只产生一个 same 分段', () => {
  const segments = charDiff('负责订单系统', '负责订单系统');
  assert.equal(segments.length, 1);
  assert.equal(segments[0].type, 'same');
});

test('纯新增 / 纯删除 / 双空', () => {
  assert.deepEqual(charDiff('', '新增'), [{ type: 'add', text: '新增' }]);
  assert.deepEqual(charDiff('删除', ''), [{ type: 'del', text: '删除' }]);
  assert.deepEqual(charDiff('', ''), []);
});

test('公共前后缀被裁剪，只 diff 中间的变化部分', () => {
  const segments = charDiff('负责订单系统开发', '负责订单系统重构');
  const changed = segments.filter(s => s.type !== 'same');
  assert.deepEqual(changed.map(s => s.type), ['del', 'add']);
  assert.deepEqual(changed.map(s => s.text), ['开发', '重构']);
});

test('before/after 分段可分别还原两侧原文', () => {
  const before = '使用 Redis 缓存热点数据';
  const after = '使用 Redis 集群缓存热点数据，命中率 98%';
  const segments = charDiff(before, after);
  assert.equal(join(beforeSegments(segments)), before);
  assert.equal(join(afterSegments(segments)), after);
});

test('超长差异退化为整段替换，保证性能上界', () => {
  // 前缀 P 相同，中间 1300 字符完全不同 —— 超过 MAX_DIFF_CHARS 后不再跑 LCS
  const before = `P${'A'.repeat(1300)}`;
  const after = `P${'B'.repeat(1300)}`;
  const segments = charDiff(before, after);
  assert.deepEqual(segments.map(s => s.type), ['same', 'del', 'add']);
  assert.equal(segments[1].text.length, 1300);
  assert.equal(join(afterSegments(segments)), after);
});
