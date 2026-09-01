import { request } from './request';
import type { UploadResponse } from '../types/resume';

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
   * 健康检查
   */
  async healthCheck(): Promise<{ status: string; service: string }> {
    return request.get('/api/resumes/health');
  },
};
