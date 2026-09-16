import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Check,
  ChevronDown,
  Loader2,
  RefreshCw,
  SkipForward,
  Sparkles,
  X,
} from 'lucide-react';
import DiffView from './DiffView';
import EvidenceBadge from './EvidenceBadge';
import type { Improvement, ImprovementStatus } from '../types/optimization';

interface ImprovementCardProps {
  item: Improvement;
  status: ImprovementStatus;
  /** 展示序号（Top3 区用 01/02/03） */
  ordinal?: number;
  /** 是否强调显示（第一条高优先级） */
  highlighted?: boolean;
  onRequestRewrite: () => void;
  onApply: () => void;
  onSkip: () => void;
  onReset: () => void;
}

/**
 * 单条优化项：统一 Agent 操作语言
 *
 * pending    → [AI 修改]
 * generating → 生成中
 * generated  → 展开 Diff → [采用] [重新生成] [跳过]
 * applied    → ✓ 已应用
 * skipped    → 已跳过（可恢复）
 */
export default function ImprovementCard({
  item,
  status,
  ordinal,
  highlighted = false,
  onRequestRewrite,
  onApply,
  onSkip,
  onReset,
}: ImprovementCardProps) {
  // 默认展开：用户点「AI 修改」后应立即看到结果，不需要再点一次「查看修改」
  const [expanded, setExpanded] = useState(true);

  const isApplied = status === 'applied';
  const isSkipped = status === 'skipped';
  const showDiff = expanded && status === 'generated';

  const borderCls = isApplied
    ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-900/10'
    : highlighted
      ? 'border-orange-200 dark:border-orange-800 bg-orange-50/40 dark:bg-orange-900/10'
      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800';

  return (
    <motion.div
      className={`rounded-xl border p-4 transition-colors ${borderCls}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start gap-3">
        {ordinal !== undefined && (
          <span
            className={`text-2xl font-black leading-none flex-shrink-0 ${
              highlighted
                ? 'text-orange-300 dark:text-orange-700'
                : 'text-slate-200 dark:text-slate-700'
            }`}
          >
            {String(ordinal).padStart(2, '0')}
          </span>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
            {item.estimatedGain > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                预计匹配度 +{item.estimatedGain}
              </span>
            )}
            <EvidenceBadge level={item.evidenceLevel} />
            {isApplied && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-white">
                <Check className="w-3 h-3" /> 已应用
              </span>
            )}
            {isSkipped && (
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                已跳过
              </span>
            )}
          </div>

          {item.currentProblem && (
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1.5">
                当前问题
              </span>
              {item.currentProblem}
            </p>
          )}

          {item.suggestion && item.suggestion !== item.currentProblem && (
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mr-1.5">
                AI 建议
              </span>
              {item.suggestion}
            </p>
          )}

          {/* 操作区：统一状态型交互 */}
          <div className="flex flex-wrap gap-2 mt-3">
            {status === 'pending' && (
              <button
                onClick={onRequestRewrite}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-500 text-white hover:bg-primary-600 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                AI 修改
              </button>
            )}

            {status === 'generating' && (
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 flex items-center gap-1.5">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                AI 生成中...
              </span>
            )}

            {status === 'generated' && (
              <>
                <button
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-colors flex items-center gap-1.5"
                >
                  {expanded ? '收起修改' : '查看修改'}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                <button
                  onClick={onReset}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  重新生成
                </button>
                <button
                  onClick={onSkip}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  跳过
                </button>
              </>
            )}

            {isSkipped && (
              <button
                onClick={onReset}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                恢复
              </button>
            )}

            {isApplied && (
              <button
                onClick={onReset}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                撤销
              </button>
            )}
          </div>

          {/* Diff 区：修改前 / 修改后 + 修改原因 + 采用 */}
          <AnimatePresence initial={false}>
            {showDiff && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-center">
                    <ArrowDown className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  </div>

                  {item.suggestedText ? (
                    <DiffView before={item.originalText} after={item.suggestedText} />
                  ) : (
                    // 无可用改写时不展示空 Diff，改为占位提示，避免 AI 编造经历
                    <div className="rounded-lg p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                      <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                        未找到可直接替换的改写。为避免编造你的真实经历，请按下方建议手动补充真实数据。
                      </p>
                    </div>
                  )}

                  {item.reasons.length > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-900/40 rounded-lg p-2.5">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        修改原因
                      </p>
                      <ul className="space-y-0.5">
                        {item.reasons.map((reason, i) => (
                          <li
                            key={i}
                            className="text-xs text-emerald-600 dark:text-emerald-400 flex items-start gap-1"
                          >
                            <span className="flex-shrink-0">+</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      onClick={onApply}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition-colors flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      采用修改
                    </button>
                    <button
                      onClick={onSkip}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <X className="w-3.5 h-3.5" />
                      不采用
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
