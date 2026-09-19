import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import type { ReviewSuggestion } from '../../types/review';
import type { SuggestionApplyState } from '../../utils/workingDraft';

interface SuggestionCardProps {
  suggestion: ReviewSuggestion;
  isActive: boolean;
  onSelect: (id: string) => void;
  /** 该建议在工作版本中的采用状态 */
  applyState: SuggestionApplyState;
  /** 无法安全应用时的原因说明（仅 unavailable 有值） */
  unavailableReason?: string;
  onApply: (id: string) => void;
  onUndo: (id: string) => void;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  isActive,
  onSelect,
  applyState,
  unavailableReason,
  onApply,
  onUndo,
}) => {
  const { improvement, anchor } = suggestion;
  const isLocated = anchor.located;

  const priorityColor =
    improvement.priority === '高'
      ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800'
      : improvement.priority === '中'
      ? 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800'
      : 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800';

  return (
    <div
      id={`suggestion-card-${suggestion.id}`}
      onClick={() => onSelect(suggestion.id)}
      className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
        isActive
          ? 'bg-primary-50/70 dark:bg-primary-950/40 border-primary-500 shadow-md ring-2 ring-primary-500/20'
          : applyState === 'applied'
          ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm'
      }`}
    >
      {/* 头部元信息 */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`text-xs px-2 py-0.5 rounded-md border font-medium ${priorityColor}`}>
            {improvement.priority}优先级
          </span>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
            {improvement.title}
          </h4>
        </div>
        {improvement.estimatedGain > 0 && (
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 flex-shrink-0">
            <Sparkles className="w-3 h-3" />
            +{improvement.estimatedGain}分
          </span>
        )}
      </div>

      {/* 定位状态标识 */}
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        {isLocated ? (
          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {anchor.page ? `已定位到第 ${anchor.page} 页` : '已精准定位到原文'}
            {anchor.matchLevel === 'fuzzy' && '（近似匹配）'}
          </span>
        ) : (
          <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            全局改进项（未直接锚定到句子）
          </span>
        )}
        {applyState === 'applied' && (
          <span className="ml-auto text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
            <Check className="w-3.5 h-3.5" />
            已采用修改
          </span>
        )}
        {applyState === 'reverted' && (
          <span className="ml-auto text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <RotateCcw className="w-3 h-3" />
            已撤销
          </span>
        )}
      </div>

      {/* 原文引用（若有） */}
      {improvement.originalText && (
        <div className="mb-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 line-clamp-2">
          <span className="font-sans font-medium text-slate-400 mr-1">原句:</span>
          "{improvement.originalText}"
        </div>
      )}

      {/* 问题描述与建议 */}
      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-2 leading-relaxed">
        {improvement.currentProblem || improvement.suggestion}
      </p>

      {/* 改写文本预览 */}
      {improvement.suggestedText && (
        <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <div className="flex items-center gap-1 text-[11px] font-medium text-primary-600 dark:text-primary-400 mb-1">
            <ArrowRight className="w-3 h-3" />
            AI 优化建议预览
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-mono bg-emerald-50/50 dark:bg-emerald-950/20 p-2 rounded-md border border-emerald-100 dark:border-emerald-900/40 line-clamp-3">
            {improvement.suggestedText}
          </p>
        </div>
      )}

      {/* 采用修改操作区 */}
      <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
        {applyState === 'applied' ? (
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              已采用修改
            </span>
            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                onUndo(suggestion.id);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3 h-3" />
              撤销
            </button>
          </div>
        ) : applyState === 'unavailable' ? (
          <div className="flex items-start gap-1.5 text-xs text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">无法自动应用</p>
              <p className="text-[11px] text-amber-500/80 dark:text-amber-400/70 mt-0.5">
                {unavailableReason || '原文存在多个候选位置'}
              </p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              onApply(suggestion.id);
            }}
            className="w-full px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            {applyState === 'reverted' ? '重新采用修改' : '采用修改'}
          </button>
        )}
      </div>

      {/* 底部定位跳转引导 */}
      {isLocated && (
        <div className="mt-2 pt-2 flex items-center justify-end text-[11px] text-primary-500 font-medium group-hover:underline">
          <span>查看文档位置</span>
          <ChevronRight className="w-3 h-3 ml-0.5" />
        </div>
      )}
    </div>
  );
};
