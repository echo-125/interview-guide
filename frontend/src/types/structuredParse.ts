/**
 * LLM 结构化解析的后端响应类型（与后端 ResumeStructuredParseResponse 对齐）
 * 及 后端 DTO → 前端 ResumeDocument 的映射。
 */

import type { ResumeDocument } from './resumeDocument';

/** 后端解析诊断 */
export interface StructuredParseDiagnostics {
  parser: 'llm' | 'rule';
  confidence: number;
  warnings: string[];
  sourceChars: number;
  structuredChars: number;
  unparsedChars: number;
  /** 行级核对未归档的原文片段清单（L行号: 前80字符），空 = 全部行均已归档 */
  unmappedLines: string[];
  /** 原文是否因超过单次解析上限被截断 */
  truncated: boolean;
}

/** 后端返回的 LLM 文档 DTO（字段名与前端大体一致） */
export interface LlmStructuredDocument {
  basics: {
    name?: string;
    headline?: string;
    email?: string;
    phone?: string;
    location?: string;
    links?: string[];
  };
  summary?: string;
  skills?: Array<{ id?: string; name?: string; items?: string[] }>;
  experience?: Array<{
    id?: string; company?: string; title?: string; startDate?: string; endDate?: string;
    location?: string; description?: string; bullets?: Array<{ id?: string; text?: string }>;
  }>;
  projects?: Array<{
    id?: string; name?: string; role?: string; startDate?: string; endDate?: string;
    technologies?: string[]; description?: string; bullets?: Array<{ id?: string; text?: string }>;
  }>;
  education?: Array<{
    id?: string; school?: string; degree?: string; major?: string; startDate?: string; endDate?: string;
  }>;
  certifications?: Array<{ id?: string; name?: string; issuer?: string; date?: string }>;
  awards?: Array<{ id?: string; title?: string; date?: string; description?: string }>;
  languages?: Array<{ id?: string; name?: string; level?: string }>;
  customSections?: Array<{
    id?: string; title?: string;
    blocks?: Array<{ id?: string; type?: string; text?: string }>;
  }>;
}

export interface StructuredParseResponse {
  document: LlmStructuredDocument;
  diagnostics: StructuredParseDiagnostics;
}

/** 简单 id 生成（映射时补全缺失 id） */
function pid(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

/**
 * 把后端 LLM 文档映射为前端 ResumeDocument（补全缺失 id、规整数组字段）。
 */
export function toResumeDocument(backend: LlmStructuredDocument): ResumeDocument {
  const b = backend?.basics;
  const bullets = (list?: Array<{ id?: string; text?: string }>) =>
    (list || []).map(x => ({ id: x.id || pid('bullet'), text: x.text || '' }));
  const blocks = (list?: Array<{ id?: string; type?: string; text?: string }>) =>
    (list || []).map(x => ({
      id: x.id || pid('blk'),
      type: (x.type === 'bullet' || x.type === 'paragraph' ? x.type : 'text') as 'paragraph' | 'bullet' | 'text',
      text: x.text || '',
    }));

  return {
    version: 1,
    basics: {
      name: b?.name || '',
      title: b?.headline || '',
      email: b?.email || '',
      phone: b?.phone || '',
      location: b?.location || '',
      website: b?.links?.[0] || '',
      summary: backend?.summary || '',
    },
    skills: (backend?.skills || []).map(s => ({
      id: s.id || pid('skill'),
      category: s.name || '',
      name: s.name || undefined,
      items: s.items || [],
    })),
    experience: (backend?.experience || []).map(e => ({
      id: e.id || pid('exp'),
      company: e.company || '',
      title: e.title || '',
      startDate: e.startDate || '',
      endDate: e.endDate || '',
      location: e.location || undefined,
      description: e.description || undefined,
      bullets: bullets(e.bullets),
    })),
    projects: (backend?.projects || []).map(p => ({
      id: p.id || pid('prj'),
      name: p.name || '',
      role: p.role || undefined,
      startDate: p.startDate || undefined,
      endDate: p.endDate || undefined,
      technologies: p.technologies || undefined,
      description: p.description || undefined,
      bullets: bullets(p.bullets),
    })),
    education: (backend?.education || []).map(e => ({
      id: e.id || pid('edu'),
      school: e.school || '',
      degree: e.degree || '',
      major: e.major || '',
      startDate: e.startDate || undefined,
      endDate: e.endDate || undefined,
      bullets: [],
    })),
    certifications: (backend?.certifications || []).map(c => ({
      id: c.id || pid('cert'),
      name: c.name || '',
      issuer: c.issuer || undefined,
      date: c.date || undefined,
    })),
    awards: (backend?.awards || []).map(a => ({
      id: a.id || pid('award'),
      title: a.title || '',
      date: a.date || undefined,
      description: a.description || undefined,
    })),
    languages: (backend?.languages || []).map(l => ({
      id: l.id || pid('lang'),
      name: l.name || '',
      level: l.level || undefined,
    })),
    customSections: (backend?.customSections || []).map(s => ({
      id: s.id || pid('custom'),
      title: s.title || '其他内容',
      blocks: blocks(s.blocks),
    })),
  };
}