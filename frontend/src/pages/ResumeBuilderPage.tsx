/**
 * 真实简历 → ResumeDocument → 结构化编辑器 → A4 预览 / 导出 (Phase 4A)
 *
 * 数据完全来自 GET /api/resumes/{id}/detail 的 resumeText（不使用 demo.ts）。
 * 编辑 ResumeDocument（工作简历），不修改原始 PDF/DOCX；
 * 工作区（文档 + 修订历史）自动保存到后端，刷新后恢复上次编辑。
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, Download, FileDown, FileText, Loader2, Wand2 } from 'lucide-react';
import { historyApi } from '../api/history';
import { resumeApi, type WorkingDocumentSnapshot } from '../api/resume';
import { getErrorMessage } from '../api/request';
import type { ResumeDocument } from '../types/resumeDocument';
import { toResumeDocument, type StructuredParseDiagnostics } from '../types/structuredParse';
import { parseResume, type ParseDiagnostics } from '../utils/resumeDocument/parser';
import { RESUME_TEMPLATES, renderResumeTemplate } from '../components/resume-builder/templates';
import { buildDeveloperBlocks } from '../components/resume-builder/templates/DeveloperBlocks';
import { buildClassicBlocks } from '../components/resume-builder/templates/ClassicBlocks';
import { buildAtsBlocks } from '../components/resume-builder/templates/AtsBlocks';
import { PAGE_PADDING_X_PX, PAGE_PADDING_Y_PX } from '../components/resume-builder/templates/tokens';
import { resolveAiStageAfterParse } from './builderAiStage';
import type { ResumeTemplateId } from '../components/resume-builder/templates/types';
import { A4Preview } from '../components/resume-builder/A4Preview';
import { StructuredEditor } from '../components/resume-builder/StructuredEditor';
import { useToast } from '../components/Toast';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { SuggestionReviewPanel, type PanelSuggestion } from '../components/resume-builder/SuggestionReviewPanel';
import { buildImprovements } from '../utils/improvements';
import { hashText } from '../utils/resumeDocument/workingHash';
import {
  activeAppliedSuggestionIds,
  aiApply,
  canRedo,
  canUndo,
  createWorkingResumeDocument,
  deriveSuggestionStatus,
  manualEdit,
  mapSuggestionToDocument,
  redo,
  revertSuggestion,
  serializePath,
  undo,
  type AppliedSuggestion,
  type DocumentPath,
  type DocumentRevision,
  type WorkingResumeDocumentState,
} from '../utils/resumeDocument/structuredMapping';
import { EditorFieldRegistryProvider } from '../components/resume-builder/EditorFieldRegistryProvider';
import {
  applyLlmMerge,
  collectActiveEditedPaths,
  reconcileSuggestionMappings,
  shouldAcceptLlmDiagnostics,
  type CoverageLike,
} from '../utils/resumeDocument/mergeLlmIntoWorking';

interface ResumeBuilderPageProps {
  resumeId: number;
  onBack: () => void;
}

/** 由修订历史派生 appliedSuggestions（持久化恢复时重建 undo/redo 状态，与结构化状态机一致） */
function deriveAppliedFromRevisions(
  revisions: DocumentRevision[],
  index: number
): Record<string, AppliedSuggestion> {
  const applied: Record<string, AppliedSuggestion> = {};
  for (let i = 0; i <= index && i < revisions.length; i++) {
    const rev = revisions[i];
    if (rev.type === 'ai-apply' && rev.suggestionId && rev.documentPath) {
      applied[rev.suggestionId] = {
        suggestionId: rev.suggestionId,
        strategy: 'structured-path',
        documentPath: rev.documentPath,
        quote: '',
        rewrite: '',
        revisionId: rev.id,
      };
    } else if (rev.type === 'ai-revert' && rev.suggestionId) {
      delete applied[rev.suggestionId];
    }
  }
  return applied;
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
    unmappedLines: llm.unmappedLines || [],
    truncated: llm.truncated || false,
  };
}

/** 诊断面板：结构化结果 + coverage + 警告 + 未归档片段 */
function ParseDiagnosticsPanel({ diagnostics }: { diagnostics: ParseDiagnostics }) {
  const [showUnmapped, setShowUnmapped] = useState(false);
  const unmapped = diagnostics.unmappedLines || [];
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

      {diagnostics.truncated && (
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-2 mb-2">
          <p className="text-red-700 dark:text-red-300 font-medium">
            原文被截断：单次解析上限 12000 字，尾部内容未参与解析，请分节处理或精简原文
          </p>
        </div>
      )}

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

      {unmapped.length > 0 && (
        <div className="border border-amber-200 dark:border-amber-800 rounded-lg overflow-hidden mb-2">
          <button
            type="button"
            onClick={() => setShowUnmapped(v => !v)}
            className="w-full flex items-center justify-between px-2 py-1.5 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 text-xs font-medium"
          >
            <span>未归档原文片段（{unmapped.length} 条）</span>
            <span>{showUnmapped ? '收起 ▲' : '展开 ▼'}</span>
          </button>
          {showUnmapped && (
            <ul className="bg-white dark:bg-slate-900/40 px-2 py-1.5 max-h-32 overflow-y-auto text-amber-700/80 dark:text-amber-400/70 text-[11px] space-y-0.5">
              {unmapped.map((u, i) => (
                <li key={i}>· {u}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <p className="text-slate-400 dark:text-slate-500">
        编辑的是工作简历（ResumeDocument），原始文件未修改 · 工作区已自动保存，刷新后可恢复上次编辑
      </p>
    </div>
  );
}

/**
 * 把后端透传的 JSON 文本工作区反序列化为运行时对象。
 * 任一字段解析失败时回退：original/current 用基础 Rule 文档，revisions 用空数组。
 */
function parseSavedWorkspace(
  saved: WorkingDocumentSnapshot,
  fallback: ResumeDocument
): { originalDocument: ResumeDocument; currentDocument: ResumeDocument; revisions: DocumentRevision[] } {
  let originalDocument = fallback;
  let currentDocument = fallback;
  let revisions: DocumentRevision[] = [];
  try {
    const o = JSON.parse(saved.originalDocument);
    if (o && typeof o === 'object') originalDocument = o;
  } catch {
    // 保留基础 Rule 回退，避免恢复失败导致编辑器不可用
  }
  try {
    const d = JSON.parse(saved.document);
    if (d && typeof d === 'object') currentDocument = d;
  } catch {
    // 保留基础 Rule 回退
  }
  try {
    const r = JSON.parse(saved.revisions || '[]');
    revisions = Array.isArray(r) ? r : [];
  } catch {
    revisions = [];
  }
  return { originalDocument, currentDocument, revisions };
}

export default function ResumeBuilderPage({ resumeId, onBack }: ResumeBuilderPageProps) {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [ws, setWs] = useState<WorkingResumeDocumentState | null>(null);
  const [diag, setDiag] = useState<ParseDiagnostics | null>(null);
  const [templateId, setTemplateId] = useState<ResumeTemplateId>('developer');
  const [exporting, setExporting] = useState<'pdf' | 'docx' | null>(null);
  const [reanalyzing, setReanalyzing] = useState(false);
  const [filename, setFilename] = useState('resume');
  const [aiStage, setAiStage] = useState<'idle' | 'parsing' | 'done' | 'failed'>('idle');
  const [suggestions, setSuggestions] = useState<PanelSuggestion[]>([]);
  // P1-1 双向定位联动：选中的建议 id + 编辑器聚焦/定位的字段路径 + 同路径的建议集合
  const [activeSuggestionId, setActiveSuggestionId] = useState<string | null>(null);
  const [activePath, setActivePath] = useState<DocumentPath | null>(null);
  const [relatedIds, setRelatedIds] = useState<string[]>([]);
  // 持久化：当前 resumeText 哈希（工作区过期校验）+ 最新工作区引用（debounce 保存用）
  const sourceHashRef = useRef('');
  const wsRef = useRef<WorkingResumeDocumentState | null>(null);
  wsRef.current = ws;
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoredRef = useRef(false);
  const mountedPageRef = useRef(true);

  useEffect(() => {
    mountedPageRef.current = true;
    return () => {
      mountedPageRef.current = false;
    };
  }, []);

  // 编辑简历页面：允许页面整体滚动（编辑区域内容较多时不压缩显示面积）

  // 加载真实简历详情 + LLM 结构化解析 + 真实 AI 分析建议（Phase 4B）
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setAiStage('parsing');
    (async () => {
      try {
        // mapping 基准文档：恢复路径下必须用「保存的工作区文档」（其条目 ID 与 currentDocument 一致），
        // 否则用本次 Rule 解析重新生成的随机 ID 做映射，会在 currentDocument 中找不到而误判 stale。
        let mappingBase: ResumeDocument | null = null;
        const data = await historyApi.getResumeDetail(resumeId);
        if (!mounted) return;
        const text = data.resumeText || '';
        setFilename(data.filename || 'resume');
        // Rule 打底：保证即使 LLM 失败也能进入编辑器
        const ruleResult = parseResume(text);
        setWs(createWorkingResumeDocument(ruleResult.document));
        setDiag(ruleResult.diagnostics);

        // 持久化恢复：resumeText 未变时采用已保存的工作区（含修订历史），
        // 并跳过 LLM 重新解析对工作区的覆盖。
        // 恢复完成前保持 loading，避免 Rule 快照先渲染、恢复内容再闪电替换（刷新闪变）。
        sourceHashRef.current = hashText(text);
        const saved = await resumeApi.getWorkingDocument(resumeId).catch(() => null);
        if (mounted && saved && saved.sourceTextHash === sourceHashRef.current && saved.document) {
          restoredRef.current = true;
          setAiStage(resolveAiStageAfterParse(true, true)); // Phase 5E（P1）：恢复成功即结束解析状态
          const parsed = parseSavedWorkspace(saved, ruleResult.document);
          setWs({
            originalDocument: parsed.originalDocument,
            currentDocument: parsed.currentDocument,
            revisions: parsed.revisions,
            revisionIndex: saved.revisionIndex ?? -1,
            revisionSeq: saved.revisionSeq ?? 0,
            appliedSuggestions: deriveAppliedFromRevisions(parsed.revisions, saved.revisionIndex ?? -1),
          });
          // Phase 5C（G2）：恢复的工作区与 Rule 快照不同，建议 mapping 依据恢复后的 currentDocument 重建
          setSuggestions(prev => reconcileSuggestionMappings(prev, parsed.currentDocument));
          mappingBase = parsed.currentDocument;
        }
        if (mounted) setLoading(false);

        // 真实 AI 建议：从既有 analyses 派生改善项，再做结构化映射（Spec 三十）。
        // 映射基准：优先用恢复/合并后的工作区文档（条目 ID 与 currentDocument 一致），
        // 否则当前位置的 Rule 结果（fresh 进入，merge 保留 Rule ID，一致）。
        try {
          const latest = Array.isArray(data.analyses) ? data.analyses[0] : null;
          const improvements = buildImprovements(latest || null);
          const nextItems: PanelSuggestion[] = improvements
            .filter(im => !!im.originalText)
            .map(im => ({
              improvement: im,
              mapping: mapSuggestionToDocument(mappingBase ?? ruleResult.document, { quote: im.originalText }),
              status: 'pending' as const,
            }));
          if (mounted) setSuggestions(nextItems);
        } catch (e) {
          console.warn('[pb4] 加载 AI 建议失败', e);
        }

        // LLM 结构化解析（Phase 5C：质量门 + 安全 Merge，不再整篇覆盖工作区）；失败回退 rule。
        // Phase 5E（P1）：恢复路径既不需要也不允许 LLM 覆盖工作区，直接跳过该请求（避免 60-90s 无效等待）。
        if (restoredRef.current) return;

        try {
          const resp = await resumeApi.parseStructured(resumeId);
          if (mounted) {
            const llmDoc = toResumeDocument(resp.document);
            const llmCoverage: CoverageLike = {
              coverage: resp.diagnostics.sourceChars > 0 ? resp.diagnostics.structuredChars / resp.diagnostics.sourceChars : 0,
              confidence: resp.diagnostics.confidence,
            };
            // 质量门：LLM 明显低于 Rule 时采用 LLM 的解析诊断展示，但保留当前文档
            if (shouldAcceptLlmDiagnostics(
              { coverage: ruleResult.diagnostics.coverage, confidence: ruleResult.diagnostics.confidence },
              llmCoverage
            )) {
              // 用户解析等待期间的编辑已在 wsRef.current 中（每次 render 同步），确保 User Edit > LLM
              const base = wsRef.current;
              if (base) {
                const merged = applyLlmMerge(base, {
                  llmDocument: llmDoc,
                  editedPaths: collectActiveEditedPaths(base),
                });
                if (merged.changed) {
                  setWs(merged.state);
                  // Phase 5C（G2）：merge 后 mapping 依据最终 currentDocument 重建（suggestionId 保持稳定）
                  setSuggestions(prev => reconcileSuggestionMappings(prev, merged.state.currentDocument));
                  setDiag(toLocalDiagnostics(merged.state.currentDocument, resp.diagnostics, 'llm'));
                } else {
                  setDiag(toLocalDiagnostics(llmDoc, resp.diagnostics, 'llm'));
                }
                setAiStage('done');
              }
            } else {
              setDiag(toLocalDiagnostics(llmDoc, resp.diagnostics, 'llm'));
              setAiStage('done');
            }
          }
        } catch (llmErr) {
          console.warn('LLM 结构化解析失败，已使用基础解析结果', llmErr);
          // 未恢复路径的 LLM 失败：展示「AI 解析失败」横幅（Rule 结果仍可编辑）
          if (mounted) setAiStage(resolveAiStageAfterParse(false, false));
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

  // 自动保存：ws 变化后 debounce 1s 保存快照（幂等整体覆盖，不阻塞编辑）
  useEffect(() => {
    if (!ws) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const s = wsRef.current;
      if (!s) return;
      resumeApi.saveWorkingDocument(resumeId, {
        parser: 'llm',
        sourceTextHash: sourceHashRef.current,
        originalDocument: JSON.stringify(s.originalDocument),
        document: JSON.stringify(s.currentDocument),
        revisionIndex: s.revisionIndex,
        revisionSeq: s.revisionSeq,
        revisions: JSON.stringify(s.revisions),
      }).catch(() => {
        showToast('工作区自动保存失败，刷新后将恢复为重新解析', 'error');
      });
    }, 1000);
  }, [ws, resumeId, showToast]);

  // 卸载时 flush：立即保存最新工作区（不等待 debounce）
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      const s = wsRef.current;
      if (!s) return;
      resumeApi.saveWorkingDocument(resumeId, {
        parser: 'llm',
        sourceTextHash: sourceHashRef.current,
        originalDocument: JSON.stringify(s.originalDocument),
        document: JSON.stringify(s.currentDocument),
        revisionIndex: s.revisionIndex,
        revisionSeq: s.revisionSeq,
        revisions: JSON.stringify(s.revisions),
      }).catch(() => {});
    };
  }, [resumeId]);

  const doc = ws?.currentDocument ?? null;

  /**
   * Phase 5B：suggestion 展示状态从 WorkingResumeDocument 派生（revisions + currentDocument），
   * 不依赖 UI 手动 setStatus —— undo/redo/manual edit 后自动一致。
   */
  const derivedSuggestions: PanelSuggestion[] = useMemo(() => {
    if (!ws) return suggestions;
    return suggestions.map(s => {
      const d = deriveSuggestionStatus(ws, {
        id: s.improvement.id,
        mapping: s.mapping,
        improvement: s.improvement,
      });
      return { ...s, status: d.status, stale: d.stale };
    });
  }, [suggestions, ws]);

  // Phase 4B：AI Apply / revert / undo / redo
  const handleAiApply = (suggestionId: string) => {
    const item = derivedSuggestions.find(s => s.improvement.id === suggestionId);
    if (!item || !ws) return;
    if (item.stale) {
      showToast('该建议对应的原文已变化，无法安全应用，请在编辑器中手动修改', 'error');
      return;
    }
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
      // BUG-103：不把内部校验原因（如「quote 或 rewrite 为空」）直接抛给用户
      showToast('该建议无法安全应用，请在编辑器中手动修改', 'error');
      return;
    }
    setWs(next);
    // suggestion 状态由 deriveSuggestionStatus 基于 next 自动变为 applied
    showToast('已采用修改（结构化字段更新）', 'success');
  };

  const handleAiRevert = (suggestionId: string) => {
    if (!ws) return;
    const { state: next, status } = revertSuggestion(ws, suggestionId);
    setWs(next);
    // 状态由 deriveSuggestionStatus 基于 next 自动重算（applied → pending / blocked-by-manual-edit）
    if (status === 'blocked-by-manual-edit') {
      showToast('该区域已被手动修改，无法撤销此 AI 修改，请使用编辑历史撤销', 'error');
    } else if (status === 'applied') {
      showToast('已撤销该 AI 修改', 'success');
    }
  };

  const handleUndo = () => ws && setWs(undo(ws));
  const handleRedo = () => ws && setWs(redo(ws));

  // P1-1 正向：点击建议 / 定位按钮 → 定位编辑器字段（registry O(1) 定位）
  const handleSelectSuggestion = (suggestionId: string) => {
    setActiveSuggestionId(suggestionId);
    const item = derivedSuggestions.find(s => s.improvement.id === suggestionId);
    if (item && item.mapping.strategy === 'structured-path' && item.mapping.documentPath) {
      setActivePath(item.mapping.documentPath);
    } else {
      setActivePath(null);
      showToast('该建议未做结构化定位，请在编辑器中手动修改');
    }
  };

  /** 定位失败（path 在编辑器字段注册表中不存在）→ 优雅提示，不做 fuzzy 猜测 */
  const handleLocateMissed = (path: DocumentPath) => {
    const label = derivedSuggestions
      .find(s => s.mapping.documentPath && serializePath(s.mapping.documentPath) === serializePath(path))
      ?.mapping.humanLabel;
    showToast(label ? `「${label}」字段已不存在（该建议对应的字段已删除）` : '当前版本中找不到对应字段', 'error');
  };

  // P1-1 反向：编辑器字段聚焦 → 高亮映射到该字段的全部建议（同 path 多建议 Case F）
  const handleFieldFocus = (path: DocumentPath | null) => {
    setActivePath(path);
    if (!path) {
      setActiveSuggestionId(null);
      setRelatedIds([]);
      return;
    }
    const target = serializePath(path);
    const hitIds = derivedSuggestions
      .filter(s => s.mapping.documentPath && serializePath(s.mapping.documentPath) === target)
      .map(s => s.improvement.id);
    setRelatedIds(hitIds);
    setActiveSuggestionId(hitIds.length > 0 ? hitIds[0] : null);
  };

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

  /** Phase 5D：页内边距按模板提供（与 PDF/DOCX 同一 tokens 来源），pageH 计算随之对齐 */
  const previewPagePadding = useMemo(() => {
    const topPx = PAGE_PADDING_Y_PX[templateId];
    return { topPx, bottomPx: topPx, xPx: PAGE_PADDING_X_PX[templateId] };
  }, [templateId]);

  const handleExportPdf = async () => {
    if (!doc) return;
    setExporting('pdf');
    try {
      // 动态导入：@react-pdf/renderer 体积较大，拆出独立 chunk，避免拖慢首屏
      const { exportResumePdf } = await import('../components/resume-builder/ResumePdf');
      await exportResumePdf(doc, templateId, exportBaseName());
      showToast('PDF 已导出（含当前真实修改，按当前模板）', 'success');
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
      // 动态导入：docx 库约 2MB，拆出独立 chunk，避免拖慢首屏
      const { exportResumeDocx } = await import('../components/resume-builder/ResumeDocx');
      await exportResumeDocx(doc, templateId, exportBaseName());
      showToast('DOCX 已导出（含当前真实修改，按当前模板）', 'success');
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

  // Phase 5E（P2）：全部建议不可操作时的「重新分析」——复用后端 reanalyze。
  // 后端只把任务入队（分析在消费端异步执行），立即 reload 拿到的仍是旧建议；
  // 这里轮询等待 COMPLETED/FAILED 后自动刷新，用户无需手动再次刷新。
  const handleReanalyze = async () => {
    setReanalyzing(true);
    try {
      await resumeApi.reanalyze(resumeId);
      showToast('已提交重新分析，完成后将自动刷新', 'success');
      const deadline = Date.now() + 5 * 60 * 1000;
      while (Date.now() < deadline) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        if (!mountedPageRef.current) return; // 用户已离开页面：不再轮询/刷新
        const data = await historyApi.getResumeDetail(resumeId).catch(() => null);
        if (!data) continue;
        if (data.analyzeStatus === 'COMPLETED') {
          // 刷新前把最新工作区落盘（debounce 可能尚未触发），避免丢失最后一笔编辑
          const s = wsRef.current;
          if (s) {
            await resumeApi.saveWorkingDocument(resumeId, {
              parser: 'llm',
              sourceTextHash: sourceHashRef.current,
              originalDocument: JSON.stringify(s.originalDocument),
              document: JSON.stringify(s.currentDocument),
              revisionIndex: s.revisionIndex,
              revisionSeq: s.revisionSeq,
              revisions: JSON.stringify(s.revisions),
            }).catch(() => {});
          }
          window.location.reload();
          return;
        }
        if (data.analyzeStatus === 'FAILED') {
          showToast('重新分析失败，原分析结果不受影响', 'error');
          setReanalyzing(false);
          return;
        }
      }
      showToast('分析仍在进行中，完成后请刷新页面查看最新建议', 'error');
      setReanalyzing(false);
    } catch (err) {
      showToast(getErrorMessage(err, '重新分析失败，请稍后重试'), 'error');
      setReanalyzing(false);
    }
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
    <div className="w-full flex flex-col gap-4 pb-8">
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
          桌面三栏：每栏固定在可用高度内各自内部滚动（保留每栏滚动栏）；
          同时页面本身可整体滚动（顶部工具栏/状态条/诊断 + 三栏较高时由页面滚动条承接）。 */}
      <div className="flex flex-col lg:flex-row gap-4 lg:h-[calc(100vh-60px)] lg:min-h-[480px] lg:items-stretch">
        <div className="w-full lg:w-[38%] xl:w-[34%] min-w-0 flex flex-col min-h-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 flex-shrink-0">
            <Wand2 className="w-3.5 h-3.5 text-primary-500" />
            结构化编辑器（实时驱动右侧 A4 预览）
          </div>
          <EditorFieldRegistryProvider>
            <StructuredEditor
              doc={doc}
              onChange={(d) => ws && setWs(manualEdit(ws, d))}
              activePath={activePath}
              onFieldFocus={handleFieldFocus}
              onLocateMissed={handleLocateMissed}
            />
          </EditorFieldRegistryProvider>
        </div>

        <div className="flex-1 min-w-0 flex flex-col min-h-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between flex-shrink-0">
            <span>A4 实时预览 · {RESUME_TEMPLATES[templateId].label}</span>
            <span className="font-normal text-slate-400">210mm × 297mm · 仅浏览器内预览，不写入原始文件</span>
          </div>
          <A4Preview blocks={previewBlocks} pagePadding={previewPagePadding}>{preview}</A4Preview>
        </div>

        <div className="w-full lg:w-[26%] xl:w-[24%] min-w-0 flex flex-col min-h-0 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <SuggestionReviewPanel
            suggestions={derivedSuggestions}
            onApply={handleAiApply}
            onRevert={handleAiRevert}
            onLocate={handleSelectSuggestion}
            canUndo={Boolean(ws && canUndo(ws))}
            canRedo={Boolean(ws && canRedo(ws))}
            onUndo={handleUndo}
            onRedo={handleRedo}
            aiAppliedCount={ws ? activeAppliedSuggestionIds(ws).size : 0}
            selectedId={activeSuggestionId}
            relatedIds={relatedIds}
            onSelect={handleSelectSuggestion}
            onReanalyze={handleReanalyze}
            reanalyzing={reanalyzing}
          />
        </div>
      </div>
    </div>
  );
}