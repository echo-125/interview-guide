/**
 * 真实简历 → ResumeDocument 解析器 (Phase 4A)
 *
 * 设计原则（与 Phase 4A 验收一致）：
 * - 高置信度识别 → 进入结构化字段；
 * - 无法可靠判断的内容 → 原样保留到 customSections / rawText，绝不静默丢弃；
 * - 不引入 LLM、不做"为了好看而乱归类"的猜测。
 *
 * 识别能力：
 *   1. Section 标题识别（中文/英文、序号前缀、全角/半角冒号、空格变体）
 *   2. 日期范围识别（2021.03 - 2024.06 / 2021年3月至2024年6月 / 至今 / 现在）
 *   3. 公司 / 职位组合识别（| 、- 、（）、@ 、空格）
 *   4. Bullet 特征识别（-、•、·、*、1. 等）
 *   5. 技能按强分隔符拆分（保留 Spring Boot 这类复合词）
 *
 * 返回 ParseResult：document + diagnostics（coverage / sectionsDetected / warnings）。
 */

import {
  createEmptyResumeDocument,
  newId,
  type ResumeBullet,
  type ResumeDocument,
  type ResumeEducationItem,
  type ResumeExperienceItem,
  type ResumeLanguage,
  type ResumeProjectItem,
} from '../../types/resumeDocument.ts';
import { sectionText, textToBlocks } from './customSection.ts';

export type ParseSectionType =
  | 'summary'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'awards'
  | 'languages'
  | 'info'
  | 'other';

export interface ParseDiagnostics {
  /** 解析器：规则 / LLM（LLM 结果由后端返回后回填） */
  parser?: 'rule' | 'llm';
  /** 原文非空白字符数 */
  totalChars: number;
  /** 结构化后保留的非空白字符数（含 customSections） */
  parsedChars: number;
  /** 未能保留的字符数（近似） */
  unparsedChars: number;
  /** 内容保留率 parsedChars / totalChars（0~1） */
  coverage: number;
  /** 检测到的分节列表 */
  sectionsDetected: string[];
  warnings: string[];
  /** 0~1：基于 coverage 与警告的保守置信度 */
  confidence: number;
}

export interface ParseResult {
  document: ResumeDocument;
  diagnostics: ParseDiagnostics;
}

const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/;
/** 手机号优先匹配 1[3-9] 开头的 11 位（含 - / 空格）；再退化为带区号座机 */
const PHONE_RE = /1[3-9]\d(?:[- ]?\d{4}){2}|(?:\d{3,4})-?\d{7,8}/;
/** 个人信息标签：{label} 值 或 {label}：值 或 {label}\t值 或 {label} | 值 */
const BASICS_LABEL_RE =
  /^(?:(姓名|姓\s*名|电话|手\s*机|手机|邮\s*箱|邮箱|e-mail|email|年龄|年\s*龄|性\s*别|性别|民族|籍贯|现居|城市|所在地|期望城市|求职意向|期望职位|意向职位|目标职位|应聘职位|工作年限|工作年数|工作经验|工作时长|毕业院校|院校|学历|专业|出生|身高|政治面貌|个人主页|主页|博客|github|linkedin|微信|微信号))\s*[：:\t|\|｜]?\s*(.+)$/i;
/** 日期范围：{start} - {end}，支持 . / - 年月、中文年月、至今/现在 */
const DATE_RANGE_RE =
  /(\d{4}[-/.年]\d{1,2}月?|\d{4}年|\d{4})\s*(?:[-~至—–]|到)\s*(\d{4}[-/.年]\d{1,2}月?|\d{4}年|\d{4}|至今|现在|今)/;
/** 孤立日期：2021.03 / 2021年 / 2021（不带范围） */
const SINGLE_DATE_RE = /(\d{4}[-/.年]\d{1,2}月?|\d{4}年|\d{4})/;
/** 学历关键词 */
const DEGREE_WORDS = ['博士后', '博士', '硕士', '研究生', '本科', '学士', '大专', '专科', '高职'];

/** 分节标题规则：key 列表 + 节类型（不区分大小写、容忍全角冒号与序号前缀） */
const SECTION_RULES: Array<{ keys: string[]; type: ParseSectionType; label: string }> = [
  { keys: ['个人简介', '个人总结', '个人概述', '自我评价', '个人优势', 'summary', 'profile'], type: 'summary', label: '个人简介' },
  { keys: ['专业技能', '技能清单', '技能', '技术栈', 'skills'], type: 'skills', label: '技能' },
  { keys: ['工作经历', '工作经验', '职业经历', '工作背景', '经历', 'experience', 'employment'], type: 'experience', label: '工作经历' },
  { keys: ['项目经历', '项目经验', '项目', 'projects'], type: 'projects', label: '项目经历' },
  { keys: ['教育经历', '教育背景', '学历', '教育', 'education'], type: 'education', label: '教育经历' },
  { keys: ['证书', '资格证书', '职业证书', '资质证书', 'certifications', 'certificates'], type: 'certifications', label: '证书' },
  { keys: ['获奖', '奖项', '荣誉', '荣誉奖项', 'awards'], type: 'awards', label: '获奖荣誉' },
  { keys: ['语言能力', '语言技能', '语言', 'languages'], type: 'languages', label: '语言能力' },
  // header 基本信息节：只作信息提取，不落 customSections
  { keys: ['基本信息', '基本资料', '个人信息', '个人资料'], type: 'info', label: '基本信息' },
];

/** 剥离行首序号（一、1. 1、 (1) 等）与冒号 */
function stripHeadingPrefix(line: string): string {
  return line
    .replace(/^[一二三四五六七八九十\d]+[、.．)）]\s*/, '')
    .replace(/[:：]\s*$/, '')
    .trim();
}

/** 常见区块标题（当姓名候选时的排除项，避免把「基本信息」「个人优势」误当姓名） */
const BLOCK_TITLE_WORDS = [
  '基本信息', '基本资料', '个人信息', '个人资料', '个人优势', '个人特长', '自我评价', '个人简介',
  '工作经历', '项目经历', '教育经历', '专业技能', '证书', '获奖', '语言能力', '自我描述', '求职意向', '工作技能',
];

function detectSection(line: string): { type: ParseSectionType; label: string } | null {
  const trimmed = stripHeadingPrefix(line).toLowerCase();
  if (!trimmed) return null;
  const words = trimmed.split(/\s+/).filter(Boolean);
  for (const rule of SECTION_RULES) {
    for (const k of rule.keys) {
      const key = k.toLowerCase();
      // 精确标题（如「工作经历」）或 标题带少量后缀（如「工作经历2：」）
      if (trimmed === key) return { type: rule.type, label: rule.label };
      if (key.length >= 3 && trimmed.startsWith(key) && trimmed.length - key.length <= 4) {
        return { type: rule.type, label: rule.label };
      }
      // 英文/空格标题词匹配：如「Work Experience」
      if (key.length >= 3 && words.includes(key)) {
        return { type: rule.type, label: rule.label };
      }
    }
  }
  return null;
}

/** 剥离 bullet 标记；返回 { text, isBullet }。支持 -•·* 和 1. 1、1) ① 中文序号 与 tab 分隔。
 *  数字序号后跟数字/字母（如「1.0协议」的版本号）不视为 bullet，避免误剥。 */
const BULLET_MARKER_RE = /^\s*(?:[-–—•·*▪◦]|[①-⑩]|[\d一二三四五六七八九十]+[.、)）](?![\dA-Za-z]))[\s\t]*(.+)$/;
function stripBulletMarker(line: string): { text: string; isBullet: boolean } {
  const m = line.match(BULLET_MARKER_RE);
  if (m) return { text: m[1].trim(), isBullet: true };
  return { text: line.trim(), isBullet: false };
}

/** PDF 噪声行清理：删除行内 af:// 锚点（af://n0、af://n0af://n4 连续锚点，含字母数字后缀），压缩多余空白 */
function cleanInlineNoise(line: string): string {
  return line
    .replace(/af:\/\/[a-z0-9]+/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** PDF 书签目录行：Tika 保留前导缩进 + 内容是短标题（节标题/项目名），如「        基本信息」 */
function isBookmarkLine(line: string): boolean {
  const t = line.trim();
  if (t.length === 0 || t.length > 20) return false;
  if (!/^\s{2,}/.test(line)) return false; // 必须带缩进
  if (/[。！？，,;；:：]/.test(t)) return false; // 目录行无标点
  return true;
}

/** 判断一行是否为噪声：af:// 锚点、长字母数字串、PDF 书签目录行 */
function isNoiseLine(line: string): boolean {
  const t = cleanInlineNoise(line);
  if (!t) return true; // 清理锚点后为空 → 纯锚点噪声行
  // 连续字母数字混合的长串（≥8 位且无中文），不可能是正文/姓名
  if (/^[\w.]{8,}$/.test(t) && !/[\u4e00-\u9fa5]/.test(t)) return true;
  if (isBookmarkLine(line)) return true; // PDF 书签目录行
  return false;
}

/**
 * 句子重组：把 Tika 断行恢复为完整句。
 * 规则：一行若「没有终止标点结尾」且「下一行不是新 bullet / 新条目头 / 节标题」，
 * 则与下一行合并（续行）。避免"一句完整的话被切成不同点"。
 *
 * 关键改进：bullet 行剥标记后也作为「待定句」参与续行合并——
 * Tika 常把「1、X…前端操作都」与「有问题不说，…」拆成两行，第一行是 bullet、第二行是裸续行，
 * 此时应合并成同一条 bullet，而不是各自输出。
 *
 * 输入：已经去掉序号与噪声后的内容行数组。
 */
function mergeWrappedLines(lines: string[], isNewItem: (l: string) => boolean): string[] {
  const out: string[] = [];
  let pending = '';
  const flush = () => {
    if (pending) out.push(pending);
    pending = '';
  };
  for (const raw of lines) {
    const l = (raw || '').trim();
    if (!l) { flush(); continue; }
    const st = stripBulletMarker(l);
    // 新条目头（节标题/公司行）：结清前一句，本行剥标记后作为待定句
    if (isNewItem(l)) { flush(); pending = st.text; continue; }
    if (st.isBullet) {
      // 新 bullet 到来：前一条待定句到此为止（无论是否带终止标点）
      flush();
      pending = st.text;
      continue;
    }
    // 裸行：若是前一个待定句的续行（前句未以终止标点结尾）则合并，否则作为新句
    if (!pending) { pending = l; continue; }
    if (!hasSentenceEnd(pending)) { pending += l; }
    else { out.push(pending); pending = l; }
  }
  flush();
  return out;
}

/** 判断一行是否为 bullet（带标记或序号） */
function isBulletLine(line: string): boolean {
  return BULLET_MARKER_RE.test(line);
}

/** 判断文本是否以句子终止标点结尾（含闭合括号，如「（如：…分库分表）」算完整句） */
function hasSentenceEnd(s: string): boolean {
  return /[。！？!?；;：:）)]$/.test(s.trim());
}

/**
 * 从简历开头的「个人信息」区域提取 basics 字段。
 * 支持：姓名/电话/邮箱/年龄/性别/城市/求职意向/工作年限，格式如
 *   「电话:\t177-2975-2820」/「性别\t男」/「男 | 25岁」/「求职意向: Java软件工程师」
 * 返回是否命中「性别/年龄」指纹（供结构化展示判断）。
 */
function extractBasicsFromHeader(lines: string[]): {
  basics: Partial<{ name: string; title: string; email: string; phone: string; location: string; gender?: string; age?: string; workYears?: string }>;
  education: { school: string; major: string; degree: string };
} {
  const basics: Partial<{ name: string; title: string; email: string; phone: string; location: string; gender?: string; age?: string; workYears?: string }> = {};
  const education: { school: string; major: string; degree: string } = { school: '', major: '', degree: '' };
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    // 「性别 男」/「性　别：男」
    const genderM = t.match(/性别[：:\t|\|｜]?\s*(男|女)/i);
    if (genderM && !basics.gender) basics.gender = genderM[1];
    // 「年龄：25岁」或「25岁」
    const ageM = t.match(/年龄[：:\t|\|｜]?\s*(\d{1,2})\s*岁?/i) || t.match(/^(\d{1,2})\s*岁$/);
    if (ageM && !basics.age) basics.age = `${ageM[1]}岁`;
    // 「男 | 25岁」这种聚合行
    const aggM = t.match(/^男\s*[|\|｜,，、\s]+\s*(\d{1,2})\s*岁/);
    if (aggM && !basics.gender) basics.gender = '男';
    if (aggM && !basics.age) basics.age = `${aggM[1]}岁`;
    // 标签：值
    const labelM = t.match(BASICS_LABEL_RE);
    if (labelM) {
      const key = labelM[1].replace(/\s+/g, '').toLowerCase();
      const val = labelM[2].trim();
      if (!val) continue;
      if (/^(邮箱|e-?mail)$/.test(key) && !basics.email) basics.email = (val.match(EMAIL_RE) || [val])[0];
      else if (/^(电话|手机)$/.test(key) && !basics.phone) basics.phone = (val.match(PHONE_RE) || [val])[0];
      else if (/^求职意向|期望职位|意向职位|目标职位|应聘职位$/.test(key) && !basics.title && val.length <= 40) basics.title = val;
      // 城市/工作年限：双栏 PDF 的交错值常带噪声尾部（「南昌 史表中）」「4年 用）」），
      // 提取已知城市词前缀 / 数字年前缀，避免把交错文本混进字段
      else if (/^城市|现居|所在地|籍贯|期望城市/.test(key) && !basics.location) {
        const city = CITY_WORDS.find(w => val.startsWith(w));
        if (city) basics.location = city;
        else if (val.length <= 12) basics.location = val;
      }
      else if (/^工作年限|工作年数|工作经验|工作时长/.test(key) && !basics.workYears) {
        const ym = val.match(/^(\d{1,2})\s*年/);
        if (ym) basics.workYears = `${ym[1]}年`;
        else if (val.length <= 12) basics.workYears = val;
      }
      else if (/^姓名$/.test(key) && !basics.name) basics.name = val;
      else if (/^毕业院校|院校$/.test(key) && !education.school) education.school = val;
      else if (/^专业$/.test(key) && !education.major) education.major = val;
      else if (/^学历$/.test(key) && !education.degree) education.degree = val;
      continue;
    }
    // 游离散落的信息（如「男」「25岁」单独一行）
    if (!basics.gender && /^(男|女)$/.test(t)) basics.gender = t;
    if (!basics.age && /^(\d{1,2})\s*岁$/.test(t)) basics.age = `${(t.match(/^(\d{1,2})/) || ['', ''])[1]}岁`;
  }
  return { basics, education };
}

/** 技能项拆分：强分隔符（顿号/逗号/竖线/分号/中点），保留段内空格 */
function splitSkills(line: string): string[] {
  return line
    .split(/[、,，/|｜；;·•]+/)
    .map(s => s.trim())
    .filter(Boolean);
}

function extractDateRange(line: string): { startDate: string; endDate: string; rest: string } | null {
  const m = line.match(DATE_RANGE_RE);
  if (!m) return null;
  return {
    startDate: m[1].trim(),
    endDate: m[2].trim(),
    rest: line.slice(0, m.index) + line.slice((m.index || 0) + m[0].length),
  };
}

/** 从去除日期后的头部行解析 公司/职位/地点；isReliable 表示是否存在明确的结构分隔 */
function parseHeadLine(head: string): { company: string; title: string; location?: string; isReliable: boolean } {
  const trimmed = head.trim();
  // A | B | C
  const pipe = trimmed.split(/\s*[|｜]\s*/).map(s => s.trim()).filter(Boolean);
  if (pipe.length >= 2) {
    return { company: pipe[0], title: pipe[1], location: pipe[2], isReliable: true };
  }
  // A（B）
  const paren = trimmed.match(/^(.+?)[（(]([^（）()]+)[）)]\s*$/);
  if (paren) return { company: paren[1].trim(), title: paren[2].trim(), isReliable: true };
  // A - B（职位常用连字符）
  const dash = trimmed.split(/\s*[-–—]\s*/).map(s => s.trim()).filter(Boolean);
  if (dash.length >= 2) return { company: dash[0], title: dash.slice(1).join(' - '), isReliable: true };
  // B @ A
  const at = trimmed.match(/^(.+?)\s*@\s*(.+)$/);
  if (at) return { company: at[2].trim(), title: at[1].trim(), isReliable: true };
  // A  职位（多个空格分隔公司与职位，常见于原始文本：如「XX有限公司  Java」）
  const spaced = trimmed.split(/\s{2,}/).map(s => s.trim()).filter(Boolean);
  if (spaced.length >= 2 && spaced[1].length <= 12 && !/[。，,；;、]/.test(spaced[1])) {
    return { company: spaced[0], title: spaced.slice(1).join(' '), isReliable: true };
  }
  return { company: trimmed, title: '', isReliable: false };
}

function toBullets(lines: string[]): ResumeBullet[] {
  return lines.map(text => ({ id: newId('bullet'), text }));
}

/** 序列化文档全部文本（用于 coverage 估算；含 customSections，保证不丢内容被计入） */
export function serializeDocumentText(doc: ResumeDocument): string {
  const parts: string[] = [];
  const b = doc.basics;
  parts.push(b.name, b.title, b.email, b.phone, b.location, b.website || '', b.summary);
  doc.skills.forEach(g => parts.push(g.category, ...g.items));
  doc.experience.forEach(e =>
    parts.push(e.company, e.title, e.location || '', e.startDate, e.endDate, e.description || '', ...e.bullets.map(x => x.text))
  );
  doc.projects.forEach(p =>
    parts.push(p.name, p.role || '', p.link || '', p.startDate || '', p.endDate || '', ...(p.technologies || []), ...p.bullets.map(x => x.text))
  );
  doc.education.forEach(e =>
    parts.push(e.school, e.degree, e.major, e.startDate || '', e.endDate || '', ...e.bullets.map(x => x.text))
  );
  doc.certifications.forEach(c => parts.push(c.name, c.issuer || '', c.date || ''));
  doc.awards.forEach(a => parts.push(a.title, a.date || '', a.description || ''));
  doc.languages.forEach(l => parts.push(l.name, l.level || ''));
  doc.customSections.forEach(s => parts.push(s.title, sectionText(s)));
  return parts.join('\n');
}

/** 计算解析 coverage */
export function computeCoverage(originalText: string, doc: ResumeDocument): Pick<ParseDiagnostics, 'totalChars' | 'parsedChars' | 'unparsedChars'> {
  const clean = (s: string) => s.replace(/\s+/g, '');
  const totalChars = clean(originalText).length;
  const parsedChars = Math.min(totalChars, clean(serializeDocumentText(doc)).length);
  return { totalChars, parsedChars, unparsedChars: Math.max(0, totalChars - parsedChars) };
}

/**
 * 解析纯文本简历为 ParseResult。
 *
 * 流程：分行 → 分块（空行）→ 分节（标题识别）→ 各节高置信度解析 →
 * 无法归类的进 customSections；最后计算 coverage 诊断。
 */
export function parseResume(text: string): ParseResult {
  const doc = createEmptyResumeDocument();
  const warnings: string[] = [];
  const sectionsDetected: string[] = [];
  const rawLines = text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0 && !isNoiseLine(l));
  if (rawLines.length === 0) {
    const coverage = computeCoverage(text, doc);
    return {
      document: doc,
      diagnostics: {
        ...coverage,
        coverage: 0,
        sectionsDetected: [],
        warnings: ['输入为空'],
        confidence: 0,
      },
    };
  }
  doc.rawText = text;

  // ---- 基础信息预扫描 ----
  // 先过滤 PDF 噪声行，再扫描全文（前 N 行）提取标签化基本信息。
  // 注意：不能遇到工作/项目节标题就 break —— 双栏 PDF 的 Tika 交错读取会把
  // 右栏的「工作时长：4年」「期望城市：南昌」夹到「工作经历」节之后。
  // 由于只接受「明确标签行」（label: 值），正文行不会误提取，因此全文扫描是安全的。
  const headerRaw: string[] = [];
  for (const l of rawLines) {
    if (isNoiseLine(l)) continue;
    headerRaw.push(l);
    if (headerRaw.length >= 60) break;
  }
  const { basics: headerBasics, education: headerEducation } = extractBasicsFromHeader(headerRaw);
  const wholeEmail = (rawLines.join(' ').match(EMAIL_RE) || [])[0] || '';
  const wholePhone = (rawLines.join(' ').match(PHONE_RE) || [])[0] || '';
  doc.basics.email = headerBasics.email || wholeEmail;
  doc.basics.phone = headerBasics.phone || wholePhone;
  doc.basics.title = headerBasics.title || doc.basics.title;
  doc.basics.location = headerBasics.location || doc.basics.location;
  if (headerBasics.gender) doc.basics.gender = headerBasics.gender;
  if (headerBasics.age) doc.basics.age = headerBasics.age;
  if (headerBasics.workYears) doc.basics.workYears = headerBasics.workYears;

  // 补充扫描：部分简历（如程仕）的「男 | 25岁」被 Tika 夹进正文，header 未覆盖。
  // 仅在仍缺失时，于全文安全位置补充提取（不覆盖已识别值）。
  if (!doc.basics.gender || !doc.basics.age) {
    const headText = rawLines.slice(0, 40).join('\n');
    if (!doc.basics.gender) {
      const gm = headText.match(/性别[：:\s]*([男女])/) || headText.match(/^([男女])\s*[|\|｜,，、]?/m);
      if (gm) doc.basics.gender = gm[1];
    }
    if (!doc.basics.age) {
      const am = headText.match(/年龄[：:\s]*(\d{1,2})\s*岁/) || headText.match(/(?:^|[|\|｜,，、\s])(\d{1,2})\s*岁/);
      if (am) doc.basics.age = `${am[1]}岁`;
    }
  }

  // 姓名：
  // 1) 优先「姓名」标签（如「姓名：李阳」）
  // 2) 否则用简历开头、不含标点/序数/区块标题、不是节标题/联系方式的候选行
  const nameCandidate = headerBasics.name || rawLines
    .slice(0, 6)
    .find(l => {
      if (isNoiseLine(l)) return false;
      const clean = stripHeadingPrefix(l).replace(/[:：]\s*$/, '');
      return (
        clean.length >= 2 &&
        clean.length <= 12 &&
        !/[。，,；;：:、]/.test(clean) &&
        !BLOCK_TITLE_WORDS.some(w => clean === w || clean.startsWith(w)) &&
        !l.match(EMAIL_RE) &&
        !l.match(PHONE_RE) &&
        !/^(自主|独立|负责|从事|熟练|精通|掌握|熟悉|具有|拥有|参与|曾|多年)/.test(clean) &&
        detectSection(l) === null
      );
    });
  if (nameCandidate) {
    // 去掉 Tika 常见噪音标注（如「程仕 内容:」→「程仕」），保留合法姓名
    let clean = stripHeadingPrefix(nameCandidate).replace(/[:：]\s*$/, '');
    clean = clean.replace(/\s*内容$/, '').trim();
    if (clean.length >= 2) doc.basics.name = clean;
  }
  // 全文兜底：Tika 有时把姓名标注为「程仕 内容:」夹在正文中（如程仕简历）
  if (!doc.basics.name) {
    const m = rawLines.slice(0, 30).join('\n').match(/^([\u4e00-\u9fa5]{2,4})\s*内容[:：]/m);
    if (m) doc.basics.name = m[1].trim();
  }

  // ---- 分块：空行分隔；节标题行总是新块起点（标题行可能嵌在段落中间） ----
  const blocks: string[][] = [];
  let current: string[] = [];
  const flush = () => {
    if (current.length > 0) {
      blocks.push(current);
      current = [];
    }
  };
  // 已识别的长唯一信息值（电话/邮箱）从正文行内删除——双栏 PDF 的 Tika 交错读取
  // 会把右栏的「微信号: 13125217338」夹进左栏正文（程仕「13125217338 发的探针」）。
  // 仅限 phone/email（长且唯一），避免误删短值（如 title「Java」）。
  const infoStripValues = [doc.basics.phone, doc.basics.email]
    .filter((v): v is string => !!v && v.length > 2);
  const stripInfoValues = (s: string): string => {
    let r = s;
    for (const v of infoStripValues) r = r.split(v).join(' ');
    return r.replace(/\s{2,}/g, ' ').trim();
  };
  for (const rawLine of text.split(/\r?\n/)) {
    const t = cleanInlineNoise(rawLine);
    if (!t || isNoiseLine(rawLine)) {
      flush();
      continue;
    }
    if (current.length > 0 && detectSection(t)) {
      flush();
      current = [t];
      continue;
    }
    current.push(stripInfoValues(t));
  }
  flush();

  // ---- 分节 ----
  let section: ParseSectionType = 'other';
  const buckets: Record<ParseSectionType, string[][]> = {
    summary: [], skills: [], experience: [], projects: [], education: [],
    certifications: [], awards: [], languages: [], info: [], other: [],
  };

  for (const block of blocks) {
    const headLine = block[0] || '';
    const detected = detectSection(headLine);
    if (detected) {
      section = detected.type;
      if (!sectionsDetected.includes(detected.label)) sectionsDetected.push(detected.label);
      // 标题行内可能带内容（如「技能：Java、Spring」）
      const afterColon = headLine.replace(/^.{1,30}?[:：]\s*/, '');
      if (afterColon && afterColon !== headLine && afterColon.length > 1) {
        buckets[section].push([afterColon]);
        if (block.length > 1) buckets[section].push(block.slice(1));
      } else if (block.length > 1) {
        buckets[section].push(block.slice(1));
      }
      continue;
    }
    buckets[section].push(block);
  }

  // ---- summary：重组 Tika 断行 + 剥离序号/标记符，避免「1. 程序员方面 2. 自我方面」残留 ----
  if (buckets.summary.length > 0) {
    const raw = buckets.summary.flatMap(b => b.map(stripBulletMarker).map(x => x.text));
    const merged = mergeWrappedLines(raw, () => false);
    doc.basics.summary = merged.join(' ').replace(/\s+/g, ' ');
  }

  // ---- info：基本信息节（李阳等简历的「基本信息」区块）逐行走信息提取，不落 customSections ----
  if (buckets.info.length > 0) {
    for (const block of buckets.info) {
      const info = extractBasicsFromHeader(block);
      if (info.basics.name && !doc.basics.name) doc.basics.name = info.basics.name;
      if (info.basics.email && !doc.basics.email) doc.basics.email = info.basics.email;
      if (info.basics.phone && !doc.basics.phone) doc.basics.phone = info.basics.phone;
      if (info.basics.title && !doc.basics.title) doc.basics.title = info.basics.title;
      if (info.basics.location && !doc.basics.location) doc.basics.location = info.basics.location;
      if (info.basics.gender && !doc.basics.gender) doc.basics.gender = info.basics.gender;
      if (info.basics.age && !doc.basics.age) doc.basics.age = info.basics.age;
      if (info.basics.workYears && !doc.basics.workYears) doc.basics.workYears = info.basics.workYears;
      if (info.education.school && !headerEducation.school) {
        headerEducation.school = info.education.school;
        headerEducation.major = headerEducation.major || info.education.major;
        headerEducation.degree = headerEducation.degree || info.education.degree;
      }
    }
  }

  // ---- skills：折叠式解析，支持三类结构 ——
  //   ① 标签行：「标签：内容」或「【X】内容」→ 开新分组；
  //   ② 独占标签词（如「数据库」「分布式」单独一行，无冒号）→ 暂存为待定标签，下一行作为内容；
  //   ③ 残字续行（如「的经历」≤6 字）→ 并入当前分组最后一条 item；
  //   ④ 其他行：若上一条未以终止标点结尾则续行合并，否则作为新 item（描述句整句保留，不碎片化）。
  const skillLeftovers: string[] = [];
  const SKILL_CAT_RE = /^(【([^】]+)】|([\u4e00-\u9fa5A-Za-z]{1,8})[:：])\s*(.*)$/;
  const SKILL_CATEGORY_WORDS = new Set([
    '语言', '后端', '前端', '数据库', '分布式', '框架', '工具', '中间件', '监控', '敏捷', '搜索', '搜索引擎',
    '操作系统', '网络', '测试', '运维', '开发工具', '云原生', '服务器', '缓存', '消息', '网关', '数据库优化', '大数据',
  ]);
  let curSkill: { cat: string; items: string[] } | null = null;
  let pendingCat = '';
  const flushSkill = () => {
    if (curSkill && curSkill.items.length > 0) {
      doc.skills.push({ id: newId('skill'), category: curSkill.cat, items: curSkill.items });
    }
    curSkill = null;
    pendingCat = '';
  };
  const addSkillContent = (cat: string, content: string) => {
    const c = content.replace(/^[:：]\s*/, '').trim();
    if (!c) { pendingCat = cat; return; }
    if (/^(熟练掌握|熟悉|精通|掌握|了解|擅长|熟练|用过|有.*经验)/.test(c) || (c.match(/[\u4e00-\u9fa5]/g) || []).length > 10) {
      curSkill = { cat, items: [c] };
    } else {
      const items = splitSkills(c);
      curSkill = { cat, items: items.length > 0 ? items : [c] };
    }
  };
  for (const block of buckets.skills) {
    for (const rawLine of block) {
      const line = cleanInlineNoise(rawLine).trim();
      if (!line) continue;
      // ① 标签行（「数据库：熟练使用…」「【Java】精通…」）
      const catM = line.match(SKILL_CAT_RE);
      if (catM) {
        flushSkill();
        addSkillContent((catM[2] || catM[3] || '').trim(), catM[4]);
        continue;
      }
      // ② 独占标签词（纯中文短词且属于常见类目词，如「数据库」「分布式」）
      if (/^[\u4e00-\u9fa5]{1,8}$/.test(line) && SKILL_CATEGORY_WORDS.has(line)) {
        flushSkill();
        pendingCat = line;
        continue;
      }
      // ③ 残字续行（≤6 字且无标点，如「的经历」）→ 并入上一条
      if (line.length <= 6 && !/[。，,;；（）()]/.test(line)) {
        if (curSkill && curSkill.items.length > 0) {
          curSkill.items[curSkill.items.length - 1] += line;
          continue;
        }
        if (pendingCat) { curSkill = { cat: pendingCat, items: [line] }; pendingCat = ''; continue; }
        skillLeftovers.push(rawLine);
        continue;
      }
      // ④ 内容行
      if (pendingCat) {
        addSkillContent(pendingCat, line);
        pendingCat = '';
        continue;
      }
      if (!curSkill) curSkill = { cat: '技能', items: [] }; // 无标签裸行默认归「技能」
      if (curSkill) {
        const last = curSkill.items[curSkill.items.length - 1];
        if (last && !hasSentenceEnd(last)) {
          // Tika 断行续行：如「…包括微服务、容器化、」+「DevOps和Service Mesh等技术」
          curSkill.items[curSkill.items.length - 1] = last + line;
          continue;
        }
        if (/^(熟练掌握|熟悉|精通|掌握|了解|擅长|熟练|用过|有.*经验)/.test(line) || (line.match(/[\u4e00-\u9fa5]/g) || []).length > 10) {
          curSkill.items.push(line);
        } else {
          curSkill.items.push(...splitSkills(line));
        }
        continue;
      }
      skillLeftovers.push(rawLine);
    }
  }
  flushSkill();
  if (skillLeftovers.length > 0) {
    warnings.push(`技能节 ${skillLeftovers.length} 行未能可靠识别，已保留到「其他内容」`);
  }

  // ---- experience：折叠式解析（头部行开新条目，其后描述块折叠进该条目） ----
  const { entries: expEntries, leftovers: expLeftovers } = foldEntries<ResumeExperienceItem>(
    buckets.experience,
    (head, body) => {
      const dated = extractDateRange(head);
      const headText = (dated ? dated.rest : head).trim();
      const parsed = parseHeadLine(headText);
      const restBody = [...body];
      let title = parsed.title || '';
      let location = parsed.location;
      // 两行式头部：公司行 + 职位行（如「联想有限公司 2021.06-2023.07」+「Java软件开发工程师 北京」），
      // 职位行短、无句号、含职位词 → 提升为 title（尾部城市词识别为 location）
      if (!title && restBody.length > 0 && isRoleLine(restBody[0])) {
        const role = restBody.shift() as string;
        const cityM = role.match(/^(.*?)\s*([\u4e00-\u9fa5]{2,3})$/);
        if (cityM && CITY_WORDS.includes(cityM[2])) {
          title = cityM[1].trim();
          location = location || cityM[2];
        } else {
          title = role;
        }
      }
      return {
        id: newId('exp'),
        company: parsed.company,
        title,
        startDate: dated?.startDate || '',
        endDate: dated?.endDate || '',
        location,
        bullets: toBullets(mergeWrappedLines(restBody, () => false)),
      };
    },
    // 独立角色行提升：如「Java软件开发工程师 北京」→ title=Java软件开发工程师 / location=北京
    (roleHead: string) => {
      const cityM = roleHead.match(/^(.*?)\s*([\u4e00-\u9fa5]{2,3})$/);
      if (cityM && CITY_WORDS.includes(cityM[2])) {
        return { title: cityM[1].trim(), location: cityM[2] };
      }
      return { title: roleHead };
    },
  );
  doc.experience = expEntries;
  if (expLeftovers.length > 0) {
    warnings.push(`工作经历 ${expLeftovers.length} 段未能可靠识别公司/职位，已保留到「其他内容」`);
  }

  // ---- projects：折叠式解析，额外识别技术栈行 ----
  const prjLeftovers: string[][] = [];
  const openProjects: ResumeProjectItem[] = [];
  /** 跨块待定项目：遇到孤立短名称（如「SLA服务」）暂存，下一块是角色词则合并开新项目 */
  let pendingName = '';
  const ROLE_WORDS_ENTRY = /^(核心开发人员|项目负责人|负责人|主要开发|开发工程师|后端开发|前端开发|参与开发|开发者|架构师|主程|主导者|产品经理|项目经理|核心成员|成员)$/;
  for (const block of buckets.projects) {
    // 先试「项目名/角色」两行式头部（同一 block 内）
    const twoLine = tryTwoLineProjectHead(block);
    if (twoLine) {
      const content = extractProjectContent(twoLine.restBody);
      const entry: ResumeProjectItem = {
        id: newId('prj'),
        name: twoLine.name,
        role: twoLine.role,
        technologies: content.tech.length > 0 ? content.tech : undefined,
        bullets: toBullets(content.bullets),
      };
      doc.projects.push(entry);
      openProjects.push(entry);
      continue;
    }
    const { head, body } = splitEntry(block);
    // 孤立短名称：暂存为待定项目名
    if (
      head &&
      head.length <= 20 &&
      !/[。！？，,;；:|｜]/.test(head) &&
      body.length === 0 &&
      !isEntryHeadLine(head) &&
      !ROLE_WORDS_ENTRY.test(head)
    ) {
      pendingName = head;
      continue;
    }
    // 角色词 block：与 pendingName 合并为新项目
    if (ROLE_WORDS_ENTRY.test(head) && pendingName) {
      const content = extractProjectContent(body);
      const entry: ResumeProjectItem = {
        id: newId('prj'),
        name: pendingName,
        role: head,
        technologies: content.tech.length > 0 ? content.tech : undefined,
        bullets: toBullets(content.bullets),
      };
      doc.projects.push(entry);
      openProjects.push(entry);
      pendingName = '';
      continue;
    }
    if (pendingName && !isEntryHeadLine(head)) {
      // 描述块紧跟孤立项目名（如「SLA服务」之后直接是描述）→ 归入待定项目
      if (openProjects.length > 0 && openProjects[openProjects.length - 1].name === pendingName) {
        const current = openProjects[openProjects.length - 1];
        const lines = sanitizeEntryLines([head, ...body]);
        const merged = mergeWrappedLines(lines, (l) => isBulletLine(l) || isEntryHeadLine(l));
        const content = extractProjectContent(merged);
        if (content.tech.length > 0) current.technologies = [...(current.technologies || []), ...content.tech];
        if (content.bullets.length > 0) current.bullets.push(...toBullets(content.bullets));
        continue;
      }
      // 尚未有对应 open 项目：直接新建（pendingName 作为项目名，本块作描述/角色）
      const lines = sanitizeEntryLines([head, ...body]);
      const merged = mergeWrappedLines(lines, (l) => isBulletLine(l) || isEntryHeadLine(l));
      const content = extractProjectContent(merged);
      const entry: ResumeProjectItem = {
        id: newId('prj'),
        name: pendingName,
        technologies: content.tech.length > 0 ? content.tech : undefined,
        bullets: content.bullets.length > 0 ? toBullets(content.bullets) : [],
      };
      doc.projects.push(entry);
      openProjects.push(entry);
      pendingName = '';
      continue;
    }
    if (isEntryHeadLine(head)) {
      const dated = extractDateRange(head);
      const headText = (dated ? dated.rest : head).trim();
      const parsed = parseHeadLine(headText);
      const blockContent = extractProjectContent(body);
      const entry: ResumeProjectItem = {
        id: newId('prj'),
        name: parsed.company,
        role: parsed.title || undefined,
        startDate: dated?.startDate,
        endDate: dated?.endDate,
        technologies: blockContent.tech.length > 0 ? blockContent.tech : undefined,
        bullets: toBullets(blockContent.bullets),
      };
      if (entry.name) {
        doc.projects.push(entry);
        openProjects.push(entry);
      } else {
        prjLeftovers.push(block);
      }
    } else if (openProjects.length > 0) {
      const current = openProjects[openProjects.length - 1];
      const lines = sanitizeEntryLines([head, ...body]);
      if (lines.length > 0) {
        // 重组被 Tika 断行长句，避免项目正文一句被切成多个 bullet
        const merged = mergeWrappedLines(lines, (l) => isBulletLine(l) || isEntryHeadLine(l));
        const content = extractProjectContent(merged);
        if (content.tech.length > 0) {
          current.technologies = [...(current.technologies || []), ...content.tech];
        }
        if (content.bullets.length > 0) current.bullets.push(...toBullets(content.bullets));
      }
    } else {
      prjLeftovers.push(block);
    }
  }
  if (prjLeftovers.length > 0) {
    warnings.push(`项目经历 ${prjLeftovers.length} 段未能可靠识别，已保留到「其他内容」`);
  }

  // ---- education：学校/专业/学历/日期 ----
  const eduLeftovers: string[][] = [];
  for (const block of buckets.education) {
    const { head, body } = splitEntry(block);
    const dated = extractDateRange(head);
    const headText = (dated ? dated.rest : head).trim();
    if (!headText) {
      eduLeftovers.push(block);
      continue;
    }
    // 两行式教育头部：学校+日期 与 「专业 学历 城市」分两行（王昕「河南财政金融学院 2017.09-2021.06」+「计算机科学与技术 本科 郑州」）
    const firstBody = (body[0] || '').trim();
    const headCombined = [headText, firstBody].filter(Boolean).join(' ');
    let restBody = body;
    if (
      firstBody &&
      firstBody.length <= 30 &&
      !/[。；;：:]/.test(firstBody) &&
      DEGREE_WORDS.some(w => firstBody.includes(w))
    ) {
      restBody = body.slice(1);
    }
    const tokens = headCombined.split(/[|｜\s]+/).map(s => s.trim()).filter(Boolean);
    let degree = '';
    let school = '';
    let major = '';
    for (const t of tokens) {
      if (CITY_WORDS.includes(t)) continue; // 城市词不并入专业
      if (DEGREE_WORDS.some(w => t.includes(w))) {
        degree = t;
      } else if (!school) {
        school = t;
      } else {
        major = major ? `${major} ${t}` : t;
      }
    }
    if (!school) {
      eduLeftovers.push(block);
      continue;
    }
    const entry: ResumeEducationItem = {
      id: newId('edu'),
      school,
      degree,
      major,
      startDate: dated?.startDate,
      endDate: dated?.endDate,
      bullets: toBullets(restBody),
    };
    doc.education.push(entry);
  }
  if (eduLeftovers.length > 0) {
    warnings.push(`教育经历 ${eduLeftovers.length} 段未能可靠识别，已保留到「其他内容」`);
  }
  // 基本信息里的教育信息兜底（如「毕业院校：某某大学 / 专业 / 学历」在本文档无独立教育节时）
  if (doc.education.length === 0 && headerEducation.school) {
    doc.education.push({
      id: newId('edu'),
      school: headerEducation.school,
      degree: headerEducation.degree,
      major: headerEducation.major,
      bullets: [],
    });
  }

  // ---- certifications / awards / languages：逐块/逐行，日期剥离（含单日期） ----
  const stripDate = (line: string): { name: string; date?: string } => {
    const ranged = extractDateRange(line);
    if (ranged) return { name: ranged.rest.trim(), date: ranged.startDate };
    const single = line.match(SINGLE_DATE_RE);
    if (single && single.index && single.index > 0) {
      return { name: line.slice(0, single.index).replace(/[|｜\s]+$/, '').trim(), date: single[1] };
    }
    return { name: line.trim() };
  };
  for (const block of buckets.certifications) {
    for (const line of block) {
      const { name, date } = stripDate(line);
      if (!name) continue;
      doc.certifications.push({ id: newId('cert'), name, date });
    }
  }
  for (const block of buckets.awards) {
    for (const line of block) {
      const { name, date } = stripDate(line);
      if (!name) continue;
      doc.awards.push({ id: newId('award'), title: name, date });
    }
  }
  for (const block of buckets.languages) {
    for (const line of block) {
      const m = line.match(/^(.+?)[（(]([^（）()]+)[）)]\s*$/);
      const dash = line.split(/\s*[-–—]\s*/).map(s => s.trim()).filter(Boolean);
      const lang: ResumeLanguage = m
        ? { id: newId('lang'), name: m[1].trim(), level: m[2].trim() }
        : dash.length >= 2
          ? { id: newId('lang'), name: dash[0], level: dash.slice(1).join(' - ') }
          : { id: newId('lang'), name: line };
      doc.languages.push(lang);
    }
  }

  // ---- 兜底：无法归类的所有内容进 customSections（保留段落/bullet 结构，不静默丢弃） ----
  const leftoverBlocks: string[][] = [...buckets.other];
  if (skillLeftovers.length > 0) leftoverBlocks.push(skillLeftovers);
  leftoverBlocks.push(...expLeftovers, ...prjLeftovers, ...eduLeftovers);
  // 已识别为个人信息的行（电话/邮箱/年龄/性别/民族/求职意向等）剔除，避免「其他内容」重复堆砌
  const infoValues = [doc.basics.phone, doc.basics.email, doc.basics.title, doc.basics.location, doc.basics.gender, doc.basics.age, doc.basics.workYears]
    .filter(Boolean) as string[];
  const eduSchools = doc.education.map(e => e.school).filter(Boolean);
  const isConsumedInfoLine = (l: string): boolean => {
    if (infoValues.some(v => v && v.length > 2 && l.includes(v))) return true;
    const t = l.trim();
    // 纯信息标签空壳行（值已被剥，如「手 机：」「邮 箱：」；标签内容忍空格）
    if (/^(电话|手\s*机|邮\s*箱|e-?mail|姓\s*名|年龄|性别|民族|籍贯|现居|所在地|求职意向|意向职位|期望职位|期望城市|工作年限|工作年数|工作经验|工作时长|毕业院校|专业|学历|政治面貌|身\s*高)\s*[：:\t|\|｜]*$/.test(t)) return true;
    // 工作年限值壳行（如「7年」）
    if (/^\d{1,2}\s*年$/.test(t)) return true;
    // 「毕业院校：xxx」且该院校已入 education → 丢弃重复
    if (/^毕业院校[:：]/.test(t) && eduSchools.some(s => s && t.includes(s))) return true;
    return /^(电话|手机|邮箱|e-mail|email|年龄|性别|民族|籍贯|现居|所在地|求职意向|期望职位|意向职位|工作年限|工作年数|工作时长)\s*[：:\t|\|｜]?/.test(t);
  };
  const mergedLeftover = leftoverBlocks
    .map(b =>
      b
        .filter(l => l !== nameCandidate)
        .filter(l => !isConsumedInfoLine(l))
        .join('\n'),
    )
    .filter(Boolean)
    .join('\n\n');
  if (mergedLeftover.trim()) {
    doc.customSections.push({
      id: newId('custom'),
      title: '其他内容',
      blocks: textToBlocks(mergedLeftover.trim()),
    });
    if (!sectionsDetected.includes('其他内容')) sectionsDetected.push('其他内容');
  }

  const coverage = computeCoverage(text, doc);
  const rate = coverage.totalChars > 0 ? coverage.parsedChars / coverage.totalChars : 0;
  const confidence = Math.max(0, Math.min(0.98, 0.35 + 0.65 * rate - warnings.length * 0.03));

  return {
    document: doc,
    diagnostics: {
      ...coverage,
      coverage: rate,
      sectionsDetected,
      warnings,
      confidence,
    },
  };
}

/** 向后兼容：仅返回 ResumeDocument（Demo 页与旧测试使用） */
export function parseResumeToDocument(text: string): ResumeDocument {
  return parseResume(text).document;
}

/** 把一段经历文本切成「头部行 + 内容行」 */
function splitEntry(lines: string[]): { head: string; body: string[] } {
  const head = (lines[0] || '').trim();
  const body = lines
    .slice(1)
    .map(stripBulletMarker)
    .map(x => x.text)
    .filter(Boolean);
  return { head, body };
}

/** 纯标题噪声集合：单独的这类行没有实际内容，折叠时丢弃（避免「业绩:」「责任描述:」空行杂质） */
const EMPTY_HEADER_WORDS = new Set([
  '业绩', '联系方式', '求职信息', '微信号', '微信', '项目描述', '项目技术', '所用技术',
  '涉及技术', '技术栈', '技术选型', '项目周期', '核心职责', '个人参与', '责任描述', '工作职责', '岗位职责', '我的职责', '自我评价',
]);

/** 过滤折叠后的内容行：去掉空行与「只有标题、没有正文」的噪声行 */
function sanitizeEntryLines(lines: string[]): string[] {
  const out: string[] = [];
  for (const raw of lines) {
    let l = (raw || '').trim();
    if (!l) continue;
    // Tika 标注噪声：形如「程仕 内容:」「内容」→ 整行丢弃
    if (/内容[:：]?$/.test(l)) continue;
    // 纯标题噪声行（如「业绩:」「联系方式」）→ 丢弃
    const headOnly = l.replace(/[:：]\s*$/, '').trim();
    if (EMPTY_HEADER_WORDS.has(headOnly)) continue;
    // 行首为已知噪声标题且后面跟着正文 → 剥掉标题前缀（如「联系方式 2、完成...」→「2、完成...」）
    for (const w of EMPTY_HEADER_WORDS) {
      for (const sep of ['：', ':', ' ']) {
        const prefix = `${w}${sep}`;
        if (l.startsWith(prefix) && l.length > prefix.length) { l = l.slice(prefix.length).trim(); break; }
      }
    }
    // 去除行首内嵌的个人信息噪声（Tika 把「男 | 25岁」混进条目正文），如「男 | 25岁 1、完成...」→「完成...」
    l = l.replace(/^(男|女)\s*[|\|｜,，、\s]+\s*\d{1,2}\s*岁[，,．.\s]*/, '');
    l = l.replace(/^(性别)?[：:\s]*[男女][，,．.\s]*$/, '');
    // 剥掉标题前缀后只剩「日期范围」的元数据行（如「项目周期：2018.11 – 至今」→「2018.11 – 至今」）→ 丢弃
    if (l && extractDateRange(l)) continue;
    if (l) out.push(l);
  }
  return out;
}

/** 常见城市词（用于从「职位+城市」行提取 location） */
const CITY_WORDS = [
  '北京', '上海', '广州', '深圳', '杭州', '南京', '武汉', '成都', '西安', '重庆', '苏州', '郑州', '南昌',
  '长沙', '天津', '青岛', '大连', '厦门', '福州', '合肥', '昆明', '贵阳', '南宁', '兰州', '太原', '石家庄',
  '哈尔滨', '长春', '沈阳', '济南', '宁波', '无锡', '东莞', '佛山', '珠海', '中山', '惠州', '嘉兴', '温州',
];

/** 判断一行是否为「职位行」（两行式经历头部的第二行）：短、无句号、含职位关键词 */
function isRoleLine(line: string): boolean {
  const t = line.trim();
  if (!t || t.length > 25) return false;
  if (/[。；;：:]/.test(t)) return false;
  return /(工程师|开发|经理|主管|负责|参与|助理|设计师|架构师|运维|测试|产品|运营|顾问|讲师|研究员|技术员)/.test(t);
}

/**
 * 判断一个块是否为「新经历条目的头部行」。
 *
 * 真实条目的头部行应满足其一：
 * - 含日期范围，且去日期后剩余部分较短（≈ 公司/职位名）；
 * - 无日期但有明确的 公司|职位 分隔，且整体很短。
 * 整段正文（描述）行通常很长或不含日期，不应被误判为头部。
 */
function isEntryHeadLine(head: string): boolean {
  if (stripBulletMarker(head).isBullet) return false;
  const dated = extractDateRange(head);
  const rest = (dated ? dated.rest : head).trim();
  // 去日期后剩余部分过长 → 是正文而非头部
  if (rest.length > 30) return false;
  const parsed = parseHeadLine(rest);
  const reliable = Boolean(dated) || parsed.isReliable;
  if (!reliable) return false;
  const cjkCount = (rest.match(/[\u4e00-\u9fa5]/g) || []).length;
  return rest.length > 0 && cjkCount >= 1;
}

/**
 * 从项目相关行中提取「技术栈行」并给出剩余正文。
 */
function extractProjectContent(lines: string[]): { tech: string[]; bullets: string[] } {
  const tech: string[] = [];
  const rest: string[] = [];
  for (const line of lines) {
    const techMatch = line.match(/^(?:技术栈|技术选型|技术|技术方案|涉及技术)[:：]\s*(.+)$/);
    if (techMatch) {
      // 清理行尾终止标点/空白，避免「Redis。」这类残点进入技术栈项
      tech.push(...splitSkills(techMatch[1].replace(/[。；;，,、\s]+$/, '')));
      continue;
    }
    if (line.length <= 40 && !line.match(/[\u4e00-\u9fa5]{6,}/)) {
      const maybeTech = splitSkills(line);
      if (maybeTech.length >= 2 && maybeTech.every(t => /^[A-Za-z0-9+#.\-/ ]+$/.test(t))) {
        tech.push(...maybeTech);
        continue;
      }
    }
    rest.push(line);
  }
  // 清洗 rest：剥噪声小标题（核心职责/项目周期等）与纯日期残行
  const cleaned = sanitizeEntryLines(rest);
  return { tech, bullets: cleaned };
}

/**
 * 识别「项目名 / 角色」两行式头部，如：
 *   SLA服务
 *   核心开发人员
 * 返回 { name, role, restBody }；若不是两行头部返回 null。
 */
function tryTwoLineProjectHead(lines: string[]): { name: string; role: string; restBody: string[] } | null {
  const head = (lines[0] || '').trim();
  const second = (lines[1] || '').trim();
  // 第一行：项目名（短、无终止标点、非进度标题）；第二行：角色词
  const ROLE_WORDS = /^(核心开发人员|项目负责人|负责人|主要开发|开发工程师|后端开发|前端开发|参与开发|开发者|架构师|主程|主导者|产品经理|项目经理)$/;
  if (head && head.length <= 20 && !/[。！？，,;；]/.test(head) && second && ROLE_WORDS.test(second)) {
    return { name: head, role: second, restBody: lines.slice(2) };
  }
  return null;
}

/** 折叠式解析经历/项目：维护一个「当前条目」，遇到新的头部行才开启新条目；
 * 其后所有非头部描述块都折叠进当前条目的 bullets，避免正文丢失或全部挤进其他内容。
 */
function foldEntries<T extends { bullets: ResumeBullet[] }>(
  blocks: string[][],
  createEntry: (head: string, body: string[]) => T,
  /** 独立「角色行」块（如空行分隔的「Java软件开发工程师 北京」）→ 提升为条目字段（title/location） */
  onRoleLine?: (head: string) => Record<string, unknown> | null,
): { entries: T[]; leftovers: string[][] } {
  const entries: T[] = [];
  const leftovers: string[][] = [];
  let current: T | null = null;
  for (const block of blocks) {
    const { head, body } = splitEntry(block);
    if (isEntryHeadLine(head)) {
      current = createEntry(head, body);
      entries.push(current);
    } else if (current) {
      // 独立角色行：单独成块、当前条目目标字段为空 → 提升而不是变成 bullet
      if (onRoleLine && body.length === 0 && isRoleLine(head)) {
        const patch = onRoleLine(head);
        if (patch) {
          const cur = current as unknown as Record<string, unknown>;
          const applied: Record<string, unknown> = {};
          for (const [k, v] of Object.entries(patch)) {
            if (!cur[k] && v) { cur[k] = v; applied[k] = v; }
          }
          if (Object.keys(applied).length > 0) continue;
        }
      }
      // 描述块：先重组被 Tika 断行的长句，再折叠进当前条目（避免一句完整话被切成不同 bullet）
      const cleaned = sanitizeEntryLines([head, ...body]);
      const merged = mergeWrappedLines(cleaned, (l) => isBulletLine(l) || isEntryHeadLine(l));
      if (merged.length > 0) current.bullets.push(...toBullets(merged));
    } else {
      leftovers.push(block);
    }
  }
  return { entries, leftovers };
}
