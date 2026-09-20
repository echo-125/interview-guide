/**
 * Phase 4B：AI Suggestion → ResumeDocument 精确映射 → 结构化 Apply
 *
 * 本模块是结构化双轨（structured-path / quote-anchor / unmapped）的核心纯函数全集：
 *   1. DocumentPath —— 类型安全的字段寻址（不是可执行的字符串路径）
 *   2. flattenResumeDocument —— 建立 Document 文本索引（path → text）
 *   3. mapSuggestionToDocument —— suggestion → mapping（exact/whitespace/context/消歧）
 *   4. applySuggestionToDocument —— 不可变字段级应用（整体/局部/数组/重复拒绝）
 *   5. WorkingResumeDocument 状态机 —— revision / undo / redo / 指定撤销防覆盖
 *
 * 安全原则（Spec 三、十、二十七）：
 *   - 禁止 fuzzy 自动生成 documentPath；唯一可结构化定位才允许 structured-path
 *   - 无法唯一确定 → quote-anchor；找不到 → unmapped
 *   - Apply 不调用 LLM、不调用整篇 rewrite、不修改原始 document
 */

import type { ResumeDocument, ResumeSectionBlock, ResumeSkillGroup } from '../../types/resumeDocument';

/* ============================================================
 *  1. DocumentPath
 * ============================================================ */

/** 字段内可定位的叶子路径。items 无稳定 id，用 itemIndex + 精确文本双重约束定位。 */
export type DocumentPath =
  | { kind: 'basic'; field: 'name' | 'title' | 'email' | 'phone' | 'location' | 'website' }
  | { kind: 'summary' }
  | { kind: 'skill-item'; skillId: string; itemIndex: number }
  | { kind: 'skill-category'; skillId: string }
  | { kind: 'experience-field'; experienceId: string; field: 'company' | 'title' | 'startDate' | 'endDate' | 'location' | 'description' }
  | { kind: 'experience-bullet'; experienceId: string; bulletId: string }
  | { kind: 'project-field'; projectId: string; field: 'name' | 'role' | 'link' | 'startDate' | 'endDate' }
  | { kind: 'project-bullet'; projectId: string; bulletId: string }
  | { kind: 'education-field'; educationId: string; field: 'school' | 'degree' | 'major' }
  | { kind: 'education-bullet'; educationId: string; bulletId: string }
  | { kind: 'certification-item'; itemId: string }
  | { kind: 'award-item'; itemId: string }
  | { kind: 'language-item'; itemId: string }
  | { kind: 'custom-block'; sectionId: string; blockId: string };

/** 节点所属 section，用于 UI 文案与消歧 */
export type DocumentSection =
  | 'basics'
  | 'summary'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'awards'
  | 'languages'
  | 'customSections';

/** flatten 索引节点 */
export interface DocumentTextNode {
  path: DocumentPath;
  text: string;
  section: DocumentSection;
  sectionLabel: string;
  /** 人类可读定位文案（如「工作经历 → XX 公司 → 第3条」） */
  humanLabel: string;
  entryId?: string;
  itemId?: string;
}

/** strategy 名，与 mapping.model 对应 */
export type MappingStrategy = 'structured-path' | 'quote-anchor' | 'unmapped';

/** suggestion → document 的映射（与 suggestion 本身分离，可运行期重算） */
export interface SuggestionMapping {
  strategy: MappingStrategy;
  documentPath?: DocumentPath;
  matchedText?: string;
  confidence: number;
  reason?: string;
  /** 人类可读定位（structured 用于 StructuredEditor 高亮定位文案） */
  humanLabel?: string;
}

/* ============================================================
 *  2. flattenResumeDocument
 * ============================================================ */

const SECTION_LABEL: Record<DocumentSection, string> = {
  basics: '基础信息',
  summary: '个人总结',
  skills: '专业技能',
  experience: '工作经历',
  projects: '项目经历',
  education: '教育经历',
  certifications: '证书',
  awards: '获奖',
  languages: '语言能力',
  customSections: '其他内容',
};

/** 空白归一化（用于对齐短语级引用） */
function norm(s: string): string {
  return (s || '').replace(/\s+/g, ' ').trim();
}

/** 构建 Document 文本索引。所有结构化映射均基于此。 */
export function flattenResumeDocument(document: ResumeDocument): DocumentTextNode[] {
  const nodes: DocumentTextNode[] = [];
  const add = (text: unknown, path: DocumentPath, section: DocumentSection, humanLabel: string, entryId?: string, itemId?: string) => {
    const t = typeof text === 'string' ? text : '';
    if (!t) return;
    nodes.push({ path, text: t, section, sectionLabel: SECTION_LABEL[section], humanLabel, entryId, itemId });
  };

  const b = document.basics;
  add(b.name, { kind: 'basic', field: 'name' }, 'basics', '基础信息 → 姓名');
  add(b.title, { kind: 'basic', field: 'title' }, 'basics', '基础信息 → 求职意向/职位');
  add(b.email, { kind: 'basic', field: 'email' }, 'basics', '基础信息 → 邮箱');
  add(b.phone, { kind: 'basic', field: 'phone' }, 'basics', '基础信息 → 电话');
  add(b.location, { kind: 'basic', field: 'location' }, 'basics', '基础信息 → 城市');
  add(b.website, { kind: 'basic', field: 'website' }, 'basics', '基础信息 → 主页');
  add(b.summary, { kind: 'summary' }, 'summary', '个人总结');

  document.skills.forEach((g) => {
    add(g.category || g.name || '技能', { kind: 'skill-category', skillId: g.id }, 'skills', `专业技能 → ${g.category || g.name || '技能'}`);
    (g.items || []).forEach((item, ii) => {
      add(item, { kind: 'skill-item', skillId: g.id, itemIndex: ii }, 'skills', `专业技能 → ${g.category || g.name || '技能'} · ${item}`, g.id);
    });
  });

  document.experience.forEach((e) => {
    const head = `工作经历 → ${e.company || '未命名公司'}`;
    add(e.company, { kind: 'experience-field', experienceId: e.id, field: 'company' }, 'experience', head, e.id);
    add(e.title, { kind: 'experience-field', experienceId: e.id, field: 'title' }, 'experience', `${head} · 职位`, e.id);
    add(e.startDate, { kind: 'experience-field', experienceId: e.id, field: 'startDate' }, 'experience', `${head} · 开始时间`, e.id);
    add(e.endDate, { kind: 'experience-field', experienceId: e.id, field: 'endDate' }, 'experience', `${head} · 结束时间`, e.id);
    add(e.location, { kind: 'experience-field', experienceId: e.id, field: 'location' }, 'experience', `${head} · 地点`, e.id);
    add(e.description, { kind: 'experience-field', experienceId: e.id, field: 'description' }, 'experience', `${head} · 描述`, e.id);
    (e.bullets || []).forEach((bl, bi) => {
      add(bl.text, { kind: 'experience-bullet', experienceId: e.id, bulletId: bl.id }, 'experience', `${head} · 第${bi + 1}条`, e.id, bl.id);
    });
  });

  document.projects.forEach((p) => {
    const head = `项目经历 → ${p.name || '未命名项目'}`;
    add(p.name, { kind: 'project-field', projectId: p.id, field: 'name' }, 'projects', head, p.id);
    add(p.role, { kind: 'project-field', projectId: p.id, field: 'role' }, 'projects', `${head} · 角色`, p.id);
    add(p.link, { kind: 'project-field', projectId: p.id, field: 'link' }, 'projects', `${head} · 链接`, p.id);
    add(p.startDate, { kind: 'project-field', projectId: p.id, field: 'startDate' }, 'projects', `${head} · 开始时间`, p.id);
    add(p.endDate, { kind: 'project-field', projectId: p.id, field: 'endDate' }, 'projects', `${head} · 结束时间`, p.id);
    (p.bullets || []).forEach((bl, bi) => {
      add(bl.text, { kind: 'project-bullet', projectId: p.id, bulletId: bl.id }, 'projects', `${head} · 第${bi + 1}条`, p.id, bl.id);
    });
  });

  document.education.forEach((e) => {
    const head = `教育经历 → ${e.school || '未命名院校'}`;
    add(e.school, { kind: 'education-field', educationId: e.id, field: 'school' }, 'education', head, e.id);
    add(e.degree, { kind: 'education-field', educationId: e.id, field: 'degree' }, 'education', `${head} · 学历`, e.id);
    add(e.major, { kind: 'education-field', educationId: e.id, field: 'major' }, 'education', `${head} · 专业`, e.id);
    (e.bullets || []).forEach((bl, bi) => {
      add(bl.text, { kind: 'education-bullet', educationId: e.id, bulletId: bl.id }, 'education', `${head} · 第${bi + 1}条`, e.id, bl.id);
    });
  });

  document.certifications.forEach((c) => {
    add(c.name, { kind: 'certification-item', itemId: c.id }, 'certifications', `证书 → ${c.name}`, c.id, c.id);
  });
  document.awards.forEach((a) => {
    add(a.title, { kind: 'award-item', itemId: a.id }, 'awards', `获奖 → ${a.title}`, a.id, a.id);
  });
  document.languages.forEach((l) => {
    add(l.name, { kind: 'language-item', itemId: l.id }, 'languages', `语言 → ${l.name}`, l.id, l.id);
    if (l.level) add(`(${l.level})`, { kind: 'language-item', itemId: l.id }, 'languages', `语言 → ${l.name} · 级别`, l.id, l.id);
  });

  document.customSections.forEach((s) => {
    (s.blocks || []).forEach((bl) => {
      add(bl.text, { kind: 'custom-block', sectionId: s.id, blockId: bl.id }, 'customSections', `其他内容 · ${bl.text.slice(0, 12)}…`, s.id, bl.id);
    });
  });

  return nodes;
}

/** 从文本建立反向索引：norm(text) → node[]（用于匹配查找） */
export function buildTextIndex(nodes: DocumentTextNode[]): Map<string, DocumentTextNode[]> {
  const idx = new Map<string, DocumentTextNode[]>();
  for (const node of nodes) {
    const k = norm(node.text);
    if (!k) continue;
    const list = idx.get(k) || [];
    list.push(node);
    idx.set(k, list);
  }
  return idx;
}

/* ============================================================
 *  3. mapSuggestionToDocument
 * ============================================================ */

export interface MapSuggestionInput {
  quote: string;
  prefix?: string;
  suffix?: string;
  /** section 提示（如「工作经历」「项目」），用于多候选消歧 */
  sectionHint?: DocumentSection;
}

/**
 * 结构化映射算法（Spec 九）。
 * Step1 exact full-field → Step2 exact substring → Step3 whitespace-normalized →
 * 多候选用 prefix/suffix/section 消歧 → 唯一才 structured-path；否则 quote-anchor；无 → unmapped。
 * 禁止 fuzzy。
 */
export function mapSuggestionToDocument(
  document: ResumeDocument,
  input: MapSuggestionInput
): SuggestionMapping {
  const nodes = flattenResumeDocument(document);
  const quote = norm(input.quote);
  if (!quote) return { strategy: 'unmapped', confidence: 0, reason: 'quote 为空' };
  // 紧凑形式：去掉所有空白，用于容忍 Tika 断行的 whitespace 变体匹配
  const quoteCompact = quote.replace(/\s+/g, '');

  const candidates = new Set<DocumentTextNode>();

  // Step1 exact full-field
  let fulls = nodes.filter(n => norm(n.text) === quote);
  // Step2 exact substring
  if (fulls.length === 0) {
    fulls = nodes.filter(n => n.text.includes(input.quote) || norm(n.text).includes(quote));
  }
  // Step3 whitespace-normalized substring（紧凑匹配，容忍空格/断行差异）
  if (fulls.length === 0 && quoteCompact) {
    fulls = nodes.filter(n => (norm(n.text).replace(/\s+/g, '')).includes(quoteCompact));
  }

  fulls.forEach(n => candidates.add(n));

  // 多候选消歧：prefix / suffix / sectionHint
  let chosen = Array.from(candidates);
  const disambiguate = (): void => {
    if (chosen.length <= 1) return;
    const inputPrefix = norm(input.prefix || '');
    const inputSuffix = norm(input.suffix || '');
    if (inputPrefix || inputSuffix) {
      const near = chosen.filter(n => {
        const t = norm(n.text);
        return (inputPrefix && t.startsWith(inputPrefix.slice(-12)) || inputPrefix && t.includes(inputPrefix.slice(-8)))
          || (inputSuffix && (t.endsWith(inputSuffix.slice(0, 12)) || t.includes(inputSuffix.slice(0, 8))));
      });
      if (near.length === 1) { chosen = near; return; }
    }
    if (input.sectionHint) {
      const bySec = chosen.filter(n => n.section === input.sectionHint);
      if (bySec.length === 1) { chosen = bySec; return; }
    }
  };
  disambiguate();

  if (chosen.length === 1) {
    return {
      strategy: 'structured-path',
      documentPath: chosen[0].path,
      matchedText: chosen[0].text,
      confidence: 0.95,
      humanLabel: chosen[0].humanLabel,
    };
  }

  if (candidates.size === 0) {
    return { strategy: 'unmapped', confidence: 0, reason: '未能在文档中找到 quote' };
  }

  return {
    strategy: 'quote-anchor',
    confidence: 0.5,
    reason: candidates.size > 1 ? `候选 ${candidates.size} 个无法唯一消歧` : '未能结构化定位，回退原文锚点',
  };
}

/* ============================================================
 *  4. applySuggestionToDocument
 * ============================================================ */

export interface ApplyResult {
  /** 不可变地应用 rewrite 后的新 document（未应用时返回 null） */
  document: ResumeDocument | null;
  reason?: string;
  /** 成功时为写入目标字段名（人类可读） */
  appliedLabel?: string;
}

function cloneDoc(doc: ResumeDocument): ResumeDocument {
  return (typeof structuredClone === 'function' ? structuredClone(doc) : JSON.parse(JSON.stringify(doc))) as ResumeDocument;
}

/** 字段级整字段/局部替换。quote 在字段内必须恰好命中一次，否则拒绝（Spec 十三）。 */
function replaceFieldValue(current: string, quote: string, rewrite: string): { value: string; wholeField: boolean } | null {
  const q = quote.trim();
  const c = current;
  if (!q) return null;
  // 整体替换：quote 归一化后与整字段相等
  if (norm(q) === norm(c)) return { value: rewrite, wholeField: true };
  // 局部替换
  const first = c.indexOf(q);
  if (first === -1) return null;
  const second = c.indexOf(q, first + q.length);
  if (second !== -1) return null; // 重复命中 → 拒绝
  return { value: c.slice(0, first) + rewrite + c.slice(first + q.length), wholeField: false };
}

/** 在 skill 分组中按 itemIndex 替换 items 数组项；若 itemIndex 越界或项被局部替换冲突 → 拒绝 */
function applySkillItem(groups: ResumeSkillGroup[], skillId: string, itemIndex: number, quote: string, rewrite: string): ResumeSkillGroup[] | null {
  const next = groups.map(g => (g.id === skillId ? { ...g, items: [...g.items] } : g));
  const g = next.find(x => x.id === skillId);
  if (!g) return null;
  const items = g.items as string[];
  if (itemIndex < 0 || itemIndex >= items.length) return null;
  const cur = items[itemIndex];
  const r = replaceFieldValue(cur, quote, rewrite);
  if (!r) return null;
  items[itemIndex] = r.value;
  return next;
}

/**
 * 不可变应用。失败返回 { document: null, reason }。
 * - 整字段替换 / 局部替换 / skill item / custom block 均支持。
 * - 不调用任何 AI；不修改入参 document / suggestion。
 */
export function applySuggestionToDocument(
  document: ResumeDocument,
  mapping: Pick<SuggestionMapping, 'documentPath'>,
  quote: string,
  rewrite: string
): ApplyResult {
  const path = mapping.documentPath;
  if (!path) return { document: null, reason: '无 documentPath' };
  const q = quote.trim();
  if (!q || !rewrite) return { document: null, reason: 'quote 或 rewrite 为空' };

  const next = cloneDoc(document);

  switch (path.kind) {
    case 'summary': {
      const r = replaceFieldValue(next.basics.summary, q, rewrite);
      if (!r) return { document: null, reason: `quote 在「个人总结」中${next.basics.summary.includes(q) ? '命中多次' : '未命中'}` };
      next.basics = { ...next.basics, summary: r.value };
      return { document: next, appliedLabel: '个人总结' };
    }
    case 'basic': {
      const current = (next.basics[path.field] as string) || '';
      const r = replaceFieldValue(current, q, rewrite);
      if (!r) return { document: null, reason: `quote 在 ${path.field} 中未唯一命中` };
      next.basics = { ...next.basics, [path.field]: r.value };
      return { document: next, appliedLabel: `基础信息 · ${path.field}` };
    }
    case 'skill-category': {
      const g = next.skills.find(x => x.id === path.skillId);
      if (!g) return { document: null, reason: 'skill 分组不存在' };
      const r = replaceFieldValue(g.category || g.name || '', q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中技能分组' };
      next.skills = next.skills.map(x => (x.id === path.skillId ? { ...x, category: r.value } : x));
      return { document: next, appliedLabel: '专业技能分组' };
    }
    case 'skill-item': {
      const groups = applySkillItem(next.skills, path.skillId, path.itemIndex, q, rewrite);
      if (!groups) return { document: null, reason: '无法安全定位 skill item（重复命中或越界）' };
      next.skills = groups;
      return { document: next, appliedLabel: '专业技能条目' };
    }
    case 'experience-field': {
      const e = next.experience.find(x => x.id === path.experienceId);
      if (!e) return { document: null, reason: 'experience 不存在' };
      const current = (e[path.field] as string) || '';
      const r = replaceFieldValue(current, q, rewrite);
      if (!r) return { document: null, reason: `quote 在 ${path.field} 未唯一命中` };
      next.experience = next.experience.map(x => (x.id === path.experienceId ? { ...x, [path.field]: r.value } : x));
      return { document: next, appliedLabel: `工作经历 · ${path.field}` };
    }
    case 'experience-bullet': {
      const e = next.experience.find(x => x.id === path.experienceId);
      const bl = e?.bullets.find(x => x.id === path.bulletId);
      if (!e || !bl) return { document: null, reason: 'bullet 不存在' };
      const r = replaceFieldValue(bl.text, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中该条经历 bullet' };
      const newBullets = e.bullets.map(x => (x.id === path.bulletId ? { ...x, text: r.value } : x));
      next.experience = next.experience.map(x => (x.id === path.experienceId ? { ...x, bullets: newBullets } : x));
      return { document: next, appliedLabel: '工作经历 bullet' };
    }
    case 'project-field': {
      const p = next.projects.find(x => x.id === path.projectId);
      if (!p) return { document: null, reason: 'project 不存在' };
      const current = (p[path.field] as string) || '';
      const r = replaceFieldValue(current, q, rewrite);
      if (!r) return { document: null, reason: `quote 在 ${path.field} 未唯一命中` };
      next.projects = next.projects.map(x => (x.id === path.projectId ? { ...x, [path.field]: r.value } : x));
      return { document: next, appliedLabel: `项目经历 · ${path.field}` };
    }
    case 'project-bullet': {
      const p = next.projects.find(x => x.id === path.projectId);
      const bl = p?.bullets.find(x => x.id === path.bulletId);
      if (!p || !bl) return { document: null, reason: 'bullet 不存在' };
      const r = replaceFieldValue(bl.text, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中项目 bullet' };
      const newBullets = p.bullets.map(x => (x.id === path.bulletId ? { ...x, text: r.value } : x));
      next.projects = next.projects.map(x => (x.id === path.projectId ? { ...x, bullets: newBullets } : x));
      return { document: next, appliedLabel: '项目经历 bullet' };
    }
    case 'education-field': {
      const e = next.education.find(x => x.id === path.educationId);
      if (!e) return { document: null, reason: 'education 不存在' };
      const current = (e[path.field] as string) || '';
      const r = replaceFieldValue(current, q, rewrite);
      if (!r) return { document: null, reason: `quote 在 ${path.field} 未唯一命中` };
      next.education = next.education.map(x => (x.id === path.educationId ? { ...x, [path.field]: r.value } : x));
      return { document: next, appliedLabel: `教育经历 · ${path.field}` };
    }
    case 'education-bullet': {
      const e = next.education.find(x => x.id === path.educationId);
      const bl = e?.bullets.find(x => x.id === path.bulletId);
      if (!e || !bl) return { document: null, reason: 'bullet 不存在' };
      const r = replaceFieldValue(bl.text, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中教育 bullet' };
      const newBullets = e.bullets.map(x => (x.id === path.bulletId ? { ...x, text: r.value } : x));
      next.education = next.education.map(x => (x.id === path.educationId ? { ...x, bullets: newBullets } : x));
      return { document: next, appliedLabel: '教育经历 bullet' };
    }
    case 'certification-item': {
      const c = next.certifications.find(x => x.id === path.itemId);
      if (!c) return { document: null, reason: '证书不存在' };
      const r = replaceFieldValue(c.name, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中证书' };
      next.certifications = next.certifications.map(x => (x.id === path.itemId ? { ...x, name: r.value } : x));
      return { document: next, appliedLabel: '证书' };
    }
    case 'award-item': {
      const a = next.awards.find(x => x.id === path.itemId);
      if (!a) return { document: null, reason: '获奖不存在' };
      const r = replaceFieldValue(a.title, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中获奖' };
      next.awards = next.awards.map(x => (x.id === path.itemId ? { ...x, title: r.value } : x));
      return { document: next, appliedLabel: '获奖' };
    }
    case 'language-item': {
      const l = next.languages.find(x => x.id === path.itemId);
      if (!l) return { document: null, reason: '语言不存在' };
      const current = l.level ? `${l.name}(${l.level})` : l.name;
      const r = replaceFieldValue(current, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中语言' };
      // 简化：仅支持整字段替换语言名
      next.languages = next.languages.map(x => (x.id === path.itemId ? { ...x, name: r.wholeField ? r.value : (r.value.includes('(') ? r.value.split('(')[0].trim() : r.value) } : x));
      return { document: next, appliedLabel: '语言能力' };
    }
    case 'custom-block': {
      const s = next.customSections.find(x => x.id === path.sectionId);
      const bl = s?.blocks.find((x: ResumeSectionBlock) => x.id === path.blockId);
      if (!s || !bl) return { document: null, reason: 'custom block 不存在' };
      const r = replaceFieldValue(bl.text, q, rewrite);
      if (!r) return { document: null, reason: 'quote 未唯一命中其他内容块' };
      const newBlocks = s.blocks.map(x => (x.id === path.blockId ? { ...x, text: r.value } : x));
      next.customSections = next.customSections.map(x => (x.id === path.sectionId ? { ...x, blocks: newBlocks } : x));
      return { document: next, appliedLabel: '其他内容' };
    }
    default:
      return { document: null, reason: '未知 path kind' };
  }
}

/* ============================================================
 *  5. WorkingResumeDocument 状态机
 * ============================================================ */

export type DocumentRevisionType = 'ai-apply' | 'manual-edit' | 'ai-revert';
export type AppliedStatus = 'pending' | 'applied' | 'unavailable' | 'blocked-by-manual-edit';

export interface DocumentRevision {
  id: string;
  type: DocumentRevisionType;
  before: ResumeDocument;
  after: ResumeDocument;
  suggestionId?: string;
  documentPath?: DocumentPath;
  timestamp: number;
}

export interface AppliedSuggestion {
  suggestionId: string;
  strategy: MappingStrategy;
  documentPath?: DocumentPath;
  quote: string;
  rewrite: string;
  revisionId: string;
}

export interface WorkingResumeDocumentState {
  originalDocument: ResumeDocument;
  currentDocument: ResumeDocument;
  revisions: DocumentRevision[];
  revisionIndex: number; // -1 → originalDocument
  appliedSuggestions: Record<string, AppliedSuggestion>;
  revisionSeq: number;
}

let revSeq = 0;
function nid(prefix: string): string {
  revSeq += 1;
  return `${prefix}-${revSeq}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createWorkingResumeDocument(original: ResumeDocument): WorkingResumeDocumentState {
  return {
    originalDocument: original,
    currentDocument: original,
    revisions: [],
    revisionIndex: -1,
    appliedSuggestions: {},
    revisionSeq: 0,
  };
}

function toRevisionDocument(state: WorkingResumeDocumentState): ResumeDocument {
  if (state.revisionIndex < 0) return state.originalDocument;
  return state.revisions[state.revisionIndex].after;
}

/** 追加 revision，丢弃 redo 分支（Spec 十九）。返回新状态。 */
function pushRevision(state: WorkingResumeDocumentState, rev: DocumentRevision): WorkingResumeDocumentState {
  const revisions = [...state.revisions.slice(0, state.revisionIndex + 1), rev];
  const applied = { ...state.appliedSuggestions };
  if (rev.suggestionId) {
    applied[rev.suggestionId] = {
      suggestionId: rev.suggestionId,
      strategy: 'structured-path',
      documentPath: rev.documentPath,
      quote: '',
      rewrite: '',
      revisionId: rev.id,
    };
  }
  return {
    ...state,
    revisions,
    revisionIndex: revisions.length - 1,
    currentDocument: rev.after,
    appliedSuggestions: applied,
    revisionSeq: state.revisionSeq + 1,
  };
}

/**
 * 结构化 AI Apply（Spec 十二/十九/二十五）。
 * 成功 → 追加 ai-apply revision，currentDocument 前进，A4/PDF/DOCX 随之更新。
 * 失败 → 返回原因，不改变状态。
 */
export function aiApply(
  state: WorkingResumeDocumentState,
  suggestionId: string,
  mapping: Pick<SuggestionMapping, 'documentPath'>,
  quote: string,
  rewrite: string
): { state: WorkingResumeDocumentState; result: ApplyResult } {
  const result = applySuggestionToDocument(toRevisionDocument(state), mapping, quote, rewrite);
  if (!result.document) return { state, result };
  const rev: DocumentRevision = {
    id: nid('rev'),
    type: 'ai-apply',
    before: toRevisionDocument(state),
    after: result.document,
    suggestionId,
    documentPath: mapping.documentPath,
    timestamp: Date.now(),
  };
  return { state: pushRevision(state, rev), result };
}

/** 手工编辑（StructuredEditor onChange 触发）。捕获 AI 修改后的人工变更。 */
export function manualEdit(state: WorkingResumeDocumentState, nextDoc: ResumeDocument): WorkingResumeDocumentState {
  const before = toRevisionDocument(state);
  if (before === nextDoc) return state;
  const rev: DocumentRevision = {
    id: nid('rev'),
    type: 'manual-edit',
    before,
    after: nextDoc,
    timestamp: Date.now(),
  };
  return pushRevision(state, rev);
}

export function undo(state: WorkingResumeDocumentState): WorkingResumeDocumentState {
  if (state.revisionIndex < 0) return state;
  const i = state.revisionIndex - 1;
  return {
    ...state,
    revisionIndex: i,
    currentDocument: i < 0 ? state.originalDocument : state.revisions[i].after,
  };
}

export function redo(state: WorkingResumeDocumentState): WorkingResumeDocumentState {
  if (state.revisionIndex >= state.revisions.length - 1) return state;
  const i = state.revisionIndex + 1;
  return { ...state, revisionIndex: i, currentDocument: state.revisions[i].after };
}

export function canUndo(state: WorkingResumeDocumentState): boolean {
  return state.revisionIndex >= 0;
}
export function canRedo(state: WorkingResumeDocumentState): boolean {
  return state.revisionIndex < state.revisions.length - 1;
}

/**
 * 指定 AI suggestion 的撤销（Spec 二十 / 十九 / 二十六）。
 * 策略：找到该 suggestion 的 ai-apply revision，检查「目标字段在应用后是否仍等于该 revision 的 after 值」——
 * 若当前字段 = revision.after 对应字段（即未被后续手工/其他修改覆盖），安全恢复为 before。
 * 若已被手动修改（当前值 ≠ revision.after 值），返回 blocked-by-manual-edit，不覆盖用户内容。
 */
export function revertSuggestion(
  state: WorkingResumeDocumentState,
  suggestionId: string
): { state: WorkingResumeDocumentState; status: AppliedStatus } {
  const applied = state.appliedSuggestions[suggestionId];
  if (!applied) return { state, status: 'pending' };

  // 找到该 suggestion 的 revision（可能因 undo 已不在 active 链上）
  const revIndex = state.revisions.findIndex(r => r.suggestionId === suggestionId);
  if (revIndex === -1) return { state, status: 'unavailable' };
  const rev = state.revisions[revIndex];
  const path = rev.documentPath;

  const current = toRevisionDocument(state);
  const afterField = readPathValue(rev.after, path);
  const currentField = readPathValue(current, path);

  // 当前字段不再等于「应用后」值 → 被人工修改过 → 阻止撤销
  if (currentField !== afterField) {
    return { state, status: 'blocked-by-manual-edit' };
  }

  // 安全：把当前文档恢复到应用该条之前的状态（只恢复目标字段为 before 值，不整体回滚）
  const restored = writePathValue(current, path, readPathValue(rev.before, path));
  if (!restored) return { state, status: 'unavailable' };

  const newRev: DocumentRevision = {
    id: nid('rev'),
    type: 'ai-revert',
    before: current,
    after: restored,
    suggestionId,
    documentPath: path,
    timestamp: Date.now(),
  };
  const next = pushRevision(state, newRev);
  const applied2 = { ...next.appliedSuggestions };
  delete applied2[suggestionId];
  return { state: { ...next, appliedSuggestions: applied2 }, status: 'applied' };
}

/* ---------- 读/写 path 值（供 revert 校验） ---------- */

function readPathValue(doc: ResumeDocument, path: DocumentPath | undefined): string {
  if (!path) return '';
  switch (path.kind) {
    case 'summary': return doc.basics.summary || '';
    case 'basic': return (doc.basics[path.field] as string) || '';
    case 'skill-item': {
      const g = doc.skills.find(x => x.id === path.skillId);
      return g && g.items[path.itemIndex] != null ? g.items[path.itemIndex] : '';
    }
    case 'skill-category': {
      const g = doc.skills.find(x => x.id === path.skillId);
      return (g?.category || g?.name || '');
    }
    case 'experience-field': {
      const e = doc.experience.find(x => x.id === path.experienceId);
      return (e?.[path.field] as string) || '';
    }
    case 'experience-bullet': {
      const e = doc.experience.find(x => x.id === path.experienceId);
      return e?.bullets.find(x => x.id === path.bulletId)?.text || '';
    }
    case 'project-field': {
      const p = doc.projects.find(x => x.id === path.projectId);
      return (p?.[path.field] as string) || '';
    }
    case 'project-bullet': {
      const p = doc.projects.find(x => x.id === path.projectId);
      return p?.bullets.find(x => x.id === path.bulletId)?.text || '';
    }
    case 'education-field': {
      const e = doc.education.find(x => x.id === path.educationId);
      return (e?.[path.field] as string) || '';
    }
    case 'education-bullet': {
      const e = doc.education.find(x => x.id === path.educationId);
      return e?.bullets.find(x => x.id === path.bulletId)?.text || '';
    }
    case 'certification-item': return doc.certifications.find(x => x.id === path.itemId)?.name || '';
    case 'award-item': return doc.awards.find(x => x.id === path.itemId)?.title || '';
    case 'language-item': return doc.languages.find(x => x.id === path.itemId)?.name || '';
    case 'custom-block': {
      const s = doc.customSections.find(x => x.id === path.sectionId);
      return s?.blocks.find(x => x.id === path.blockId)?.text || '';
    }
    default: return '';
  }
}

function writePathValue(doc: ResumeDocument, path: DocumentPath | undefined, value: string): ResumeDocument | null {
  if (!path) return null;
  const next = cloneDoc(doc);
  switch (path.kind) {
    case 'summary': next.basics = { ...next.basics, summary: value }; return next;
    case 'basic': next.basics = { ...next.basics, [path.field]: value }; return next;
    case 'skill-item': {
      const g = next.skills.find(x => x.id === path.skillId);
      if (!g || path.itemIndex < 0 || path.itemIndex >= g.items.length) return null;
      next.skills = next.skills.map(x =>
        x.id === path.skillId ? { ...x, items: x.items.map((it, i) => (i === path.itemIndex ? value : it)) } : x
      );
      return next;
    }
    case 'skill-category': {
      next.skills = next.skills.map(x => (x.id === path.skillId ? { ...x, category: value } : x));
      return next;
    }
    case 'experience-field': {
      const e = next.experience.find(x => x.id === path.experienceId);
      if (!e) return null;
      next.experience = next.experience.map(x => (x.id === path.experienceId ? { ...x, [path.field]: value } : x));
      return next;
    }
    case 'experience-bullet': {
      const e = next.experience.find(x => x.id === path.experienceId);
      const bl = e?.bullets.find(x => x.id === path.bulletId);
      if (!e || !bl) return null;
      next.experience = next.experience.map(x => (x.id === path.experienceId ? { ...x, bullets: x.bullets.map(b => (b.id === path.bulletId ? { ...b, text: value } : b)) } : x));
      return next;
    }
    case 'project-field': {
      const p = next.projects.find(x => x.id === path.projectId);
      if (!p) return null;
      next.projects = next.projects.map(x => (x.id === path.projectId ? { ...x, [path.field]: value } : x));
      return next;
    }
    case 'project-bullet': {
      const p = next.projects.find(x => x.id === path.projectId);
      const bl = p?.bullets.find(x => x.id === path.bulletId);
      if (!p || !bl) return null;
      next.projects = next.projects.map(x => (x.id === path.projectId ? { ...x, bullets: x.bullets.map(b => (b.id === path.bulletId ? { ...b, text: value } : b)) } : x));
      return next;
    }
    case 'education-field': {
      const e = next.education.find(x => x.id === path.educationId);
      if (!e) return null;
      next.education = next.education.map(x => (x.id === path.educationId ? { ...x, [path.field]: value } : x));
      return next;
    }
    case 'education-bullet': {
      const e = next.education.find(x => x.id === path.educationId);
      const bl = e?.bullets.find(x => x.id === path.bulletId);
      if (!e || !bl) return null;
      next.education = next.education.map(x => (x.id === path.educationId ? { ...x, bullets: x.bullets.map(b => (b.id === path.bulletId ? { ...b, text: value } : b)) } : x));
      return next;
    }
    case 'certification-item': {
      const c = next.certifications.find(x => x.id === path.itemId);
      if (!c) return null;
      next.certifications = next.certifications.map(x => (x.id === path.itemId ? { ...x, name: value } : x));
      return next;
    }
    case 'award-item': {
      const a = next.awards.find(x => x.id === path.itemId);
      if (!a) return null;
      next.awards = next.awards.map(x => (x.id === path.itemId ? { ...x, title: value } : x));
      return next;
    }
    case 'language-item': {
      next.languages = next.languages.map(x => (x.id === path.itemId ? { ...x, name: value } : x));
      return next;
    }
    case 'custom-block': {
      const s = next.customSections.find(x => x.id === path.sectionId);
      if (!s) return null;
      next.customSections = next.customSections.map(x => (x.id === path.sectionId ? { ...x, blocks: x.blocks.map(b => (b.id === path.blockId ? { ...b, text: value } : b)) } : x));
      return next;
    }
    default: return null;
  }
}

/* ============================================================
 *  6. DocumentPath 序列化（DOM data-path / 双向定位）
 * ============================================================ */

const DOCUMENT_PATH_KINDS = new Set([
  'basic', 'summary', 'skill-item', 'skill-category',
  'experience-field', 'experience-bullet',
  'project-field', 'project-bullet',
  'education-field', 'education-bullet',
  'certification-item', 'award-item', 'language-item', 'custom-block',
]);

/** DocumentPath → 稳定字符串（供 DOM data-path 与反向定位） */
export function serializePath(path: DocumentPath): string {
  return JSON.stringify(path);
}

/** 字符串 → DocumentPath；非法或未知 kind 返回 null */
export function parsePath(s: string): DocumentPath | null {
  try {
    const raw = JSON.parse(s) as { kind?: string };
    if (!raw || typeof raw !== 'object' || typeof raw.kind !== 'string') return null;
    if (!DOCUMENT_PATH_KINDS.has(raw.kind)) return null;
    return raw as DocumentPath;
  } catch {
    return null;
  }
}