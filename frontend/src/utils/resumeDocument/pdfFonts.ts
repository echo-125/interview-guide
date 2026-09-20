/**
 * @react-pdf/renderer 中文字体注册（Phase 4B 正式功能；Phase 5D-2 文档级子集化）
 *
 * 字体选择（resolvePdfFont，导出 PDF 前调用）：
 * 1. 收集 ResumeDocument 全部字符（collectResumeCharset）；
 * 2. 用 HarfBuzz wasm（hbSubset.ts）对完整 sfnt 资产按文档字符生成子集
 *    → 注册为独立 family（每次导出唯一名，避免同族重复注册导致旧字符集复用）；
 * 3. 任一步失败（wasm 加载/子集化/网络）→ 回退全量 NotoSansSC，保证中文缺字率 = 0。
 *
 * 体积：全量嵌入时 PDF 约 27MB；文档级子集后通常 40-300KB 子集 → PDF < 2MB。
 */

import { Font } from '@react-pdf/renderer';
import NotoSansSC400 from '@fontsource/noto-sans-sc/files/noto-sans-sc-chinese-simplified-400-normal.woff2?url';
import NotoSansSC700 from '@fontsource/noto-sans-sc/files/noto-sans-sc-chinese-simplified-700-normal.woff2?url';
import NotoSansSCFull400 from '../../assets/fonts/NotoSansSC-full-400.otf?url';
import NotoSansSCFull700 from '../../assets/fonts/NotoSansSC-full-700.otf?url';
import HbSubsetWasmUrl from '../../assets/fonts/harfbuzz-subset.wasm?url';
import type { ResumeDocument } from '../../types/resumeDocument';
import { collectResumeCharset } from './pdfCharset';
import { createHbSubsetter, type HbSubsetter } from './hbSubset';

/** 全量字体族名 */
export const PDF_FONT_FAMILY = 'NotoSansSC';
/** 文档子集字体族名前缀（每次导出递增，保证唯一） */
const DOC_FONT_FAMILY_PREFIX = 'NotoSansSCDoc';

export interface PdfFontSelection {
  family: string;
  src400: string;
  src700: string;
  /** true = 文档子集（体积小）；false = 全量兜底 */
  subset: boolean;
}

const registeredFamilies = new Set<string>();

/** 幂等注册（react-pdf Font.register 重复注册会告警；family 维度的注册表） */
function registerFamily(selection: PdfFontSelection): void {
  if (registeredFamilies.has(selection.family)) return;
  Font.register({
    family: selection.family,
    fonts: [
      { src: selection.src400, fontWeight: 400 },
      { src: selection.src700, fontWeight: 700 },
    ],
  });
  registeredFamilies.add(selection.family);
}

/** 幂等注册选中字体，返回 family 名（供 ResumePdfDocument 的 fontFamily 覆盖使用） */
export function ensurePdfFont(selection: PdfFontSelection): string {
  registerFamily(selection);
  return selection.family;
}

/** Uint8Array → base64 data URL（浏览器无 Buffer） */
function bytesToDataUrl(bytes: Uint8Array, mime: string): string {
  let bin = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return `data:${mime};base64,${btoa(bin)}`;
}

/** 全量字体选择（兜底） */
function fullSelection(): PdfFontSelection {
  return { family: PDF_FONT_FAMILY, src400: NotoSansSC400, src700: NotoSansSC700, subset: false };
}

/** 字重资产 URL（fetch 目标，按 weight） */
const FULL_ASSET_URL: Record<'400' | '700', string> = {
  400: NotoSansSCFull400,
  700: NotoSansSCFull700,
};

let hbSubsetterPromise: Promise<HbSubsetter> | null = null;

/** 惰性单例 hb 子集器（wasm 加载一次，跨导出复用） */
function getHbSubsetter(): Promise<HbSubsetter> {
  if (!hbSubsetterPromise) {
    hbSubsetterPromise = createHbSubsetter(async () => {
      const res = await fetch(HbSubsetWasmUrl);
      if (!res.ok) throw new Error(`hb-subset.wasm 加载失败：${res.status}`);
      return WebAssembly.compile(await res.arrayBuffer());
    });
  }
  return hbSubsetterPromise;
}

let docFontSeq = 0;

/**
 * 依据文档字符解析最终字体：
 * 文档子集成功 → 小体积；任何失败 → 全量兜底（缺字率 0）。
 */
export async function resolvePdfFont(doc: ResumeDocument): Promise<PdfFontSelection> {
  const chars = collectResumeCharset(doc);
  const text = [...chars].join('');
  // 字符数接近全字体时子集 ≈ 全量，直接走全量（省去 wasm 开销）
  if (chars.size === 0 || chars.size > 6000) {
    return fullSelection();
  }
  try {
    const [hb, buf400, buf700] = await Promise.all([
      getHbSubsetter(),
      fetch(FULL_ASSET_URL[400]).then((r) => {
        if (!r.ok) throw new Error(`字体资产加载失败：${r.status}`);
        return r.arrayBuffer();
      }),
      fetch(FULL_ASSET_URL[700]).then((r) => {
        if (!r.ok) throw new Error(`字体资产加载失败：${r.status}`);
        return r.arrayBuffer();
      }),
    ]);
    const sub400 = hb.subset(new Uint8Array(buf400), text);
    const sub700 = hb.subset(new Uint8Array(buf700), text);
    return {
      family: `${DOC_FONT_FAMILY_PREFIX}${docFontSeq++}`,
      src400: bytesToDataUrl(sub400, 'font/otf'),
      src700: bytesToDataUrl(sub700, 'font/otf'),
      subset: true,
    };
  } catch (err) {
    console.warn('PDF 子集字体生成失败，回退全量中文字体（缺字率 0，体积较大）', err);
    return fullSelection();
  }
}

/** 全量字体注册（保留兜底/测试入口；导出主路径走 resolvePdfFont + ensurePdfFont） */
export function ensurePdfFonts(): void {
  registerFamily(fullSelection());
}