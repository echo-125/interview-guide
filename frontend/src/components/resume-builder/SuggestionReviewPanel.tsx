import type { SuggestionMapping } from '../../utils/resumeDocument/structuredMapping.ts';
import type { Improvement } from '../../types/optimization.ts';
import { AlertCircle, Check, KeyRound, RotateCcw, Undo2, Redo2, Wand2 } from 'lucide-react';

export interface PanelSuggestion {
  improvement: Improvement;
  mapping: SuggestionMapping;
  /** applied / blocked-by-manual-edit / pending / unavailable */
  status: 'pending' | 'applied' | 'blocked-by-manual-edit' | 'unavailable';
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
}: {
  suggestions: PanelSuggestion[];
  onApply: (id: string) => void;
  onRevert: (id: string) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  aiAppliedCount: number;
}) {
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

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {suggestions.length === 0 && (
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center py-8">暂无 AI 分析建议</p>
        )}
        {suggestions.map(({ improvement, mapping, status }) => (
          <div key={improvement.id} className="rounded-xl border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-800">
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

            <div className="mt-2 flex items-center justify-between">
              {status === 'applied' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <Check className="w-3 h-3" />已采用修改
                </span>
              ) : status === 'blocked-by-manual-edit' ? (
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400">
                  ⚠ 该区域已手动修改，无法直接撤销此 AI 修改，请使用编辑历史撤销。
                </span>
              ) : (
                <span className="text-[11px] text-slate-400">{improvement.priority}优先级</span>
              )}
              <div className="flex gap-1.5">
                {status === 'applied' ? (
                  <button
                    type="button"
                    onClick={() => onRevert(improvement.id)}
                    className="text-[11px] px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 inline-flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />撤销此 AI 修改
                  </button>
                ) : status === 'blocked-by-manual-edit' ? null : mapping.strategy === 'structured-path' ? (
                  <button
                    type="button"
                    onClick={() => onApply(improvement.id)}
                    className="text-[11px] px-2 py-1 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium inline-flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />采用修改
                  </button>
                ) : (
                  <span className="text-[10px] text-slate-400">不可用</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}