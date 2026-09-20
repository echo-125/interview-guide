/**
 * DOCX 导出模板样式参数（Phase 5D：字号派生自统一 tokens）
 *
 * Preview / PDF / DOCX 使用同一个 templateId。
 * DOCX 内容渲染结构共用；字号按统一令牌换算为 half-points，
 * 模板差异保留在：姓名/职位对齐方向、标题颜色、section 下边框。
 * 中文字体：写入 "Noto Sans SC"，Word 端按系统字体回退渲染。
 */

import { AlignmentType } from 'docx';
import type { ResumeTemplateId } from './types';
import { TEMPLATE_NAME_PX, TYPE, pxToHalfPoint } from './tokens.ts';

export interface DocxStyleParams {
  /** 姓名行字号（半磅为单位：developer px30 = 22.5pt = 45） */
  nameSize: number;
  nameAlign: (typeof AlignmentType)[keyof typeof AlignmentType];
  /** 职位/意向行字号与颜色 */
  titleSize: number;
  titleColor: string;
  titleAlign: (typeof AlignmentType)[keyof typeof AlignmentType];
  /** 联系信息行对齐 */
  contactAlign: (typeof AlignmentType)[keyof typeof AlignmentType];
  /** section 标题是否带下边框（ats 极简关掉） */
  sectionBorder: boolean;
  sectionTitleColor: string;
}

export const DOCX_STYLES: Record<ResumeTemplateId, DocxStyleParams> = {
  developer: {
    nameSize: pxToHalfPoint(TEMPLATE_NAME_PX.developer),
    nameAlign: AlignmentType.CENTER,
    titleSize: pxToHalfPoint(TYPE.headline),
    titleColor: '0f766e',
    titleAlign: AlignmentType.CENTER,
    contactAlign: AlignmentType.CENTER,
    sectionBorder: true,
    sectionTitleColor: '1f2937',
  },
  classic: {
    nameSize: pxToHalfPoint(TEMPLATE_NAME_PX.classic),
    nameAlign: AlignmentType.CENTER,
    titleSize: pxToHalfPoint(TYPE.headline),
    titleColor: '374151',
    titleAlign: AlignmentType.CENTER,
    contactAlign: AlignmentType.CENTER,
    sectionBorder: true,
    sectionTitleColor: '1f2937',
  },
  ats: {
    nameSize: pxToHalfPoint(TEMPLATE_NAME_PX.ats),
    nameAlign: AlignmentType.LEFT,
    titleSize: pxToHalfPoint(TYPE.headline),
    titleColor: '000000',
    titleAlign: AlignmentType.LEFT,
    contactAlign: AlignmentType.LEFT,
    sectionBorder: false,
    sectionTitleColor: '000000',
  },
};