/**
 * PDF 导出模板样式（Phase 4B 正式功能）
 *
 * Preview / PDF / DOCX 使用同一个 templateId：
 * 内容渲染结构共用，样式按模板参数化（差异收敛为样式，避免三套手写组件）。
 * developer：程序员单栏（现状）；classic：经典居中头部；ats：极简可解析。
 */

import { PDF_FONT_STACK } from '../../../utils/resumeDocument/pdfFonts';
import type { ResumeTemplateId } from './types';

const base = {
  page: {
    padding: 40,
    fontSize: 12,
    lineHeight: 1.55,
    fontFamily: PDF_FONT_STACK,
    color: '#1f2937',
  },
  header: { marginBottom: 12 },
  name: { fontSize: 26, fontWeight: 700, marginBottom: 2 },
  title: { fontSize: 14, color: '#0f766e', marginBottom: 4 },
  contact: { fontSize: 11, color: '#6b7280' },
  summary: { fontSize: 12.5, marginTop: 6, color: '#374151' },
  section: { marginTop: 12 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 2,
    marginBottom: 6,
  },
  entry: { marginBottom: 7 },
  entryHead: { flexDirection: 'row' as const, alignItems: 'baseline' as const, marginBottom: 2 },
  entryMain: { fontSize: 13, fontWeight: 700 },
  entrySub: { fontSize: 11, color: '#6b7280', marginLeft: 6 },
  entryDates: { fontSize: 11, color: '#6b7280', marginLeft: 'auto' as const },
  bullet: { flexDirection: 'row' as const, marginBottom: 1 },
  bulletMark: { width: 8 },
  bulletText: { flex: 1 },
  skillLine: { fontSize: 11.5, marginBottom: 2 },
  skillLabel: { fontWeight: 700 },
};

const developer = {
  ...base,
  title: { fontSize: 14, color: '#0f766e', marginBottom: 4 },
};

const classic = {
  ...base,
  header: { marginBottom: 14, alignItems: 'center' as const },
  name: { fontSize: 28, fontWeight: 700, marginBottom: 3, textAlign: 'center' as const },
  title: { fontSize: 13, color: '#374151', marginBottom: 4, textAlign: 'center' as const },
  contact: { fontSize: 11, color: '#6b7280', textAlign: 'center' as const },
  summary: { fontSize: 12.5, marginTop: 8, color: '#374151', textAlign: 'center' as const },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1f2937',
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
    paddingBottom: 2,
    marginBottom: 6,
  },
};

const ats = {
  ...base,
  page: {
    padding: 36,
    fontSize: 11.5,
    lineHeight: 1.5,
    fontFamily: PDF_FONT_STACK,
    color: '#000000',
  },
  name: { fontSize: 24, fontWeight: 700, marginBottom: 3 },
  title: { fontSize: 13, color: '#111827', marginBottom: 4 },
  contact: { fontSize: 10.5, color: '#374151' },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#000000',
    borderBottomWidth: 0,
    paddingBottom: 1,
    marginBottom: 5,
  },
  entryDates: { fontSize: 10.5, color: '#111827', marginLeft: 'auto' as const },
  skillLabel: { fontWeight: 700 },
};

/** 按 templateId 取 PDF 样式（兜底 developer） */
export const PDF_STYLES = { developer, classic, ats };

/** PDF 样式对象类型（以 developer 为基准） */
export type PdfStyles = (typeof PDF_STYLES)[ResumeTemplateId];
