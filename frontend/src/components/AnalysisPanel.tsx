import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertCircle, ChevronDown, Clock, Download, FileText, Loader2, ListChecks, Quote, RefreshCw,
  SpellCheck, Wand2,
} from 'lucide-react';
import OptimizationSummary from './OptimizationSummary';
import ImprovementCard from './ImprovementCard';
import DimensionGapPanel from './DimensionGapPanel';
import CapabilityGapCard, { type CapabilityGap } from './CapabilityGapCard';
import RescorePanel from './RescorePanel';
import DiffView from './DiffView';
import RecruiterViewCard from './RecruiterViewCard';
import { useResumeOptimization } from '../hooks/useResumeOptimization';
import { localRescoreEngine } from '../utils/rescore';
import { DIMENSION_META, type ScoreDimension } from '../types/optimization';
import type { AnalysisItem, AnalyzeStatus } from '../api/history';
import type { Suggestion } from '../types/resume';
import type { RewritePair } from '../utils/rewriteApply';

interface AnalysisPanelProps {
  analysis: AnalysisItem | null;
  analyzeStatus?: AnalyzeStatus;
  analyzeError?: string;
  onExport: () => void;
  exporting: boolean;
  onReanalyze?: () => void;
  reanalyzing?: boolean;
  // AI 整篇重写（保留原有能力）
  onAiRewrite?: () => void;
  rewriting?: boolean;
  // 一键应用全部改写（保留原有确定性应用通路）
  onApplyAll?: () => void;
  onApplySingle?: (quote: string) => void;
  /**
   * 把用户在 Agent 闭环中「已采用」的修改交给父页落成全文。
   * 父页持有简历原文与 ApplyRewritesDialog，这里只回调，避免面板重复持有底稿。
   */
  onApplyAgentRewrites?: (pairs: RewritePair[]) => void;
}

/**
 * 简历分析面板：三层信息层级
 *
 * 第一层 30 秒决策区：总分 / 预计提升 / 最大影响因素 / Top3 修改 + 重新评分结果
 * 第二层 深度诊断：分项评分缺口 / 全部问题 / 逐条体检
 * 第三层 辅助信息：名词规范 / 招聘方视角
 */
export default function AnalysisPanel({
  analysis,
  analyzeStatus,
  analyzeError,
  onExport,
  exporting,
  onReanalyze,
  reanalyzing,
  onAiRewrite,
  rewriting,
  onApplyAll,
  onApplySingle,
  onApplyAgentRewrites,
}: AnalysisPanelProps) {
  const [showDeepDive, setShowDeepDive] = useState(true);
  // 深度诊断层默认只展开前若干条：逐条体检每条都带 DiffView，
  // 全量铺开会把信息密度推高，完整列表按需展开
  const [showAllAudits, setShowAllAudits] = useState(false);
  const [showAllTerms, setShowAllTerms] = useState(false);

  const AUDIT_PREVIEW_LIMIT = 3;
  const TERM_PREVIEW_LIMIT = 6;

  const agent = useResumeOptimization({ analysis });
  const {
    items, topItems, statusOf, appliedCount,
    requestRewrite, apply, skip, reset,
    optimizeTop, optimizingTop, rescore, clearApplied, appliedPairs,
  } = agent;

  // ⚠️ 所有派生计算的 Hooks 必须位于任何提前 return 之前。
  // React 要求每次渲染 Hook 调用顺序与数量一致；若放在提前 return 之后，
  // 条件分支返回会导致 Hook 数量不匹配，React 抛错并中断渲染
  //（表现为点击「重新分析」后页面无反应 / 白屏）。
  const score = analysis?.overallScore || 0;

  const suggestions = analysis?.suggestions || [];
  const bulletAudits = analysis?.bulletAudits || [];

  // 分项评分
  const dimensionScores = useMemo<Partial<Record<ScoreDimension, number>>>(() => ({
    project: analysis?.projectScore || 0,
    skillMatch: analysis?.skillMatchScore || 0,
    content: analysis?.contentScore || 0,
    structure: analysis?.structureScore || 0,
    expression: analysis?.expressionScore || 0,
  }), [analysis]);

  // 从既有 dimensionExplanations 复用解释与证据，不新增数据源
  const { gapByDimension, detailsByDimension, capabilityGaps } = useMemo(() => {
    const gaps: Partial<Record<ScoreDimension, string>> = {};
    const details: Partial<Record<ScoreDimension, string[]>> = {};
    const caps: CapabilityGap[] = [];

    (analysis?.dimensionExplanations || []).forEach(dim => {
      const key = dim.dimension as ScoreDimension;
      if (dim.explanation) gaps[key] = dim.explanation.replace(/[。.]$/, '');

      const evidences: string[] = [];
      (dim.evidences || []).forEach(ev => {
        // 只把「未确认」的证据作为具体缺口列出
        if (ev.status !== '已确认') {
          evidences.push(ev.item + (ev.note ? `（${ev.note}）` : ''));
          caps.push({
            name: ev.item,
            current: ev.status === '缺失' ? '未发现' : '证据不足',
            level: ev.status === '缺失' ? 'missing' : 'insufficient',
            // 维度满分代表该维度在总分中的权重：满分越低，这条缺口对总分影响越小。
            // 三档都要可达 —— 之前写死 >=20?'高':'中'，「低」永远不可能出现。
            importance: dim.maxScore >= 20 ? '高' : dim.maxScore >= 15 ? '中' : '低',
          });
        }
      });
      if (evidences.length > 0) details[key] = evidences;
    });

    return { gapByDimension: gaps, detailsByDimension: details, capabilityGaps: caps };
  }, [analysis]);

  // 最大影响因素：缺口最大的维度标签。
  // 满分取自 DIMENSION_META，避免把「40 / 20 / 15 / 10」这套评分细则散落在组件里
  const impactFactors = useMemo(() => {
    return (Object.entries(dimensionScores) as [ScoreDimension, number][])
      .map(([dim, s]) => ({
        label: DIMENSION_META[dim].label,
        gap: DIMENSION_META[dim].maxScore - s,
      }))
      .filter(d => d.gap > 0)
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 3)
      .map(d => d.label);
  }, [dimensionScores]);

  const suggestionsByPriority = useMemo(() => ({
    high: suggestions.filter(s => s.priority === '高'),
    medium: suggestions.filter(s => s.priority === '中'),
    low: suggestions.filter(s => s.priority === '低'),
  }), [suggestions]);

  const hasRewrites = items.some(item => item.originalText && item.suggestedText);

  // 预计提升区间：把 Top3 全部采用后的得分交给重评分引擎投影。
  //
  // 不能直接累加 estimatedGain：那会给出「改 3 条从 73 变 95」这种
  // 超过维度剩余空间的承诺。引擎会按「剩余缺口 × 75%」收敛，
  // 上限取投影值、下限再打 8 折，与 OptimizationSummary 上的文案口径一致。
  const projection = useMemo(() => {
    if (topItems.length === 0) return null;
    return localRescoreEngine.project({ analysis, applied: topItems });
  }, [topItems, analysis]);

  const potentialRange = useMemo<[number, number] | null>(() => {
    if (!projection || projection.totalDelta <= 0) return null;
    const low = Math.min(100, score + Math.round(projection.totalDelta * 0.8));
    const high = Math.min(100, Math.max(low, projection.afterTotal));
    return [low, high];
  }, [projection, score]);

  // 区间依据：把参与估算的条目摊开，让「73~77」这个数字可追溯，
  // 而不是一个没有来源的承诺
  const rangeBasis = useMemo(
    () =>
      topItems
        .filter(item => item.estimatedGain > 0)
        .map(item => ({ title: item.title, gain: item.estimatedGain })),
    [topItems]
  );

  // 检测分析结果是否有效
  const hasErrorKeywords = analysis?.summary && (
    analysis.summary.includes('I/O error') ||
    analysis.summary.includes('分析过程中出现错误') ||
    analysis.summary.includes('简历分析失败') ||
    analysis.summary.includes('Remote host terminated') ||
    analysis.summary.includes('handshake')
  );
  // 有效性判据只看「数据是否完整」。
  // 之前用 overallScore >= 10 兜底，会把真实的极低分简历（<10 分）误判为分析失败；
  // 分数低是结论，不是故障。
  const isAnalysisValid = !!analysis
    && typeof analysis.overallScore === 'number'
    && Number.isFinite(analysis.overallScore)
    && !!analysis.summary
    && !hasErrorKeywords;

  // 分析中状态
  const isProcessing = analyzeStatus === 'PENDING' ||
    analyzeStatus === 'PROCESSING' ||
    (analyzeStatus === undefined && !analysis);

  if (isProcessing) {
    const isExplicitProcessing = analyzeStatus === 'PROCESSING';
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
          {isExplicitProcessing ? (
            <Loader2 className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin" />
          ) : (
            <Clock className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
          {isExplicitProcessing ? 'AI 正在分析中...' : '等待分析'}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-2">
          {isExplicitProcessing
            ? '请稍候，AI 正在对您的简历进行深度分析'
            : '简历已上传成功，即将开始 AI 分析'}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
          深度分析包含逐条体检与证据链，输出量较大，可能需要几分钟至十余分钟（模型负载高时会更久）。
          分析在后台持续进行：您现在可以先离开此页面，稍后再回来看结果；也可以停留在此等待自动刷新。任务不会被中断。
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">完成此任务后页面将自动显示分析结果</p>
      </div>
    );
  }

  // ⚠️ 这里必须显式判空并返回：AnalysisPanel 的 props 是 AnalysisItem | null，
  // 只有走到这一步之后，TS 才能把 analysis 收窄为非空，后续 JSX 里才可以直接取字段。
  if (!analysis || analyzeStatus === 'FAILED' || !isAnalysisValid) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">分析失败</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4">AI 服务暂时不可用，请稍后重试</p>
        {(analyzeError || analysis?.summary) && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-left mb-4">
            <p className="text-sm text-red-600 dark:text-red-400">{analyzeError || analysis?.summary}</p>
          </div>
        )}
        {onReanalyze && (
          <motion.button
            onClick={onReanalyze}
            disabled={reanalyzing}
            className="px-6 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RefreshCw className={`w-4 h-4 ${reanalyzing ? 'animate-spin' : ''}`} />
            {reanalyzing ? '重新分析中...' : '重新分析'}
          </motion.button>
        )}
      </div>
    );
  }

  // ⚠️ 以下派生计算必须在任何提前 return 之前完成。
  // React Hooks 要求每次渲染调用顺序与数量一致；若放在提前 return 之后，
  // 分支渲染会导致 Hook 数量不匹配，React 直接抛出错误并中断渲染
  //（表现为点击「重新分析」后页面无反应 / 白屏）。

  return (
    <div className="space-y-6">
      {/* ═══ 第一层：30 秒决策区 ═══ */}
      <OptimizationSummary
        score={score}
        potentialRange={potentialRange}
        rangeBasis={rangeBasis}
        cappedGain={projection?.cappedGain ?? 0}
        headline={analysis.headline || ''}
        summary={analysis.summary || ''}
        impactFactors={impactFactors}
        strengths={analysis.strengths || []}
        risks={analysis.risks || []}
        onOptimize={optimizeTop}
        optimizing={optimizingTop}
        appliedCount={appliedCount}
      />

      {/* 重新评分闭环结果：评分变化 → 把已确认的修改写回全文 */}
      <AnimatePresence>
        {rescore && (
          <RescorePanel
            result={rescore}
            onReset={clearApplied}
            appliableCount={appliedPairs.length}
            onApplyAll={
              onApplyAgentRewrites
                ? () => onApplyAgentRewrites(appliedPairs)
                : undefined
            }
          />
        )}
      </AnimatePresence>

      {/* Top 3 最值得修改 —— 页面核心区域 */}
      {topItems.length > 0 && (
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">最值得修改的 {topItems.length} 件事</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                按预期收益排序，AI 修改保留原文真实背景，不编造数据
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {onAiRewrite && (
                <button
                  onClick={onAiRewrite}
                  disabled={rewriting}
                  className="px-3 py-1.5 border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/40 rounded-lg text-primary-600 dark:text-primary-300 text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-all disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Wand2 className={`w-3.5 h-3.5 ${rewriting ? 'animate-pulse' : ''}`} />
                  {rewriting ? 'AI 重写中...' : 'AI 整篇重写'}
                </button>
              )}
              {onApplyAll && hasRewrites && (
                <button
                  onClick={onApplyAll}
                  className="px-3 py-1.5 border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg text-emerald-600 dark:text-emerald-300 text-xs font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  导出优化版全文
                </button>
              )}
              <button
                onClick={onExport}
                disabled={exporting}
                className="px-3 py-1.5 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                {exporting ? '导出中...' : '分析报告 PDF'}
              </button>
              {onReanalyze && (
                <button
                  onClick={onReanalyze}
                  disabled={reanalyzing}
                  className="px-3 py-1.5 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 flex items-center gap-1.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${reanalyzing ? 'animate-spin' : ''}`} />
                  重新分析
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {topItems.map((item, i) => (
              <ImprovementCard
                key={item.id}
                item={item}
                status={statusOf(item.id)}
                ordinal={item.rank ?? i + 1}
                highlighted={i === 0}
                onRequestRewrite={() => { void requestRewrite(item.id).catch(() => undefined); }}
                onApply={() => apply(item.id)}
                onSkip={() => skip(item.id)}
                onReset={() => reset(item.id)}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* ═══ 第二层 / 第三层：深度诊断与辅助信息（默认折叠） ═══ */}
      <motion.div
        className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <button
          onClick={() => setShowDeepDive(!showDeepDive)}
          aria-expanded={showDeepDive}
          className="w-full flex items-center gap-2 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        >
          <ListChecks className="w-5 h-5 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">深度诊断</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            分项评分 · 全部问题（{suggestions.length}）· 逐条体检（{bulletAudits.length}）
          </span>
          <ChevronDown
            className={`w-4 h-4 ml-auto text-slate-400 transition-transform ${showDeepDive ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {showDeepDive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 space-y-6 border-t border-slate-100 dark:border-slate-700">
                {/* 分项评分 + 缺口 */}
                <DimensionGapPanel
                  scores={dimensionScores}
                  gapByDimension={gapByDimension}
                  detailsByDimension={detailsByDimension}
                />

                {/* 能力缺口（低视觉权重，替代大体积雷达图） */}
                {capabilityGaps.length > 0 && <CapabilityGapCard gaps={capabilityGaps} />}

                {/* 全部问题 */}
                {suggestions.length > 0 && (
                  <IssuesSection
                    suggestions={suggestions}
                    suggestionsByPriority={suggestionsByPriority}
                    onApplySingle={onApplySingle}
                  />
                )}

                {/* 逐条体检 */}
                {bulletAudits.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <ListChecks className="w-5 h-5" />
                      <span className="font-semibold">逐条体检</span>
                      <span className="text-sm text-slate-400 dark:text-slate-500">
                        （{bulletAudits.length} 条经历描述）
                      </span>
                    </div>
                    {bulletAudits
                      .slice(0, showAllAudits ? bulletAudits.length : AUDIT_PREVIEW_LIMIT)
                      .map((b, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50/60 dark:bg-slate-900/30"
                        >
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mb-1.5">
                            <Quote className="w-3 h-3" /> 简历原文
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                            {b.quote}
                          </p>
                          {b.problems && b.problems.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {b.problems.map((p: string, j: number) => (
                                <span
                                  key={j}
                                  className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded text-xs font-medium"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          )}
                          {b.quote && b.rewrite && <DiffView before={b.quote} after={b.rewrite} />}
                        </div>
                      ))}

                    {bulletAudits.length > AUDIT_PREVIEW_LIMIT && (
                      <button
                        onClick={() => setShowAllAudits(!showAllAudits)}
                        aria-expanded={showAllAudits}
                        className="w-full py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAllAudits ? 'rotate-180' : ''}`} />
                        {showAllAudits ? '收起' : `展开其余 ${bulletAudits.length - AUDIT_PREVIEW_LIMIT} 条`}
                      </button>
                    )}
                  </div>
                )}

                {/* 名词规范 */}
                {analysis.termIssues && analysis.termIssues.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                      <SpellCheck className="w-5 h-5" />
                      <span className="font-semibold">名词规范检查</span>
                      <span className="text-sm text-slate-400 dark:text-slate-500">
                        （{analysis.termIssues.length} 处）
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {analysis.termIssues
                        .slice(0, showAllTerms ? analysis.termIssues.length : TERM_PREVIEW_LIMIT)
                        .map((t, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700"
                          >
                            <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                              {t.wrongForm}
                            </span>
                            <span className="text-slate-400 text-xs">→</span>
                            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                              {t.correctForm}
                            </span>
                            <span className="ml-auto text-xs text-slate-400 flex-shrink-0">
                              第 {t.line} 行
                            </span>
                          </div>
                        ))}
                    </div>

                    {analysis.termIssues.length > TERM_PREVIEW_LIMIT && (
                      <button
                        onClick={() => setShowAllTerms(!showAllTerms)}
                        aria-expanded={showAllTerms}
                        className="w-full mt-2 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 border border-dashed border-slate-200 dark:border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAllTerms ? 'rotate-180' : ''}`} />
                        {showAllTerms ? '收起' : `展开其余 ${analysis.termIssues.length - TERM_PREVIEW_LIMIT} 处`}
                      </button>
                    )}
                  </div>
                )}

                {/* 招聘方视角 */}
                {analysis.recruiterView && (
                  <RecruiterViewCard recruiterView={analysis.recruiterView} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/** 全部问题（按优先级分组，可折叠） */
function IssuesSection({
  suggestions,
  suggestionsByPriority,
  onApplySingle,
}: {
  suggestions: Suggestion[];
  suggestionsByPriority: Record<'high' | 'medium' | 'low', Suggestion[]>;
  onApplySingle?: (quote: string) => void;
}) {
  const [expanded, setExpanded] = useState(true);

  if (suggestions.length === 0) return null;

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2"
      >
        <AlertCircle className="w-5 h-5" />
        <span className="font-semibold">全部问题（{suggestions.length}）</span>
        <ChevronDown
          className={`w-4 h-4 ml-auto transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="space-y-4 mt-3">
          {(['high', 'medium', 'low'] as const).map((key, idx) => {
            const list = suggestionsByPriority[key];
            if (list.length === 0) return null;
            const label = (['高', '中', '低'] as const)[idx];
            return (
              <SuggestionGroup
                key={key}
                priority={label}
                suggestions={list}
                onApplySingle={onApplySingle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

const PRIORITY_STYLES: Record<string, string> = {
  高: 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10',
  中: 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10',
  低: 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/20',
};

function SuggestionGroup({
  priority,
  suggestions,
  onApplySingle,
}: {
  priority: '高' | '中' | '低';
  suggestions: Suggestion[];
  onApplySingle?: (quote: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
        {priority}优先级（{suggestions.length}）
      </p>
      <div className="space-y-2">
        {suggestions.map((s, i) => {
          // 提前收窄为 string：JSX 里的 && 短路不会缩小类型，
          // 直接用 s.quote 传给回调会因为「可能是 undefined」过不了类型检查
          const quote = s.quote ?? '';
          const rewrite = s.rewrite ?? '';

          return (
          <div
            key={i}
            className={`p-3 rounded-xl border ${PRIORITY_STYLES[priority]}`}
          >
            <p className="font-medium text-slate-900 dark:text-white text-sm mb-1.5">
              {s.issue || '问题描述'}
            </p>
            {s.impact && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">影响：{s.impact}</p>
            )}
            {s.recommendation && (
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 mr-1">建议</span>
                {s.recommendation}
              </p>
            )}
            {quote && rewrite && (
              <div className="mt-2 space-y-2">
                <DiffView before={quote} after={rewrite} />
                {onApplySingle && (
                  <button
                    onClick={() => onApplySingle(quote)}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-900/40 text-primary-600 dark:text-primary-300 border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/60 transition-colors"
                  >
                    应用此修改
                  </button>
                )}
              </div>
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
}
