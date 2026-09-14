import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, Copy, Download, Sparkles } from 'lucide-react';
import { useToast } from './Toast';
import { downloadTextFile } from '../utils/rewriteApply';

interface RewriteResultDialogProps {
  open: boolean;
  result: { rewrittenText: string; changeSummary: string } | null;
  filename: string;
  onClose: () => void;
}

/**
 * AI 整篇重写结果：修改概述 + 全文预览，支持复制/下载
 */
export default function RewriteResultDialog({ open, result, filename, onClose }: RewriteResultDialogProps) {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const changed = useMemo(() => result != null, [result]);
  const changedText = changed ? result!.rewrittenText : '';

  if (!open || !result) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(changedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      showToast('复制失败，请手动选择文本', 'error');
    }
  };

  const handleDownload = () => {
    const base = filename.replace(/\.[^.]+$/, '');
    downloadTextFile(changedText, `${base}_AI重写版.txt`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <motion.div
        className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="p-5 border-b border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-500" />
            AI 重写结果
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            AI 生成内容，请人工核对后再使用，确认无编造经历
          </p>
        </div>

        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {result.changeSummary && (
            <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-900 rounded-xl p-3">
              <p className="text-xs text-primary-600 dark:text-primary-400 mb-0.5 font-semibold">修改概述</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{result.changeSummary}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">重写后全文</p>
            <div className="max-h-72 overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              {changedText}
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            关闭
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            {copied ? '已复制' : '复制全文'}
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            下载重写版
          </button>
        </div>
      </motion.div>
    </div>
  );
}
