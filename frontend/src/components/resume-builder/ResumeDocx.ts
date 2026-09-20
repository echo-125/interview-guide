/**
 * DOCX 结构化导出（Phase 4B 正式功能）
 *
 * 方案：docx npm 包（Reactive Resume packages/docx 同款），
 * 由同一份 ResumeDocument 声明式生成 DOCX（Packer.toBlob）。
 * 中文字体：写入 font = "Noto Sans SC"，Word 端按系统字体回退渲染。
 * 版式按 templateId 参数化（与 A4 Preview / PDF 共用同一模板选择）。
 */

import { Document, Packer, Paragraph, TextRun } from 'docx';
import type { ResumeDocument } from '../../types/resumeDocument';
import { DOCX_STYLES, type DocxStyleParams } from './templates/docxStyles';
import type { ResumeTemplateId } from './templates/types';

function bulletText(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text: '•  ' + text, size: 24 })], // 12pt
    spacing: { after: 40 },
  });
}

function headLine(main: string, sub: string, dates: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({ text: main, bold: true, size: 26 }),
      sub ? new TextRun({ text: '  ' + sub, size: 24 }) : undefined,
      dates
        ? new TextRun({ text: '    ' + dates, size: 22, color: '6b7280' })
        : undefined,
    ].filter((t): t is TextRun => Boolean(t)),
    spacing: { before: 120, after: 60 },
  });
}

function sectionTitle(text: string, s: DocxStyleParams): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 28, color: s.sectionTitleColor })],
    spacing: { before: 240, after: 120 },
    border: s.sectionBorder ? { bottom: { style: 'single', size: 6, color: 'cbd5e1' } } : undefined,
  });
}

/** 由 ResumeDocument 构建 docx 文档（按 templateId 选样式参数） */
export function buildResumeDocx(doc: ResumeDocument, templateId: ResumeTemplateId = 'developer'): Document {
  const s = DOCX_STYLES[templateId] ?? DOCX_STYLES.developer;
  const { basics } = doc;
  const children: Paragraph[] = [];

  // 头部
  children.push(
    new Paragraph({
      children: [new TextRun({ text: basics.name, bold: true, size: s.nameSize })],
      alignment: s.nameAlign,
    }),
    new Paragraph({
      children: [new TextRun({ text: basics.title, size: s.titleSize, color: s.titleColor })],
      alignment: s.titleAlign,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: [basics.gender, basics.age, basics.email, basics.phone, basics.location, basics.website].filter(Boolean).join('  |  '),
          size: 22,
          color: '6b7280',
        }),
      ],
      alignment: s.contactAlign,
    })
  );
  if (basics.summary) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: basics.summary, size: 24 })],
        spacing: { before: 160 },
      })
    );
  }

  // 工作经历
  if (doc.experience.length > 0) {
    children.push(sectionTitle('工作经历', s));
    for (const e of doc.experience) {
      children.push(headLine(e.company, e.title, e.startDate && e.endDate ? `${e.startDate} — ${e.endDate}` : ''));
      e.bullets.forEach(b => children.push(bulletText(b.text)));
    }
  }

  // 项目经历
  if (doc.projects.length > 0) {
    children.push(sectionTitle('项目经历', s));
    for (const p of doc.projects) {
      children.push(headLine(p.name, p.role || '', p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : ''));
      p.bullets.forEach(b => children.push(bulletText(b.text)));
    }
  }

  // 技能
  if (doc.skills.length > 0) {
    children.push(sectionTitle('专业技能', s));
    for (const g of doc.skills) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${g.category}：`, bold: true, size: 24 }),
            new TextRun({ text: g.items.join('、'), size: 24 }),
          ],
          spacing: { after: 60 },
        })
      );
    }
  }

  // 教育
  if (doc.education.length > 0) {
    children.push(sectionTitle('教育背景', s));
    for (const e of doc.education) {
      children.push(headLine(e.school, [e.degree, e.major].filter(Boolean).join(' · '), e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : ''));
      e.bullets.forEach(b => children.push(bulletText(b.text)));
    }
  }

  // 证书 / 获奖 / 语言
  if (doc.certifications.length > 0) {
    children.push(sectionTitle('证书资质', s));
    doc.certifications.forEach(c =>
      children.push(new Paragraph({
        children: [new TextRun({ text: c.name + (c.date ? `  (${c.date})` : ''), size: 24 })],
        spacing: { after: 60 },
      }))
    );
  }
  if (doc.awards.length > 0) {
    children.push(sectionTitle('获奖荣誉', s));
    doc.awards.forEach(a =>
      children.push(new Paragraph({
        children: [new TextRun({ text: a.title + (a.date ? `  (${a.date})` : ''), size: 24 })],
        spacing: { after: 60 },
      }))
    );
  }
  if (doc.languages.length > 0) {
    children.push(sectionTitle('语言能力', s));
    doc.languages.forEach(l =>
      children.push(new Paragraph({
        children: [new TextRun({ text: l.name + (l.level ? `  (${l.level})` : ''), size: 24 })],
        spacing: { after: 60 },
      }))
    );
  }

  for (const cs of doc.customSections) {
    children.push(sectionTitle(cs.title, s));
    cs.blocks.forEach(b => children.push(new Paragraph({ children: [new TextRun({ text: b.text, size: 24 })] })));
  }

  return new Document({
    sections: [{ children }],
    styles: {
      default: {
        document: { run: { font: 'Noto Sans SC', size: 24 } },
      },
    },
  });
}

/** 生成 DOCX Blob（按 templateId 选样式） */
export async function buildResumeDocxBlob(
  doc: ResumeDocument,
  templateId: ResumeTemplateId = 'developer'
): Promise<Blob> {
  return Packer.toBlob(buildResumeDocx(doc, templateId));
}

/** 触发浏览器下载 DOCX（按当前模板导出）；basename 用于文件名（缺省取 basics.name 或 resume） */
export async function exportResumeDocx(
  doc: ResumeDocument,
  templateId: ResumeTemplateId = 'developer',
  basename?: string
): Promise<void> {
  const blob = await buildResumeDocxBlob(doc, templateId);
  const safe = (basename || doc.basics.name || 'resume').replace(/[\\/:*?"<>|]/g, '');
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${safe}-优化版.docx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
