import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReviewSuggestion } from '../types/review';
import type { SuggestionApplyState, ApplyFailureReason } from '../utils/workingDraft';
import {
  applyAISuggestion,
  checkApplyAvailability,
  countManualEdits,
  createWorkingDocument,
  manualEditDocument,
  redoDocument,
  revertSuggestion,
  undoAllAI,
  undoDocument,
  wasEverApplied,
  type AppliedSuggestion,
  type ApplyAIResult,
  type RevertFailureReason,
  type RevertSuggestionResult,
  type WorkingDocument,
} from '../utils/workingDocument';

export interface UseWorkingDocument {
  doc: WorkingDocument;
  /** 当前工作版本文本（唯一事实源） */
  currentText: string;
  /** 已采用的 AI 修改列表（按 revision 顺序） */
  appliedList: AppliedSuggestion[];
  aiAppliedCount: number;
  manualEditCount: number;
  canUndo: boolean;
  canRedo: boolean;
  /** 单条建议状态：applied / unavailable / reverted / pending */
  stateOf: (suggestionId: string) => SuggestionApplyState;
  /** unavailable 时的原因 */
  unavailableReasonOf: (suggestionId: string) => ApplyFailureReason | undefined;
  /** 采用 AI 修改 */
  apply: (suggestionId: string) => { ok: boolean; reason?: ApplyFailureReason };
  /** 文档级撤销 */
  undo: () => void;
  /** 文档级重做 */
  redo: () => void;
  /** 人工编辑（textarea onChange，纯文本） */
  manualEdit: (text: string) => void;
  /** AI 建议级撤销（局部安全替换，绝不覆盖用户编辑） */
  revertSuggestion: (suggestionId: string) => { ok: boolean; reason?: RevertFailureReason };
  /** 撤销全部 AI 修改（人工修改保留） */
  undoAllAI: () => { reverted: number; blocked: Array<{ suggestionId: string; reason: RevertFailureReason }> };
}

/**
 * Working Document（可编辑工作版本）状态管理 (Phase 2B)
 *
 * 仅存在于当前页面/当前浏览器会话：刷新后恢复为原文（Phase 2B 故意不持久化）。
 * 所有状态更新走函数式 setState，保证连续点击（如快速 Apply）幂等、不重复替换。
 */
export function useWorkingDocument(
  originalText: string,
  suggestions: ReviewSuggestion[]
): UseWorkingDocument {
  const [doc, setDoc] = useState<WorkingDocument>(() => createWorkingDocument(originalText));

  // 函数式 setState 的同步结果回传：updater 在 setState 时同步执行，结果可立即读取
  const applyOutcomeRef = useRef<ApplyAIResult | null>(null);
  const revertOutcomeRef = useRef<RevertSuggestionResult | null>(null);
  const undoAllOutcomeRef = useRef<ReturnType<typeof undoAllAI> | null>(null);

  // 原文变化（简历切换）时重建工作版本
  useEffect(() => {
    setDoc(createWorkingDocument(originalText));
  }, [originalText]);

  /** 每条「未应用」建议的可用性预判（基于当前可编辑文本，随编辑动态变化） */
  const availability = useMemo(() => {
    const map = new Map<string, { ok: boolean; reason?: ApplyFailureReason }>();
    for (const s of suggestions) {
      if (doc.appliedSuggestions[s.id]) continue;
      map.set(
        s.id,
        checkApplyAvailability(doc, {
          quote: s.improvement.originalText?.trim() || '',
          rewrite: s.improvement.suggestedText?.trim() || '',
          prefix: s.improvement.currentProblem,
        })
      );
    }
    return map;
  }, [doc, suggestions]);

  const stateOf = useCallback(
    (suggestionId: string): SuggestionApplyState => {
      if (doc.appliedSuggestions[suggestionId]) return 'applied';
      const avail = availability.get(suggestionId);
      if (avail && !avail.ok) return 'unavailable';
      if (wasEverApplied(doc, suggestionId)) return 'reverted';
      return 'pending';
    },
    [doc, availability]
  );

  const unavailableReasonOf = useCallback(
    (suggestionId: string): ApplyFailureReason | undefined => {
      const avail = availability.get(suggestionId);
      return avail && !avail.ok ? avail.reason : undefined;
    },
    [availability]
  );

  const apply = useCallback(
    (suggestionId: string): { ok: boolean; reason?: ApplyFailureReason } => {
      const suggestion = suggestions.find(s => s.id === suggestionId);
      if (!suggestion) return { ok: false, reason: 'not-found' };

      // 函数式 setState 保证连续点击基于最新状态；updater 同步执行，结果经 ref 取回
      setDoc(prev => {
        const result = applyAISuggestion(prev, {
          suggestionId,
          quote: suggestion.improvement.originalText?.trim() || '',
          rewrite: suggestion.improvement.suggestedText?.trim() || '',
          prefix: suggestion.improvement.currentProblem,
        });
        applyOutcomeRef.current = result;
        return result.status === 'applied' ? result.doc : prev;
      });
      const outcome = applyOutcomeRef.current;
      if (!outcome) return { ok: false };
      if (outcome.status === 'applied') return { ok: true };
      if (outcome.status === 'unavailable') return { ok: false, reason: outcome.reason };
      return { ok: false }; // unchanged：已采用过，幂等
    },
    [suggestions]
  );

  const undo = useCallback(() => {
    setDoc(prev => undoDocument(prev).doc);
  }, []);

  const redo = useCallback(() => {
    setDoc(prev => redoDocument(prev).doc);
  }, []);

  const manualEdit = useCallback((text: string) => {
    setDoc(prev => manualEditDocument(prev, text).doc);
  }, []);

  const revertSuggestionById = useCallback(
    (suggestionId: string): { ok: boolean; reason?: RevertFailureReason } => {
      setDoc(prev => {
        const result = revertSuggestion(prev, suggestionId);
        revertOutcomeRef.current = result;
        return result.status === 'reverted' ? result.doc : prev;
      });
      const outcome = revertOutcomeRef.current;
      if (!outcome) return { ok: false };
      if (outcome.status === 'reverted') return { ok: true };
      if (outcome.status === 'blocked') return { ok: false, reason: outcome.reason };
      return { ok: false }; // unchanged：未采用
    },
    []
  );

  const undoAllAIById = useCallback(() => {
    setDoc(prev => {
      const result = undoAllAI(prev);
      undoAllOutcomeRef.current = result;
      return result.doc;
    });
    return undoAllOutcomeRef.current ?? { reverted: 0, blocked: [] };
  }, []);

  const appliedList = useMemo<AppliedSuggestion[]>(() => {
    const list: AppliedSuggestion[] = [];
    for (let i = 0; i <= doc.revisionIndex && i < doc.revisions.length; i++) {
      const rev = doc.revisions[i];
      if (rev.type === 'ai-apply' && rev.suggestionId && doc.appliedSuggestions[rev.suggestionId]) {
        list.push(doc.appliedSuggestions[rev.suggestionId]);
      }
    }
    return list;
  }, [doc]);

  return {
    doc,
    currentText: doc.currentText,
    appliedList,
    aiAppliedCount: appliedList.length,
    manualEditCount: countManualEdits(doc),
    canUndo: doc.revisionIndex >= 0,
    canRedo: doc.revisionIndex < doc.revisions.length - 1,
    stateOf,
    unavailableReasonOf,
    apply,
    undo,
    redo,
    manualEdit,
    revertSuggestion: revertSuggestionById,
    undoAllAI: undoAllAIById,
  };
}
