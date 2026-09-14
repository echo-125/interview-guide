import {useMemo, useState} from 'react';
import {motion} from 'framer-motion';
import RadarChart from './RadarChart';
import ScoreProgressBar from './ScoreProgressBar';
import ScoreExplanationCard from './ScoreExplanationCard';
import DiffView from './DiffView';
import {formatDateTime} from '../utils/date';
import {
  AlertCircle, Briefcase, CheckCircle2, ChevronDown, Clock, Download, Flame, ListChecks, Loader2,
  Quote, RefreshCw, SpellCheck, Target, TrendingUp, Wand2,
} from 'lucide-react';
import type {AnalyzeStatus} from '../api/history';
import type {TopAction} from '../types/resume';

interface AnalysisPanelProps {
  analysis: any;
  analyzeStatus?: AnalyzeStatus;
  analyzeError?: string;
  onExport: () => void;
  exporting: boolean;
  onReanalyze?: () => void;
  reanalyzing?: boolean;
  // 应用单条改写（按 quote 定位）
  onApplySingle?: (quote: string) => void;
  // 一键应用全部改写
  onApplyAll?: () => void;
  // AI 整篇重写
  onAiRewrite?: () => void;
  rewriting?: boolean;
}

/**
 * 简历分析面板组件
 * 布局：AI 结论 → 评分解读/雷达图 → Top3 行动 → 全部问题 → 逐条体检 → 名词规范 → 招聘方视角
 */
export default function AnalysisPanel({
  analysis,
  analyzeStatus,
  analyzeError,
  onExport,
  exporting,
  onReanalyze,
  reanalyzing,
  onApplySingle,
  onApplyAll,
  onAiRewrite,
  rewriting,
}: AnalysisPanelProps) {
  // 按优先级分类建议
  const suggestionsByPriority = useMemo(() => {
    if (!analysis?.suggestions) return { high: [], medium: [], low: [] };

    const suggestions = analysis.suggestions;
    return {
      high: suggestions.filter((s: any) => s.priority === '高'),
      medium: suggestions.filter((s: any) => s.priority === '中'),
      low: suggestions.filter((s: any) => s.priority === '低')
    };
  }, [analysis]);

  const hasRewrites = useMemo(() => {
    const pairs = [...(analysis?.bulletAudits || []), ...(analysis?.suggestions || [])];
    return pairs.some((p: any) => p.quote && p.rewrite);
  }, [analysis]);

  // 检测分析结果是否有效
  const hasErrorKeywords = analysis?.summary && (
    analysis.summary.includes('I/O error') ||
    analysis.summary.includes('分析过程中出现错误') ||
    analysis.summary.includes('简历分析失败') ||
    analysis.summary.includes('Remote host terminated') ||
    analysis.summary.includes('handshake')
  );
  const isAnalysisValid = analysis &&
    analysis.overallScore >= 10 &&
    analysis.summary &&
    !hasErrorKeywords;

  // 判断是否为"分析中"状态
  const isProcessing = analyzeStatus === 'PENDING' ||
    analyzeStatus === 'PROCESSING' ||
    (analyzeStatus === undefined && !analysis);

  // 处理分析中状态
  if (isProcessing) {
    const isExplicitProcessing = analyzeStatus === 'PROCESSING';
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center">
          <div
              className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
          {isExplicitProcessing ? (
              <Loader2 className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin"/>
          ) : (
              <Clock className="w-8 h-8 text-yellow-500 dark:text-yellow-400"/>
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
            深度分析包含逐条体检与证据链，输出量较大，可能需要几分钟，取决于所用模型的速度，请勿关闭页面。
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">页面将自动刷新显示分析结果</p>
      </div>
    );
  }

  // 处理分析失败状态
  if (analyzeStatus === 'FAILED' || !isAnalysisValid) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center">
          <div
              className="w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400"/>
        </div>
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">分析失败</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-4">AI 服务暂时不可用，请稍后重试</p>
        {(analyzeError || analysis?.summary) && (
            <div
                className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-left mb-4">
              <p className="text-sm text-red-600 dark:text-red-400">{analyzeError || analysis.summary}</p>
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

  const projectScore = analysis.projectScore || 0;
  const skillMatchScore = analysis.skillMatchScore || 0;
  const contentScore = analysis.contentScore || 0;
  const structureScore = analysis.structureScore || 0;
  const expressionScore = analysis.expressionScore || 0;

  return (
    <div className="space-y-6">
      {/* AI 结论 banner */}
      <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">AI 结论</span>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              分析于 {formatDateTime(analysis.analyzedAt)}
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {onReanalyze && (
              <motion.button
                onClick={onReanalyze}
                disabled={reanalyzing}
                className="px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all disabled:opacity-50 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RefreshCw className={`w-4 h-4 ${reanalyzing ? 'animate-spin' : ''}`} />
                {reanalyzing ? '重新分析中...' : '重新分析'}
              </motion.button>
            )}
            {onAiRewrite && (
              <motion.button
                onClick={onAiRewrite}
                disabled={rewriting}
                className="px-4 py-2 border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/40 rounded-lg text-primary-600 dark:text-primary-300 text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-all disabled:opacity-50 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Wand2 className={`w-4 h-4 ${rewriting ? 'animate-pulse' : ''}`} />
                {rewriting ? 'AI 重写中...' : 'AI 整篇重写'}
              </motion.button>
            )}
            {onApplyAll && hasRewrites && (
              <motion.button
                onClick={onApplyAll}
                className="px-4 py-2 border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg text-emerald-600 dark:text-emerald-300 text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckCircle2 className="w-4 h-4" />
                一键应用全部改写
              </motion.button>
            )}
            <motion.button
              onClick={onExport}
              disabled={exporting}
              className="px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all disabled:opacity-50 flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              {exporting ? '导出中...' : '导出分析报告'}
            </motion.button>
          </div>
        </div>

        {analysis.headline && (
          <p className="text-xl font-bold text-slate-900 dark:text-white leading-relaxed mb-2">
            {analysis.headline}
          </p>
        )}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {analysis.summary || '候选人具备扎实的技术基础，有大型项目架构经验。'}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4">
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">总分</span>
            <span className="text-4xl font-bold text-slate-900 dark:text-white">{analysis.overallScore || 0}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400"> / 100</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4">
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">可行动项</span>
            <span className="text-4xl font-bold text-slate-900 dark:text-white">
              {(analysis.topActions?.length || 0) + (analysis.suggestions?.length || 0)}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400"> 条建议</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.strengths && analysis.strengths.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4">
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2">
                👍 你的优势
              </span>
              <div className="flex flex-wrap gap-2">
                {analysis.strengths.map((s: string, i: number) => (
                    <span key={i}
                          className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          {analysis.risks && analysis.risks.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4">
              <span className="text-sm font-semibold text-red-500 dark:text-red-400 block mb-2">
                ⚠️ 最大风险
              </span>
              <ul className="space-y-1.5">
                {analysis.risks.map((r: string, i: number) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                    <span className="text-red-400 flex-shrink-0">·</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>

      {/* 评分解读 + 雷达图 */}
      <div className={analysis.dimensionExplanations?.length > 0 ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''}>
        {analysis.dimensionExplanations?.length > 0 && (
          <ScoreExplanationCard explanations={analysis.dimensionExplanations} />
        )}

        {/* 多维度评分雷达图 */}
        <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6">
            <Target className="w-5 h-5" />
            <span className="font-semibold">多维度评分</span>
          </div>

          <RadarChart data={[
            { subject: '表达专业性', score: expressionScore, fullMark: 10 },
            { subject: '技能匹配', score: skillMatchScore, fullMark: 20 },
            { subject: '内容完整性', score: contentScore, fullMark: 15 },
            { subject: '结构清晰度', score: structureScore, fullMark: 15 },
            { subject: '项目经验', score: projectScore, fullMark: 40 },
          ]} height={320} />

          {/* 维度得分详情 */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <ScoreProgressBar
              label="项目经验"
              score={projectScore}
              maxScore={40}
              color="bg-purple-500"
              delay={0.3}
              className="col-span-2"
            />
            <ScoreProgressBar
              label="技能匹配"
              score={skillMatchScore}
              maxScore={20}
              color="bg-blue-500"
              delay={0.4}
            />
            <ScoreProgressBar
              label="内容完整性"
              score={contentScore}
              maxScore={15}
              color="bg-emerald-500"
              delay={0.5}
            />
            <ScoreProgressBar
              label="结构清晰度"
              score={structureScore}
              maxScore={15}
              color="bg-cyan-500"
              delay={0.6}
            />
            <ScoreProgressBar
              label="表达专业性"
              score={expressionScore}
              maxScore={10}
              color="bg-orange-500"
              delay={0.7}
            />
          </div>
        </motion.div>
      </div>

      {/* 最值得修改的 3 件事 */}
      {analysis.topActions && analysis.topActions.length > 0 && (
        <TopActionsSection actions={analysis.topActions} onApplySingle={onApplySingle} />
      )}

      {/* 全部问题（按优先级分组） */}
      <IssuesSection
        suggestions={analysis.suggestions}
        suggestionsByPriority={suggestionsByPriority}
        defaultCollapsed={!!(analysis.topActions && analysis.topActions.length > 0)}
        onApplySingle={onApplySingle}
      />

      {/* 逐条体检 - 针对简历中具体经历描述的原句级审计 */}
      {analysis.bulletAudits && analysis.bulletAudits.length > 0 && (
        <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6">
            <ListChecks className="w-5 h-5" />
            <span className="font-semibold">逐条体检</span>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              ({analysis.bulletAudits.length} 条经历描述)
            </span>
          </div>

          <div className="space-y-4">
            {analysis.bulletAudits.map((b: any, i: number) => (
              <motion.div
                key={i}
                className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50/60 dark:bg-slate-900/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.08 }}
              >
                <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mb-1.5">
                  <Quote className="w-3 h-3" /> 简历原文
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">{b.quote}</p>

                {b.problems && b.problems.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {b.problems.map((p: string, j: number) => (
                      <span key={j}
                            className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded text-xs font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                {b.quote && b.rewrite && (
                  <DiffView before={b.quote} after={b.rewrite} />
                )}

                {b.quote && b.rewrite && onApplySingle && (
                  <button
                    onClick={() => onApplySingle(b.quote)}
                    className="mt-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-colors flex items-center gap-1.5"
                  >
                    <Wand2 className="w-3.5 h-3.5" />
                    应用此修改
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 名词规范 - Java 词表确定性检查结果 */}
      {analysis.termIssues && analysis.termIssues.length > 0 && (
        <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
            <SpellCheck className="w-5 h-5" />
            <span className="font-semibold">名词规范检查</span>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              ({analysis.termIssues.length} 处)
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
            以下结果由系统词表自动检查生成，行号对应简历解析后的文本行。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {analysis.termIssues.map((t: any, i: number) => (
              <div key={i}
                   className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700">
                <span className="text-sm text-slate-500 dark:text-slate-400 line-through">{t.wrongForm}</span>
                <span className="text-slate-400 text-xs">→</span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{t.correctForm}</span>
                <span className="ml-auto text-xs text-slate-400 flex-shrink-0">第 {t.line} 行</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 招聘方视角 */}
      {analysis.recruiterView && (
        <RecruiterViewSection recruiterView={analysis.recruiterView} />
      )}
    </div>
  );
}

/**
 * 最值得修改的 3 件事
 */
function TopActionsSection({
  actions,
  onApplySingle,
}: {
  actions: TopAction[];
  onApplySingle?: (quote: string) => void;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.div
        className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1.5">
        <Flame className="w-5 h-5 text-orange-500" />
        <span className="font-semibold">最值得修改的 {actions.length} 件事</span>
        <span className="text-xs text-slate-400 dark:text-slate-500">（提升分数为 AI 估算）</span>
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">按预期收益排序，先改收益最高的</p>

      <div className="space-y-3">
        {actions.map((action, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={i}
              className={`rounded-xl border-2 p-4 transition-colors ${
                i === 0
                  ? 'border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-black leading-none flex-shrink-0 ${
                  i === 0 ? 'text-orange-300 dark:text-orange-700' : 'text-slate-200 dark:text-slate-700'
                }`}>
                  0{action.rank || i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-slate-900 dark:text-white">{action.title}</p>
                    {action.estimatedGain > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                        预计提升 +{action.estimatedGain} 分
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{action.reason}</p>

                  <div className="flex gap-2 mt-3">
                    {action.relatedQuote && (
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : i)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        {isExpanded ? '收起原因' : '查看原因'}
                      </button>
                    )}
                    {action.relatedQuote && onApplySingle && (
                      <button
                        onClick={() => onApplySingle(action.relatedQuote!)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-colors flex items-center gap-1.5"
                      >
                        <Wand2 className="w-3.5 h-3.5" />
                        一键修改
                      </button>
                    )}
                  </div>

                  {isExpanded && action.relatedQuote && (
                    <div className="mt-3 bg-white dark:bg-slate-800 rounded-lg p-3 border-l-4 border-slate-300 dark:border-slate-600">
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
                        <Quote className="w-3 h-3" /> 关联的简历原句
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{action.relatedQuote}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/**
 * 全部问题（可折叠，按优先级分组）
 */
function IssuesSection({
  suggestions,
  suggestionsByPriority,
  defaultCollapsed,
  onApplySingle,
}: {
  suggestions: any[];
  suggestionsByPriority: { high: any[]; medium: any[]; low: any[] };
  defaultCollapsed: boolean;
  onApplySingle?: (quote: string) => void;
}) {
  const [expanded, setExpanded] = useState(!defaultCollapsed);
  const total = suggestions?.length || 0;

  if (total === 0) {
    return (
      <motion.div className="bg-white dark:bg-slate-800 rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <div className="text-center py-8 text-slate-500 dark:text-slate-400">暂无改进建议</div>
      </motion.div>
    );
  }

  return (
    <motion.div
        className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2 text-slate-500 dark:text-slate-400"
      >
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-semibold">全部问题（{total}）</span>
        <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      {expanded && (
        <div className="space-y-6 mt-6">
          {suggestionsByPriority.high.length > 0 && (
            <SuggestionSection
              priority="高"
              suggestions={suggestionsByPriority.high}
              onApplySingle={onApplySingle}
              delay={0.4}
            />
          )}
          {suggestionsByPriority.medium.length > 0 && (
            <SuggestionSection
              priority="中"
              suggestions={suggestionsByPriority.medium}
              onApplySingle={onApplySingle}
              delay={0.45}
            />
          )}
          {suggestionsByPriority.low.length > 0 && (
            <SuggestionSection
              priority="低"
              suggestions={suggestionsByPriority.low}
              onApplySingle={onApplySingle}
              delay={0.5}
            />
          )}
        </div>
      )}
    </motion.div>
  );
}

// 建议分组组件：问题 → 证据 → 影响 → 建议（+ 优化改写 Diff）
function SuggestionSection({
  priority,
  suggestions,
  onApplySingle,
  delay
}: {
  priority: string;
  suggestions: any[];
  onApplySingle?: (quote: string) => void;
  delay: number;
}) {
  const getPriorityColor = (p: string) => {
    switch (p) {
      case '高':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400';
      case '中':
        return 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400';
      case '低':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400';
      default:
        return 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
    }
  };

  const getPriorityBadgeColor = (p: string) => {
    switch (p) {
      case '高':
        return 'bg-red-500 text-white';
      case '中':
        return 'bg-amber-500 text-white';
      case '低':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-slate-500 text-white';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '项目': 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300',
      '技能': 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
      '内容': 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
      '格式': 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
      '结构': 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300',
      '表达': 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'
    };
    return colors[category] || 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300';
  };

  const groupStyles: Record<string, { badge: string; line: string }> = {
    '高': { badge: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300', line: 'bg-red-100 dark:bg-red-900/50' },
    '中': { badge: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300', line: 'bg-amber-100 dark:bg-amber-900/50' },
    '低': { badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300', line: 'bg-blue-100 dark:bg-blue-900/50' },
  };
  const style = groupStyles[priority] || groupStyles['中'];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 ${style.badge} rounded-full text-sm font-semibold`}>
          {priority}优先级 ({suggestions.length})
        </span>
        <div className={`flex-1 h-px ${style.line}`}></div>
      </div>
      <div className="space-y-3">
        {suggestions.map((s: any, i: number) => (
            <motion.div
            key={`${priority}-${i}`}
            className={`p-4 rounded-xl border-2 ${getPriorityColor(priority)}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + i * 0.1 }}
          >
            <div className="flex items-start gap-2 mb-2 flex-wrap">
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getPriorityBadgeColor(priority)}`}>
                {priority}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(s.category || '其他')}`}>
                {s.category || '其他'}
              </span>
              {s.section && (
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {s.section}
                </span>
              )}
            </div>

            {/* 问题 */}
            <p className="font-semibold text-slate-900 dark:text-white mb-2">{s.issue || '问题描述'}</p>

            {/* 证据 */}
            {s.quote && (
              <div className="bg-white/70 dark:bg-slate-900/40 rounded-lg p-2.5 border-l-4 border-slate-300 dark:border-slate-600 mb-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 flex items-center gap-1">
                  <Quote className="w-3 h-3" /> 证据 · 简历原文
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.quote}</p>
              </div>
            )}

            {/* 影响 */}
            {s.impact && (
              <div className="bg-white/70 dark:bg-slate-900/40 rounded-lg p-2.5 border-l-4 border-amber-400 mb-2">
                <p className="text-xs text-amber-600 dark:text-amber-400 mb-0.5">影响 · 不改会怎样</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.impact}</p>
              </div>
            )}

            {/* 建议 */}
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-2">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mr-1.5">建议</span>
              {s.recommendation || s}
            </p>

            {/* 优化改写 Diff */}
            {s.quote && s.rewrite && (
              <>
                <DiffView before={s.quote} after={s.rewrite} />
                {onApplySingle && (
                  <button
                    onClick={() => onApplySingle(s.quote)}
                    className="mt-2.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-900/40 text-primary-600 dark:text-primary-300 border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/60 transition-colors flex items-center gap-1.5"
                  >
                    <Wand2 className="w-3.5 h-3.5" />
                    应用此修改
                  </button>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * 招聘方视角：模拟招聘官 10 秒筛选
 */
function RecruiterViewSection({ recruiterView }: { recruiterView: any }) {
  const verdictStyle =
    recruiterView.verdict === '通过'
      ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
      : recruiterView.verdict === '不通过'
        ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
        : 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300';

  return (
    <motion.div
        className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
    >
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Briefcase className="w-5 h-5" />
          <span className="font-semibold">招聘方视角</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">AI 模拟招聘官 10 秒筛选</span>
        </div>
        {recruiterView.verdict && (
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${verdictStyle}`}>
            预判：{recruiterView.verdict}
          </span>
        )}
      </div>

      {recruiterView.firstImpression && (
        <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 mb-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">第一印象</p>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{recruiterView.firstImpression}</p>
        </div>
      )}

      {recruiterView.concerns && recruiterView.concerns.length > 0 && (
        <div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">主要顾虑</p>
          <ul className="space-y-1.5">
            {recruiterView.concerns.map((c: string, i: number) => (
              <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                <span className="text-red-400 flex-shrink-0">·</span>{c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
