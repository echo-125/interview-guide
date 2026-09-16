/**
 * 确定性应用改写：把「原句 → 改写」对替换进简历原文，零 LLM 成本
 */
export interface RewritePair {
  quote: string;
  rewrite: string;
  source?: string; // 来源标注：逐条体检 / 改进建议
}

/** 跳过原因：invalid = 输入本身不可用；not-found = 原文里匹配不到；conflict = 与已应用的更长原句区间重叠 */
export type SkipReason = 'invalid' | 'not-found' | 'conflict';

export interface SkippedRewrite extends RewritePair {
  reason: SkipReason;
}

export interface ApplyRewritesResult {
  text: string;
  applied: RewritePair[];
  skipped: SkippedRewrite[];
}

import type { AnalysisLike } from './improvements.ts';

/**
 * 从分析结果收集所有可应用的 quote→rewrite 对（按 quote 去重，体检优先于建议）
 */
export function collectRewritePairs(analysis: AnalysisLike | null | undefined): RewritePair[] {
  if (!analysis) return [];
  const seen = new Set<string>();
  const pairs: RewritePair[] = [];
  const push = (quote: unknown, rewrite: unknown, source: string) => {
    if (typeof quote === 'string' && typeof rewrite === 'string' && quote.trim() && rewrite.trim()) {
      if (!seen.has(quote)) {
        seen.add(quote);
        pairs.push({ quote, rewrite, source });
      }
    }
  };
  (analysis.bulletAudits || []).forEach(b => push(b.quote, b.rewrite, '逐条体检'));
  (analysis.suggestions || []).forEach(s => push(s.quote, s.rewrite, '改进建议'));
  return pairs;
}

/** 连续空白（含中文全角空格） */
const WHITESPACE_RUN = /[\s\u3000]+/;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 定位 quote 在 text 中的所有出现区间。
 *
 * 先做精确匹配；匹配不到再退到「空白容错」匹配：简历文本在解析/行号编号过程中
 * 换行与空格常被改写，逐字 quote 与原文只差空白的情况很常见，
 * 直接判失败会造成大量本可应用的修改被静默跳过。
 */
function findQuoteRanges(text: string, quote: string): Array<[number, number]> {
  if (!quote) return [];

  const exact: Array<[number, number]> = [];
  let from = 0;
  for (;;) {
    const idx = text.indexOf(quote, from);
    if (idx < 0) break;
    exact.push([idx, idx + quote.length]);
    from = idx + quote.length;
  }
  if (exact.length > 0) return exact;

  const parts = quote.split(WHITESPACE_RUN).filter(Boolean);
  if (parts.length === 0) return [];

  const pattern = new RegExp(parts.map(escapeRegExp).join('[\\s\\u3000]+'), 'g');
  const fuzzy: Array<[number, number]> = [];
  for (let match = pattern.exec(text); match !== null; match = pattern.exec(text)) {
    if (match[0].length === 0) {
      pattern.lastIndex += 1;
      continue;
    }
    fuzzy.push([match.index, match.index + match[0].length]);
  }
  return fuzzy;
}

function overlaps(a: [number, number], b: [number, number]): boolean {
  return a[0] < b[1] && a[1] > b[0];
}

/**
 * 顺序应用替换：把 quote→rewrite 落进简历原文
 *
 * 三个关键点：
 * 1. 长 quote 优先占位 —— 否则短 quote 会先吃掉长 quote 所在的区间，
 *    长句改写就永远匹配不上；
 * 2. 先收集全部区间、再从后往前替换 —— 避免已替换的文本被后续规则二次匹配
 *    （旧实现的 split().join() 会反复扫描替换后的文本），同时保证下标始终对原文有效；
 * 3. 匹配不上的项必须带着原因返回，由 UI 明确列出，不静默丢弃。
 */
export function applyRewrites(originalText: string, pairs: RewritePair[]): ApplyRewritesResult {
  const applied: RewritePair[] = [];
  const skipped: SkippedRewrite[] = [];

  const candidates = pairs
    .map((pair, index) => ({ pair, index }))
    .filter(({ pair }) => pair && typeof pair.quote === 'string' && typeof pair.rewrite === 'string')
    // 长度降序；同长度时保持原始顺序，保证结果稳定可复现
    .sort((a, b) => b.pair.quote.length - a.pair.quote.length || a.index - b.index);

  const taken: Array<[number, number]> = [];
  const replacements: Array<{ start: number; end: number; text: string }> = [];

  for (const { pair } of candidates) {
    // 空的 quote 无法定位；空的 rewrite 一旦替换等于把简历原文删掉 —— 两者都必须拦下
    if (pair.quote.trim() === '' || pair.rewrite.trim() === '') {
      skipped.push({ ...pair, reason: 'invalid' });
      continue;
    }

    const allRanges = findQuoteRanges(originalText, pair.quote);
    const ranges = allRanges.filter(range => !taken.some(used => overlaps(range, used)));

    if (ranges.length === 0) {
      skipped.push({ ...pair, reason: allRanges.length > 0 ? 'conflict' : 'not-found' });
      continue;
    }

    for (const range of ranges) {
      taken.push(range);
      replacements.push({ start: range[0], end: range[1], text: pair.rewrite });
    }
    applied.push(pair);
  }

  let text = originalText;
  // 从后往前替换，前面区间的下标不受影响
  replacements.sort((a, b) => b.start - a.start);
  for (const r of replacements) {
    text = text.slice(0, r.start) + r.text + text.slice(r.end);
  }

  return { text, applied, skipped };
}

/** 触发浏览器下载文本文件 */
export function downloadTextFile(text: string, filename: string) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
