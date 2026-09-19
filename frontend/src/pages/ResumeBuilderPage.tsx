/**
 * 真实简历 → ResumeDocument → 结构化编辑器 → A4 预览 / 导出 (Phase 4A)
 *
 * 数据完全来自 GET /api/resumes/{id}/detail 的 resumeText（不使用 demo.ts）。
 * 编辑 ResumeDocument（工作简历），不修改原始 PDF/DOCX；刷新后恢复 resumeText 重新 parse。
 */

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, Download, FileDown, FileText, Loader2, Wand2 } from 'lucide-react';
import { historyApi } from '../api/history';
import { resumeApi } from '../api/resume';
import { getErrorMessage } from '../api/request';
import type { ResumeDocument } from '../types/resumeDocument';
import { toResumeDocument, type StructuredParseDiagnostics } from '../types/structuredParse';
import { parseResume, type ParseDiagnostics } from '../utils/resumeDocument/parser';
import { RESUME_TEMPLATES, renderResumeTemplate } from '../components/resume-builder/templates';
import { buildDeveloperBlocks } from '../components/resume-builder/templates/DeveloperBlocks';
import { buildClassicBlocks } from '../components/resume-builder/templates/ClassicBlocks';
import { buildAtsBlocks } from '../components/resume-builder/templates/AtsBlocks';
import type { ResumeTemplateId } from '../components/resume-builder/templates/types';
import { A4Preview } from '../components/resume-builder/A4Preview';
import { StructuredEditor } from '../components/resume-builder/StructuredEditor';
import { exportResumePdf } from '../components/resume-builder/ResumePdf';
import { exportResumeDocx } from '../components/resume-builder/ResumeDocx';
import { useToast } from '../components/Toast';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { SuggestionReviewPanel, type PanelSuggestion } from '../components/resume-builder/SuggestionReviewPanel';
import { buildImprovements } from '../utils/improvements';
import {
  aiApply,
  canRedo,
  canUndo,
  createWorkingResumeDocument,
  manualEdit,
  mapSuggestionToDocument,
  redo,
  revertSuggestion,
  undo,
  type WorkingResumeDocumentState,
} from '../utils/resumeDocument/structuredMapping';

interface ResumeBuilderPageProps {
  resumeId: number;
  onBack: () => void;
}

/** 把后端 LLM 诊断映射为本地 ParseDiagnostics（供现有诊断面板复用） */
function toLocalDiagnostics(
  doc: ResumeDocument,
  llm: StructuredParseDiagnostics,
  parser: 'llm'
): ParseDiagnostics {
  const detected = new Set<string>();
  if (doc.basics.summary || doc.basics.name) detected.add('个人简介');
  if (doc.skills.length > 0) detected.add('技能');
  if (doc.experience.length > 0) detected.add('工作经历');
  if (doc.projects.length > 0) detected.add('项目经历');
  if (doc.education.length > 0) detected.add('教育经历');
  if (doc.languages.length > 0) detected.add('语言能力');
  if (doc.certifications.length > 0) detected.add('证书');
  if (doc.customSections.length > 0) detected.add('其他内容');
  const total = llm.sourceChars || 0;
  const structured = Math.min(total, llm.structuredChars || 0);
  return {
    parser,
    totalChars: total,
    parsedChars: structured,
    unparsedChars: Math.max(0, total - structured),
    coverage: total > 0 ? structured / total : 0,
    sectionsDetected: Array.from(detected),
    warnings: llm.warnings || [],
    confidence: llm.confidence ?? 0.9,
  };
}

/** 诊断面板：结构化结果 + coverage + 警告 */
function ParseDiagnosticsPanel({ diagnostics }: { diagnostics: ParseDiagnostics }) {
  const sectionBadges: Array<{ key: string; label: string }> = [
    { key: '个人简介', label: '基础信息' },
    { key: '工作经历', label: '工作经历' },
    { key: '项目经历', label: '项目经历' },
    { key: '教育经历', label: '教育经历' },
    { key: '技能', label: '技能' },
    { key: '其他内容', label: '其它内容' },
  ];
  const rate = Math.round(diagnostics.coverage * 100);
  const detected = diagnostics.sectionsDetected;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 text-xs">
      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
        <p className="font-semibold text-slate-700 dark:text-slate-200">解析结果</p>
        <span className="px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-medium">
          内容保留率 {rate}%（{diagnostics.parsedChars}/{diagnostics.totalChars} 字）
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {sectionBadges.map(b => {
          const ok = detected.includes(b.key);
          return (
            <span
              key={b.key}
              className={`px-2 py-1 rounded-md border flex items-center gap-1 ${
                ok
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400'
                  : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-400'
              }`}
            >
              {ok ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
              {b.label}
            </span>
          );
        })}
      </div>

      {diagnostics.warnings.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2 mb-2">
          <p className="text-amber-700 dark:text-amber-300 font-medium mb-1">部分内容未自动结构化，已保留到「其他内容」</p>
          <ul className="text-amber-600/80 dark:text-amber-400/70 space-y-0.5">
            {diagnostics.warnings.map((w, i) => (
              <li key={i}>· {w}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-slate-400 dark:text-slate-500">
        编辑的是工作简历（ResumeDocument），原始文件未修改 · 刷新后恢复为 resumeText 重新解析（仅当前会话）
      </p>
    </div>
  );
}

export default function ResumeBuilderPage({ resumeId, onBack }: ResumeBuilderPageProps) {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [ws, setWs] = useState<WorkingResumeDocumentState | null>(null);
  const [diag, setDiag] = useState<ParseDiagnostics | null>(null);
  const [templateId, setTemplateId] = useState<ResumeTemplateId>('developer');
  const [exporting, setExporting] = useState<'pdf' | 'docx' | null>(null);
  const [filename, setFilename] = useState('resume');
  const [aiStage, setAiStage] = useState<'idle' | 'parsing' | 'done' | 'failed'>('idle');
  const [suggestions, setSuggestions] = useState<PanelSuggestion[]>([]);

  // 编辑简历页面禁止整体滚动：锁定 document 滚动，三栏内容各自内部滚动；离开页面时恢复
  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = prevOverflow;
    };
  }, []);

  // 加载真实简历详情 + LLM 结构化解析 + 真实 AI 分析建议（Phase 4B）
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setAiStage('parsing');
    (async () => {
      try {
        const data = await historyApi.getResumeDetail(resumeId);
        if (!mounted) return;
        const text = data.resumeText || '';
        setFilename(data.filename || 'resume');
        // Rule 打底：保证即使 LLM 失败也能进入编辑器
        const ruleResult = parseResume(text);
        setWs(createWorkingResumeDocument(ruleResult.document));
        setDiag(ruleResult.diagnostics);
        setLoading(false);

        // 真实 AI 建议：从既有 analyses 派生改善项，再做结构化映射（Spec 三十）。
        // 基于 Rule 结果立即计算，不依赖 LLM 完成（LLM 可能超时数分钟）。
        try {
          const latest = Array.isArray(data.analyses) ? data.analyses[0] : null;
          const improvements = buildImprovements(latest || null);
          const items: PanelSuggestion[] = improvements
            .filter(im => !!im.originalText)
            .map(im => ({
              improvement: im,
              mapping: mapSuggestionToDocument(ruleResult.document, { quote: im.originalText }),
              status: 'pending' as const,
            }));
          if (mounted) setSuggestions(items);
        } catch (e) {
          console.warn('[pb4] 加载 AI 建议失败', e);
        }

        // LLM 结构化解析（成功替换 rule 结果，重建 working state）；失败回退 rule
        try {
          const resp = await resumeApi.parseStructured(resumeId);
          if (mounted) {
            const llmDoc = toResumeDocument(resp.document);
            setWs(createWorkingResumeDocument(llmDoc));
            setDiag(toLocalDiagnostics(llmDoc, resp.diagnostics, 'llm'));
            setAiStage('done');
          }
        } catch (llmErr) {
          console.warn('LLM 结构化解析失败，已使用基础解析结果', llmErr);
          if (mounted) setAiStage('failed');
        }
      } catch (err) {
        if (!mounted) return;
        setLoadError(getErrorMessage(err, '加载简历详情失败'));
        setLoading(false);
        setAiStage('idle');
      }
    })();
    return () => {
      mounted = false;
    };
  }, [resumeId]);

  const doc = ws?.currentDocument ?? null;

  // Phase 4B：AI Apply / revert / undo / redo
  const handleAiApply = (suggestionId: string) => {
    const item = suggestions.find(s => s.improvement.id === suggestionId);
    if (!item || !ws) return;
    if (item.mapping.strategy !== 'structured-path' || !item.mapping.documentPath) {
      showToast('该建议无法安全结构化定位，请在编辑器中手动修改');
      return;
    }
    const { state: next, result } = aiApply(
      ws,
      suggestionId,
      item.mapping,
      item.improvement.originalText,
      item.improvement.suggestedText
    );
    if (!result.document) {
      showToast(result.reason || '结构化应用失败（已安全中止）', 'error');
      return;
    }
    setWs(next);
    setSuggestions(prev => prev.map(s => s.improvement.id === suggestionId ? { ...s, status: 'applied' } : s));
    showToast('已采用修改（结构化字段更新）', 'success');
  };

  const handleAiRevert = (suggestionId: string) => {
    if (!ws) return;
    const { state: next, status } = revertSuggestion(ws, suggestionId);
    setWs(next);
    setSuggestions(prev => prev.map(s => s.improvement.id === suggestionId ? { ...s, status } : s));
    if (status === 'blocked-by-manual-edit') {
      showToast('该区域已被手动修改，无法撤销此 AI 修改，请使用编辑历史撤销', 'error');
    } else if (status === 'applied') {
      showToast('已撤销该 AI 修改', 'success');
    }
  };

  const handleUndo = () => ws && setWs(undo(ws));
  const handleRedo = () => ws && setWs(redo(ws));

  const preview = useMemo(
    () => (doc ? renderResumeTemplate(templateId, doc) : null),
    [templateId, doc]
  );

  /** 三个模板均接入块级分页（标题与条目同页、跨页不切词）；避免 Classic/ATS 走切片分页导致错位 */
  const previewBlocks = useMemo(() => {
    if (!doc) return undefined;
    if (templateId === 'developer') return buildDeveloperBlocks(doc);
    if (templateId === 'classic') return buildClassicBlocks(doc);
    if (templateId === 'ats') return buildAtsBlocks(doc);
    return undefined;
  }, [templateId, doc]);

  const handleExportPdf = async () => {
    if (!doc) return;
    setExporting('pdf');
    try {
      await exportResumePdf(doc, exportBaseName());
      showToast('PDF 已导出（含当前真实修改）', 'success');
    } catch (err) {
      showToast(getErrorMessage(err, 'PDF 导出失败'), 'error');
    } finally {
      setExporting(null);
    }
  };

  const handleExportDocx = async () => {
    if (!doc) return;
    setExporting('docx');
    try {
      await exportResumeDocx(doc, exportBaseName());
      showToast('DOCX 已导出（含当前真实修改）', 'success');
    } catch (err) {
      showToast(getErrorMessage(err, 'DOCX 导出失败'), 'error');
    } finally {
      setExporting(null);
    }
  };

  /** 导出文件名基准：真实姓名合法则用之，否则回退到原文件名基名 */
  const exportBaseName = () => {
    const n = (doc?.basics.name || '').trim();
    const titleWords = ['基本信息', '基本资料', '个人信息', '个人资料', '个人优势', '个人特长', '自我评价', '个人简介'];
    const nameOk = n.length >= 2 && n.length <= 20 && !titleWords.includes(n);
    return nameOk ? n : filename.replace(/\.(pdf|docx|doc|txt|md)$/i, '');
  };

  if (loading) {
    const stages = ['读取简历', '识别章节', '识别工作经历', '识别项目', '识别技能', '整理结构', '完成'];
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 max-w-md mx-auto mt-16">
        <p className="text-sm font-semibold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
          <Loader2 className="w-4 h-4 animate-spin text-primary-500" />
          AI 正在解析简历结构…
        </p>
        <ul className="space-y-2">
          {stages.map((s, i) => (
            <li key={s} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              {i === 0 ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-primary-500" />
              ) : (
                <span className="w-3.5 h-3.5 text-emerald-500 flex items-center justify-center text-[10px]">✓</span>
              )}
              <span className={i === 0 ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{loadError}</p>
        <button onClick={onBack} className="px-6 py-2 bg-primary-500 text-white rounded-lg text-sm">
          返回
        </button>
      </div>
    );
  }

  if (!doc || !diag) return null;

  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
      {/* 顶部工具栏 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex-shrink-0"
            title="返回简历详情"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900 dark:text-white truncate">编辑简历 · {filename}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              真实 resumeText → ResumeDocument → 结构化编辑器 → A4 预览（原始文件未修改）
            </p>
          </div>
        </div>

        {/* 模板切换 */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-700/80 rounded-xl">
          {Object.values(RESUME_TEMPLATES).map(t => (
            <button
              key={t.id}
              type="button"
              title={t.description}
              onClick={() => setTemplateId(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                templateId === t.id
                  ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleExportDocx}
            disabled={exporting !== null}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 disabled:opacity-50"
          >
            {exporting === 'docx' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            导出 DOCX
          </button>
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={exporting !== null}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold shadow-sm hover:from-primary-600 hover:to-primary-700 transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            {exporting === 'pdf' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
            导出 PDF
          </button>
        </div>
      </div>

      {/* 解析状态条：LLM 解析中 / 失败 fallback */}
      {aiStage === 'parsing' && (
        <div className="bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-xl px-4 py-2.5 text-xs text-primary-700 dark:text-primary-300 flex items-center gap-2">
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          AI 正在解析简历结构（基础结果已就绪，可先编辑）
        </div>
      )}
      {aiStage === 'failed' && (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-2.5 text-xs text-amber-700 dark:text-amber-300 flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          AI 解析失败，已使用基础解析结果（可正常编辑；如需重试可刷新页面）
        </div>
      )}

      {/* 解析诊断 */}
      <ParseDiagnosticsPanel diagnostics={diag} />

      {/* 主体：左编辑 / 中预览 / 右 AI 建议
          三栏独立滚动：本页固定视口高度，禁止页面整体滚动；
          左/中/右三栏各自内部滚动（与其它页面的整页滚动互不影响）。 */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[38%] xl:w-[34%] flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Wand2 className="w-3.5 h-3.5 text-primary-500" />
            结构化编辑器（实时驱动右侧 A4 预览）
          </div>
          <StructuredEditor
            doc={doc}
            onChange={(d) => ws && setWs(manualEdit(ws, d))}
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>A4 实时预览 · {RESUME_TEMPLATES[templateId].label}</span>
            <span className="font-normal text-slate-400">210mm × 297mm · 仅浏览器内预览，不写入原始文件</span>
          </div>
          <A4Preview blocks={previewBlocks}>{preview}</A4Preview>
        </div>

        <div className="w-full lg:w-[26%] xl:w-[24%] flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <SuggestionReviewPanel
            suggestions={suggestions}
            onApply={handleAiApply}
            onRevert={handleAiRevert}
            canUndo={Boolean(ws && canUndo(ws))}
            canRedo={Boolean(ws && canRedo(ws))}
            onUndo={handleUndo}
            onRedo={handleRedo}
            aiAppliedCount={ws ? Object.keys(ws.appliedSuggestions).length : 0}
          />
        </div>
      </div>
    </div>
  );
}