/**
 * DOCX 导出技术验证 (Phase 3 POC)
 *
 * 方案：docx npm 包（Reactive Resume packages/docx 同款），
 * 由同一份 ResumeDocument 声明式生成 DOCX（Packer.toBlob）。
 * 中文字体：写入 font = "Noto Sans SC"，Word 端按系统字体回退渲染。
 * 本阶段仅验证"同一数据模型可产出 DOCX"，不接入产品。
 */

import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx';
import type { ResumeDocument } from '../../types/resumeDocument';

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

function sectionTitle(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 28, color: '1f2937' })],
    spacing: { before: 240, after: 120 },
    border: { bottom: { style: 'single', size: 6, color: 'cbd5e1' } },
  });
}

/** 由 ResumeDocument 构建 docx 文档（POC：Modern 简化版） */
export function buildResumeDocx(doc: ResumeDocument): Document {
  const { basics } = doc;
  const children: Paragraph[] = [];

  // 头部
  children.push(
    new Paragraph({
      children: [new TextRun({ text: basics.name, bold: true, size: 52 })],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [new TextRun({ text: basics.title, size: 28, color: '0f766e' })],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: [basics.gender, basics.age, basics.email, basics.phone, basics.location, basics.website].filter(Boolean).join('  |  '),
          size: 22,
          color: '6b7280',
        }),
      ],
      alignment: AlignmentType.CENTER,
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
    children.push(sectionTitle('工作经历'));
    for (const e of doc.experience) {
      children.push(headLine(e.company, e.title, e.startDate && e.endDate ? `${e.startDate} — ${e.endDate}` : ''));
      e.bullets.forEach(b => children.push(bulletText(b.text)));
    }
  }

  // 项目经历
  if (doc.projects.length > 0) {
    children.push(sectionTitle('项目经历'));
    for (const p of doc.projects) {
      children.push(headLine(p.name, p.role || '', p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : ''));
      p.bullets.forEach(b => children.push(bulletText(b.text)));
    }
  }

  // 技能
  if (doc.skills.length > 0) {
    children.push(sectionTitle('专业技能'));
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
    children.push(sectionTitle('教育背景'));
    for (const e of doc.education) {
      children.push(headLine(e.school, [e.degree, e.major].filter(Boolean).join(' · '), e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : ''));
      e.bullets.forEach(b => children.push(bulletText(b.text)));
    }
  }

  // 证书 / 获奖 / 语言
  if (doc.certifications.length > 0) {
    children.push(sectionTitle('证书资质'));
    doc.certifications.forEach(c =>
      children.push(new Paragraph({
        children: [new TextRun({ text: c.name + (c.date ? `  (${c.date})` : ''), size: 24 })],
        spacing: { after: 60 },
      }))
    );
  }
  if (doc.awards.length > 0) {
    children.push(sectionTitle('获奖荣誉'));
    doc.awards.forEach(a =>
      children.push(new Paragraph({
        children: [new TextRun({ text: a.title + (a.date ? `  (${a.date})` : ''), size: 24 })],
        spacing: { after: 60 },
      }))
    );
  }
  if (doc.languages.length > 0) {
    children.push(sectionTitle('语言能力'));
    doc.languages.forEach(l =>
      children.push(new Paragraph({
        children: [new TextRun({ text: l.name + (l.level ? `  (${l.level})` : ''), size: 24 })],
        spacing: { after: 60 },
      }))
    );
  }

  for (const s of doc.customSections) {
    children.push(sectionTitle(s.title));
    s.blocks.forEach(b => children.push(new Paragraph({ children: [new TextRun({ text: b.text, size: 24 })] })));
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

/** 生成 DOCX Blob */
export async function buildResumeDocxBlob(doc: ResumeDocument): Promise<Blob> {
  const buffer = await Packer.toBlob(buildResumeDocx(doc));
  return buffer;
}

/** 触发浏览器下载 DOCX；basename 用于文件名（缺省取 basics.name 或 resume） */
export async function exportResumeDocx(doc: ResumeDocument, basename?: string): Promise<void> {
  const blob = await buildResumeDocxBlob(doc);
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
