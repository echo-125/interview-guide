/**
 * 模板系统定义 (Phase 3 POC)
 *
 * 模板与数据完全解耦：ResumeDocument + Template → Renderer。
 * 换模板只换 render 函数，不改变任何数据 → 换模板不丢内容。
 * render 输出 A4 尺寸的 HTML（用于屏幕实时预览，结构上可被打印/导出复用）。
 */

import type { ReactNode } from 'react';
import type { ResumeDocument } from '../../../types/resumeDocument';

export type ResumeTemplateId = 'developer' | 'classic' | 'ats';

export interface ResumeTemplate {
  id: ResumeTemplateId;
  label: string;
  description: string;
  /** 把 ResumeDocument 渲染为 A4 HTML（纯展示，不修改数据） */
  render: (doc: ResumeDocument) => ReactNode;
}
