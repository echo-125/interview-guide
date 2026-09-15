import { CheckCircle2, HelpCircle, XCircle } from 'lucide-react';
import { EVIDENCE_LABELS, type EvidenceLevel } from '../types/optimization';

const STYLES: Record<EvidenceLevel, { cls: string; Icon: typeof CheckCircle2 }> = {
  confirmed: {
    cls: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
    Icon: CheckCircle2,
  },
  insufficient: {
    cls: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
    Icon: HelpCircle,
  },
  missing: {
    cls: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
    Icon: XCircle,
  },
};

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  /** 悬浮说明，默认使用标准文案 */
  title?: string;
}

/**
 * 证据等级标签：区分「已确认 / 证据不足 / 未发现」
 * 用轻量小标签实现，避免增加视觉复杂度
 */
export default function EvidenceBadge({ level, title }: EvidenceBadgeProps) {
  const style = STYLES[level];
  const { Icon } = style;

  return (
    <span
      title={title ?? EVIDENCE_LABELS[level]}
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[10px] font-medium flex-shrink-0 ${style.cls}`}
    >
      <Icon className="w-3 h-3" />
      {EVIDENCE_LABELS[level]}
    </span>
  );
}
