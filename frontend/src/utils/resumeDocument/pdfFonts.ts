/**
 * @react-pdf/renderer 中文字体注册（Phase 4B 正式功能）
 *
 * 方案借鉴 Reactive Resume：
 * - 使用 @fontsource/noto-sans-sc 的整段简体中文子集（1.1MB/weight），经 Vite ?url 打包为资产
 * - 注册 400/700 两个字重，供 PDF 结构化渲染
 * - fontFamily 使用回退数组（中文用 NotoSansSC，ASCII 由 Helvetica 兜底）
 */

import { Font } from '@react-pdf/renderer';
import NotoSansSC400 from '@fontsource/noto-sans-sc/files/noto-sans-sc-chinese-simplified-400-normal.woff2?url';
import NotoSansSC700 from '@fontsource/noto-sans-sc/files/noto-sans-sc-chinese-simplified-700-normal.woff2?url';

/** PDF 全局中文字体族名 */
export const PDF_FONT_FAMILY = 'NotoSansSC';
/** 渲染 style 中使用的回退栈（中文用注册字体，西文用内置 Helvetica） */
export const PDF_FONT_STACK = [PDF_FONT_FAMILY, 'Helvetica'];

let registered = false;

/** 幂等注册（react-pdf Font.register 重复注册会告警） */
export function ensurePdfFonts(): void {
  if (registered) return;
  Font.register({
    family: PDF_FONT_FAMILY,
    fonts: [
      { src: NotoSansSC400, fontWeight: 400 },
      { src: NotoSansSC700, fontWeight: 700 },
    ],
  });
  registered = true;
}
