/**
 * Phase 5C：Unified Working Document & Parse Result Reconciliation
 *
 * 让 Rule Parser 产物、LLM Structured Parser 产物、用户手动编辑在
 * WorkingResumeDocumentState 内一致共存（唯一 Runtime Working State）：
 *
 * - 不是「ruleDoc + llmDoc → llmDoc」的整篇覆盖；
 * - LLM 是结构化增强来源，不是覆盖工作状态的来源；
 * - 用户明确修改过的内容 > LLM 自动增强；
 * - 优先利用现有 revision 链推导「被手动编辑的区域」（不新增 editedFields 类状态）；
 * - 数组保守合并 + 稳定 ID（DocumentPath 依赖结构稳定）；
 * - 空值保护 + 质量门 + rawText/customSections 语义保持。
 *
 * 本模块全部为纯函数 / 状态机函数，可独立单测（node:test）。
 */

import {
  newId,
  type ResumeBullet,
  type ResumeCertification,
  type ResumeCustomSection,
  type ResumeDocument,
  type ResumeEducationItem,
  type ResumeExperienceItem,
  type ResumeAward,
  type ResumeLanguage,
  type ResumeProjectItem,
  type ResumeSkillGroup,
  type ResumeSectionBlock,
} from '../../types/resumeDocument.ts';
import {
  flattenResumeDocument,
  mapSuggestionToDocument,
  parsePath,
  pushAutoMergeRev,
  serializePath,
  type DocumentPath,
  type SuggestionMapping,
  type WorkingResumeDocumentState,
} from './structuredMapping.ts';

/* ============================================================
 *  0. 基础工具
 * ============================================================ */

/** path 序列化 key（与 serializePath 一致） */
export type PathKey = string;

function norm(s: string): string {
  return (s || '').replace(/\s+/g, '').toLowerCase();
}

/** 去重（按空白归一化相等），保序 */
function dedupe(items: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const it of items) {
    const k = norm(it);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(it);
  }
  return out;
}

function cloneDoc(doc: ResumeDocument): ResumeDocument {
  return (typeof structuredClone === 'function' ? structuredClone(doc) : JSON.parse(JSON.stringify(doc))) as ResumeDocument;
}

function isEdited(edited: ReadonlySet<PathKey>, path: DocumentPath): boolean {
  return edited.has(serializePath(path));
}

/* ============================================================
 *  1. 用户编辑区域识别（利用现有 revision 链，字段/条目/bullet 级）
 * ============================================================ */

/** 文档所有「非空文本字段」的 path → 文本 索引 */
export function fieldValueMap(doc: ResumeDocument): Map<PathKey, string> {
  const m = new Map<PathKey, string>();
  for (const n of flattenResumeDocument(doc)) {
    m.set(serializePath(n.path), n.text);
  }
  return m;
}

/** diff 两个文档：返回值发生变化的 field path 集合（含条目/块增删） */
export function diffDocumentFields(before: ResumeDocument, after: ResumeDocument): Set<PathKey> {
  const a = fieldValueMap(before);
  const b = fieldValueMap(after);
  const keys = new Set<PathKey>([...a.keys(), ...b.keys()]);
  const changed = new Set<PathKey>();
  for (const k of keys) {
    if ((a.get(k) ?? '') !== (b.get(k) ?? '')) changed.add(k);
  }
  return changed;
}

/**
 * 从现有 revision 链推导「用户已影响的字段」（manual-edit / ai-apply 均视为用户动作）。
 * 仅统计激活链（revisionIndex 可及）内的修订，undo 掉的修订不计入。
 * 不新增 editedFields / dirtyFields 等第二套状态 —— 运行时从 revisions 派生。
 */
export function collectActiveEditedPaths(state: WorkingResumeDocumentState): Set<PathKey> {
  const edited = new Set<PathKey>();
  const revs = state.revisions.slice(0, state.revisionIndex + 1);
  for (const rev of revs) {
    if (rev.type === 'manual-edit' || rev.type === 'ai-apply') {
      for (const k of diffDocumentFields(rev.before, rev.after)) edited.add(k);
    }
  }
  return edited;
}

/* ============================================================
 *  2. 字段级 merge 工具
 * ============================================================ */

/**
 * 标量字段决策（Spec 二十 决策顺序 1-6）：
 * 1 用户编辑过 → current
 * 2 LLM 为空 → current
 * 3（质量门在调用前整体判断，不逐字段重判）
 * 4 current 为空 → LLM
 * 5 未编辑且 LLM 更完整（更长）→ LLM
 * 6 默认 → current
 */
function mergeScalar(current: string, llm: string | undefined | null, edited: boolean): string {
  if (edited) return current;
  const l = llm ?? '';
  if (l.trim() === '') return current;
  if (current.trim() === '') return l;
  return l.length > current.length ? l : current;
}

/**
 * bullet 合并（保守）：保留 current 全部（ID 稳定、拒绝 LLM 改写）；
 * 仅当 current bullets 为空时采用 LLM；非空时只补充与现有文本完全不同的新增条。
 */
function mergeBullets(
  current: ResumeBullet[],
  llm: Array<{ id?: string; text?: string }> | undefined,
  edited: boolean
): ResumeBullet[] {
  if (!llm || llm.length === 0) return current;
  if (current.length === 0) {
    return llm.map(b => ({ id: b.id || newId('bullet'), text: b.text || '' }));
  }
  // 用户已编辑过该条目 → bullets 也以用户为主，只补完全新增
  const existing = new Set(current.map(b => norm(b.text)));
  const added = llm.filter(b => b.text && norm(b.text) && !existing.has(norm(b.text)));
  if (added.length === 0) return current;
  if (edited) return current; // 已编辑的区域保守不补（避免与手动编排冲突）
  return [...current, ...added.map(b => ({ id: b.id || newId('bullet'), text: b.text || '' }))];
}

/* ============================================================
 *  3. 各 section merge
 * ============================================================ */

function mergeSkills(current: ResumeSkillGroup[], llm: ResumeSkillGroup[] | undefined, skillsEdited: boolean): ResumeSkillGroup[] {
  if (!llm || llm.length === 0) return current;
  if (current.length === 0) {
    return llm.map(g => ({ id: g.id || newId('skill'), category: g.category || '', name: g.name, items: dedupe((g.items || []).map(s => s.trim())) }));
  }
  // 用户编辑过技能 → 保留 current（技能无稳定条目 id，粗粒度保护）
  if (skillsEdited) return current;
  const merged = current.map(g => {
    const m = llm.find(l => !!l.category && norm(l.category) === norm(g.category)) ||
      llm.find(l => !!l.name && norm(l.name) === norm(g.category));
    if (!m) return g;
    // 采用 LLM 更完整 items，并补齐 current 中 LLM 漏掉的项目（去重）
    const items = dedupe([
      ...(m.items || []).map(s => s.trim()).filter(Boolean),
      ...(g.items || []).map(s => s.trim()).filter(Boolean),
    ]);
    return { ...g, items };
  });
  // LLM 新识别出的分组 → 追加（category 精确匹配判定为新增）
  for (const l of llm) {
    const cat = (l.category || l.name || '').trim();
    if (!cat) continue;
    const exists = current.some(g => norm(g.category) === norm(cat));
    if (!exists) {
      merged.push({ id: l.id || newId('skill'), category: cat, name: l.name, items: dedupe((l.items || []).map(s => s.trim())) });
    }
  }
  return merged;
}

function mergeExperience(
  current: ResumeExperienceItem[],
  llm: ResumeExperienceItem[] | undefined,
  edited: ReadonlySet<PathKey>
): ResumeExperienceItem[] {
  if (!llm || llm.length === 0) return current;
  if (current.length === 0) {
    // Rule 未能识别任何经历，LLM 结构化更完整 → 采用 LLM 条目（保留其 ID）
    return llm.map(e => ({
      id: e.id || newId('exp'),
      company: e.company || '',
      title: e.title || '',
      startDate: e.startDate || '',
      endDate: e.endDate || '',
      location: e.location || undefined,
      description: e.description || undefined,
      bullets: (e.bullets || []).map(b => ({ id: b.id || newId('bullet'), text: b.text || '' })),
    }));
  }
  // 有 current 条目：按公司名精确匹配对应条目，条目级字段 merge；不匹配的 LLM 条目一律忽略（防重复经历）
  return current.map(ce => {
    const le = llm.find(l => !!(l.company || '').trim() && norm(l.company) === norm(ce.company));
    const path = (field: 'company' | 'title' | 'startDate' | 'endDate' | 'location' | 'description') =>
      ({ kind: 'experience-field', experienceId: ce.id, field }) as const;
    const patch: Partial<ResumeExperienceItem> = {};
    for (const field of ['company', 'title', 'startDate', 'endDate', 'location', 'description'] as const) {
      const v = mergeScalar(String(ce[field] || ''), le ? String(le[field] ?? '') : '', isEdited(edited, path(field)));
      if (v !== String(ce[field] || '')) (patch as Record<string, string>)[field] = v;
    }
    // 条目内任一 bullet 被用户编辑过 → 该条 bullets 不再采纳 LLM 补充
    const entryBulletsEdited = [...edited].some(k => {
      const p = parsePath(k);
      return p?.kind === 'experience-bullet' && p.experienceId === ce.id;
    });
    return {
      ...ce,
      ...patch,
      bullets: mergeBullets(ce.bullets || [], le?.bullets, entryBulletsEdited),
    };
  });
}

function mergeProjects(
  current: ResumeProjectItem[],
  llm: ResumeProjectItem[] | undefined,
  edited: ReadonlySet<PathKey>
): ResumeProjectItem[] {
  if (!llm || llm.length === 0) return current;
  if (current.length === 0) {
    return llm.map(p => ({
      id: p.id || newId('prj'),
      name: p.name || '',
      role: p.role || undefined,
      link: p.link || undefined,
      startDate: p.startDate || undefined,
      endDate: p.endDate || undefined,
      technologies: p.technologies || undefined,
      bullets: (p.bullets || []).map(b => ({ id: b.id || newId('bullet'), text: b.text || '' })),
    }));
  }
  return current.map(cp => {
    const lp = llm.find(l => !!(l.name || '').trim() && norm(l.name) === norm(cp.name));
    const path = (field: 'name' | 'role' | 'link' | 'startDate' | 'endDate') =>
      ({ kind: 'project-field', projectId: cp.id, field }) as const;
    const patch: Partial<ResumeProjectItem> = {};
    for (const field of ['name', 'role', 'link', 'startDate', 'endDate'] as const) {
      const v = mergeScalar(String(cp[field] || ''), lp ? String(lp[field] ?? '') : '', isEdited(edited, path(field)));
      if (v !== String(cp[field] || '')) (patch as Record<string, string>)[field] = v;
    }
    // 条目内任一 bullet 被用户编辑过 → 该条 bullets 不再采纳 LLM 补充
    const entryBulletsEdited = [...edited].some(k => {
      const p = parsePath(k);
      return p?.kind === 'project-bullet' && p.projectId === cp.id;
    });
    return {
      ...cp,
      ...patch,
      bullets: mergeBullets(cp.bullets || [], lp?.bullets, entryBulletsEdited),
    };
  });
}

function mergeEducation(
  current: ResumeEducationItem[],
  llm: ResumeEducationItem[] | undefined,
  edited: ReadonlySet<PathKey>
): ResumeEducationItem[] {
  if (!llm || llm.length === 0) return current;
  if (current.length === 0) {
    return llm.map(e => ({
      id: e.id || newId('edu'),
      school: e.school || '',
      degree: e.degree || '',
      major: e.major || '',
      startDate: e.startDate || undefined,
      endDate: e.endDate || undefined,
      bullets: (e.bullets || []).map(b => ({ id: b.id || newId('bullet'), text: b.text || '' })),
    }));
  }
  return current.map(ce => {
    const le = llm.find(l => !!(l.school || '').trim() && norm(l.school) === norm(ce.school));
    const path = (field: 'school' | 'degree' | 'major') =>
      ({ kind: 'education-field', educationId: ce.id, field }) as const;
    const patch: Partial<ResumeEducationItem> = {};
    for (const field of ['school', 'degree', 'major'] as const) {
      const v = mergeScalar(String(ce[field] || ''), le ? String(le[field] ?? '') : '', isEdited(edited, path(field)));
      if (v !== String(ce[field] || '')) (patch as Record<string, string>)[field] = v;
    }
    return { ...ce, ...patch };
  });
}

/** name/title 类简单条目：保留 current 全部（ID 稳定），LLM 新增项按名精确去重后补充 */
function mergeNamedItems(
  current: Array<ResumeCertification | ResumeAward | ResumeLanguage>,
  llm: Array<ResumeCertification | ResumeAward | ResumeLanguage> | undefined,
  keyOf: (it: ResumeCertification | ResumeAward | ResumeLanguage) => string
): Array<ResumeCertification | ResumeAward | ResumeLanguage> {
  if (!llm || llm.length === 0) return current;
  const existing = new Set(current.map(it => norm(keyOf(it))));
  const added = llm.filter(it => !!keyOf(it) && norm(keyOf(it)) && !existing.has(norm(keyOf(it))));
  if (added.length === 0) return current;
  return [...current, ...added.map(it => ({ ...it } as ResumeCertification | ResumeAward | ResumeLanguage))];
}

function mergeCustomSections(
  current: ResumeCustomSection[],
  llm: ResumeCustomSection[] | undefined
): ResumeCustomSection[] {
  if (!llm || llm.length === 0) return current;
  const secs = current.map(s => {
    const ls = llm.find(x => (x.title || '') === (s.title || ''));
    if (!ls) return s;
    const existing = new Set(s.blocks.map(b => norm(b.text)));
    const addedBlocks = (ls.blocks || []).filter(b => b.text && norm(b.text) && !existing.has(norm(b.text)));
    if (addedBlocks.length === 0) return s;
    return {
      ...s,
      blocks: [
        ...s.blocks,
        ...addedBlocks.map(b => ({
          id: b.id || newId('blk'),
          type: b.type as ResumeSectionBlock['type'],
          text: b.text || '',
        })),
      ],
    };
  });
  for (const ls of llm) {
    const title = (ls.title || '').trim();
    if (!title) continue;
    if (current.some(c => (c.title || '') === (ls.title || ''))) continue;
    secs.push({
      id: ls.id || newId('custom'),
      title: ls.title || '其他内容',
      blocks: (ls.blocks || []).map(b => ({
        id: b.id || newId('blk'),
        type: b.type as ResumeSectionBlock['type'],
        text: b.text || '',
      })),
    });
  }
  return secs;
}

/* ============================================================
 *  4. 顶层 Merge 纯函数
 * ============================================================ */

export interface MergeLlmOptions {
  /** collectActiveEditedPaths 的产物：用户已影响的字段（field path key） */
  editedPaths: ReadonlySet<PathKey>;
}

/**
 * 依据决策顺序把 LLM 文档安全合并进 current：
 * 返回 null = LLM 不可用；返回 current 对象引用 = 无变化；否则返回新文档。
 */
export function mergeLlmIntoWorkingDocument(
  current: ResumeDocument,
  llm: ResumeDocument | null | undefined,
  options: MergeLlmOptions
): ResumeDocument | null {
  if (!llm) return null;
  const edited = options.editedPaths;
  const next = cloneDoc(current);

  // basics 标量 + summary
  for (const field of ['name', 'title', 'email', 'phone', 'location'] as const) {
    const v = mergeScalar(String(current.basics[field] || ''), llm.basics?.[field], isEdited(edited, { kind: 'basic', field }));
    if (v !== String(current.basics[field] || '')) next.basics = { ...next.basics, [field]: v };
  }
  const website = mergeScalar(current.basics.website || '', llm.basics?.website, isEdited(edited, { kind: 'basic', field: 'website' }));
  if (website !== (current.basics.website || '')) next.basics = { ...next.basics, website };
  const summary = mergeScalar(current.basics.summary, llm.basics.summary, isEdited(edited, { kind: 'summary' }));
  if (summary !== current.basics.summary) next.basics = { ...next.basics, summary };

  // 技能（section 粒度）
  const skillsEdited = [...edited].some(k => {
    const p = parsePath(k);
    return p?.kind === 'skill-item' || p?.kind === 'skill-category';
  });
  next.skills = mergeSkills(current.skills, llm.skills, skillsEdited);

  // 条目类数组
  next.experience = mergeExperience(current.experience, llm.experience, edited);
  next.projects = mergeProjects(current.projects, llm.projects, edited);
  next.education = mergeEducation(current.education, llm.education, edited);
  next.certifications = mergeNamedItems(current.certifications, llm.certifications, it => (it as ResumeCertification).name || '') as ResumeCertification[];
  next.awards = mergeNamedItems(current.awards, llm.awards, it => (it as ResumeAward).title || '') as ResumeAward[];
  next.languages = mergeNamedItems(current.languages, llm.languages, it => (it as ResumeLanguage).name || '') as ResumeLanguage[];

  // 其他内容：保留用户内容 + LLM 可信新增
  next.customSections = mergeCustomSections(current.customSections, llm.customSections);

  // rawText 语义保持：rawText 代表原始简历文本来源，绝不被 LLM 生成文本替换
  if (next.rawText || !llm.rawText) {
    next.rawText = next.rawText ?? llm.rawText;
  } else {
    next.rawText = llm.rawText;
  }

  // 无任何变化 → 返回 current 引用，调用方无需 push revision
  if (JSON.stringify(next) === JSON.stringify(current)) return current;
  return next;
}

/* ============================================================
 *  5. 状态机接入 & 质量门
 * ============================================================ */

export interface ApplyLlmMergeInput {
  llmDocument: ResumeDocument;
  editedPaths: ReadonlySet<PathKey>;
}

/**
 * 安全 Merge 入工作区：仅在真的有变化时追加 auto-merge revision。
 * merge 本身不产生 ai-apply / manual-edit / ai-revert（不污染用户可见历史语义），
 * 但保留在 revision 链中以保证 undo/redo 生命周期一致（可回退 LLM 增强）。
 */
export function applyLlmMerge(
  state: WorkingResumeDocumentState,
  input: ApplyLlmMergeInput
): { state: WorkingResumeDocumentState; changed: boolean } {
  const merged = mergeLlmIntoWorkingDocument(state.currentDocument, input.llmDocument, { editedPaths: input.editedPaths });
  if (!merged || merged === state.currentDocument) return { state, changed: false };
  const next = pushAutoMergeRev(state, merged);
  return next ? { state: next, changed: true } : { state, changed: false };
}

/** 质量门：LLM 无效 or 质量明显低于 Rule 结果 → 不采用（保留 current） */
export interface CoverageLike {
  coverage: number;
  confidence?: number;
}
export function shouldAcceptLlmDiagnostics(
  ruleDiag: CoverageLike | null | undefined,
  llmDiag: CoverageLike | null | undefined
): boolean {
  if (!ruleDiag || !llmDiag) return false;
  if (llmDiag.coverage <= 0 && (llmDiag.confidence ?? 0) <= 0) return false;
  // 允许轻微劣化（解析差异），但明显低于 Rule 覆盖则拒绝
  return llmDiag.coverage >= ruleDiag.coverage - 0.15;
}

/* ============================================================
 *  6. Suggestion Mapping Reconciliation（G2）
 * ============================================================ */

export interface ReconcileSuggestionLike {
  mapping: SuggestionMapping;
  improvement: { originalText?: string; currentProblem?: string };
}

/**
 * 重新生成 / 重新验证 suggestion mapping：
 * mapping 最终依据 = WorkingResumeDocument.currentDocument（而非旧的 ruleDocument 快照）。
 * suggestion id 保持稳定（只更新 mapping，不重建建议）。
 */
export function reconcileSuggestionMappings<S extends ReconcileSuggestionLike>(
  suggestions: S[],
  document: ResumeDocument
): S[] {
  return suggestions.map(s => ({
    ...s,
    mapping: mapSuggestionToDocument(document, {
      quote: s.improvement.originalText || '',
      prefix: s.improvement.currentProblem,
    }),
  }));
}