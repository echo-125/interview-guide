import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ExternalLink, Eye, FileText, Sparkles, Wand2 } from 'lucide-react';
import { historyApi, type AnalysisItem, type ResumeDetail } from '../api/history';
import { DocumentReviewContainer } from './resume-review/DocumentReviewContainer';

interface ResumePreviewPanelProps {
  resume: ResumeDetail;
  analysis?: AnalysisItem;
}

function isPdfResume(resume: ResumeDetail): boolean {
  if (resume.contentType === 'application/pdf') return true;
  return !!resume.filename && resume.filename.toLowerCase().endsWith('.pdf');
}

function formatFileSize(bytes: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * 简历预览与审阅主面板
 * 支持「原文件预览」与「AI 审阅（高亮批注与建议联动）」双模式无缝切换
 */
export default function ResumePreviewPanel({ resume, analysis }: ResumePreviewPanelProps) {
  const fileUrl = historyApi.getResumeFileUrl(resume.id);
  const navigate = useNavigate();
  const isPdf = isPdfResume(resume);

  const effectiveAnalysis = analysis || resume.analyses?.[0];
  const hasAnalysis = !!effectiveAnalysis;

  // 默认模式：如果有分析结果，默认进入 AI 审阅模式，否则进入原文件预览
  const [viewMode, setViewMode] = useState<'review' | 'native'>(
    hasAnalysis ? 'review' : 'native'
  );

  return (
    <div className="space-y-4">
      {/* 顶部工具栏与模式切换 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3 shadow-sm border border-slate-100 dark:border-slate-700/60">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-medium text-slate-900 dark:text-white truncate">{resume.filename}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isPdf ? 'PDF 文档' : 'Word / 文本简历'}
              {resume.fileSize ? ` · ${formatFileSize(resume.fileSize)}` : ''}
            </p>
          </div>
        </div>

        {/* 模式切换 Switch 与 操作按钮 */}
        <div className="flex items-center gap-2 flex-wrap">
          {hasAnalysis && (
            <div className="flex p-1 bg-slate-100 dark:bg-slate-700/80 rounded-xl mr-2">
              <button
                onClick={() => setViewMode('review')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'review'
                    ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                AI 审阅批注
              </button>
              <button
                onClick={() => setViewMode('native')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'native'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                原文件预览
              </button>
            </div>
          )}

          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            新窗口打开
          </a>
          <a
            href={fileUrl}
            download={resume.filename}
            className="px-3.5 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            下载原文件
          </a>
          <button
            type="button"
            onClick={() => navigate(`/history/${resume.id}/builder`)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold shadow-sm hover:from-primary-600 hover:to-primary-700 transition-all flex items-center gap-1.5"
            title="把真实简历转换为结构化文档并进入结构化编辑器（不修改原始文件）"
          >
            <Wand2 className="w-3.5 h-3.5" />
            编辑简历
          </button>
        </div>
      </div>

      {/* 视图内容分发 */}
      {viewMode === 'review' && hasAnalysis ? (
        <DocumentReviewContainer
          resume={resume}
          analysis={effectiveAnalysis}
          onFallbackToNative={() => setViewMode('native')}
        />
      ) : (
        /* 原文件预览模式：100% 保持既有行为与兜底 */
        <>
          {isPdf ? (
            <iframe
              src={fileUrl}
              title="简历预览"
              className="w-full h-[75vh] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white"
            />
          ) : resume.resumeText ? (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-amber-600 dark:text-amber-400 mb-4">
                非 PDF 简历暂不支持原版式预览，以下为解析提取的文本内容，可通过「下载原文件」查看原版式。
              </p>
              <div className="max-h-[70vh] overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300 font-mono">
                {resume.resumeText}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-700">
              <FileText className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <p className="text-slate-500 dark:text-slate-400">暂无可预览的简历内容，请尝试下载原文件</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
