import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, XCircle, AlertCircle } from 'lucide-react';
import type { DimensionExplanation, Evidence } from '../types/resume';

const DIMENSION_LABELS: Record<string, string> = {
  project: '项目经验',
  skillMatch: '技能匹配',
  content: '内容完整性',
  structure: '结构清晰度',
  expression: '表达专业性',
};

function statusBadge(status: string | null | undefined) {
  if (status === '已确认') {
    return { icon: <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />, cls: 'text-emerald-600 dark:text-emerald-400' };
  }
  if (status === '缺失') {
    return { icon: <XCircle className="w-3.5 h-3.5 flex-shrink-0" />, cls: 'text-red-500 dark:text-red-400' };
  }
  return { icon: <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />, cls: 'text-amber-600 dark:text-amber-400' };
}

function EvidenceRow({ evidence }: { evidence: Evidence }) {
  const badge = statusBadge(evidence.status);
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className={badge.cls}>{badge.icon}</span>
      <span className={`text-slate-700 dark:text-slate-300 ${badge.cls}`}>{evidence.item}</span>
      {evidence.status && (
        <span className={`text-xs flex-shrink-0 ${badge.cls}`}>({evidence.status})</span>
      )}
      {evidence.note && (
        <span className="text-xs text-slate-400 dark:text-slate-500">{evidence.note}</span>
      )}
    </div>
  );
}

interface ScoreExplanationCardProps {
  explanations: DimensionExplanation[];
}

/**
 * 可解释评分卡：每个维度一行（得分/满分 + 对总分影响），点击展开证据链
 */
export default function ScoreExplanationCard({ explanations }: ScoreExplanationCardProps) {
  const [openDimension, setOpenDimension] = useState<string | null>(null);

  if (!explanations || explanations.length === 0) return null;

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-slate-500 dark:text-slate-400">评分解读</span>
        <span className="text-xs text-slate-400 dark:text-slate-500">点击维度展开证据</span>
      </div>

      <div className="space-y-2">
        {explanations.map((dim, i) => {
          const label = DIMENSION_LABELS[dim.dimension] || dim.dimension;
          const isOpen = openDimension === dim.dimension;
          return (
            <div
              key={dim.dimension + i}
              className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenDimension(isOpen ? null : dim.dimension)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
              >
                <span className="font-medium text-slate-900 dark:text-white flex-1">{label}</span>
                <span className="text-sm text-slate-600 dark:text-slate-300 flex-shrink-0">
                  <span className="font-bold text-slate-900 dark:text-white">{dim.score}</span>
                  <span className="text-slate-400"> / {dim.maxScore}</span>
                </span>
                {dim.impactOnTotal > 0 && (
                  <span className="text-xs font-semibold text-red-500 dark:text-red-400 flex-shrink-0">
                    −{dim.impactOnTotal} 分
                  </span>
                )}
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 rotate-[-90deg]" />
                )}
              </button>

              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-4 pb-3 pt-1 border-t border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/30"
                >
                  {dim.explanation && (
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2 mt-2">{dim.explanation}</p>
                  )}
                  {dim.evidences && dim.evidences.length > 0 ? (
                    <div className="space-y-1.5">
                      {dim.evidences.map((e, j) => (
                        <EvidenceRow key={j} evidence={e} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400">暂无证据明细</p>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
