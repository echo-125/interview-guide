import React, { useMemo, useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import type { AnalysisItem, ResumeDetail } from '../../api/history';
import { buildImprovements } from '../../utils/improvements';
import { locateQuoteInText } from '../../utils/anchorMatcher';
import { APPLY_FAILURE_TEXT } from '../../utils/workingDraft';
import { REVERT_FAILURE_TEXT } from '../../utils/workingDocument';
import type { ReviewSuggestion } from '../../types/review';
import { useWorkingDocument } from '../../hooks/useWorkingDocument';
import { useToast } from '../Toast';
import { PdfReviewViewer } from './PdfReviewViewer';
import { DocxReviewViewer } from './DocxReviewViewer';
import { AiReviewSidebar } from './AiReviewSidebar';
import { SemanticDraftEditor } from './SemanticDraftEditor';
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
  const { showToast } = useToast();
  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(null);
  /** 左侧视图：原文审阅（PDF.js 高亮 / DOCX 语义审阅） 或 工作版本（可编辑编辑器） */
  const [leftView, setLeftView] = useState<'original' | 'draft'>('original');

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

  // 2. Working Document：可编辑工作版本（revision history + appliedSuggestions，仅前端 session）
  const workingDoc = useWorkingDocument(resumeText, suggestions);

  // 3. 采用 AI 修改：成功则自动切换到「工作版本」视图
  const handleApply = (id: string) => {
    const result = workingDoc.apply(id);
    if (result.ok) {
      setLeftView('draft');
      return;
    }
    if (result.reason) {
      showToast(APPLY_FAILURE_TEXT[result.reason] || '无法自动应用该修改', 'error');
    }
  };

  // 4. AI 建议级撤销：局部安全替换；被阻止（区域已被手动修改）时明确提示，绝不覆盖
  const handleSuggestionUndo = (id: string) => {
    const result = workingDoc.revertSuggestion(id);
    if (!result.ok && result.reason) {
      showToast(REVERT_FAILURE_TEXT[result.reason] || '无法撤销该修改', 'error');
    }
  };

  // 5. 撤销全部 AI 修改（人工修改保留）
  const handleUndoAllAI = () => {
    const result = workingDoc.undoAllAI();
    if (result.reverted === 0 && result.blocked.length === 0) return;
    if (result.blocked.length > 0) {
      showToast(
        `已撤销 ${result.reverted} 条；${result.blocked.length} 条因区域已被手动修改而保留`,
        'error'
      );
    } else {
      showToast(`已撤销 ${result.reverted} 条 AI 修改`, 'success');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[78vh] w-full min-h-[550px]">
      {/* 左侧：文档审阅主视口 (占宽约 66%) */}
      <div className="flex-1 h-full min-w-0 flex flex-col gap-2">
        {/* 视图模式切换：原文审阅 / 工作版本 */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-700/80 rounded-xl w-fit flex-shrink-0">
          <button
            type="button"
            onClick={() => setLeftView('original')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              leftView === 'original'
                ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            原文审阅
          </button>
          <button
            type="button"
            onClick={() => setLeftView('draft')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              leftView === 'draft'
                ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            工作版本
            {workingDoc.aiAppliedCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                {workingDoc.aiAppliedCount}
              </span>
            )}
          </button>
        </div>

        {/* 视图内容：原文审阅与工作版本数据完全隔离 */}
        {leftView === 'original' ? (
          isPdf ? (
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
          )
        ) : (
          <SemanticDraftEditor
            currentText={workingDoc.currentText}
            appliedList={workingDoc.appliedList}
            aiAppliedCount={workingDoc.aiAppliedCount}
            manualEditCount={workingDoc.manualEditCount}
            canUndo={workingDoc.canUndo}
            canRedo={workingDoc.canRedo}
            onManualEdit={workingDoc.manualEdit}
            onUndo={workingDoc.undo}
            onRedo={workingDoc.redo}
            onRevertSuggestion={handleSuggestionUndo}
          />
        )}
      </div>

      {/* 右侧：AI 审阅建议侧边栏 (占宽约 34%) */}
      <div className="w-full lg:w-96 xl:w-[420px] h-full flex-shrink-0">
        <AiReviewSidebar
          suggestions={suggestions}
          activeId={activeSuggestionId}
          onSelectSuggestion={setActiveSuggestionId}
          aiAppliedCount={workingDoc.aiAppliedCount}
          manualEditCount={workingDoc.manualEditCount}
          stateOf={workingDoc.stateOf}
          reasonOf={workingDoc.unavailableReasonOf}
          onUndoAllAI={handleUndoAllAI}
          onApplySuggestion={handleApply}
          onUndoSuggestion={handleSuggestionUndo}
        />
      </div>
    </div>
  );
};
