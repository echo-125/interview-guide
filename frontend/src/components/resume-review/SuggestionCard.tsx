import React from 'react';
import {
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import type { ReviewSuggestion } from '../../types/review';

interface SuggestionCardProps {
  suggestion: ReviewSuggestion;
  isActive: boolean;
  onSelect: (id: string) => void;
  /** 只读展示模式（文本版工作版本退役后，采用/撤销由结构化编辑器承接） */
  readonly?: boolean;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  isActive,
  onSelect,
  readonly,
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
            修改建议
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-mono bg-emerald-50/50 dark:bg-emerald-950/20 p-2 rounded-md border border-emerald-100 dark:border-emerald-900/40 line-clamp-3">
            {improvement.suggestedText}
          </p>
        </div>
      )}

      {/* 底部定位跳转引导 */}
      {isLocated && (
        <div className="mt-2 pt-2 flex items-center justify-end text-[11px] text-primary-500 font-medium">
          <span>{readonly ? '查看文档位置' : '查看文档位置'}</span>
          <ChevronRight className="w-3 h-3 ml-0.5" />
        </div>
      )}
    </div>
  );
};
