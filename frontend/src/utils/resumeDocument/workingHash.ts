/**
 * 工作区过期校验哈希（Phase 4B 后正式持久化）
 *
 * 稳定非加密哈希（djb2 变体）：仅用于一致性比对
 * （resumeText 是否变化 → 工作区是否过期），不用于安全场景。
 */

/** 计算文本的稳定 32 位十六进制哈希 */
export function hashText(text: string): string {
  let h = 5381;
  for (let i = 0; i < text.length; i++) {
    h = ((h << 5) + h + text.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}
