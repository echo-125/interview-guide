import assert from 'node:assert/strict';
import test from 'node:test';

import { applyRewrites, collectRewritePairs } from './rewriteApply.ts';

test('基本替换，未涉及的原文原样保留', () => {
  const result = applyRewrites('第一段。第二段。', [
    { quote: '第二段', rewrite: '第二段（已优化）' },
  ]);
  assert.equal(result.text, '第一段。第二段（已优化）。');
  assert.equal(result.applied.length, 1);
  assert.equal(result.skipped.length, 0);
});

test('长句优先占位，短句不会抢走长句所在区间', () => {
  const result = applyRewrites('负责订单系统开发', [
    { quote: '订单系统', rewrite: '【短】' },
    { quote: '负责订单系统开发', rewrite: '【长】' },
  ]);
  assert.equal(result.text, '【长】');
  assert.equal(result.skipped.length, 1);
  assert.equal(result.skipped[0].quote, '订单系统');
  assert.equal(result.skipped[0].reason, 'conflict');
});

test('改写结果不会被后续规则二次替换', () => {
  // 旧实现用 split().join() 反复扫描「替换之后」的文本：
  // 若某条 rewrite 恰好包含另一条 quote，就会被再次改写。
  const result = applyRewrites('原始描述', [
    { quote: '原始描述', rewrite: '优化后的描述' },
    { quote: '描述', rewrite: '【被误改】' },
  ]);
  assert.equal(result.text, '优化后的描述');
});

test('空白差异回退匹配：quote 与原文只差空白也能命中', () => {
  const result = applyRewrites('负责\n订单系统 开发', [
    { quote: '负责 订单系统 开发', rewrite: '负责订单系统开发' },
  ]);
  assert.equal(result.applied.length, 1);
  assert.equal(result.text, '负责订单系统开发');
});

test('同一原句的多处出现都会被替换', () => {
  const result = applyRewrites('a-目标-b-目标', [{ quote: '目标', rewrite: 'X' }]);
  assert.equal(result.text, 'a-X-b-X');
});

test('匹配不到时给出 not-found 原因，不静默丢弃', () => {
  const result = applyRewrites('原文', [{ quote: '原文中不存在', rewrite: 'X' }]);
  assert.equal(result.applied.length, 0);
  assert.equal(result.skipped.length, 1);
  assert.equal(result.skipped[0].reason, 'not-found');
  assert.equal(result.text, '原文');
});

test('空 quote 或空 rewrite 直接跳过，不产生替换', () => {
  const result = applyRewrites('原文', [
    { quote: '', rewrite: 'X' },
    { quote: '原文', rewrite: '' },
  ]);
  assert.equal(result.text, '原文');
  assert.equal(result.skipped.length, 2);
});

test('collectRewritePairs 按 quote 去重，逐条体检优先于改进建议', () => {
  const pairs = collectRewritePairs({
    bulletAudits: [{ quote: '同一句', rewrite: '来自体检' }],
    suggestions: [
      { quote: '同一句', rewrite: '来自建议' },
      { quote: '另一句', rewrite: '改写二' },
    ],
  });
  assert.equal(pairs.length, 2);
  assert.equal(pairs[0].rewrite, '来自体检');
  assert.equal(pairs[0].source, '逐条体检');
  assert.equal(pairs[1].quote, '另一句');
});
