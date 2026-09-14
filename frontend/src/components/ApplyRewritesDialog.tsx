import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, Copy, Download } from 'lucide-react';
import DiffView from './DiffView';
import { useToast } from './Toast';
import { applyRewrites, downloadTextFile, type RewritePair } from '../utils/rewriteApply';

interface ApplyRewritesDialogProps {
  open: boolean;
  originalText: string;
  pairs: RewritePair[];
  filename: string;
  onClose: () => void;
}

/**
 * 确定性应用改写预览：展示替换结果、整体 Diff、跳过项，支持复制/下载
 */
export default function ApplyRewritesDialog({
  open,
  originalText,
  pairs,
  filename,
  onClose,
}: ApplyRewritesDialogProps) {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => (open ? applyRewrites(originalText, pairs) : null),
    [open, originalText, pairs]
  );

  if (!open || !result) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      showToast('复制失败，请手动选择文本', 'error');
    }
  };

  const handleDownload = () => {
    const base = filename.replace(/\.[^.]+$/, '');
    downloadTextFile(result.text, `${base}_优化版.txt`);
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
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">应用修改预览</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            已应用 <span className="font-semibold text-emerald-600 dark:text-emerald-400">{result.applied.length}</span> 处修改
            {result.skipped.length > 0 && (
              <>，<span className="font-semibold text-amber-600 dark:text-amber-400">{result.skipped.length}</span> 处因原句匹配失败被跳过</>
            )}
          </p>
        </div>

        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {result.skipped.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
              <p className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1">
                <AlertCircle className="w-4 h-4" /> 以下 {result.skipped.length} 处原句未能在简历中精确匹配
              </p>
              <ul className="text-xs text-amber-600/80 dark:text-amber-400/80 space-y-0.5">
                {result.skipped.map((p, i) => (
                  <li key={i} className="truncate">· {p.quote.slice(0, 60)}{p.quote.length > 60 ? '…' : ''}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">整体对比（修改前 → 修改后）</p>
            <DiffView before={originalText} after={result.text} />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">修改后全文</p>
            <div className="max-h-60 overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              {result.text}
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
            下载优化版
          </button>
        </div>
      </motion.div>
    </div>
  );
}
