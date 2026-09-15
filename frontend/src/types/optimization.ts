/**
 * 简历优化 Agent 数据模型
 *
 * 目标是把「AI 分析报告」升级为闭环工作流：
 *   发现问题 → AI 修改 → 用户确认 → 应用修改 → 重新评分
 *
 * 模型不替代后端已有的 AnalysisItem，而是在其之上派生一层「可执行优化项」，
 * 后端未来若直接下发本结构，只需在 buildImprovements 里替换适配即可。
 */

/** 证据等级：AI 结论的可信度标注，避免把推测当事实 */
export type EvidenceLevel = 'confirmed' | 'insufficient' | 'missing';

/** 证据等级对应的展示文案（后端 status 字段为中文，这里做映射） */
export const EVIDENCE_LABELS: Record<EvidenceLevel, string> = {
  confirmed: '已确认',
  insufficient: '证据不足',
  missing: '未发现',
};

/** 单个优化项在 Agent 工作流中的状态 */
export type ImprovementStatus =
  | 'pending' // 未处理：展示「AI 修改」CTA
  | 'generating' // 正在请求 AI 生成改写
  | 'generated' // 已生成：展示「查看修改」+ Diff
  | 'applied' // 用户已采用：计入重新评分
  | 'skipped'; // 用户跳过：不计入

/** 评分维度标识，与后端 dimensionExplanations.dimension 一致 */
export type ScoreDimension =
  | 'project'
  | 'skillMatch'
  | 'content'
  | 'structure'
  | 'expression';

/** 维度展示名与满分（与后端 Scoring Rubrics 保持一致） */
export const DIMENSION_META: Record<ScoreDimension, { label: string; maxScore: number }> = {
  project: { label: '项目经验', maxScore: 40 },
  skillMatch: { label: '技能匹配', maxScore: 20 },
  content: { label: '内容完整性', maxScore: 15 },
  structure: { label: '结构清晰度', maxScore: 15 },
  expression: { label: '表达专业性', maxScore: 10 },
};

/** 维度在 AnalysisItem 上的字段名映射 */
export const DIMENSION_SCORE_FIELD: Record<ScoreDimension, string> = {
  project: 'projectScore',
  skillMatch: 'skillMatchScore',
  content: 'contentScore',
  structure: 'structureScore',
  expression: 'expressionScore',
};

/** 一条可执行优化项：从 topActions / bulletAudits / suggestions 派生 */
export interface Improvement {
  /** 稳定 id，用于 React key 与状态追踪 */
  id: string;
  /** 行动标题（祈使句） */
  title: string;
  /** 优先级：高 / 中 / 低 */
  priority: '高' | '中' | '低';
  /** AI 估算的总分提升 */
  estimatedGain: number;
  /** 当前问题：简历现状描述 */
  currentProblem: string;
  /** AI 建议：怎么改 */
  suggestion: string;
  /** 证据等级 */
  evidenceLevel: EvidenceLevel;
  /** 简历原句（逐字摘录，可能为空） */
  originalText: string;
  /** 改写建议（为空表示需要调用 AI 生成） */
  suggestedText: string;
  /** 修改原因标签，如「+ 补充技术方案」 */
  reasons: string[];
  /** 派生来源，决定默认展开形态与维度推断策略 */
  source: 'topAction' | 'bulletAudit' | 'suggestion';
  /** 归属维度，用于重新评分时的维度归因 */
  dimension: ScoreDimension;
  /** 展示排序（Top3 区用） */
  rank?: number;
}

/** 单个维度的评分快照 */
export interface DimensionSnapshot {
  dimension: ScoreDimension;
  label: string;
  score: number;
  maxScore: number;
}

/** 重新评分结果：前后对比 + 逐维度变化，保证「评分变化可解释」 */
export interface RescoreResult {
  beforeTotal: number;
  afterTotal: number;
  totalDelta: number;
  dimensions: Array<{
    dimension: ScoreDimension;
    label: string;
    before: number;
    after: number;
    delta: number;
    maxScore: number;
  }>;
  /** 参与本次计算的已采用优化项数量 */
  appliedCount: number;
  /** 因维度空间已满而未完全计入的估算增益 */
  cappedGain: number;
}
