/**
 * Phase 5D-2：PDF 导出的文档字符集收集
 *
 * 导出前收集 ResumeDocument 全部可见文本（含模板固定文案与分隔符），
 * 供 isCoveredBySubset 判定「子集字体是否可安全使用」；
 * 不在子集中的字符将触发回退全量字体（保证 PDF 中文缺字率 = 0）。
 */

import type { ResumeDocument } from '../../types/resumeDocument';

/** PDF 渲染层的固定文案与分隔符（ResumePdfDocument 中硬编码输出的字符） */
export const PDF_FIXED_TEXT =
  '工作经历项目经历专业技能教育背景证书资质获奖荣誉语言能力' +
  '·—、：|（）• -0123456789\u200B';

/** 收集 ResumeDocument 全部字段文本 + 固定文案的字符集合 */
export function collectResumeCharset(doc: ResumeDocument): Set<string> {
  const chars = new Set<string>();
  const add = (s: string | undefined | null) => {
    if (!s) return;
    for (const c of s) chars.add(c);
  };

  const b = doc.basics;
  add(b.name); add(b.title); add(b.email); add(b.phone); add(b.location);
  add(b.website); add(b.summary); add(b.gender); add(b.age); add(b.workYears);

  for (const g of doc.skills) {
    add(g.category); add(g.name);
    for (const i of g.items) add(i);
  }
  for (const e of doc.experience) {
    add(e.company); add(e.title); add(e.startDate); add(e.endDate);
    add(e.location); add(e.description);
    for (const bl of e.bullets) add(bl.text);
  }
  for (const p of doc.projects) {
    add(p.name); add(p.role); add(p.link); add(p.startDate); add(p.endDate);
    for (const t of p.technologies ?? []) add(t);
    for (const bl of p.bullets) add(bl.text);
  }
  for (const e of doc.education) {
    add(e.school); add(e.degree); add(e.major); add(e.startDate); add(e.endDate);
    for (const bl of e.bullets) add(bl.text);
  }
  for (const c of doc.certifications) { add(c.name); add(c.issuer); add(c.date); }
  for (const a of doc.awards) { add(a.title); add(a.date); add(a.description); }
  for (const l of doc.languages) { add(l.name); add(l.level); }
  for (const cs of doc.customSections) {
    add(cs.title);
    for (const bl of cs.blocks) add(bl.text);
  }
  add(doc.rawText);
  add(PDF_FIXED_TEXT);
  return chars;
}