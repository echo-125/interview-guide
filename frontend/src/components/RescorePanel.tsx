import { motion } from 'framer-motion';
import { ArrowRight, FileText, RotateCcw, TrendingUp } from 'lucide-react';
import type { RescoreResult } from '../types/optimization';
import { getScoreTextColor } from '../utils/score';

interface RescorePanelProps {
  result: RescoreResult;
  onReset: () => void;
  /**
   * 已采用项可直接落全文的数量。
   * 大于 0 时展示「应用到简历全文」——这是闭环的收口动作：
   * 用户确认过的修改必须能真正写回底稿，而不是只停留在分数变化上。
   */
  appliableCount?: number;
  onApplyAll?: () => void;
}

/**
 * 重新评分结果：总分变化 + 逐维度变化
 *
 * 每一项提升都可追溯到具体采用的优化项（appliedCount），
 * 不做无来源的分数承诺。
 */
export default function RescorePanel({
  result,
  onReset,
  appliableCount = 0,
  onApplyAll,
}: RescorePanelProps) {
  const changedDimensions = result.dimensions.filter(d => d.delta > 0);

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <span className="font-semibold">优化后评分</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            基于已应用的 {result.appliedCount} 项修改
          </span>
        </div>
        <button
          onClick={onReset}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          重置
        </button>
      </div>

      {/* 总分变化 */}
      <div className="flex items-center gap-5 p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl mb-4">
        <div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">原评分</p>
          <p className="text-3xl font-bold text-slate-400 dark:text-slate-500">
            {result.beforeTotal}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-600" />
        <div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">优化后</p>
          <p className={`text-3xl font-bold ${getScoreTextColor(result.afterTotal)}`}>
            {result.afterTotal}
          </p>
        </div>
        {result.totalDelta > 0 && (
          <span className="ml-auto px-3 py-1.5 rounded-full text-sm font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
            +{result.totalDelta}
          </span>
        )}
      </div>

      {/* 逐维度变化 */}
      {changedDimensions.length > 0 && (
        <div className="space-y-2">
          {changedDimensions.map(d => (
            <div
              key={d.dimension}
              className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg bg-slate-50/60 dark:bg-slate-900/30"
            >
              <span className="text-slate-600 dark:text-slate-300 flex-1">{d.label}</span>
              <span className="text-slate-400 dark:text-slate-500 tabular-nums">{d.before}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
              <span className="font-semibold text-slate-900 dark:text-white tabular-nums">
                {d.after}
              </span>
              <span className="text-xs text-slate-400">/ {d.maxScore}</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-10 text-right tabular-nums">
                +{d.delta}
              </span>
            </div>
          ))}
        </div>
      )}

      {result.cappedGain > 0 && (
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
          另有约 {result.cappedGain} 分估算增益因单次修改无法完全填补维度缺口而未计入。
        </p>
      )}

      {/* 闭环收口：把确认过的修改写回简历全文 */}
      {onApplyAll && (
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center gap-3 flex-wrap">
          <button
            onClick={onApplyAll}
            disabled={appliableCount === 0}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            应用到简历全文
            {appliableCount > 0 && <span className="text-emerald-100">（{appliableCount} 处）</span>}
          </button>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {appliableCount > 0
              ? '按原句精确替换，生成可下载的优化版全文'
              : '已采用的项暂无可精确替换的原句，可按卡片建议手动补充'}
          </p>
        </div>
      )}
    </motion.div>
  );
}
