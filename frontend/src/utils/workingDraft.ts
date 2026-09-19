/**
 * Working Draft（工作版本）确定性应用引擎 (Phase 2A)
 *
 * 与 applyRewrites 的「批量替换」不同，本模块只处理「单条采用修改」：
 *   1. quote 必须在原文中唯一命中（exact → whitespace → 上下文消歧），
 *      否则一律禁止应用，绝不猜测；
 *   2. 每条已应用的记录都保存相对原文的字符区间 [start, end)；
 *   3. workingText 永远 = buildWorkingText(originalText, records) 重新确定性生成，
 *      因此撤销任意一条不影响其它记录（区间基于原文、互不重叠、从后往前替换）。
 *
 * 不调用后端、不调用 LLM、不重新评分、不落库。
 */

import { calculateContextScore, findAllExactMatches, findAllWhitespaceMatches } from './anchorMatcher.ts';

/** 单条建议的采用状态 */
export type SuggestionApplyState = 'pending' | 'applied' | 'reverted' | 'unavailable';

/** 无法应用的原因 */
export type ApplyFailureReason = 'not-found' | 'ambiguous' | 'conflict' | 'no-rewrite';

/** 一条已确定应用的改写记录（start/end 为相对 originalText 的区间） */
export interface AppliedRewrite {
  suggestionId: string;
  quote: string;
  rewrite: string;
  start: number;
  end: number;
}

/** 唯一确定性定位结果 */
export type UniqueQuoteResult =
  | { ok: true; start: number; end: number }
  | { ok: false; reason: Extract<ApplyFailureReason, 'not-found' | 'ambiguous'> };

/** 消歧时读取的前后文半径（与 anchorMatcher 保持一致） */
const CONTEXT_RADIUS = 40;

/**
 * 在多候选位置中，用 prefix/suffix 上下文做严格消歧：
 * - 没有上下文 → 无法消歧；
 * - 最高分并列或最高分 <= 0 → 无法消歧（宁可拒绝，不可猜测）。
 */
function pickUniqueByContext(
  originalText: string,
  ranges: ReadonlyArray<{ start: number; end: number }>,
  prefix?: string,
  suffix?: string
): { start: number; end: number } | null {
  if (!prefix?.trim() && !suffix?.trim()) return null;

  let best: { start: number; end: number; score: number } | null = null;
  let tied = false;

  for (const range of ranges) {
    const before = originalText.slice(Math.max(0, range.start - CONTEXT_RADIUS), range.start);
    const after = originalText.slice(range.end, Math.min(originalText.length, range.end + CONTEXT_RADIUS));

    let score = 0;
    let factors = 0;
    if (prefix?.trim()) {
      score += calculateContextScore(before, prefix);
      factors++;
    }
    if (suffix?.trim()) {
      score += calculateContextScore(after, suffix);
      factors++;
    }
    const finalScore = factors > 0 ? score / factors : 0;

    if (!best) {
      best = { start: range.start, end: range.end, score: finalScore };
      continue;
    }
    if (finalScore > best.score) {
      best = { start: range.start, end: range.end, score: finalScore };
      tied = false;
    } else if (finalScore === best.score) {
      tied = true;
    }
  }

  if (!best || tied || best.score <= 0) return null;
  return { start: best.start, end: best.end };
}

/**
 * 唯一确定性定位 quote。
 *
 * 策略（按顺序，任一命中即返回）：
 *   1. exact match 唯一 → 命中；
 *   2. exact match 多个 → 上下文消歧，消歧唯一才命中；
 *   3. whitespace match 唯一 → 命中；
 *   4. whitespace match 多个 → 上下文消歧，消歧唯一才命中；
 *   5. 其余情况（含 fuzzy）→ 拒绝应用。
 */
export function locateUniqueQuote(
  originalText: string,
  quote: string,
  context?: { prefix?: string; suffix?: string }
): UniqueQuoteResult {
  if (!quote || !quote.trim()) return { ok: false, reason: 'not-found' };

  const exact = findAllExactMatches(originalText, quote);
  if (exact.length === 1) return { ok: true, start: exact[0].start, end: exact[0].end };
  if (exact.length > 1) {
    const picked = pickUniqueByContext(originalText, exact, context?.prefix, context?.suffix);
    return picked
      ? { ok: true, start: picked.start, end: picked.end }
      : { ok: false, reason: 'ambiguous' };
  }

  const ws = findAllWhitespaceMatches(originalText, quote);
  if (ws.length === 1) return { ok: true, start: ws[0].start, end: ws[0].end };
  if (ws.length > 1) {
    const picked = pickUniqueByContext(originalText, ws, context?.prefix, context?.suffix);
    return picked
      ? { ok: true, start: picked.start, end: picked.end }
      : { ok: false, reason: 'ambiguous' };
  }

  return { ok: false, reason: 'not-found' };
}

/** 基于原文与已应用记录，确定性重建 workingText（区间互不重叠，从后往前替换） */
export function buildWorkingText(originalText: string, records: AppliedRewrite[]): string {
  const sorted = [...records].sort((a, b) => b.start - a.start);
  let text = originalText;
  for (const r of sorted) {
    text = text.slice(0, r.start) + r.rewrite + text.slice(r.end);
  }
  return text;
}

/** 撤销一条：仅移除该记录，其余记录不受影响（下次重建时自动恢复） */
export function undoRewrite(records: AppliedRewrite[], suggestionId: string): AppliedRewrite[] {
  return records.filter(r => r.suggestionId !== suggestionId);
}

/** 撤销全部：清空所有记录 */
export function undoAllRewrites(): AppliedRewrite[] {
  return [];
}

export type ApplySingleResult =
  | { status: 'applied'; record: AppliedRewrite; records: AppliedRewrite[]; workingText: string }
  | { status: 'unchanged'; records: AppliedRewrite[]; workingText: string }
  | { status: 'unavailable'; reason: ApplyFailureReason; records: AppliedRewrite[]; workingText: string };

export interface ApplySingleInput {
  suggestionId: string;
  quote: string;
  rewrite: string;
  prefix?: string;
  suffix?: string;
}

/**
 * 应用单条修改（幂等）。
 *
 * 规则：
 *   - 该 suggestion 已在记录中 → unchanged（不重复替换，绝不叠加）；
 *   - quote/rewrite 为空 → no-rewrite；
 *   - 无法唯一定位 → not-found / ambiguous；
 *   - 定位区间与已应用记录重叠 → conflict（长句优先占位）。
 *
 * 任何失败都不修改 records，返回的 workingText 与失败前保持一致。
 */
export function applySingleRewrite(
  originalText: string,
  records: AppliedRewrite[],
  input: ApplySingleInput
): ApplySingleResult {
  const currentText = buildWorkingText(originalText, records);

  // 幂等：已应用过则不做任何事
  if (records.some(r => r.suggestionId === input.suggestionId)) {
    return { status: 'unchanged', records, workingText: currentText };
  }

  if (!input.quote?.trim() || !input.rewrite?.trim()) {
    return { status: 'unavailable', reason: 'no-rewrite', records, workingText: currentText };
  }

  const located = locateUniqueQuote(originalText, input.quote, {
    prefix: input.prefix,
    suffix: input.suffix,
  });
  if (!located.ok) {
    return { status: 'unavailable', reason: located.reason, records, workingText: currentText };
  }

  // 与已占用的原文区间重叠 → 拒绝，避免短句破坏长句改写
  const conflicts = records.some(r => located.start < r.end && located.end > r.start);
  if (conflicts) {
    return { status: 'unavailable', reason: 'conflict', records, workingText: currentText };
  }

  const record: AppliedRewrite = {
    suggestionId: input.suggestionId,
    quote: input.quote,
    rewrite: input.rewrite,
    start: located.start,
    end: located.end,
  };
  const nextRecords = [...records, record];
  return {
    status: 'applied',
    record,
    records: nextRecords,
    workingText: buildWorkingText(originalText, nextRecords),
  };
}

/** 工作版本渲染片段：普通文本 或 一处已被替换的修改（含新旧文本与在新文本中的区间） */
export type WorkingSegment =
  | { type: 'plain'; text: string }
  | {
      type: 'changed';
      suggestionId: string;
      quote: string;
      rewrite: string;
      /** rewrite 在 workingText 中的区间（用于高亮） */
      newStart: number;
      newEnd: number;
    };

/**
 * 把 originalText + records 切分为可直接渲染的片段。
 *
 * 记录按原文 start 升序排列，用「累计偏移量」把原文区间映射到工作版本文本中的新区间，
 * 与 buildWorkingText 的替换结果严格一致（区间互不重叠，顺序无关）。
 */
export function buildWorkingSegments(
  originalText: string,
  records: AppliedRewrite[]
): WorkingSegment[] {
  const sorted = [...records].sort((a, b) => a.start - b.start || a.suggestionId.localeCompare(b.suggestionId));
  const segments: WorkingSegment[] = [];
  let cursor = 0;
  let shift = 0;

  for (const r of sorted) {
    if (r.start > cursor) {
      segments.push({ type: 'plain', text: originalText.slice(cursor, r.start) });
    }
    const newStart = r.start + shift;
    const newEnd = newStart + r.rewrite.length;
    segments.push({
      type: 'changed',
      suggestionId: r.suggestionId,
      quote: r.quote,
      rewrite: r.rewrite,
      newStart,
      newEnd,
    });
    shift += r.rewrite.length - (r.end - r.start);
    cursor = r.end;
  }
  if (cursor < originalText.length) {
    segments.push({ type: 'plain', text: originalText.slice(cursor) });
  }
  return segments;
}

/** 不可用原因 → 面向用户的说明文案 */
export const APPLY_FAILURE_TEXT: Record<ApplyFailureReason, string> = {
  'not-found': '原文中未找到该原句，无法自动应用',
  ambiguous: '原文存在多个候选位置，无法安全自动应用',
  conflict: '与已采用的修改区间重叠，无法自动应用',
  'no-rewrite': '该建议没有可应用的改写内容',
};
