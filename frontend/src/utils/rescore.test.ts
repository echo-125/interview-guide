import assert from 'node:assert/strict';
import test from 'node:test';

import { localRescoreEngine, MAX_DIMENSION_FILL_RATIO } from './rescore.ts';
import type { Improvement, ScoreDimension } from '../types/optimization.ts';

/** 五维合计 55 分：project 20/40，其余各留一半左右缺口 */
const ANALYSIS = {
  projectScore: 20,
  skillMatchScore: 10,
  contentScore: 10,
  structureScore: 10,
  expressionScore: 5,
};

function item(dimension: ScoreDimension, estimatedGain: number): Improvement {
  return {
    id: `t-${dimension}`,
    title: '优化项',
    priority: '中',
    estimatedGain,
    currentProblem: '',
    suggestion: '',
    evidenceLevel: 'confirmed',
    originalText: '原句',
    suggestedText: '改写',
    reasons: [],
    source: 'bulletAudit',
    dimension,
  };
}

test('增益未超封顶时按估算值计入', () => {
  // project 20/40，缺口 20，封顶 20 * 0.75 = 15；估算 5 < 15 → 全部计入
  const result = localRescoreEngine.project({ analysis: ANALYSIS, applied: [item('project', 5)] });
  const project = result.dimensions.find(d => d.dimension === 'project');
  assert.equal(project?.before, 20);
  assert.equal(project?.after, 25);
  assert.equal(result.cappedGain, 0);
});

test('增益超过封顶时只计入封顶部分，剩余记为 cappedGain', () => {
  // 缺口 20，封顶 15；估算 30 → 计入 15，超出的 15 分必须显式暴露
  const result = localRescoreEngine.project({ analysis: ANALYSIS, applied: [item('project', 30)] });
  const project = result.dimensions.find(d => d.dimension === 'project');
  assert.equal(project?.after, 35);
  assert.equal(result.cappedGain, 15);
});

test('得分不会超过维度满分', () => {
  const analysis = { ...ANALYSIS, expressionScore: 9 };
  const result = localRescoreEngine.project({ analysis, applied: [item('expression', 50)] });
  const expression = result.dimensions.find(d => d.dimension === 'expression');
  assert.equal(expression?.after, 10);
});

test('多个优化项命中同一维度时增益累加后再封顶', () => {
  const result = localRescoreEngine.project({
    analysis: ANALYSIS,
    applied: [item('project', 10), item('project', 10)],
  });
  const project = result.dimensions.find(d => d.dimension === 'project');
  // 合计 20 > 封顶 15
  assert.equal(project?.after, 35);
  assert.equal(result.cappedGain, 5);
  assert.equal(result.appliedCount, 2);
});

test('没有已采用项时不产生任何增益', () => {
  const result = localRescoreEngine.project({ analysis: ANALYSIS, applied: [] });
  assert.equal(result.totalDelta, 0);
  assert.equal(result.appliedCount, 0);
  assert.equal(result.afterTotal, result.beforeTotal);
});

test('封顶比例是保守值，避免承诺「改完就满分」', () => {
  assert.equal(MAX_DIMENSION_FILL_RATIO, 0.75);
});
