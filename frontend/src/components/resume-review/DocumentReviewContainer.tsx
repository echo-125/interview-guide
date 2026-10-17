import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilePenLine, Loader2 } from 'lucide-react';
import type { AnalysisItem, ResumeDetail } from '../../api/history';
import { buildImprovements } from '../../utils/improvements';
import { locateQuoteInText } from '../../utils/anchorMatcher';
import type { ReviewSuggestion } from '../../types/review';
import { useAuthedBlobUrl } from '../../hooks/useAuthedBlobUrl';
import { PdfReviewViewer } from './PdfReviewViewer';
import { DocxReviewViewer } from './DocxReviewViewer';
import { AiReviewSidebar } from './AiReviewSidebar';

interface DocumentReviewContainerProps {
  resume: ResumeDetail;
  analysis?: AnalysisItem;
  onFallbackToNative?: () => void;
}

function isPdfResume(resume: ResumeDetail): boolean {
  if (resume.contentType === 'application/pdf') return true;
  return !!resume.filename && resume.filename.toLowerCase().endsWith('.pdf');
}

/**
 * 原文审阅容器（文本版工作版本退役后仅保留审阅能力）
 *
 * 左侧：原文审阅（PDF.js 高亮 / DOCX 语义审阅），点击建议卡片高亮定位原文；
 * 右侧：AI 建议列表（只读展示）。
 * 采用/撤销/编辑由「编辑简历」入口（/history/:id/builder）的结构化编辑器承接。
 */
export const DocumentReviewContainer: React.FC<DocumentReviewContainerProps> = ({
  resume,
  analysis,
  onFallbackToNative,
}) => {
  const navigate = useNavigate();
  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(null);

  const isPdf = isPdfResume(resume);
  const resumeText = resume.resumeText || '';

  // 审阅视图要把原文件交给 PDF.js 按 URL 加载、以及下载按钮的 a[href]，
  // 两者都是「浏览器直连」、无法携带 satoken 请求头（会 401），
  // 因此统一先经 axios 取回 Blob 再转 blob: URL。
  const { blobUrl: fileUrl, error: fileError } = useAuthedBlobUrl(
    `/api/resumes/${resume.id}/file`
  );

  // 复用现有 buildImprovements 提取诊断与建议，并结合 Anchor 引擎生成 ReviewSuggestion[]
  const suggestions = useMemo<ReviewSuggestion[]>(() => {
    if (!analysis) return [];

    const baseImprovements = buildImprovements(analysis);

    return baseImprovements.map((imp, idx) => {
      const quote = imp.originalText || '';
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

  const openEditor = () => navigate(`/history/${resume.id}/builder`);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[78vh] w-full min-h-[550px]">
      {/* 左侧：原文审阅主视口 (占宽约 66%) */}
      <div className="flex-1 h-full min-w-0 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2 flex-shrink-0">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            原文审阅 · 点击建议卡片在下方文档中高亮定位
          </p>
          <button
            type="button"
            onClick={openEditor}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold shadow-sm hover:from-primary-600 hover:to-primary-700 transition-all flex items-center gap-1.5"
            title="进入结构化编辑器，采用修改 / 手动编辑 / 撤销"
          >
            <FilePenLine className="w-3.5 h-3.5" />
            在编辑器中修改
          </button>
        </div>

        {fileError ? (
          <div className="flex-1 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">原文件加载失败：{fileError}</p>
          </div>
        ) : !fileUrl ? (
          <div className="flex-1 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <Loader2 className="w-6 h-6 text-primary-500 animate-spin" />
          </div>
        ) : isPdf ? (
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

      {/* 右侧：AI 审阅建议侧边栏 (占宽约 34%，只读) */}
      <div className="w-full lg:w-96 xl:w-[420px] h-full flex-shrink-0">
        <AiReviewSidebar
          suggestions={suggestions}
          activeId={activeSuggestionId}
          onSelectSuggestion={setActiveSuggestionId}
          readonly
        />
      </div>
    </div>
  );
};
