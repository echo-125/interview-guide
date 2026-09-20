import assert from 'node:assert/strict';
import test from 'node:test';

import { hasNoActionableSuggestions } from './suggestionPanelState.ts';
import type { PanelSuggestion } from './SuggestionReviewPanel';
import type { Improvement } from '../../types/optimization';

function imp(id: string): Improvement {
  return {
    id,
    title: 't',
    priority: '中',
    estimatedGain: 5,
    currentProblem: '问题',
    suggestion: '建议',
    evidenceLevel: 'confirmed',
    originalText: '原',
    suggestedText: '改',
    reasons: ['+ 补充'],
    source: 'suggestion',
    dimension: 'project',
  };
}

function s(partial: Partial<PanelSuggestion>): PanelSuggestion {
  return {
    improvement: partial.improvement ?? imp('i1'),
    mapping: { strategy: 'structured-path', documentPath: { kind: 'summary' }, humanLabel: '个人总结' },
    status: 'pending',
    ...partial,
  } as PanelSuggestion;
}

test('Case 1：存在正常 pending 结构化建议 → 不提示全部过期', () => {
  assert.equal(hasNoActionableSuggestions([s({})]), false);
});

test('Case 2：全部 pending 均 stale → 提示重新分析引导', () => {
  assert.equal(hasNoActionableSuggestions([s({ stale: true }), s({ stale: true, improvement: imp('i2') })]), true);
});

test('Case 3：部分 stale + 部分可操作 pending → 不提示', () => {
  assert.equal(hasNoActionableSuggestions([s({ stale: true }), s({ improvement: imp('i2') })]), false);
});

test('Case 4：applied 建议不误判为全部过期（已采用成果仍在，不提示）', () => {
  assert.equal(hasNoActionableSuggestions([s({ status: 'applied' })]), false);
  assert.equal(hasNoActionableSuggestions([s({ status: 'applied' }), s({ stale: true })]), false);
});

test('Case 5：unmapped / quote-anchor 建议不误判为 stale，但也无结构化可操作项 → 提示', () => {
  const unmapped = s({ mapping: { strategy: 'unmapped', reason: '未命中段落' } as PanelSuggestion['mapping'] });
  assert.equal(hasNoActionableSuggestions([unmapped]), true);
  const quoteAnchor = s({ mapping: { strategy: 'quote-anchor' } as PanelSuggestion['mapping'] });
  assert.equal(hasNoActionableSuggestions([quoteAnchor]), true);
  // 混合：一条 stale + 一条 unmapped → 提示（无任何可操作项）
  assert.equal(hasNoActionableSuggestions([s({ stale: true }), unmapped]), true);
});

test('Case 6：空列表不提示', () => {
  assert.equal(hasNoActionableSuggestions([]), false);
});

test('blocked-by-manual-edit 不算可操作 pending，混合 stale 时提示', () => {
  assert.equal(hasNoActionableSuggestions([s({ status: 'blocked-by-manual-edit' }), s({ stale: true })]), true);
});