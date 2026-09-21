/**
 * PDF 中文手工折行（BUG-002 修复）
 *
 * 背景：@react-pdf/textkit 7.x 的断行在「非空格断点」（如 U+200B 零宽空格 / 音节边界）
 * 处忠实输出连字符「-」，导致中文简历 PDF 混入游离连字符；而真实空格是 glue 断点，
 * 断行不会产生连字符（实测验证）。
 *
 * 本模块在导出前按「预估文本宽度 + 可用行宽」手工把长文本拆成多行（\n 连接），
 * 保证每一行都窄于容器 → textkit 不再自行折行 → 不产生任何连字符、不溢出；
 * 英文单词内部不拆（长 token 边界与 CJK 一致视为可用断点），标点跟随前行。
 *
 * 宽度为保守估算（CJK/全角 = 1.0em、其余 = 0.55em、整体 +6% 余量），
 * 宁可提前折行也绝不预测超宽（超宽会让 textkit 复活折行路径）。
 */

/** CJK 及全角范围（与 pdfTextBreaks.isCjk / isFullWidthPunct 一致并扩展全角符号） */
const CJK_RE = /[\u3000-\u303F\u2E80-\u2EFF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u20000-\u2FFFF]/;
/** 非 CJK 连续段（英文/数字/标点/空白） */
const NON_CJK_RE = /[^\u3000-\u303F\u2E80-\u2EFF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u20000-\u2FFFF]+/g;

const FULL_WIDTH_RE = /[\u3000-\u303F\u2E80-\u2EFF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u20000-\u2FFFF]|[\u2014\u2026\u00B7]/;

/** 估算文本渲染宽度（pt）：全角 1.0em、半角 0.55em、外加保守余量 */
export function estimateTextWidth(text: string, fontSizePt: number): number {
  if (!text) return 0;
  let w = 0;
  for (const ch of text) {
    w += FULL_WIDTH_RE.test(ch) ? fontSizePt : fontSizePt * 0.55;
  }
  return w * 1.06;
}

/** 按可用宽度把文本折成多行（\n 连接）。英文 token 内部不拆；超宽长 token 按字符硬切兜底。 */
export function wrapCjkText(text: string, fontSizePt: number, widthPt: number): string {
  if (!text || widthPt <= 0) return text;
  const tokens: string[] = [];
  let idx = 0;
  text.replace(NON_CJK_RE, (m, off) => {
    if (off > idx) tokens.push(text.slice(idx, off));
    tokens.push(m);
    idx = off + m.length;
    return m;
  });
  if (idx < text.length) tokens.push(text.slice(idx));

  const widthOf = (s: string) => estimateTextWidth(s, fontSizePt);
  const lines: string[] = [];
  let cur = '';
  for (const tok of tokens) {
    if (CJK_RE.test(tok)) {
      for (const ch of tok) {
        if (widthOf(cur + ch) > widthPt) {
          lines.push(cur);
          cur = ch;
        } else {
          cur += ch;
        }
      }
      continue;
    }
    // 非 CJK 连续段：按空白拆字（保留标点随前词），用空格串合并
    const words = tok.match(/\S+\s*/g) || [tok];
    for (const wd of words) {
      if (widthOf(cur + wd) > widthPt) {
        if (cur && cur.trim() !== '') {
          lines.push(cur);
          cur = '';
        }
        if (widthOf(wd) > widthPt) {
          // 单个 token 超宽（长 URL/数字串）：逐字符硬切，保证不托出容器
          for (const ch of wd) {
            if (widthOf(cur + ch) > widthPt) {
              lines.push(cur);
              cur = ch;
            } else {
              cur += ch;
            }
          }
        } else {
          cur = wd;
        }
      } else {
        cur += wd;
      }
    }
  }
  if (cur) lines.push(cur);
  return lines.join('\n');
}