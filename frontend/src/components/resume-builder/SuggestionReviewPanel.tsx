import type { SuggestionMapping } from '../../utils/resumeDocument/structuredMapping.ts';
import type { Improvement } from '../../types/optimization.ts';
import { AlertCircle, Check, KeyRound, RotateCcw, RefreshCw, Target, Undo2, Redo2, Wand2 } from 'lucide-react';
import { hasNoActionableSuggestions } from './suggestionPanelState.ts';

export interface PanelSuggestion {
  improvement: Improvement;
  mapping: SuggestionMapping;
  /** applied / blocked-by-manual-edit / pending / unavailable（由 WorkingResumeDocument 派生） */
  status: 'pending' | 'applied' | 'blocked-by-manual-edit' | 'unavailable';
  /** 原文已与当前字段不一致、不再可安全应用（pending 时可能为 true） */
  stale?: boolean;
}

/** 人类可读的 strategy 徽标 */
function StrategyTag({ strategy }: { strategy: SuggestionMapping['strategy'] }) {
  if (strategy === 'structured-path') {
    return <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium"><KeyRound className="w-2.5 h-2.5" />已结构化定位</span>;
  }
  if (strategy === 'quote-anchor') {
    return <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-[10px] font-medium">原文锚点</span>;
  }
  return <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-medium"><AlertCircle className="w-2.5 h-2.5" />无法自动定位</span>;
}

export function SuggestionReviewPanel({
  suggestions,
  onApply,
  onRevert,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  aiAppliedCount,
  selectedId,
  relatedIds,
  onSelect,
  onLocate,
  onReanalyze,
  reanalyzing,
}: {
  suggestions: PanelSuggestion[];
  onApply: (id: string) => void;
  onRevert: (id: string) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  aiAppliedCount: number;
  /** 当前在结构化编辑器中聚焦/被选中的建议 id（反向联动高亮） */
  selectedId?: string | null;
  /** 与当前编辑器聚焦字段同路径的其他建议 id（Case F：同字段多条建议一并高亮） */
  relatedIds?: string[];
  /** 点击建议卡片 / 定位按钮（用于正向定位联动） */
  onSelect?: (id: string) => void;
  /** 独立「定位到编辑器」按钮 */
  onLocate?: (id: string) => void;
  /** Phase 5E：全部建议不可操作时的「重新分析」入口（复用后端已有 reanalyze） */
  onReanalyze?: () => void;
  reanalyzing?: boolean;
}) {
  const allStale = hasNoActionableSuggestions(suggestions);
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
          <Wand2 className="w-3.5 h-3.5 text-primary-500" />
          AI 建议 · 结构化应用
        </span>
        {aiAppliedCount > 0 && (
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400">{aiAppliedCount} 项已采用</span>
        )}
      </div>

      {/* Undo / Redo */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 dark:border-slate-700/50">
        <button
          type="button"
          disabled={!canUndo}
          onClick={onUndo}
          className={`text-[11px] px-2.5 py-1 rounded-lg border flex items-center gap-1 ${canUndo ? 'border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700' : 'border-slate-100 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-not-allowed'}`}
        >
          <Undo2 className="w-3 h-3" />撤销
        </button>
        <button
          type="button"
          disabled={!canRedo}
          onClick={onRedo}
          className={`text-[11px] px-2.5 py-1 rounded-lg border flex items-center gap-1 ${canRedo ? 'border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700' : 'border-slate-100 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-not-allowed'}`}
        >
          <Redo2 className="w-3 h-3" />重做
        </button>
      </div>

      {/* Phase 5E（P2）：全部建议不可操作时的轻量引导（信息/警告级，非错误） */}
      {allStale && (
        <div className="mx-2 mt-2 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-3 py-2.5">
          <p className="text-[11px] leading-relaxed text-amber-700 dark:text-amber-300">
            当前文档已修改，AI 建议均基于旧内容。<br />建议重新分析简历后获取最新建议。
          </p>
          <button
            type="button"
            onClick={onReanalyze}
            disabled={reanalyzing}
            className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-medium hover:bg-amber-200 dark:hover:bg-amber-900/60 disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${reanalyzing ? 'animate-spin' : ''}`} />
            {reanalyzing ? '正在重新分析…' : '重新分析简历'}
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {suggestions.length === 0 && (
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center py-8">暂无 AI 分析建议</p>
        )}
        {suggestions.map(({ improvement, mapping, status, stale }) => {
          const isSelected = selectedId === improvement.id ||
            (!!relatedIds && relatedIds.includes(improvement.id));
          const canStructured = mapping.strategy === 'structured-path' && !!mapping.documentPath;
          // BUG-103：无改写内容（suggestedText 为空或与原文相同）时不允许「采用修改」，
          // 只保留「定位到编辑器」（可手动修改）——避免点击后弹出内部错误文案。
          const hasRewrite = !!improvement.suggestedText && improvement.suggestedText !== improvement.originalText;
          const canApply = canStructured && hasRewrite;
          return (
          <div
            key={improvement.id}
            onClick={onSelect ? () => onSelect(improvement.id) : undefined}
            className={`rounded-xl border p-3 bg-white dark:bg-slate-800 cursor-pointer transition-shadow ${
              isSelected
                ? 'border-primary-500 dark:border-primary-400 ring-1 ring-primary-500/50'
                : 'border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 leading-snug">{improvement.title}</p>
              <StrategyTag strategy={mapping.strategy} />
            </div>

            {mapping.strategy === 'structured-path' && mapping.humanLabel && (
              <p className="mt-1.5 text-[10px] text-emerald-600 dark:text-emerald-400">
                ✓ 已定位到：{mapping.humanLabel}
              </p>
            )}
            {mapping.strategy === 'unmapped' && mapping.reason && (
              <p className="mt-1.5 text-[10px] text-amber-600 dark:text-amber-400">⚠ {mapping.reason}</p>
            )}

            {improvement.originalText && (
              <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                <span className="opacity-70">原文：</span>{improvement.originalText}
              </p>
            )}
            {improvement.suggestedText && improvement.suggestedText !== improvement.originalText && (
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                <span className="text-primary-600 dark:text-primary-400">改写：</span>{improvement.suggestedText}
              </p>
            )}

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              {status === 'applied' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <Check className="w-3 h-3" />已采用修改
                </span>
              ) : status === 'blocked-by-manual-edit' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400">
                  ⚠ 该区域已手动修改，无法直接撤销此 AI 修改，请使用编辑历史撤销。
                </span>
              ) : stale ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400">
                  <AlertCircle className="w-3 h-3" />原文已变化，无法安全应用
                </span>
              ) : (
                <span className="text-[11px] text-slate-400">{improvement.priority}优先级</span>
              )}
              <div className="flex gap-1.5">
                {status === 'applied' ? (
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); onRevert(improvement.id); }}
                    className="text-[11px] px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 inline-flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />撤销此 AI 修改
                  </button>
                ) : status === 'blocked-by-manual-edit' ? null : stale ? null : canApply ? (
                  <>
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); onLocate?.(improvement.id); }}
                      className="text-[11px] px-2 py-1 rounded-lg border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/40 inline-flex items-center gap-1"
                      title="定位到结构化编辑器中的对应字段"
                    >
                      <Target className="w-3 h-3" />定位到编辑器
                    </button>
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); onApply(improvement.id); }}
                      className="text-[11px] px-2 py-1 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium inline-flex items-center gap-1"
                    >
                      <Check className="w-3 h-3" />采用修改
                    </button>
                  </>
                ) : canStructured ? (
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); onLocate?.(improvement.id); }}
                    className="text-[11px] px-2 py-1 rounded-lg border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/40 inline-flex items-center gap-1"
                    title="该建议无改写内容，可在编辑器中手动修改对应字段"
                  >
                    <Target className="w-3 h-3" />定位到编辑器
                  </button>
                ) : (
                  <span className="text-[10px] text-slate-400" title="该建议只有原始文档锚点，无法定位到结构化字段">
                    无法定位到结构化字段
                  </span>
                )}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}