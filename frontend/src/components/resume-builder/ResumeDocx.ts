/**
 * DOCX 结构化导出（Phase 4B 正式功能；Phase 5D 一致性对齐）
 *
 * 方案：docx npm 包（Reactive Resume packages/docx 同款），
 * 由同一份 ResumeDocument 声明式生成 DOCX（Packer.toBlob）。
 * 中文字体：写入 font = "Noto Sans SC"，Word 端按系统字体回退渲染。
 * 版式按 templateId 参数化（与 A4 Preview / PDF 共用同一模板选择）。
 *
 * Phase 5D 对齐（与 Preview / PDF 使用同一份 tokens 换算）：
 * - 页面 A4 尺寸 + 按模板页边距（px → twip）
 * - 行高 1.6 × 单倍（240 twip）= 384 twip
 * - 字号统一 body 10.5pt / 条目头 11.5pt + 11pt + 9.5pt / section 12pt
 * - section 标题与条目头 keepNext：不与下一条目分离（对齐 Preview packBlocks 行为）
 * 分页仍交由 Word 动态排版（无显式 pageBreak；这是当前既定设计）。
 */

import { Document, Packer, Paragraph, TextRun } from 'docx';
import type { ResumeDocument } from '../../types/resumeDocument';
import { DOCX_STYLES, type DocxStyleParams } from './templates/docxStyles.ts';
import type { ResumeTemplateId } from './templates/types';
import {
  LINE_HEIGHT,
  PAGE_PADDING_X_PX,
  PAGE_PADDING_Y_PX,
  PAGE_TWIP,
  TYPE,
  pxToHalfPoint,
  pxToTwip,
} from './templates/tokens.ts';

/** 统一字号（half-points，派生自 tokens） */
const SIZE = {
  body: pxToHalfPoint(TYPE.body),
  sub: pxToHalfPoint(TYPE.jobTitle),
  main: pxToHalfPoint(TYPE.company),
  meta: pxToHalfPoint(TYPE.meta),
};

/** 统一行高（twip）：LINE_HEIGHT × 单倍 240 */
const LINE_TWIP = Math.round(LINE_HEIGHT * 240);

function bulletText(text: string): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text: '•  ' + text, size: SIZE.body })],
    spacing: { after: 60 },
  });
}

function headLine(main: string, sub: string, dates: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({ text: main, bold: true, size: SIZE.main }),
      sub ? new TextRun({ text: '  ' + sub, size: SIZE.sub }) : undefined,
      dates
        ? new TextRun({ text: '    ' + dates, size: SIZE.meta, color: '6b7280' })
        : undefined,
    ].filter((t): t is TextRun => Boolean(t)),
    spacing: { before: 160, after: 80 },
    // Phase 5D：条目头不与下一条 bullet 分离（与 Preview 的 avoid='after' 语义一致）
    keepNext: true,
  });
}

function sectionTitle(text: string, s: DocxStyleParams): Paragraph {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: pxToHalfPoint(TYPE.section), color: s.sectionTitleColor })],
    spacing: { before: 280, after: 140 },
    // Phase 5D：section 标题不与下一条目分离，避免孤立标题
    keepNext: true,
    border: s.sectionBorder ? { bottom: { style: 'single', size: 6, color: 'cbd5e1' } } : undefined,
  });
}

/** 由 ResumeDocument 构建 docx 文档（按 templateId 选样式参数） */
export function buildResumeDocx(doc: ResumeDocument, templateId: ResumeTemplateId = 'developer'): Document {
  const s = DOCX_STYLES[templateId] ?? DOCX_STYLES.developer;
  const { basics } = doc;
  const children: Paragraph[] = [];
  const y = pxToTwip(PAGE_PADDING_Y_PX[templateId]);
  const x = pxToTwip(PAGE_PADDING_X_PX[templateId]);

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
          size: SIZE.meta,
          color: '6b7280',
        }),
      ],
      alignment: s.contactAlign,
    })
  );
  if (basics.summary) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: basics.summary, size: SIZE.body })],
        spacing: { before: 200 },
      })
    );
  }

  // 工作经历
  if (doc.experience.length > 0) {
    children.push(sectionTitle('工作经历', s));
    for (const e of doc.experience) {
      children.push(headLine(e.company, e.title, e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : ''));
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
            new TextRun({ text: `${g.category}：`, bold: true, size: SIZE.body }),
            new TextRun({ text: g.items.join('、'), size: SIZE.body }),
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
        children: [new TextRun({ text: c.name + (c.date ? `  (${c.date})` : ''), size: SIZE.body })],
        spacing: { after: 60 },
      }))
    );
  }
  if (doc.awards.length > 0) {
    children.push(sectionTitle('获奖荣誉', s));
    doc.awards.forEach(a =>
      children.push(new Paragraph({
        children: [new TextRun({ text: a.title + (a.date ? `  (${a.date})` : ''), size: SIZE.body })],
        spacing: { after: 60 },
      }))
    );
  }
  if (doc.languages.length > 0) {
    children.push(sectionTitle('语言能力', s));
    doc.languages.forEach(l =>
      children.push(new Paragraph({
        children: [new TextRun({ text: l.name + (l.level ? `  (${l.level})` : ''), size: SIZE.body })],
        spacing: { after: 60 },
      }))
    );
  }

  for (const cs of doc.customSections) {
    children.push(sectionTitle(cs.title, s));
    cs.blocks.forEach(b => children.push(new Paragraph({ children: [new TextRun({ text: b.text, size: SIZE.body })] })));
  }

  return new Document({
    sections: [
      {
        properties: {
          page: {
            // ISO A4：210mm × 297mm（与 Preview/PDF 的 A4 一致；此前默认 US Letter）
            size: { width: PAGE_TWIP.width, height: PAGE_TWIP.height },
            margin: { top: y, bottom: y, left: x, right: x },
          },
        },
        children,
      },
    ],
    styles: {
      default: {
        document: {
          run: { font: 'Noto Sans SC', size: SIZE.body },
          paragraph: { spacing: { line: LINE_TWIP } },
        },
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