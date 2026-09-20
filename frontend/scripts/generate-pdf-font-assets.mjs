/**
 * Phase 5D-2 运行时子集化的完整 sfnt 字体资产生成脚本（一次性运行，产物提交 Git）
 *
 * hb-subset（harfbuzz wasm）不直接读取 woff2，因此浏览器运行时子集化需要
 * 完整 sfnt（OpenType）字体作为输入。本脚本把 @fontsource 的 woff2
 * （400/700 两字重）转换为完整 sfnt 资产：
 *
 * 产物：
 *   src/assets/fonts/NotoSansSC-full-400.otf
 *   src/assets/fonts/NotoSansSC-full-700.otf
 *
 * 说明：资产体积大（单个约 8-10MB），代价是一次性仓库/构建体积；
 * 收益是每次 PDF 导出按文档实际字符子集化（PDF 从 ~27MB 降到 ~1-2MB）。
 * 运行：node scripts/generate-pdf-font-assets.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const wawoff2 = require('wawoff2');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND_DIR = path.resolve(__dirname, '..');
const FONT_DIR = path.join(FRONTEND_DIR, 'node_modules/@fontsource/noto-sans-sc/files');
const OUT_FONT_DIR = path.join(FRONTEND_DIR, 'src/assets/fonts');

async function main() {
  mkdirSync(OUT_FONT_DIR, { recursive: true });
  for (const weight of ['400', '700']) {
    const src = readFileSync(path.join(FONT_DIR, `noto-sans-sc-chinese-simplified-${weight}-normal.woff2`));
    // woff2 → 完整 sfnt（wawoff2 直接解压；该输出已被 subset-font 验证可被 hb-subset 接受）
    const out = Buffer.from(await wawoff2.decompress(src));
    const dest = path.join(OUT_FONT_DIR, `NotoSansSC-full-${weight}.otf`);
    writeFileSync(dest, out);
    console.log(`[font-asset] ${weight}: woff2 ${(src.length / 1024 / 1024).toFixed(2)}MB -> sfnt ${(out.length / 1024 / 1024).toFixed(2)}MB -> ${dest}`);
  }
}

main().catch((e) => {
  console.error('[font-asset] 失败：', e);
  process.exit(1);
});