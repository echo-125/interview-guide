import assert from 'node:assert/strict';
import test from 'node:test';

import {
  attachExistingRewrites,
  buildImprovements,
  estimateDimensionGain,
} from './improvements.ts';

test('Top 行动项带关联原句时证据等级为「已确认」', () => {
  const items = buildImprovements({
    topActions: [{ title: '补充量化结果', reason: '项目描述缺成果', relatedQuote: '负责订单系统' }],
  });
  assert.equal(items.length, 1);
  assert.equal(items[0].source, 'topAction');
  assert.equal(items[0].evidenceLevel, 'confirmed');
  assert.equal(items[0].originalText, '负责订单系统');
});

test('Top 行动项没有关联原句时证据等级为「证据不足」', () => {
  const items = buildImprovements({
    topActions: [{ title: '补充 Kubernetes 实战', reason: 'JD 核心要求' }],
  });
  assert.equal(items[0].evidenceLevel, 'insufficient');
});

test('增益按维度剩余缺口估算，不超出满分空间', () => {
  // project 39/40 只剩 1 分空间，再大的比例也只能给 1
  assert.equal(estimateDimensionGain({ projectScore: 39 }, 'project', 0.2), 1);
  // 维度已满
  assert.equal(estimateDimensionGain({ projectScore: 40 }, 'project', 0.2), 0);
  // 缺口 20，比例 0.2 → 4
  assert.equal(estimateDimensionGain({ projectScore: 20 }, 'project', 0.2), 4);
});

test('维度分缺失时退回保守值而不是编造精确数字', () => {
  assert.equal(estimateDimensionGain({}, 'project', 0.2), 1);
  assert.equal(estimateDimensionGain(null, 'project', 0.2), 1);
});

test('同一原句只生成一个优化项，逐条体检优先于改进建议', () => {
  const items = buildImprovements({
    bulletAudits: [{ quote: '同一句', problems: ['缺量化结果'], rewrite: '改写A' }],
    suggestions: [
      {
        category: '内容',
        priority: '高',
        issue: '问题',
        recommendation: '建议',
        quote: '同一句',
        rewrite: '改写B',
      },
    ],
  });
  assert.equal(items.length, 1);
  assert.equal(items[0].suggestedText, '改写A');
});

test('逐条体检的增益随维度剩余缺口变化，而不是固定值', () => {
  const lowScore = buildImprovements({
    projectScore: 10,
    bulletAudits: [{ quote: '原句', problems: ['缺量化结果'], rewrite: '改写' }],
  });
  const highScore = buildImprovements({
    projectScore: 39,
    bulletAudits: [{ quote: '原句', problems: ['缺量化结果'], rewrite: '改写' }],
  });
  assert.ok(lowScore[0].estimatedGain > highScore[0].estimatedGain);
});

test('attachExistingRewrites 为 Top3 复用已有改写，不触发新的 AI 调用', () => {
  const analysis = {
    topActions: [{ title: '补量化', reason: '缺成果', relatedQuote: '同一句' }],
    bulletAudits: [{ quote: '同一句', problems: ['缺量化结果'], rewrite: '改写A' }],
  };
  const [top] = attachExistingRewrites(buildImprovements(analysis), analysis);
  assert.equal(top.source, 'topAction');
  assert.equal(top.suggestedText, '改写A');
  assert.ok(top.reasons.length > 0);
});

test('缺少可应用改写时不会凭空生成优化项', () => {
  const items = buildImprovements({
    suggestions: [{ category: '技能', priority: '高', issue: '缺 Kubernetes', recommendation: '补充实践' }],
  });
  assert.equal(items.length, 0);
});
