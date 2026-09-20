/**
 * Phase 5E：全部建议不可操作判定（纯函数，供 SuggestionReviewPanel 与单测共用）
 *
 * 「可操作」定义（对齐 deriveSuggestionStatus 的真实语义）：
 * - status === 'pending'（未被采用/未被手动编辑阻断）
 * - stale !== true（原文仍与当前字段一致，可安全应用）
 * - mapping.strategy === 'structured-path' 且存在 documentPath（可结构化定位）
 *
 * applied / blocked-by-manual-edit / unavailable / unmapped / quote-anchor
 * 均不属于「仍可操作的 pending 建议」，不应被误判为触发条件。
 */

import type { PanelSuggestion } from './SuggestionReviewPanel';

export function hasNoActionableSuggestions(suggestions: PanelSuggestion[]): boolean {
  if (suggestions.length === 0) return false;
  // 存在已采用的建议（用户已有生效成果）时不提示「全部过期」
  if (suggestions.some((s) => s.status === 'applied')) return false;
  return !suggestions.some(
    (s) =>
      s.status === 'pending' &&
      s.stale !== true &&
      s.mapping.strategy === 'structured-path' &&
      !!s.mapping.documentPath
  );
}