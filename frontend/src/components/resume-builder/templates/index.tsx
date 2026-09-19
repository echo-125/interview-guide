/**
 * 模板注册表：ResumeDocument + Template → Renderer
 */

import type { ReactNode } from 'react';
import type { ResumeDocument } from '../../../types/resumeDocument';
import type { ResumeTemplate, ResumeTemplateId } from './types';
import { DeveloperTemplate } from './DeveloperTemplate';
import { ClassicTemplate } from './ClassicTemplate';
import { AtsTemplate } from './AtsTemplate';

export const RESUME_TEMPLATES: Record<ResumeTemplateId, ResumeTemplate> = {
  developer: {
    id: 'developer',
    label: 'Developer（程序员单栏）',
    description: '工作经历优先、技术栈明显、ATS 友好、统一字体的开发者简历',
    render: (doc: ResumeDocument) => <DeveloperTemplate doc={doc} />,
  },
  classic: {
    id: 'classic',
    label: 'Classic（经典单栏）',
    description: '衬线字体、居中头部、日期右对齐的传统排版',
    render: (doc: ResumeDocument) => <ClassicTemplate doc={doc} />,
  },
  ats: {
    id: 'ats',
    label: 'ATS（极简可解析）',
    description: '单栏无装饰、强调关键词与标准时序，机器解析友好',
    render: (doc: ResumeDocument) => <AtsTemplate doc={doc} />,
  },
};

export const RESUME_TEMPLATE_IDS: ResumeTemplateId[] = ['developer', 'classic', 'ats'];

/** 按 id 取模板（兜底 developer） */
export function getResumeTemplate(id: ResumeTemplateId): ResumeTemplate {
  return RESUME_TEMPLATES[id] ?? RESUME_TEMPLATES.developer;
}

/** 渲染当前模板（供预览与打印共用） */
export function renderResumeTemplate(id: ResumeTemplateId, doc: ResumeDocument): ReactNode {
  return getResumeTemplate(id).render(doc);
}
