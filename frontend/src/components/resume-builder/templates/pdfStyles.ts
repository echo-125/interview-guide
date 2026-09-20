/**
 * PDF 导出模板样式（Phase 5D：字号/行高/颜色/页边距统一派生自 tokens.ts）
 *
 * Preview / PDF / DOCX 使用同一个 templateId；
 * 样式差异收敛为模板参数（对齐 / 颜色 / 边框），字号阶、行高与页边距来自统一令牌。
 *
 * 重要（Phase 5D 修复）：@react-pdf 对未显式设置 lineHeight 的 Text 会按字体度量
 * （约 1.16em）计算行盒，且不级联页级 lineHeight——大字号（姓名）行盒曾塌陷到
 * 0.2em 造成上下行重叠。因此每个文本样式都显式携带 lineHeight。
 */

import type { ResumeTemplateId } from './types';
import {
  COLOR,
  LINE_HEIGHT,
  PAGE_PADDING_X_PX,
  PAGE_PADDING_Y_PX,
  PDF_FONT_STACK,
  TEMPLATE_NAME_PX,
  TYPE,
  pxToPt,
} from './tokens.ts';

const pt = pxToPt;

/** 统一页内边距（按模板，px → pt） */
function pagePadding(id: ResumeTemplateId) {
  const y = pt(PAGE_PADDING_Y_PX[id]);
  const x = pt(PAGE_PADDING_X_PX[id]);
  return { paddingTop: y, paddingBottom: y, paddingLeft: x, paddingRight: x };
}

const base = {
  page: {
    fontSize: pt(TYPE.body),
    lineHeight: LINE_HEIGHT,
    fontFamily: PDF_FONT_STACK,
    color: COLOR.ink,
  },
  // 间距与 Preview 同源换算（px × 0.75 = pt），保证页数与布局观感一致
  header: { marginBottom: 12 },
  name: { fontSize: pt(TEMPLATE_NAME_PX.developer), fontWeight: 700, lineHeight: 1.3, marginBottom: 5 },
  title: { fontSize: pt(TYPE.headline), lineHeight: 1.5, color: COLOR.accent, marginBottom: 5 },
  contact: { fontSize: pt(TYPE.meta), lineHeight: 1.6, color: COLOR.muted },
  summary: { fontSize: pt(TYPE.body), lineHeight: 1.65, marginTop: 9, color: COLOR.text },
  section: { marginTop: 12 },
  sectionTitle: {
    fontSize: pt(TYPE.section),
    lineHeight: 1.45,
    fontWeight: 700,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 3,
    marginBottom: 6,
  },
  entry: { marginBottom: 7 },
  entryHead: { flexDirection: 'row' as const, alignItems: 'baseline' as const, marginBottom: 3 },
  entryMain: { fontSize: pt(TYPE.company), lineHeight: 1.5, fontWeight: 700 },
  entrySub: { fontSize: pt(TYPE.jobTitle), lineHeight: 1.5, color: COLOR.muted, marginLeft: 6 },
  entryDates: { fontSize: pt(TYPE.meta), lineHeight: 1.5, color: COLOR.muted, marginLeft: 'auto' as const },
  bullet: { flexDirection: 'row' as const, marginBottom: 1.5 },
  bulletMark: { lineHeight: 1.6, width: 10 },
  bulletText: { lineHeight: 1.6, flex: 1 },
  skillLine: { fontSize: pt(TYPE.body), lineHeight: 1.6, marginBottom: 3 },
  skillLabel: { lineHeight: 1.6, fontWeight: 700 },
};

const developer = {
  ...base,
  page: { ...base.page, ...pagePadding('developer') },
  title: { fontSize: pt(TYPE.headline), lineHeight: 1.5, color: COLOR.accent, marginBottom: 5 },
};

const classic = {
  ...base,
  page: { ...base.page, ...pagePadding('classic') },
  header: { marginBottom: 14, alignItems: 'center' as const },
  name: { fontSize: pt(TEMPLATE_NAME_PX.classic), fontWeight: 700, lineHeight: 1.3, marginBottom: 5, textAlign: 'center' as const },
  title: { fontSize: pt(TYPE.headline), lineHeight: 1.5, color: COLOR.text, marginBottom: 5, textAlign: 'center' as const },
  contact: { fontSize: pt(TYPE.meta), lineHeight: 1.6, color: COLOR.muted, textAlign: 'center' as const },
  summary: { fontSize: pt(TYPE.body), lineHeight: 1.65, marginTop: 10, color: COLOR.text, textAlign: 'center' as const },
  sectionTitle: {
    fontSize: pt(TYPE.section),
    lineHeight: 1.45,
    fontWeight: 700,
    color: COLOR.text,
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
    paddingBottom: 3,
    marginBottom: 6,
  },
};

const ats = {
  ...base,
  page: { ...base.page, ...pagePadding('ats'), color: '#000000' },
  name: { fontSize: pt(TEMPLATE_NAME_PX.ats), fontWeight: 700, lineHeight: 1.3, marginBottom: 5 },
  title: { fontSize: pt(TYPE.headline), lineHeight: 1.5, color: COLOR.ink, marginBottom: 5 },
  contact: { fontSize: pt(TYPE.meta), lineHeight: 1.6, color: COLOR.text },
  sectionTitle: {
    fontSize: pt(TYPE.section),
    lineHeight: 1.45,
    fontWeight: 700,
    color: '#000000',
    borderBottomWidth: 0,
    paddingBottom: 2,
    marginBottom: 6,
  },
  entryDates: { fontSize: pt(TYPE.meta), lineHeight: 1.5, color: COLOR.ink, marginLeft: 'auto' as const },
  skillLine: { fontSize: pt(TYPE.body), lineHeight: 1.6, marginBottom: 3 },
  skillLabel: { lineHeight: 1.6, fontWeight: 700 },
};

/** 按 templateId 取 PDF 样式（兜底 developer） */
export const PDF_STYLES = { developer, classic, ats };

/** PDF 样式对象类型（以 developer 为基准） */
export type PdfStyles = (typeof PDF_STYLES)[ResumeTemplateId];