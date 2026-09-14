import { useCallback, useEffect, useState } from 'react';
import {
  AlertCircle, ChevronDown, ChevronUp, Clock, FileText, Loader2, RefreshCw, Sparkles, Target,
} from 'lucide-react';
import { resumeApi } from '../api/resume';
import { getErrorMessage } from '../api/request';
import { useChatProviders } from '../hooks/useChatProviders';
import LlmProviderSelect from './LlmProviderSelect';
import { useToast } from './Toast';
import { formatDateTime } from '../utils/date';
import { getScoreTextColor } from '../utils/score';
import type { JdAnalysisRecord } from '../types/resume';

const MIN_JD_LENGTH = 50;

const SEVERITY_STYLES: Record<string, string> = {
  高: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  中: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  低: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
};

function severityBadge(severity: string | null | undefined) {
  if (!severity) return null;
  const cls = SEVERITY_STYLES[severity] || SEVERITY_STYLES['低'];
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ${cls}`}>
      {severity}
    </span>
  );
}

const CONFIDENCE_STYLES: Record<string, { cls: string; icon: string }> = {
  已确认: { cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', icon: '✓' },
  推测: { cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', icon: '?' },
  缺失: { cls: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300', icon: '✕' },
};

function confidenceBadge(status: string | null | undefined) {
  if (!status) return null;
  const style = CONFIDENCE_STYLES[status] || CONFIDENCE_STYLES['缺失'];
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ${style.cls}`}>
      {style.icon} {status}
    </span>
  );
}

function statusBadge(record: JdAnalysisRecord) {
  if (record.analysisStatus === 'PENDING' || record.analysisStatus === 'PROCESSING') {
    return (
      <span className="flex items-center gap-1 text-xs text-blue-500">
        <RefreshCw className="w-3 h-3 animate-spin" /> 分析中
      </span>
    );
  }
  if (record.analysisStatus === 'FAILED') {
    return (
      <span className="flex items-center gap-1 text-xs text-red-500">
        <AlertCircle className="w-3 h-3" /> 分析失败
      </span>
    );
  }
  if (record.matchScore !== null && record.matchScore !== undefined) {
    return (
      <span className="text-xs text-slate-600 dark:text-slate-300">
        匹配度 <span className={`font-bold ${getScoreTextColor(record.matchScore)}`}>{record.matchScore}</span>
      </span>
    );
  }
  return null;
}

/**
 * JD vs 简历匹配诊断面板
 * 粘贴目标岗位 JD 发起异步分析，展示匹配度、技能缺口、薄弱点与补强建议
 */
export default function JdMatchPanel({ resumeId }: { resumeId: number }) {
  const { showToast } = useToast();
  const chatProviders = useChatProviders();
  const [jdText, setJdText] = useState('');
  const [llmProvider, setLlmProvider] = useState('');
  const [records, setRecords] = useState<JdAnalysisRecord[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [jdExpanded, setJdExpanded] = useState(false);

  const loadRecords = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const list = await resumeApi.listJdAnalyses(resumeId);
      setRecords(list);
    } catch (err) {
      console.error('加载 JD 匹配诊断记录失败', err);
    } finally {
      if (!silent) setLoading(false);
    }
  }, [resumeId]);

  useEffect(() => {
    loadRecords();
  }, [loadRecords]);

  // 选中记录：默认最新一条；记录列表变化后保持选中已有的记录
  useEffect(() => {
    if (records.length === 0) {
      setSelectedId(null);
      return;
    }
    setSelectedId(prev => (prev && records.some(r => r.id === prev) ? prev : records[0].id));
  }, [records]);

  // 切换记录时折叠 JD 原文
  useEffect(() => {
    setJdExpanded(false);
  }, [selectedId]);

  const latest = records[0];
  const selected = records.find(r => r.id === selectedId) ?? latest;
  const isProcessing = latest?.analysisStatus === 'PENDING' || latest?.analysisStatus === 'PROCESSING';

  // 轮询：最新记录处理中时每 5 秒静默刷新
  useEffect(() => {
    if (isProcessing) {
      const timer = setInterval(() => loadRecords(true), 5000);
      return () => clearInterval(timer);
    }
  }, [isProcessing, loadRecords]);

  const handleStart = async () => {
    if (jdText.trim().length < MIN_JD_LENGTH) {
      showToast(`请粘贴至少 ${MIN_JD_LENGTH} 字的职位描述`, 'error');
      return;
    }
    setSubmitting(true);
    try {
      await resumeApi.startJdAnalysis(resumeId, jdText.trim(), llmProvider || undefined);
      setJdText('');
      await loadRecords(true);
    } catch (err) {
      showToast(getErrorMessage(err) || '发起诊断失败，请重试', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="w-6 h-6 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 发起诊断 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-primary-500" />
          <h3 className="font-bold text-slate-800 dark:text-white">JD 匹配诊断</h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          粘贴目标岗位的职位描述（JD），AI 将对比简历给出匹配度评分、技能缺口与面试前补强建议；诊断出的薄弱点会自动融入之后的模拟面试出题。
        </p>
        <textarea
          value={jdText}
          onChange={e => setJdText(e.target.value)}
          placeholder={`粘贴目标岗位的职位描述（JD），至少 ${MIN_JD_LENGTH} 字...`}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700
            bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white
            placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2
            focus:ring-primary-500/50 focus:border-primary-400 transition-shadow"
        />
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              分析模型 <span className="text-slate-400 font-normal">(选填，默认跟随系统设置)</span>
            </label>
            <LlmProviderSelect
              providers={chatProviders}
              value={llmProvider}
              onChange={setLlmProvider}
              disabled={submitting}
            />
          </div>
          <button
            onClick={handleStart}
            disabled={submitting || jdText.trim().length < MIN_JD_LENGTH}
            className="px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2
              bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25
              hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {submitting ? '提交中...' : '开始诊断'}
          </button>
        </div>
      </div>

      {/* 诊断历史列表 + 当前选中结果 */}
      {selected && (
        <div className="space-y-4">
          {/* 历史记录切换条 */}
          {records.length > 1 && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-4">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                诊断历史（{records.length} 条）
              </p>
              <div className="flex flex-wrap gap-2">
                {records.map((rec, i) => {
                  const active = rec.id === selectedId;
                  return (
                    <button
                      key={rec.id}
                      onClick={() => setSelectedId(rec.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border
                        ${active
                          ? 'border-primary-500 bg-primary-50/80 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                    >
                      <span className="tabular-nums">
                        {rec.matchScore !== null && rec.matchScore !== undefined
                          ? `${rec.matchScore}分`
                          : rec.analysisStatus === 'FAILED' ? '失败'
                          : rec.analysisStatus === 'PENDING' || rec.analysisStatus === 'PROCESSING' ? '分析中'
                          : '待出分'}
                      </span>
                      <span className="text-slate-300 dark:text-slate-600">·</span>
                      <span>{formatDateTime(rec.createdAt)}</span>
                      {i === 0 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                          最新
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 选中诊断结果 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <h3 className="font-bold text-slate-800 dark:text-white">诊断结果</h3>
              <span className="flex items-center gap-3 text-xs text-slate-400">
                {statusBadge(selected)}
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {formatDateTime(selected.createdAt)}
                </span>
              </span>
            </div>

            {selected.analysisStatus === 'FAILED' ? (
              <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-sm text-red-600 dark:text-red-300">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{selected.analysisError || '分析失败，请重新发起诊断'}</span>
              </div>
            ) : selected.analysisStatus === 'PENDING' || selected.analysisStatus === 'PROCESSING' ? (
              <div className="flex items-center justify-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400">
                <Loader2 className="w-5 h-5 text-primary-500 animate-spin" />
                AI 正在对比简历与 JD，请稍候...
              </div>
            ) : (
              <div className="space-y-5">
                {/* 匹配度总分 */}
                {selected.matchScore !== null && selected.matchScore !== undefined && (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50/80 dark:bg-primary-900/20">
                    <div className={`text-4xl font-bold tabular-nums ${getScoreTextColor(selected.matchScore)}`}>
                      {selected.matchScore}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 dark:text-white mb-0.5">JD 匹配度（满分 100）</p>
                      {selected.summary && <p className="text-xs leading-relaxed">{selected.summary}</p>}
                    </div>
                  </div>
                )}

                {/* 诊断使用的 JD 原文（可折叠查看） */}
                {selected.jdText && (
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <button
                      onClick={() => setJdExpanded(!jdExpanded)}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span>诊断使用的 JD 原文</span>
                      {jdExpanded
                        ? <ChevronUp className="w-4 h-4 ml-auto text-slate-400" />
                        : <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />}
                    </button>
                    {jdExpanded && (
                      <pre className="px-4 pb-3 text-xs text-slate-500 dark:text-slate-400 whitespace-pre-wrap break-words leading-relaxed">{selected.jdText}</pre>
                    )}
                  </div>
                )}

                {/* 技能缺口 */}
                {selected.skillGaps.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      技能缺口（{selected.skillGaps.length}）
                    </p>
                    <div className="space-y-2">
                      {selected.skillGaps.map((gap, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-medium text-slate-800 dark:text-white">{gap.gapSkill}</span>
                            {severityBadge(gap.severity)}
                            {confidenceBadge(gap.status)}
                          </div>
                          {gap.jdRequirement && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">岗位要求：{gap.jdRequirement}</p>
                          )}
                          {gap.resumeEvidence && (
                            <p className="text-xs text-slate-500 dark:text-slate-400">简历现状：{gap.resumeEvidence}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 薄弱点 */}
                {selected.weaknesses.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      薄弱点（{selected.weaknesses.length}）
                    </p>
                    <div className="space-y-2">
                      {selected.weaknesses.map((w, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                          <p className="text-sm font-medium text-slate-800 dark:text-white">{w.area}</p>
                          {w.description && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{w.description}</p>}
                          {w.advice && (
                            <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">建议：{w.advice}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 建议补强知识点 */}
                {selected.recommendations.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">面试前建议补强</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.recommendations.map((rec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
