/**
 * Working Document（可编辑工作版本）核心模型 (Phase 2B)
 *
 * 把 Phase 2A 的「若干 AI rewrite records」升级为「可编辑文档 + revision history」：
 *
 *   - currentText 是唯一事实源（纯文本），任何文档变化（AI 采用 / 人工编辑 / AI 撤销）
 *     都落成一条 Revision（beforeText / afterText 全量快照）并入栈；
 *   - 文档级 Undo / Redo 只是移动 revisionIndex：currentText = revisions[index].afterText；
 *   - appliedSuggestions 由 revisions[0..index] 派生（ai-apply 加入 / ai-revert 移除），
 *     保证 undo/redo 后 AI 建议状态与文档历史严格一致；
 *   - AI 建议级撤销是「局部安全替换」：仅当该条 rewrite 仍完整存在于 currentText
 *     （用户没有改过这个区域）时，才把该区域换回 quote；否则拒绝并说明原因，
 *     绝不覆盖用户的人工编辑。
 *
 * 不调用后端、不调用 LLM、不重新评分、不落库、不写回原始 PDF/DOCX。
 */

import { findAllExactMatches } from './anchorMatcher.ts';
import {
  locateUniqueQuote,
  type ApplyFailureReason,
} from './workingDraft.ts';

export type RevisionType = 'ai-apply' | 'ai-revert' | 'manual-edit';

/** 一次文档变化的历史记录（全量前后快照，文本编辑器式） */
export interface Revision {
  id: string;
  type: RevisionType;
  beforeText: string;
  afterText: string;
  /** ai-apply / ai-revert 时对应的 AI 建议 id */
  suggestionId?: string;
  /** ai-apply 时的原句与改写（供 appliedSuggestions 派生） */
  quote?: string;
  rewrite?: string;
  timestamp: number;
}

/** 一条已采用的 AI 修改（保留来源标记，供后续高亮/重评分/持久化使用） */
export interface AppliedSuggestion {
  suggestionId: string;
  quote: string;
  rewrite: string;
  /** 产生该修改的 ai-apply revision id */
  revisionId: string;
}

export interface WorkingDocument {
  /** 简历原文，永远不变（隔离基准） */
  originalText: string;
  /** 当前可编辑文本（唯一事实源） */
  currentText: string;
  /** 全部修订历史（未截断部分） */
  revisions: Revision[];
  /** 当前指针：-1 = 初始原文；否则指向最近一条已生效 revision 的下标 */
  revisionIndex: number;
  /** 当前已采用的 AI 修改 */
  appliedSuggestions: Record<string, AppliedSuggestion>;
  /** 内部自增序号，用于生成稳定的 revision id */
  revisionSeq: number;
}

export function createWorkingDocument(originalText: string): WorkingDocument {
  return {
    originalText,
    currentText: originalText,
    revisions: [],
    revisionIndex: -1,
    appliedSuggestions: {},
    revisionSeq: 0,
  };
}

/** 由修订历史推导指定时刻的 appliedSuggestions */
export function deriveAppliedSuggestions(
  revisions: Revision[],
  index: number
): Record<string, AppliedSuggestion> {
  const applied: Record<string, AppliedSuggestion> = {};
  for (let i = 0; i <= index && i < revisions.length; i++) {
    const rev = revisions[i];
    if (rev.type === 'ai-apply' && rev.suggestionId && rev.quote !== undefined && rev.rewrite !== undefined) {
      applied[rev.suggestionId] = {
        suggestionId: rev.suggestionId,
        quote: rev.quote,
        rewrite: rev.rewrite,
        revisionId: rev.id,
      };
    } else if (rev.type === 'ai-revert' && rev.suggestionId) {
      delete applied[rev.suggestionId];
    }
  }
  return applied;
}

/**
 * 入栈一条新 revision：
 * 1) 丢弃当前 index 之后的历史（Redo 分支清空，标准编辑器行为）；
 * 2) 追加新 revision 并前移 index；
 * 3) currentText 更新为 afterText，appliedSuggestions 重新派生。
 */
function commitRevision(
  doc: WorkingDocument,
  type: RevisionType,
  beforeText: string,
  afterText: string,
  extra?: { suggestionId?: string; quote?: string; rewrite?: string }
): WorkingDocument {
  const nextSeq = doc.revisionSeq + 1;
  const revision: Revision = {
    id: `rev-${nextSeq}`,
    type,
    beforeText,
    afterText,
    suggestionId: extra?.suggestionId,
    quote: extra?.quote,
    rewrite: extra?.rewrite,
    timestamp: Date.now(),
  };
  // 丢弃 Redo 分支
  const baseRevisions = doc.revisions.slice(0, doc.revisionIndex + 1);
  const revisions = [...baseRevisions, revision];
  const revisionIndex = revisions.length - 1;
  return {
    ...doc,
    currentText: afterText,
    revisions,
    revisionIndex,
    appliedSuggestions: deriveAppliedSuggestions(revisions, revisionIndex),
    revisionSeq: nextSeq,
  };
}

/** 已应用 AI 修改的 rewrite 在当前文本中占用的区间（仅统计能唯一确认的，无法唯一确认的跳过占用检测） */
function findAppliedRewriteRanges(doc: WorkingDocument): Array<[number, number]> {
  const ranges: Array<[number, number]> = [];
  for (const app of Object.values(doc.appliedSuggestions)) {
    if (!app.rewrite) continue;
    const matches = findAllExactMatches(doc.currentText, app.rewrite);
    if (matches.length === 1) ranges.push([matches[0].start, matches[0].end]);
    // 0 = 该区域已被手动改动；>1 = 文本重复。两者都保守跳过，不误伤新 apply
  }
  return ranges;
}

export interface ApplyAISuggestionInput {
  suggestionId: string;
  quote: string;
  rewrite: string;
  prefix?: string;
  suffix?: string;
}

export type ApplyAIResult =
  | { status: 'applied'; doc: WorkingDocument; revision: Revision }
  | { status: 'unchanged'; doc: WorkingDocument }
  | { status: 'unavailable'; reason: ApplyFailureReason; doc: WorkingDocument };

/**
 * AI 采用修改：在 currentText 上唯一定位 quote 并替换为 rewrite。
 *
 * - 已采用过 → unchanged（幂等，绝不重复替换）；
 * - 无法唯一定位 / 与已应用 rewrite 区间重叠 → unavailable；
 * - 成功 → 生成一条 ai-apply revision。
 */
export function applyAISuggestion(
  doc: WorkingDocument,
  input: ApplyAISuggestionInput
): ApplyAIResult {
  if (doc.appliedSuggestions[input.suggestionId]) {
    return { status: 'unchanged', doc };
  }
  if (!input.quote?.trim() || !input.rewrite?.trim()) {
    return { status: 'unavailable', reason: 'no-rewrite', doc };
  }

  const located = locateUniqueQuote(doc.currentText, input.quote, {
    prefix: input.prefix,
    suffix: input.suffix,
  });
  if (!located.ok) {
    return { status: 'unavailable', reason: located.reason, doc };
  }

  // 与已应用 AI 修改的区间重叠 → 拒绝（长句优先语义延续）
  const conflicts = findAppliedRewriteRanges(doc).some(
    range => located.start < range[1] && located.end > range[0]
  );
  if (conflicts) {
    return { status: 'unavailable', reason: 'conflict', doc };
  }

  const afterText =
    doc.currentText.slice(0, located.start) +
    input.rewrite +
    doc.currentText.slice(located.end);

  const next = commitRevision(doc, 'ai-apply', doc.currentText, afterText, {
    suggestionId: input.suggestionId,
    quote: input.quote,
    rewrite: input.rewrite,
  });
  return { status: 'applied', doc: next, revision: next.revisions[next.revisionIndex] };
}

/**
 * 人工编辑：更新 currentText 并落成一条 manual-edit revision。
 *
 * 合并策略：若上一条 revision 就是 manual-edit（且未被 undo 过），则只更新它的
 * afterText，把连续输入合并为一次编辑 —— 撤销时整批回退，与文本编辑器一致；
 * 中间穿插过 AI 操作或 undo/redo 则新开一条。
 */
export function manualEditDocument(doc: WorkingDocument, text: string): { doc: WorkingDocument; changed: boolean } {
  if (text === doc.currentText) return { doc, changed: false };

  const last = doc.revisions[doc.revisionIndex];
  const isActiveManual = last && last.type === 'manual-edit' && doc.revisionIndex === doc.revisions.length - 1;
  if (isActiveManual) {
    const revisions = doc.revisions.slice();
    revisions[revisions.length - 1] = { ...last, afterText: text };
    return {
      doc: { ...doc, currentText: text, revisions },
      changed: true,
    };
  }

  const next = commitRevision(doc, 'manual-edit', doc.currentText, text);
  return { doc: next, changed: true };
}

/** AI 建议级撤销失败原因 */
export type RevertFailureReason = 'not-applied' | 'region-modified' | 'ambiguous';

export type RevertSuggestionResult =
  | { status: 'reverted'; doc: WorkingDocument; revision: Revision }
  | { status: 'unchanged'; doc: WorkingDocument }
  | { status: 'blocked'; reason: RevertFailureReason; doc: WorkingDocument };

/**
 * AI 建议级撤销（局部安全替换）：
 * 仅当该条 rewrite 仍完整唯一地存在于 currentText 中（用户没改过这个区域）时，
 * 把该区域换回 quote。否则 blocked，绝不覆盖用户的人工编辑。
 */
export function revertSuggestion(doc: WorkingDocument, suggestionId: string): RevertSuggestionResult {
  const applied = doc.appliedSuggestions[suggestionId];
  if (!applied) return { status: 'unchanged', doc };
  if (!applied.rewrite) {
    return { status: 'blocked', reason: 'region-modified', doc };
  }

  const matches = findAllExactMatches(doc.currentText, applied.rewrite);
  if (matches.length === 0) {
    return { status: 'blocked', reason: 'region-modified', doc };
  }
  if (matches.length > 1) {
    return { status: 'blocked', reason: 'ambiguous', doc };
  }

  const { start, end } = matches[0];
  const afterText = doc.currentText.slice(0, start) + applied.quote + doc.currentText.slice(end);
  const next = commitRevision(doc, 'ai-revert', doc.currentText, afterText, {
    suggestionId,
  });
  return { status: 'reverted', doc: next, revision: next.revisions[next.revisionIndex] };
}

/** 文档级撤销：回退一格 revision */
export function undoDocument(doc: WorkingDocument): { doc: WorkingDocument; changed: boolean } {
  if (doc.revisionIndex < 0) return { doc, changed: false };
  const revisionIndex = doc.revisionIndex - 1;
  const currentText = revisionIndex >= 0 ? doc.revisions[revisionIndex].afterText : doc.originalText;
  return {
    doc: {
      ...doc,
      currentText,
      revisionIndex,
      appliedSuggestions: deriveAppliedSuggestions(doc.revisions, revisionIndex),
    },
    changed: true,
  };
}

/** 文档级重做：前进一格 revision */
export function redoDocument(doc: WorkingDocument): { doc: WorkingDocument; changed: boolean } {
  if (doc.revisionIndex >= doc.revisions.length - 1) return { doc, changed: false };
  const revisionIndex = doc.revisionIndex + 1;
  return {
    doc: {
      ...doc,
      currentText: doc.revisions[revisionIndex].afterText,
      revisionIndex,
      appliedSuggestions: deriveAppliedSuggestions(doc.revisions, revisionIndex),
    },
    changed: true,
  };
}

/**
 * 撤销全部 AI 修改（安全版）：逐个执行建议级撤销。
 * 被 blocked 的（区域已被手动修改 / 文本不唯一）保留，人工编辑绝不丢失。
 */
export function undoAllAI(
  doc: WorkingDocument
): { doc: WorkingDocument; reverted: number; blocked: Array<{ suggestionId: string; reason: RevertFailureReason }> } {
  let current = doc;
  const blocked: Array<{ suggestionId: string; reason: RevertFailureReason }> = [];
  const ids = Object.keys(doc.appliedSuggestions);
  let reverted = 0;
  for (const id of ids) {
    const result = revertSuggestion(current, id);
    if (result.status === 'reverted') {
      current = result.doc;
      reverted++;
    } else if (result.status === 'blocked') {
      blocked.push({ suggestionId: id, reason: result.reason });
    }
  }
  return { doc: current, reverted, blocked };
}

/** 人工修改处数：revision 历史中 manual-edit 的条数 */
export function countManualEdits(doc: WorkingDocument): number {
  let count = 0;
  for (let i = 0; i <= doc.revisionIndex && i < doc.revisions.length; i++) {
    if (doc.revisions[i].type === 'manual-edit') count++;
  }
  return count;
}

/** 该建议是否「曾经采用过」（用于区分 reverted 与 pending） */
export function wasEverApplied(doc: WorkingDocument, suggestionId: string): boolean {
  for (let i = 0; i <= doc.revisionIndex && i < doc.revisions.length; i++) {
    const rev = doc.revisions[i];
    if (rev.suggestionId === suggestionId && (rev.type === 'ai-apply' || rev.type === 'ai-revert')) {
      return true;
    }
  }
  return false;
}

/** 预判一条建议能否安全采用（不产生任何变更，供 UI 展示 unavailable） */
export function checkApplyAvailability(
  doc: WorkingDocument,
  input: Pick<ApplyAISuggestionInput, 'quote' | 'rewrite' | 'prefix' | 'suffix'>
): { ok: true } | { ok: false; reason: ApplyFailureReason } {
  if (!input.quote?.trim() || !input.rewrite?.trim()) {
    return { ok: false, reason: 'no-rewrite' };
  }
  const located = locateUniqueQuote(doc.currentText, input.quote, {
    prefix: input.prefix,
    suffix: input.suffix,
  });
  if (!located.ok) return { ok: false, reason: located.reason };
  const conflicts = findAppliedRewriteRanges(doc).some(
    range => located.start < range[1] && located.end > range[0]
  );
  if (conflicts) return { ok: false, reason: 'conflict' };
  return { ok: true };
}

/** AI 建议级撤销失败原因 → 面向用户的说明文案 */
export const REVERT_FAILURE_TEXT: Record<RevertFailureReason, string> = {
  'not-applied': '该建议尚未采用，无需撤销',
  'region-modified': '该区域已被手动修改，无法直接撤销此 AI 修改，请使用顶部「撤销」回退编辑历史',
  ambiguous: '该修改文本在文档中出现多次，无法安全撤销',
};
