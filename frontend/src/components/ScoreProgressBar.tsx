import {motion} from 'framer-motion';
import {calculatePercentage} from '../utils/score';

interface ScoreProgressBarProps {
  label: string;
  score: number;
  maxScore: number;
  color?: string;
  delay?: number;
  className?: string;
}

/**
 * 分数进度条组件
 *
 * 【保留说明】本组件当前未被引用。简历分析页的分项评分已改用
 * DimensionGapPanel，后者把进度条与「主要缺口」文案合并到同一行，
 * 信息密度更高；且不再需要外部逐条传入 color/delay。
 * 保留原因：单条分数的独立展示（如面试 evaluatedimension、导出报告）
 * 仍可能复用。props 契约未变。
 */
export default function ScoreProgressBar({
  label,
  score,
  maxScore,
  color = 'bg-primary-500',
  delay = 0,
  className = ''
}: ScoreProgressBarProps) {
  const percentage = calculatePercentage(score, maxScore);

  return (
      <div className={`bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 ${className}`}>
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">{label}</div>
      <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${color} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, delay }}
          />
        </div>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 w-8 text-right">
          {score}/{maxScore}
        </span>
      </div>
    </div>
  );
}
