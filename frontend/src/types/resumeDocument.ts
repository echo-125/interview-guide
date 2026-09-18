/**
 * 自研结构化简历文档模型 (Phase 3 POC)
 *
 * 设计要点（结合 Reactive Resume / JSON Resume 调研，按本项目需求裁剪）：
 * - 所有 section 与条目都有稳定 id，支持 AI 精确寻址（如 experience[id].bullets[id]）
 * - 富文本一律为纯文本（POC 阶段不引入 HTML 富文本，后续再升级）
 * - 复杂/未识别内容走 customSections 与 rawText 兜底，不阻塞解析
 * - 数据与模板完全解耦：ResumeDocument + Template → Renderer
 */

export interface ResumeBullet {
  id: string;
  text: string;
}

export interface ResumeExperienceItem {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location?: string;
  /** 条目级补充说明（可选，普通经历可留空，bullets 为主） */
  description?: string;
  bullets: ResumeBullet[];
}

export interface ResumeProjectItem {
  id: string;
  name: string;
  role?: string;
  link?: string;
  startDate?: string;
  endDate?: string;
  /** 项目技术栈（Phase 4A 新增） */
  technologies?: string[];
  bullets: ResumeBullet[];
}

export interface ResumeSkillGroup {
  id: string;
  /** 技能分组名，如「后端」「前端」「工具」 */
  category: string;
  /** 兼容 LLM 输出字段名（后端 schema 用 name），可选 */
  name?: string;
  items: string[];
}

export interface ResumeEducationItem {
  id: string;
  school: string;
  degree: string;
  major: string;
  startDate?: string;
  endDate?: string;
  bullets: ResumeBullet[];
}

export interface ResumeBasics {
  name: string;
  /** 求职意向 / 当前职位 */
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  /** 个人总结 */
  summary: string;
  /** 性别（男/女），Rule 解析可选回填；LLM 后端暂未返回时为空 */
  gender?: string;
  /** 年龄（如 25 岁），Rule 解析可选回填 */
  age?: string;
  /** 工作年限（如「7年」），Rule 解析可选回填 */
  workYears?: string;
}

/** customSections 内的块：保留段落 / bullet / 文本结构 */
export type ResumeSectionBlockType = 'paragraph' | 'bullet' | 'text';
export interface ResumeSectionBlock {
  id: string;
  type: ResumeSectionBlockType;
  text: string;
}

export interface ResumeCustomSection {
  id: string;
  title: string;
  /** 结构化块列表（Phase 4A.5 起使用；不再把未识别内容拼成单个 textarea） */
  blocks: ResumeSectionBlock[];
}

export interface ResumeCertification {
  id: string;
  name: string;
  issuer?: string;
  date?: string;
}

export interface ResumeAward {
  id: string;
  title: string;
  date?: string;
  description?: string;
}

export interface ResumeLanguage {
  id: string;
  name: string;
  level?: string;
}

export interface ResumeDocument {
  version: 1;
  basics: ResumeBasics;
  skills: ResumeSkillGroup[];
  experience: ResumeExperienceItem[];
  projects: ResumeProjectItem[];
  education: ResumeEducationItem[];
  certifications: ResumeCertification[];
  awards: ResumeAward[];
  languages: ResumeLanguage[];
  customSections: ResumeCustomSection[];
  /** 解析时未能归类的原始文本兜底（只读参考） */
  rawText?: string;
}

/** 稳定 id 生成（POC：时间戳 + 随机数；生产可换 uuid） */
export function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

/** 空文档工厂（编辑器新增条目时复用） */
export function createEmptyResumeDocument(): ResumeDocument {
  return {
    version: 1,
    basics: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    skills: [],
    experience: [],
    projects: [],
    education: [],
    certifications: [],
    awards: [],
    languages: [],
    customSections: [],
  };
}

/** 新增一条 bullet */
export function createBullet(text = ''): ResumeBullet {
  return { id: newId('bullet'), text };
}
