import { useMemo } from 'react';
import { charDiff, beforeSegments, afterSegments, type DiffSegment } from '../utils/diff';

interface DiffViewProps {
  before: string;
  after: string;
}

function SegmentLine({ segments }: { segments: DiffSegment[] }) {
  return (
    <>
      {segments.map((seg, i) => {
        if (seg.type === 'same') return <span key={i}>{seg.text}</span>;
        if (seg.type === 'del') {
          return (
            <span key={i} className="bg-red-200/70 dark:bg-red-500/30 text-red-700 dark:text-red-300 rounded px-0.5">
              {seg.text}
            </span>
          );
        }
        return (
          <span key={i} className="bg-emerald-200/70 dark:bg-emerald-500/30 text-emerald-700 dark:text-emerald-300 rounded px-0.5">
            {seg.text}
          </span>
        );
      })}
    </>
  );
}

/**
 * 代码 Review 风格的前后对比：− 修改前（删除片段红底）/ + 修改后（新增片段绿底）
 */
export default function DiffView({ before, after }: DiffViewProps) {
  const segments = useMemo(() => charDiff(before, after), [before, after]);

  return (
    <div className="space-y-1.5 font-mono text-[13px] leading-6">
      <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 rounded-lg p-2.5 border border-red-100 dark:border-red-900/50">
        <span className="text-red-500 dark:text-red-400 font-bold flex-shrink-0 select-none">−</span>
        <p className="text-slate-600 dark:text-slate-300 break-all">
          <SegmentLine segments={beforeSegments(segments)} />
        </p>
      </div>
      <div className="flex items-start gap-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2.5 border border-emerald-100 dark:border-emerald-900/50">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex-shrink-0 select-none">+</span>
        <p className="text-slate-700 dark:text-slate-200 break-all">
          <SegmentLine segments={afterSegments(segments)} />
        </p>
      </div>
    </div>
  );
}
