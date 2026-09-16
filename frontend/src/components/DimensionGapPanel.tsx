import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target } from 'lucide-react';
import { DIMENSION_META, type ScoreDimension } from '../types/optimization';
import { getScoreProgressColor } from '../utils/score';

interface DimensionGapPanelProps {
  /** 各维度得分 */
  scores: Partial<Record<ScoreDimension, number>>;
  /** 维度 → 主要缺口一句话解释 */
  gapByDimension: Partial<Record<ScoreDimension, string>>;
  /** 维度 → 展开后的证据明细 */
  detailsByDimension: Partial<Record<ScoreDimension, string[]>>;
}

/**
 * 维度评分 + 最大缺口
 *
 * 语言从「扣了多少分」转为「为什么是这个分数」：
 *   项目经验 20 / 40
 *   主要缺口：成果量化   ← 点击展开具体缺口
 */
export default function DimensionGapPanel({
  scores,
  gapByDimension,
  detailsByDimension,
}: DimensionGapPanelProps) {
  // 默认全部展开「具体缺口」，点击可单独收起。
  // 这里存「已收起」而不是「已展开」：分析数据是异步到达的，
  // 若初始化时按有明细的维度计算展开集合，数据晚到会得到空集合而全部折叠。
  const [collapsed, setCollapsed] = useState<Set<ScoreDimension>>(new Set());

  // 按缺口比例从大到小排序，最大缺口置顶
  const ordered = (Object.keys(DIMENSION_META) as ScoreDimension[]).sort((a, b) => {
    const gapA = DIMENSION_META[a].maxScore - (scores[a] ?? 0);
    const gapB = DIMENSION_META[b].maxScore - (scores[b] ?? 0);
    return gapB - gapA;
  });

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
        <Target className="w-5 h-5" />
        <span className="font-semibold">分项评分与最大缺口</span>
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
        默认展开具体缺口，点击维度可收起
      </p>

      <div className="space-y-2">
        {ordered.map(dimension => {
          const meta = DIMENSION_META[dimension];
          const score = scores[dimension] ?? 0;
          const gap = meta.maxScore - score;
          const gapRatio = meta.maxScore > 0 ? Math.round((gap / meta.maxScore) * 100) : 0;
          const isOpen = !collapsed.has(dimension);
          const details = detailsByDimension[dimension] ?? [];
          const hasDetail = details.length > 0;

          return (
            <div
              key={dimension}
              className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() =>
                  setCollapsed(prev => {
                    const next = new Set(prev);
                    if (next.has(dimension)) {
                      next.delete(dimension);
                    } else {
                      next.add(dimension);
                    }
                    return next;
                  })
                }
                aria-expanded={hasDetail ? isOpen : undefined}
                className="w-full px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-slate-900 dark:text-white flex-1">
                    {meta.label}
                  </span>
                  <span className="text-sm flex-shrink-0">
                    <span className="font-bold text-slate-900 dark:text-white">{score}</span>
                    <span className="text-slate-400"> / {meta.maxScore}</span>
                  </span>
                  {hasDetail && (
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getScoreProgressColor(
                        meta.maxScore > 0 ? (score / meta.maxScore) * 100 : 0
                      )} rounded-full transition-all`}
                      style={{ width: `${meta.maxScore > 0 ? (score / meta.maxScore) * 100 : 0}%` }}
                    />
                  </div>
                  {gap > 0 && gapByDimension[dimension] ? (
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                      主要缺口：
                      <span className="text-orange-600 dark:text-orange-400 font-medium">
                        {gapByDimension[dimension]}
                      </span>
                    </span>
                  ) : gap > 0 ? (
                    <span className="text-xs text-slate-400 flex-shrink-0">
                      缺口 {gapRatio}%
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      已满
                    </span>
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && hasDetail && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-3 pt-1 border-t border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/30">
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-1.5 mt-1.5">
                        具体缺口
                      </p>
                      <ul className="space-y-1">
                        {details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-1.5"
                          >
                            <span className="text-orange-400 flex-shrink-0">·</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
