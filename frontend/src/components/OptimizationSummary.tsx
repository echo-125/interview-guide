import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Info, Sparkles, Target, TrendingUp } from 'lucide-react';
import { getScoreTextColor } from '../utils/score';

/** 决策区只展示最关键的几条，完整列表留给深度诊断层 */
const STRENGTH_LIMIT = 4;
const RISK_LIMIT = 3;

interface OptimizationSummaryProps {
  /** 当前总分 */
  score: number;
  /** 预计优化后区间 [下限, 上限] */
  potentialRange: [number, number] | null;
  /** 区间依据：参与估算的条目（标题 + 单项预估提升） */
  rangeBasis?: Array<{ title: string; gain: number }>;
  /** 一句话结论 */
  headline: string;
  /** 一段话总结 */
  summary: string;
  /** 最大影响因素标签 */
  impactFactors: string[];
  strengths: string[];
  risks: string[];
  /** 核心 CTA */
  onOptimize: () => void;
  optimizing: boolean;
  /** 已应用修改数 */
  appliedCount: number;
}

/**
 * 30 秒决策区：当前分 / 预计提升 / 最大影响因素 / 核心 CTA
 *
 * 设计上把「行动感」放在最前：
 * 第一行一句话结论，第二行最大影响因素，分数与 CTA 并列，
 * 优势与风险退到次要位置。
 */
export default function OptimizationSummary({
  score,
  potentialRange,
  rangeBasis = [],
  headline,
  summary,
  impactFactors,
  strengths,
  risks,
  onOptimize,
  optimizing,
  appliedCount,
}: OptimizationSummaryProps) {
  // 默认收起依据明细：它是「为什么是这个区间」的解释，不是决策所需信息
  const [basisOpen, setBasisOpen] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* 第一行：一句话结论 */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <span className="font-semibold">AI 结论</span>
        </div>
        {headline && (
          <p className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
            {headline}
          </p>
        )}
        {summary && (
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
            {summary}
          </p>
        )}
      </div>

      {/* 第二行：分数 + 预计提升 + CTA */}
      <div className="flex flex-wrap items-end gap-6 p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl mb-3">
        <div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
            当前匹配度
          </p>
          <p className="flex items-baseline gap-1">
            <span className={`text-4xl font-bold ${getScoreTextColor(score)}`}>{score}</span>
            <span className="text-sm text-slate-400">/ 100</span>
          </p>
        </div>

        {potentialRange && (
          <>
            <div className="text-slate-300 dark:text-slate-600 pb-2">→</div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-0.5">
                预计优化后
              </p>
              <p className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-emerald-500">
                  {potentialRange[0]}~{potentialRange[1]}
                </span>
              </p>
            </div>
          </>
        )}

        <div className="ml-auto">
          <button
            onClick={onOptimize}
            disabled={optimizing}
            className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {optimizing ? (
              <Sparkles className="w-4 h-4 animate-pulse" />
            ) : (
              <Target className="w-4 h-4" />
            )}
            {optimizing ? '优化中...' : '一键优化 Top 3'}
          </button>
          {appliedCount > 0 && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1.5 text-center">
              已应用 {appliedCount} 项修改
            </p>
          )}
        </div>
      </div>

      {/* 预计提升依据：解释区间从哪来，避免看起来像凭空给的数字 */}
      {potentialRange && rangeBasis.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => setBasisOpen(!basisOpen)}
            className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            预计提升依据（{rangeBasis.length} 项，合计 +{rangeBasis.reduce((s, b) => s + b.gain, 0)}）
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${basisOpen ? 'rotate-180' : ''}`} />
          </button>

          {basisOpen && (
            <div className="mt-2 rounded-lg bg-slate-50/60 dark:bg-slate-900/30 px-3 py-2 space-y-1">
              {rangeBasis.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="text-slate-600 dark:text-slate-300 flex-1 min-w-0 truncate">
                    {b.title}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex-shrink-0 tabular-nums">
                    +{b.gain}
                  </span>
                </div>
              ))}
              <p className="text-xs text-slate-400 dark:text-slate-500 pt-1 border-t border-slate-200 dark:border-slate-700">
                下限按估算值的 8 折保守计，且不超过各维度剩余缺口
              </p>
            </div>
          )}
        </div>
      )}

      {/* 最大影响因素 */}
      {impactFactors.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            最大影响因素
          </p>
          <div className="flex flex-wrap gap-2">
            {impactFactors.map((factor, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800 rounded-lg text-xs font-medium"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 优势 / 风险：次要信息，各截断展示，避免长列表抬高信息密度 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {strengths.length > 0 && (
          <div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-2">
              👍 你的优势
              {strengths.length > STRENGTH_LIMIT && (
                <span className="text-slate-400 font-normal ml-1">
                  （{strengths.length} 项中前 {STRENGTH_LIMIT} 项）
                </span>
              )}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {strengths.slice(0, STRENGTH_LIMIT).map((s, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-lg"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
        {risks.length > 0 && (
          <div>
            <span className="text-xs font-semibold text-red-500 dark:text-red-400 block mb-2">
              ⚠️ 最大风险
              {risks.length > RISK_LIMIT && (
                <span className="text-slate-400 font-normal ml-1">
                  （{risks.length} 项中前 {RISK_LIMIT} 项）
                </span>
              )}
            </span>
            <ul className="space-y-1">
              {risks.slice(0, RISK_LIMIT).map((r, i) => (
                <li
                  key={i}
                  className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5"
                >
                  <span className="text-red-400 flex-shrink-0">·</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
