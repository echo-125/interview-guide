import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import type { EvidenceLevel } from '../types/optimization';

export interface CapabilityGap {
  /** 缺口名称 */
  name: string;
  /** 当前状态描述，如「较弱」「不足」「一般」 */
  current: string;
  /** 证据等级 */
  level: EvidenceLevel;
  /** 岗位重要度，用于排序与强调 */
  importance?: '高' | '中' | '低';
}

const LEVEL_STYLES: Record<EvidenceLevel, { dot: string; text: string }> = {
  missing: { dot: 'bg-red-500', text: 'text-red-600 dark:text-red-400' },
  insufficient: { dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
  confirmed: { dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
};

interface CapabilityGapCardProps {
  gaps: CapabilityGap[];
}

/**
 * 能力缺口：替代大体积雷达图的实用组件
 *
 * 按严重度排序（未发现 → 证据不足 → 已确认），
 * 明确区分「简历没写」与「写了但证据不足」，避免把推测当事实。
 */
export default function CapabilityGapCard({ gaps }: CapabilityGapCardProps) {
  if (gaps.length === 0) return null;

  const order: Record<EvidenceLevel, number> = {
    missing: 0,
    insufficient: 1,
    confirmed: 2,
  };
  const sorted = [...gaps].sort((a, b) => order[a.level] - order[b.level]);

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4">
        <AlertTriangle className="w-5 h-5 text-orange-500" />
        <span className="font-semibold">能力缺口</span>
        <span className="text-xs text-slate-400 dark:text-slate-500">按严重度排序</span>
      </div>

      <div className="space-y-2.5">
        {sorted.map((gap, i) => {
          const style = LEVEL_STYLES[gap.level];
          return (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/30"
            >
              <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${style.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {gap.name}
                  </span>
                  {gap.importance && (
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      岗位重要度：{gap.importance}
                    </span>
                  )}
                </div>
                <p className={`text-xs ${style.text}`}>当前：{gap.current}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
