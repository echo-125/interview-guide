// 简历分析响应类型
export interface ResumeAnalysisResponse {
  overallScore: number;
  scoreDetail: ScoreDetail;
  summary: string;
  strengths: string[];
  suggestions: Suggestion[];
  bulletAudits?: BulletAudit[];
  termIssues?: TermIssue[];
  headline?: string;
  dimensionExplanations?: DimensionExplanation[];
  topActions?: TopAction[];
  risks?: string[];
  recruiterView?: RecruiterView;
  originalText: string;
}

// 存储信息
export interface StorageInfo {
  fileKey: string;
  fileUrl: string;
  resumeId?: number;
}

// 上传API完整响应（异步模式：analysis 可能为空）
export interface UploadResponse {
  analysis?: ResumeAnalysisResponse;
  storage: StorageInfo;
  duplicate?: boolean;
  message?: string;
}

export interface ScoreDetail {
  contentScore: number;      // 内容完整性 (0-25)
  structureScore: number;    // 结构清晰度 (0-20)
  skillMatchScore: number;   // 技能匹配度 (0-25)
  expressionScore: number;   // 表达专业性 (0-15)
  projectScore: number;      // 项目经验 (0-15)
}

export interface Suggestion {
  category: string;         // 建议类别
  priority: '高' | '中' | '低';
  issue: string;            // 问题描述
  recommendation: string;   // 具体建议
  section?: string;         // 所属模块（专业技能/工作经历/项目经历等）
  quote?: string;           // 简历原文逐字引用
  rewrite?: string;         // 原句的优化改写
  impact?: string;          // 不修改会造成的影响
}

// 逐条经历体检：针对简历中某条描述的原句级审计
export interface BulletAudit {
  quote: string;            // 简历原文逐字摘录
  problems: string[];       // 问题标签（弱动词开头/缺量化结果/技术堆砌等）
  rewrite: string;          // 优化改写句
}

// 名词规范性问题（Java 词表确定性检查产出）
export interface TermIssue {
  wrongForm: string;        // 简历中的写法
  correctForm: string;      // 规范写法
  line: number;             // 所在行号（从 1 开始）
}

// 证据条目：带置信度状态
export interface Evidence {
  item: string;             // 证据内容
  status: string;           // 已确认 / 推测 / 缺失
  note?: string;            // 补充说明
}

// 可解释评分：单个维度的解释与证据
export interface DimensionExplanation {
  dimension: string;        // project/skillMatch/content/structure/expression
  score: number;
  maxScore: number;
  impactOnTotal: number;    // 满分 - 得分
  explanation: string;
  evidences: Evidence[];
}

// 最值得修改的优先行动
export interface TopAction {
  rank: number;
  title: string;
  estimatedGain: number;    // 预计提升分数（AI 估算）
  reason: string;
  relatedQuote?: string;    // 关联简历原句
}

// 招聘方视角：模拟招聘官快速筛选
export interface RecruiterView {
  firstImpression: string;
  verdict: string;          // 通过 / 存疑 / 不通过
  concerns: string[];
}

// AI 整篇重写结果
export interface ResumeRewriteResponse {
  rewrittenText: string;    // 重写后的完整简历纯文本
  changeSummary: string;    // 修改概述
}

export interface ApiError {
  error: string;
  detectedType?: string;
  allowedTypes?: string[];
}

// ===== JD vs 简历匹配诊断 =====

export interface JdSkillGap {
  gapSkill: string;        // 缺口技能
  jdRequirement: string;   // JD 中的要求
  resumeEvidence: string;  // 简历中的覆盖情况
  severity: string;        // 严重程度：高/中/低
  status?: string;         // 证据置信度：已确认/推测/缺失
}

export interface JdWeakness {
  area: string;            // 薄弱领域
  description: string;     // 问题描述
  advice: string;          // 补强建议
}

export type JdAnalysisStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export interface JdAnalysisRecord {
  id: number;
  resumeId: number;
  jdText: string | null;
  matchScore: number | null;
  summary: string | null;
  skillGaps: JdSkillGap[];
  weaknesses: JdWeakness[];
  recommendations: string[];
  analysisStatus: JdAnalysisStatus;
  analysisError: string | null;
  createdAt: string;
}
