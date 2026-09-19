import React, { useEffect, useRef } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  FileQuestion,
  HelpCircle,
  Layers,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import type { ReviewSuggestion } from '../../types/review';
import { APPLY_FAILURE_TEXT } from '../../utils/workingDraft';
import { SuggestionCard } from './SuggestionCard';

interface AiReviewSidebarProps {
  suggestions: ReviewSuggestion[];
  activeId: string | null;
  onSelectSuggestion: (id: string) => void;
  /** 工作版本：已采用的 AI 修改条数 */
  aiAppliedCount: number;
  /** 工作版本：人工修改处数 */
  manualEditCount: number;
  /** 读取单条建议的采用状态 */
  stateOf: (suggestionId: string) => 'pending' | 'applied' | 'reverted' | 'unavailable';
  /** 读取单条建议不可用的原因 */
  reasonOf: (suggestionId: string) => string | undefined;
  /** 撤销全部 AI 修改（人工修改保留） */
  onUndoAllAI: () => void;
  /** 采用单条修改 */
  onApplySuggestion: (id: string) => void;
  /** 撤销单条修改 */
  onUndoSuggestion: (id: string) => void;
}

export const AiReviewSidebar: React.FC<AiReviewSidebarProps> = ({
  suggestions,
  activeId,
  onSelectSuggestion,
  aiAppliedCount,
  manualEditCount,
  stateOf,
  reasonOf,
  onUndoAllAI,
  onApplySuggestion,
  onUndoSuggestion,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const locatedList = suggestions.filter(s => s.anchor.located);
  const unlocatedList = suggestions.filter(s => !s.anchor.located);

  // 当外部（文档内高亮被点击）改变 activeId 时，自动平滑滚动对应卡片进入视口
  useEffect(() => {
    if (!activeId) return;
    const cardEl = document.getElementById(`suggestion-card-${activeId}`);
    if (cardEl && containerRef.current) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-y-auto pr-1 space-y-5 select-none"
    >
      {/* 工作版本状态栏 */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-3.5 border border-emerald-200/70 dark:border-emerald-900/50 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-500" />
            工作版本
          </h3>
          {(aiAppliedCount > 0 || manualEditCount > 0) && (
            <button
              type="button"
              onClick={onUndoAllAI}
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
              title="撤销全部 AI 修改；被手动修改过的区域不会被覆盖"
            >
              <RotateCcw className="w-3 h-3" />
              撤销全部 AI 修改
            </button>
          )}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
          {aiAppliedCount > 0 || manualEditCount > 0 ? (
            <>
              AI 修改{' '}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{aiAppliedCount}</span> 条
              {manualEditCount > 0 && (
                <>
                  {' '}· 人工修改{' '}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{manualEditCount}</span> 处
                </>
              )}
            </>
          ) : (
            '尚未采用任何修改'
          )}
        </p>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3 flex-shrink-0" />
          工作版本为语义预览，原始文件未修改
        </p>
      </div>

      {/* 顶部总览状态 */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-primary-500" />
            AI 审阅建议
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            共 {suggestions.length} 项诊断 · 点击卡片定位原文
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-xs px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            已定位 {locatedList.length}
          </span>
          {unlocatedList.length > 0 && (
            <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium flex items-center gap-1">
              <FileQuestion className="w-3 h-3" />
              未定位 {unlocatedList.length}
            </span>
          )}
        </div>
      </div>

      {/* 第一区：已定位建议 */}
      {locatedList.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
            <span>已锚定原文的批注 ({locatedList.length})</span>
            <span className="text-[11px] font-normal text-slate-400">点击自动跳转对齐</span>
          </div>
          <div className="space-y-2.5">
            {locatedList.map(item => (
              <SuggestionCard
                key={item.id}
                suggestion={item}
                isActive={activeId === item.id}
                onSelect={onSelectSuggestion}
                applyState={stateOf(item.id)}
                unavailableReason={reasonOf(item.id) && APPLY_FAILURE_TEXT[reasonOf(item.id) as keyof typeof APPLY_FAILURE_TEXT]}
                onApply={onApplySuggestion}
                onUndo={onUndoSuggestion}
              />
            ))}
          </div>
        </div>
      )}

      {/* 第二区：无法定位到原文的建议（坚决不画假高亮） */}
      {unlocatedList.length > 0 && (
        <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 px-1">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>无法定位到原文的建议 ({unlocatedList.length})</span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 px-1 leading-relaxed">
            由于模型输出的原句在简历中未找到相似度 ≥ 80% 的连续片段，为防止误导，系统已将其归入全局审阅建议中。
          </p>
          <div className="space-y-2.5">
            {unlocatedList.map(item => (
              <SuggestionCard
                key={item.id}
                suggestion={item}
                isActive={activeId === item.id}
                onSelect={onSelectSuggestion}
                applyState={stateOf(item.id)}
                unavailableReason={reasonOf(item.id) && APPLY_FAILURE_TEXT[reasonOf(item.id) as keyof typeof APPLY_FAILURE_TEXT]}
                onApply={onApplySuggestion}
                onUndo={onUndoSuggestion}
              />
            ))}
          </div>
        </div>
      )}

      {suggestions.length === 0 && (
        <div className="text-center py-12 text-slate-400 dark:text-slate-500">
          <HelpCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-xs">当前简历暂无 AI 批注建议</p>
        </div>
      )}
    </div>
  );
};
