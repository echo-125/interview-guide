import React, { useMemo, useState } from 'react';
import type { AnalysisItem, ResumeDetail } from '../../api/history';
import { buildImprovements } from '../../utils/improvements';
import { locateQuoteInText } from '../../utils/anchorMatcher';
import type { ReviewSuggestion } from '../../types/review';
import { PdfReviewViewer } from './PdfReviewViewer';
import { DocxReviewViewer } from './DocxReviewViewer';
import { AiReviewSidebar } from './AiReviewSidebar';
import { historyApi } from '../../api/history';

interface DocumentReviewContainerProps {
  resume: ResumeDetail;
  analysis?: AnalysisItem;
  onFallbackToNative?: () => void;
}

function isPdfResume(resume: ResumeDetail): boolean {
  if (resume.contentType === 'application/pdf') return true;
  return !!resume.filename && resume.filename.toLowerCase().endsWith('.pdf');
}

export const DocumentReviewContainer: React.FC<DocumentReviewContainerProps> = ({
  resume,
  analysis,
  onFallbackToNative,
}) => {
  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(null);

  const isPdf = isPdfResume(resume);
  const fileUrl = historyApi.getResumeFileUrl(resume.id);
  const resumeText = resume.resumeText || '';

  // 1. 复用现存系统的 buildImprovements 提取所有诊断与建议，并结合 Anchor 引擎生成 ReviewSuggestion[]
  const suggestions = useMemo<ReviewSuggestion[]>(() => {
    if (!analysis) return [];

    // 获取清洗并结构化后的优化项
    const baseImprovements = buildImprovements(analysis);

    return baseImprovements.map((imp, idx) => {
      const quote = imp.originalText || '';
      // 使用统一算法进行锚点匹配定位
      const anchor = locateQuoteInText(resumeText, quote, {
        prefix: imp.currentProblem,
      });

      return {
        id: `sugg-${imp.id || idx}`,
        improvement: imp,
        anchor,
      };
    });
  }, [analysis, resumeText]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[78vh] w-full min-h-[550px]">
      {/* 左侧：文档审阅主视口 (占宽约 66%) */}
      <div className="flex-1 h-full min-w-0">
        {isPdf ? (
          <PdfReviewViewer
            fileUrl={fileUrl}
            filename={resume.filename}
            suggestions={suggestions}
            activeId={activeSuggestionId}
            onSelectSuggestion={setActiveSuggestionId}
            onFallbackToNative={onFallbackToNative}
          />
        ) : (
          <DocxReviewViewer
            resumeText={resumeText}
            filename={resume.filename}
            downloadUrl={fileUrl}
            suggestions={suggestions}
            activeId={activeSuggestionId}
            onSelectSuggestion={setActiveSuggestionId}
          />
        )}
      </div>

      {/* 右侧：AI 审阅建议侧边栏 (占宽约 34%) */}
      <div className="w-full lg:w-96 xl:w-[420px] h-full flex-shrink-0">
        <AiReviewSidebar
          suggestions={suggestions}
          activeId={activeSuggestionId}
          onSelectSuggestion={setActiveSuggestionId}
        />
      </div>
    </div>
  );
};
