import React from 'react';
import { AlertTriangle, PencilLine, Redo2, Sparkles, Undo2 } from 'lucide-react';
import type { AppliedSuggestion } from '../../utils/workingDocument';
import DiffView from '../DiffView';

interface SemanticDraftEditorProps {
  /** 当前工作版本文本（唯一事实源，纯文本） */
  currentText: string;
  /** 已采用的 AI 修改（按 revision 顺序） */
  appliedList: AppliedSuggestion[];
  aiAppliedCount: number;
  manualEditCount: number;
  canUndo: boolean;
  canRedo: boolean;
  onManualEdit: (text: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  /** AI 建议级撤销（局部安全替换，绝不覆盖用户编辑） */
  onRevertSuggestion: (suggestionId: string) => void;
}

/**
 * 工作版本编辑器（Phase 2B）
 *
 * - 文本内容 = currentText 纯文本（textarea 只是编辑 UI，不把 HTML 当文档数据）；
 * - AI 修改 / 人工修改都可继续编辑，undo/redo 走 revision history；
 * - AI 修改的「修改前后可视差异」以派生视图（diff 列表）展示，
 *   不依赖 del/ins HTML 作为 source of truth；
 * - 明确提示：工作版本为语义预览，原始文件未修改。
 */
export const SemanticDraftEditor: React.FC<SemanticDraftEditorProps> = ({
  currentText,
  appliedList,
  aiAppliedCount,
  manualEditCount,
  canUndo,
  canRedo,
  onManualEdit,
  onUndo,
  onRedo,
  onRevertSuggestion,
}) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* 顶部状态栏与撤销/重做 */}
      <div className="px-4 py-2.5 bg-emerald-50/70 dark:bg-emerald-950/30 border-b border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-between gap-3 text-xs text-emerald-800 dark:text-emerald-300">
        <div className="flex items-center gap-2 min-w-0">
          <PencilLine className="w-4 h-4 flex-shrink-0 text-emerald-600" />
          <span className="truncate">
            工作版本 · AI 修改 <strong>{aiAppliedCount}</strong> 条
            {manualEditCount > 0 && (
              <>
                {' '}· 人工修改 <strong>{manualEditCount}</strong> 处
              </>
            )}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[11px] text-emerald-600/80 mr-1 hidden sm:inline">
            原始文件未修改
          </span>
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title="撤销（可回退 AI 修改 / 人工修改）"
            className="p-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <Undo2 className="w-3.5 h-3.5" />
            撤销
          </button>
          <button
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            title="重做"
            className="p-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <Redo2 className="w-3.5 h-3.5" />
            重做
          </button>
        </div>
      </div>

      {/* 可编辑正文：textarea（原生、稳定、光标/IME 正常；数据始终是纯文本） */}
      <textarea
        value={currentText}
        onChange={e => onManualEdit(e.target.value)}
        placeholder="暂无简历文本"
        spellCheck={false}
        className="flex-1 min-h-0 w-full resize-none p-4 font-sans text-sm leading-7 text-slate-800 dark:text-slate-200 bg-transparent focus:outline-none whitespace-pre-wrap select-text"
      />

      {/* AI 修改记录（派生视图：修改前后可视差异 + 单条撤销） */}
      {appliedList.length > 0 && (
        <div className="border-t border-slate-100 dark:border-slate-700/60 flex-shrink-0">
          <div className="px-4 pt-2.5 pb-1 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            <Sparkles className="w-3 h-3 text-primary-500" />
            AI 修改记录（{appliedList.length}）
          </div>
          <div className="px-4 pb-3 pt-1 max-h-44 overflow-y-auto space-y-2">
            {appliedList.map(app => (
              <div
                key={app.suggestionId}
                className="rounded-xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-2.5"
              >
                <DiffView before={app.quote} after={app.rewrite} />
                <div className="mt-1.5 flex justify-end">
                  <button
                    type="button"
                    onClick={() => onRevertSuggestion(app.suggestionId)}
                    className="px-2 py-1 rounded-md text-[11px] font-medium border border-emerald-200 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors flex items-center gap-1"
                  >
                    <Undo2 className="w-3 h-3" />
                    撤销此修改
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-400 dark:text-slate-500 flex items-start gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-500" />
            工作版本为语义预览，仅作用于当前浏览器会话；原始 PDF/DOCX 文件保持不变。
          </div>
        </div>
      )}

      {appliedList.length === 0 && (
        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-400 dark:text-slate-500 flex items-start gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-500" />
          工作版本为语义预览，仅作用于当前浏览器会话；原始 PDF/DOCX 文件保持不变。
        </div>
      )}
    </div>
  );
};
