import { Download, ExternalLink, FileText } from 'lucide-react';
import { historyApi, type ResumeDetail } from '../api/history';

interface ResumePreviewPanelProps {
  resume: ResumeDetail;
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
 * 简历原文件预览面板
 * PDF 直接内嵌浏览器原生渲染；其他格式回退为 AI 提取的文本内容预览
 */
export default function ResumePreviewPanel({ resume }: ResumePreviewPanelProps) {
  const fileUrl = historyApi.getResumeFileUrl(resume.id);
  const isPdf = isPdfResume(resume);

  return (
    <div className="space-y-4">
      {/* 工具栏 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-medium text-slate-900 dark:text-white truncate">{resume.filename}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isPdf ? '原版式预览' : '文本预览（AI 提取内容）'}
              {resume.fileSize ? ` · ${formatFileSize(resume.fileSize)}` : ''}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            <ExternalLink className="w-4 h-4" />
            新窗口打开
          </a>
          <a
            href={fileUrl}
            download={resume.filename}
            className="px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            下载原文件
          </a>
        </div>
      </div>

      {/* 预览内容 */}
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
    </div>
  );
}
