import React, { useEffect, useMemo, useRef } from 'react';
import { Download, Info } from 'lucide-react';
import type { ReviewSuggestion } from '../../types/review';

interface DocxReviewViewerProps {
  resumeText: string;
  filename: string;
  downloadUrl: string;
  suggestions: ReviewSuggestion[];
  activeId: string | null;
  onSelectSuggestion: (id: string) => void;
}

interface TextSegment {
  text: string;
  suggestion?: ReviewSuggestion;
  isHighlight: boolean;
}

export const DocxReviewViewer: React.FC<DocxReviewViewerProps> = ({
  resumeText,
  filename,
  downloadUrl,
  suggestions,
  activeId,
  onSelectSuggestion,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 收集并排序所有可高亮的文本区间（按起始位置升序，长区间优先）
  const segments = useMemo<TextSegment[]>(() => {
    if (!resumeText) return [];

    const locatedSuggestions = suggestions
      .filter(s => s.anchor.located && s.anchor.textRange)
      .sort((a, b) => {
        const rA = a.anchor.textRange!;
        const rB = b.anchor.textRange!;
        if (rA.start !== rB.start) return rA.start - rB.start;
        return (rB.end - rB.start) - (rA.end - rA.start);
      });

    // 过滤掉重叠区间
    const validIntervals: Array<{ start: number; end: number; suggestion: ReviewSuggestion }> = [];
    let lastEnd = 0;
    for (const s of locatedSuggestions) {
      const { start, end } = s.anchor.textRange!;
      if (start >= lastEnd) {
        validIntervals.push({ start, end, suggestion: s });
        lastEnd = end;
      }
    }

    // 将原始文本切割为高亮片段与普通文本片段
    const result: TextSegment[] = [];
    let currentIndex = 0;

    for (const interval of validIntervals) {
      if (interval.start > currentIndex) {
        result.push({
          text: resumeText.slice(currentIndex, interval.start),
          isHighlight: false,
        });
      }
      result.push({
        text: resumeText.slice(interval.start, interval.end),
        suggestion: interval.suggestion,
        isHighlight: true,
      });
      currentIndex = interval.end;
    }

    if (currentIndex < resumeText.length) {
      result.push({
        text: resumeText.slice(currentIndex),
        isHighlight: false,
      });
    }

    return result;
  }, [resumeText, suggestions]);

  // 当外部选中的建议变更时，平滑滚动文档到对应的高亮位置并高光提示
  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    const highlightEl = containerRef.current.querySelector<HTMLElement>(
      `[data-suggestion-id="${activeId}"]`
    );
    if (highlightEl) {
      highlightEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeId]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* 明确标注语义审阅视图状态栏 */}
      <div className="px-4 py-2.5 bg-amber-50/70 dark:bg-amber-950/30 border-b border-amber-200/60 dark:border-amber-900/40 flex items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-300">
        <div className="flex items-center gap-2 min-w-0">
          <Info className="w-4 h-4 flex-shrink-0 text-amber-600" />
          <span className="truncate">
            当前为 DOCX <strong>语义审阅视图</strong>（基于内容提取，非 Word 原始版式编辑器）
          </span>
        </div>
        <a
          href={downloadUrl}
          download={filename}
          className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline font-medium flex-shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          下载原始 DOCX
        </a>
      </div>

      {/* 文本阅读与交互容器 */}
      <div
        ref={containerRef}
        className="flex-1 p-6 overflow-y-auto font-sans leading-relaxed text-slate-800 dark:text-slate-200 select-text whitespace-pre-wrap text-sm"
      >
        {segments.map((seg, idx) => {
          if (!seg.isHighlight || !seg.suggestion) {
            return <span key={idx}>{seg.text}</span>;
          }

          const isCurrentActive = seg.suggestion.id === activeId;
          const priority = seg.suggestion.improvement.priority;
          const bgClass =
            priority === '高'
              ? 'bg-rose-100 dark:bg-rose-950/60 border-b-2 border-rose-500'
              : priority === '中'
              ? 'bg-amber-100 dark:bg-amber-950/60 border-b-2 border-amber-500'
              : 'bg-emerald-100 dark:bg-emerald-950/60 border-b-2 border-emerald-500';

          return (
            <mark
              key={idx}
              data-suggestion-id={seg.suggestion.id}
              onClick={() => onSelectSuggestion(seg.suggestion!.id)}
              className={`rounded px-1 py-0.5 transition-all cursor-pointer inline ${bgClass} ${
                isCurrentActive
                  ? 'ring-2 ring-primary-500 shadow-sm bg-primary-200 dark:bg-primary-900/70'
                  : 'hover:opacity-80'
              }`}
              title={`点击查看 AI 建议: ${seg.suggestion.improvement.title}`}
            >
              {seg.text}
              <span className="inline-flex items-center justify-center ml-1 px-1 py-0.2 text-[10px] font-bold rounded bg-slate-800 text-white dark:bg-white dark:text-slate-900 select-none align-top">
                AI
              </span>
            </mark>
          );
        })}
      </div>
    </div>
  );
};
