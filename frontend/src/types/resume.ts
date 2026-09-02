// 简历分析响应类型
export interface ResumeAnalysisResponse {
  overallScore: number;
  scoreDetail: ScoreDetail;
  summary: string;
  strengths: string[];
  suggestions: Suggestion[];
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
