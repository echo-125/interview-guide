/**
 * PDF 中文断行辅助（Phase 5D 修复）
 *
 * 背景：@react-pdf/textkit 对「无空格的 CJK 连续文本」不产生断行机会，
 * 段落会被排成超出页面宽度的一行（右侧溢出）；同时长 token 断行时会
 * 追加连字符造成行尾 "-" 残留。
 *
 * 修复：在 CJK 字符/全角标点之后插入零宽空格 U+200B 提供断行机会。
 * 英文单词内部不插入（保持 token 完整性）；U+200B 零宽不影响视觉输出。
 */

/** CJK 统一表意文字 / 扩展区 / 兼容汉字 */
function isCjk(ch: string): boolean {
  const cp = ch.codePointAt(0) as number;
  return (
    (cp >= 0x2e80 && cp <= 0x2eff) || // 部首
    (cp >= 0x3000 && cp <= 0x303f) || // CJK 标点
    (cp >= 0x3400 && cp <= 0x4dbf) || // 扩展 A
    (cp >= 0x4e00 && cp <= 0x9fff) || // 统一表意
    (cp >= 0xf900 && cp <= 0xfaff) || // 兼容汉字
    (cp >= 0x20000 && cp <= 0x2ffff) // 扩展 B+
  );
}

/** 全角标点（自身已是断行机会，其后再补一个无妨，统一处理） */
function isFullWidthPunct(ch: string): boolean {
  return /[，。！？；：、（）【】《》「」『』·—…]/.test(ch);
}

/**
 * 在 CJK 字符与全角标点后插入零宽空格，使 textkit 可在任意字间断行。
 * 连续 ASCII（英文单词/数字/邮箱）内部保持完整。
 */
export function insertCjkBreaks(text: string): string {
  if (!text) return text;
  let out = '';
  for (const ch of text) {
    out += ch;
    if (ch === '\u200B') continue;
    if (isCjk(ch) || isFullWidthPunct(ch)) out += '\u200B';
  }
  return out;
}