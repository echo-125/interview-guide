/**
 * 统一设计令牌（Phase 5D 正式功能）
 *
 * Phase 5D 审计结论：Preview（CSS px）/ PDF（react-pdf pt）/ DOCX（half-points + twips）
 * 曾各自独立硬编码字号、行高、颜色与页边距，导致同元素三端渲染不一致
 * （最典型：Preview 2 页 vs PDF 3 页——PDF 正文 12pt 体系明显大于 Preview 14px/10.5pt 当量）。
 *
 * 本文件是三端唯一权威令牌源：
 * - px 为主基准（Preview 的 CSS 直接使用）
 * - PDF 用 pxToPt 换算（react-pdf 样式单位为 pt）
 * - DOCX 用 pxToHalfPoint / pxToTwip 换算（docx 库字号单位半磅、长度单位 twip）
 * - lineHeight 无量纲，三端共享
 *
 * 换算依据 CSS 96dpi：1px = 0.75pt = 1.5 half-points = 15 twips。
 */

import type { ResumeTemplateId } from './types';

/** 字号阶（px 主基准）；classic/ats 仅姓名字号不同（见 TEMPLATE_NAME_PX） */
export const TYPE = {
  /** 职位/意向行 */
  headline: 16,
  /** section 标题 */
  section: 16,
  /** 公司 / 学校 / 项目名（条目主标题） */
  company: 15.5,
  /** 职位/角色副标题 */
  jobTitle: 14.5,
  /** 正文（summary / bullet / 技能行 / 证书行） */
  body: 14,
  /** 日期 / 联系信息等元信息 */
  meta: 12.5,
  /** ATS 证书 / 获奖 / 语言等次要行 */
  minor: 13,
} as const;

/** 每模板姓名字号（px）——三模板保留的少数字号差异点 */
export const TEMPLATE_NAME_PX: Record<ResumeTemplateId, number> = {
  developer: 30,
  classic: 32,
  ats: 28,
};

/**
 * 统一行高（无量纲）：Phase 5D 三端共享。
 * 注意：@react-pdf 对未显式设置 lineHeight 的 Text 使用字体度量行盒（约 1.16em），
 * 与页面级 lineHeight 不级联，曾导致大字行盒塌陷（上下行重叠）。
 * 因此 pdfStyles 中每个文本样式必须显式携带 lineHeight（本常量用于正文级行高）。
 */
export const LINE_HEIGHT = 1.65;

/** 主色板（预览 / PDF 共用；DOCX 用十六进制去 # 形式取值） */
export const COLOR = {
  ink: '#111827',
  muted: '#6b7280',
  accent: '#0f766e',
  /** 正文柔黑（summary / 条目副文本） */
  text: '#374151',
} as const;

/** A4 页面（px） */
export const PAGE = {
  widthPx: 794,
  heightPx: 1123,
} as const;

/** ISO A4 精确尺寸（twips：210mm × 297mm），DOCX 页面尺寸用 */
export const PAGE_TWIP = {
  width: 11906,
  height: 16838,
} as const;

/** 每模板页内边距（px）：top/bottom 同为 paddingY（用户反馈加大，32-36px 偏小） */
export const PAGE_PADDING_Y_PX: Record<ResumeTemplateId, number> = {
  developer: 48,
  classic: 48,
  ats: 44,
};

/** 每模板左右页边距（px） */
export const PAGE_PADDING_X_PX: Record<ResumeTemplateId, number> = {
  developer: 56,
  classic: 56,
  ats: 52,
};

/** PDF 中文回退字体栈（西文由 react-pdf 内置 Helvetica 兜底；react-pdf 要求可变 string[]） */
export const PDF_FONT_STACK: string[] = ['NotoSansSC', 'Helvetica'];

/** px → pt（1px = 0.75pt，结果保留 0.5pt 精度） */
export function pxToPt(px: number): number {
  return Math.round(px * 0.75 * 2) / 2;
}

/** pt → half-points（DOCX 字号单位，1pt = 2 half-points） */
export function ptToHalfPoint(pt: number): number {
  return Math.round(pt * 2);
}

/** px → half-points（DOCX 字号单位） */
export function pxToHalfPoint(px: number): number {
  return ptToHalfPoint(pxToPt(px));
}

/** pt → twips（DOCX 长度单位，1pt = 20 twips） */
export function ptToTwip(pt: number): number {
  return Math.round(pt * 20);
}

/** px → twips（DOCX 长度单位） */
export function pxToTwip(px: number): number {
  return ptToTwip(pxToPt(px));
}