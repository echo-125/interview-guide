/**
 * DOCX 导出模板样式参数（Phase 4B 正式功能）
 *
 * Preview / PDF / DOCX 使用同一个 templateId。
 * DOCX 内容渲染结构共用，仅样式参数按模板差异（字号 / 对齐 / 下边框）。
 * 中文字体：写入 "Noto Sans SC"，Word 端按系统字体回退渲染。
 */

import { AlignmentType } from 'docx';
import type { ResumeTemplateId } from './types';

export interface DocxStyleParams {
  /** 姓名行字号（半磅为单位：52 = 26pt） */
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
    nameSize: 52,
    nameAlign: AlignmentType.CENTER,
    titleSize: 28,
    titleColor: '0f766e',
    titleAlign: AlignmentType.CENTER,
    contactAlign: AlignmentType.CENTER,
    sectionBorder: true,
    sectionTitleColor: '1f2937',
  },
  classic: {
    nameSize: 48,
    nameAlign: AlignmentType.CENTER,
    titleSize: 26,
    titleColor: '374151',
    titleAlign: AlignmentType.CENTER,
    contactAlign: AlignmentType.CENTER,
    sectionBorder: true,
    sectionTitleColor: '1f2937',
  },
  ats: {
    nameSize: 44,
    nameAlign: AlignmentType.LEFT,
    titleSize: 24,
    titleColor: '000000',
    titleAlign: AlignmentType.LEFT,
    contactAlign: AlignmentType.LEFT,
    sectionBorder: false,
    sectionTitleColor: '000000',
  },
};
