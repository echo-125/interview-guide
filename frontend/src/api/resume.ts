import { request } from './request';
import type { UploadResponse, JdAnalysisRecord, ResumeRewriteResponse } from '../types/resume';
import type { StructuredParseResponse } from '../types/structuredParse';
import type { ResumeDocument } from '../types/resumeDocument';
import type { DocumentRevision } from '../utils/resumeDocument/structuredMapping';

/** 简历工作区快照（original/current 文档 + revisions 全量，后端透传 JSON） */
export interface WorkingDocumentSnapshot {
  parser: string;
  sourceTextHash: string;
  originalDocument: ResumeDocument;
  document: ResumeDocument;
  revisionIndex: number;
  revisionSeq: number;
  revisions: DocumentRevision[];
}

export const resumeApi = {
  /**
   * 上传简历并获取分析结果
   * @param llmProvider 分析使用的 Provider（空 = 跟随系统默认）
   */
  async uploadAndAnalyze(file: File, llmProvider?: string): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);
    if (llmProvider) {
      formData.append('llmProvider', llmProvider);
    }
    return request.upload<UploadResponse>('/api/resumes/upload', formData);
  },

  /**
   * 重新分析简历
   * @param llmProvider 分析使用的 Provider（空 = 沿用简历上次的 Provider）
   */
  async reanalyze(resumeId: number | string, llmProvider?: string): Promise<void> {
    const query = llmProvider ? `?llmProvider=${encodeURIComponent(llmProvider)}` : '';
    return request.post(`/api/resumes/${resumeId}/reanalyze${query}`);
  },

  /**
   * AI 整篇重写简历（同步，按需调用）
   * @param llmProvider 使用的 Provider（空 = 跟随系统默认）
   */
  async rewriteResume(resumeId: number | string, llmProvider?: string): Promise<ResumeRewriteResponse> {
    const query = llmProvider ? `?llmProvider=${encodeURIComponent(llmProvider)}` : '';
    return request.post<ResumeRewriteResponse>(`/api/resumes/${resumeId}/rewrite${query}`);
  },

  /**
   * LLM 结构化解析简历原文（同步，不改写、不落库）
   * @param llmProvider 使用的 Provider（空 = 跟随系统默认）
   */
  async parseStructured(
    resumeId: number | string,
    llmProvider?: string
  ): Promise<StructuredParseResponse> {
    const query = llmProvider ? `?llmProvider=${encodeURIComponent(llmProvider)}` : '';
    return request.post<StructuredParseResponse>(`/api/resumes/${resumeId}/parse-structured${query}`);
  },

  /**
   * 读取简历工作区快照（无记录返回 null）
   */
  async getWorkingDocument(resumeId: number | string): Promise<WorkingDocumentSnapshot | null> {
    return request.get<WorkingDocumentSnapshot | null>(`/api/resumes/${resumeId}/working-document`);
  },

  /**
   * 保存简历工作区快照（幂等整体覆盖）
   */
  async saveWorkingDocument(
    resumeId: number | string,
    snapshot: WorkingDocumentSnapshot
  ): Promise<WorkingDocumentSnapshot> {
    return request.put<WorkingDocumentSnapshot>(`/api/resumes/${resumeId}/working-document`, snapshot);
  },

  /**
   * 发起 JD vs 简历匹配诊断（异步，返回 PENDING 记录，轮询列表接口获取状态）
   * @param jdText 目标岗位 JD 文本
   * @param llmProvider 分析使用的 Provider（空 = 跟随系统默认）
   */
  async startJdAnalysis(
    resumeId: number | string,
    jdText: string,
    llmProvider?: string
  ): Promise<JdAnalysisRecord> {
    return request.post<JdAnalysisRecord>(`/api/resumes/${resumeId}/jd-analysis`, {
      jdText,
      llmProvider: llmProvider || null,
    });
  },

  /**
   * 获取简历的 JD 匹配诊断记录列表（最新在前）
   */
  async listJdAnalyses(resumeId: number | string): Promise<JdAnalysisRecord[]> {
    return request.get<JdAnalysisRecord[]>(`/api/resumes/${resumeId}/jd-analyses`);
  },

  /**
   * 健康检查
   */
  async healthCheck(): Promise<{ status: string; service: string }> {
    return request.get('/api/resumes/health');
  },
};
