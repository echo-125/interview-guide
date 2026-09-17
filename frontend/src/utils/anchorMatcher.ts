/**
 * 文本锚点定位引擎 (Anchor Matcher)
 *
 * 定位策略（按顺序严格执行）：
 * 1. exact match（精确匹配）
 * 2. whitespace normalization（空白/换行容错匹配）
 * 3. prefix/suffix disambiguation（前缀/后缀消歧）
 * 4. fuzzy fallback（基于编辑距离/滑动窗口的模糊回退，阈值 >= 0.80）
 *
 * 铁律：
 * 若最高相似度 < 0.80 或输入为空，坚决判定为 unlocated，不画假高亮！
 */

import type { DocumentAnchor, TextSpanNodeInfo } from '../types/review';

/** 连续空白（含全角空格、制表符、各种换行） */
const WHITESPACE_RUN = /[\s　\r\n\t]+/g;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export interface MatchRange {
  start: number;
  end: number;
  matchedText: string;
}

/**
 * 步骤 1: 查找所有精确匹配区间
 */
export function findAllExactMatches(fullText: string, quote: string): MatchRange[] {
  if (!quote || !fullText) return [];
  const results: MatchRange[] = [];
  let from = 0;
  for (;;) {
    const idx = fullText.indexOf(quote, from);
    if (idx < 0) break;
    results.push({
      start: idx,
      end: idx + quote.length,
      matchedText: quote,
    });
    from = idx + 1; // 允许重叠步进以捕获全部候选
  }
  return results;
}

/**
 * 步骤 2: 查找所有空白/换行容错匹配区间
 */
export function findAllWhitespaceMatches(fullText: string, quote: string): MatchRange[] {
  if (!quote || !fullText) return [];
  const tokens = quote.trim().split(WHITESPACE_RUN).filter(Boolean);
  if (tokens.length === 0) return [];

  // 将词元通过连续空白正则连接
  const patternStr = tokens.map(escapeRegExp).join('[\\s\\u3000\\r\\n\\t]+');
  const regex = new RegExp(patternStr, 'g');

  const results: MatchRange[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(fullText)) !== null) {
    if (match[0].length === 0) {
      regex.lastIndex += 1;
      continue;
    }
    results.push({
      start: match.index,
      end: match.index + match[0].length,
      matchedText: match[0],
    });
  }
  return results;
}

/**
 * 计算两个字符串的重合/相似度 (0.0 ~ 1.0)
 */
function calculateContextScore(actualContext: string, expectedContext: string): number {
  if (!actualContext || !expectedContext) return 0;
  const cleanActual = actualContext.replace(WHITESPACE_RUN, '');
  const cleanExpected = expectedContext.replace(WHITESPACE_RUN, '');
  if (!cleanActual || !cleanExpected) return 0;

  // 检查包含关系
  if (cleanActual.includes(cleanExpected) || cleanExpected.includes(cleanActual)) {
    return 1.0;
  }

  // 字符交集打分
  const expectedChars = new Set(cleanExpected.split(''));
  let hits = 0;
  for (const ch of cleanActual) {
    if (expectedChars.has(ch)) hits++;
  }
  return hits / Math.max(cleanActual.length, cleanExpected.length);
}

/**
 * 步骤 3: 利用前缀/后缀对多候选位置进行消歧
 */
export function disambiguateMatches(
  fullText: string,
  candidates: MatchRange[],
  prefix?: string,
  suffix?: string
): { best: MatchRange; score: number } {
  if (candidates.length === 1) {
    return { best: candidates[0], score: 1.0 };
  }

  const contextRadius = 40;
  let bestCandidate = candidates[0];
  let maxScore = -1;

  for (const cand of candidates) {
    const actualPrefix = fullText.slice(Math.max(0, cand.start - contextRadius), cand.start);
    const actualSuffix = fullText.slice(cand.end, Math.min(fullText.length, cand.end + contextRadius));

    let score = 0;
    let factors = 0;

    if (prefix && prefix.trim()) {
      score += calculateContextScore(actualPrefix, prefix);
      factors++;
    }
    if (suffix && suffix.trim()) {
      score += calculateContextScore(actualSuffix, suffix);
      factors++;
    }

    const finalScore = factors > 0 ? score / factors : 0.5;
    if (finalScore > maxScore) {
      maxScore = finalScore;
      bestCandidate = cand;
    }
  }

  return { best: bestCandidate, score: Math.max(0, maxScore) };
}

/**
 * 计算编辑距离 (Levenshtein Distance)
 */
function levenshteinDistance(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[] = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const temp = dp[j];
      if (s1[i - 1] === s2[j - 1]) {
        dp[j] = prev;
      } else {
        dp[j] = Math.min(prev + 1, dp[j] + 1, dp[j - 1] + 1);
      }
      prev = temp;
    }
  }
  return dp[n];
}

/**
 * 步骤 4: 模糊滑动窗口回退匹配
 * 仅在精确和空白均未命中且 quote 长度 >= 4 时执行
 */
export function findFuzzyFallback(fullText: string, quote: string): (MatchRange & { similarity: number }) | null {
  const cleanQuote = quote.replace(WHITESPACE_RUN, '');
  if (cleanQuote.length < 4 || fullText.length === 0) return null;

  const targetLen = quote.length;
  const minLen = Math.max(1, Math.floor(targetLen * 0.8));

  let bestMatch: (MatchRange & { similarity: number }) | null = null;
  let highestSim = 0;

  // 滑动窗口步长：当文本较长时，先按词边界或固定步长扫描
  const step = 2;
  for (let i = 0; i <= fullText.length - minLen; i += step) {
    const windowText = fullText.slice(i, Math.min(fullText.length, i + targetLen));
    const cleanWindow = windowText.replace(WHITESPACE_RUN, '');
    const dist = levenshteinDistance(cleanQuote, cleanWindow);
    const maxPossible = Math.max(cleanQuote.length, cleanWindow.length);
    const sim = 1 - dist / maxPossible;

    if (sim > highestSim) {
      highestSim = sim;
      bestMatch = {
        start: i,
        end: i + windowText.length,
        matchedText: windowText,
        similarity: sim,
      };
    }
  }

  // 严格把关：相似度必须达到 0.80 以上，否则判定无效，防止假高亮
  if (bestMatch && bestMatch.similarity >= 0.80) {
    return bestMatch;
  }
  return null;
}

export interface LocateOptions {
  prefix?: string;
  suffix?: string;
}

/**
 * 在单一纯文本字符串（如 DOCX 的 resumeText）中定位 Quote
 */
export function locateQuoteInText(fullText: string, quote: string, options?: LocateOptions): DocumentAnchor {
  if (!quote || !quote.trim()) {
    return {
      exactQuote: quote,
      confidence: 0,
      matchLevel: 'unlocated',
      located: false,
      failReason: 'Quote 为空',
    };
  }

  if (!fullText) {
    return {
      exactQuote: quote,
      confidence: 0,
      matchLevel: 'unlocated',
      located: false,
      failReason: '文档原文为空',
    };
  }

  // 1. 精确匹配
  const exactMatches = findAllExactMatches(fullText, quote);
  if (exactMatches.length === 1) {
    const m = exactMatches[0];
    return {
      exactQuote: quote,
      prefix: options?.prefix,
      suffix: options?.suffix,
      textRange: { start: m.start, end: m.end },
      confidence: 1.0,
      matchLevel: 'exact',
      located: true,
    };
  }
  if (exactMatches.length > 1) {
    const { best, score } = disambiguateMatches(fullText, exactMatches, options?.prefix, options?.suffix);
    return {
      exactQuote: quote,
      prefix: options?.prefix,
      suffix: options?.suffix,
      textRange: { start: best.start, end: best.end },
      confidence: 0.85 + score * 0.1,
      matchLevel: 'disambiguated',
      located: true,
    };
  }

  // 2. 空白归一化匹配
  const wsMatches = findAllWhitespaceMatches(fullText, quote);
  if (wsMatches.length === 1) {
    const m = wsMatches[0];
    return {
      exactQuote: quote,
      prefix: options?.prefix,
      suffix: options?.suffix,
      textRange: { start: m.start, end: m.end },
      confidence: 0.9,
      matchLevel: 'whitespace',
      located: true,
    };
  }
  if (wsMatches.length > 1) {
    const { best, score } = disambiguateMatches(fullText, wsMatches, options?.prefix, options?.suffix);
    return {
      exactQuote: quote,
      prefix: options?.prefix,
      suffix: options?.suffix,
      textRange: { start: best.start, end: best.end },
      confidence: 0.8 + score * 0.1,
      matchLevel: 'disambiguated',
      located: true,
    };
  }

  // 3. 模糊回退匹配
  const fuzzyMatch = findFuzzyFallback(fullText, quote);
  if (fuzzyMatch) {
    return {
      exactQuote: quote,
      prefix: options?.prefix,
      suffix: options?.suffix,
      textRange: { start: fuzzyMatch.start, end: fuzzyMatch.end },
      confidence: Math.round(fuzzyMatch.similarity * 100) / 100,
      matchLevel: 'fuzzy',
      located: true,
    };
  }

  // 4. 定位失败，坚决不画假高亮
  return {
    exactQuote: quote,
    prefix: options?.prefix,
    suffix: options?.suffix,
    confidence: 0,
    matchLevel: 'unlocated',
    located: false,
    failReason: '在文档全文中未找到相似度 >= 80% 的原文片段',
  };
}

/**
 * 将连续文本字符区间映射到真实的 PDF Text Span 序列
 */
export function mapRangeToSpans(
  spans: TextSpanNodeInfo[],
  startDocIndex: number,
  endDocIndex: number
): {
  involvedSpans: TextSpanNodeInfo[];
  pageNumbers: number[];
  firstPage: number;
} {
  const involved = spans.filter(
    s => s.startOffsetInDoc < endDocIndex && s.endOffsetInDoc > startDocIndex
  );
  const pageNumbers = Array.from(new Set(involved.map(s => s.pageNumber))).sort((a, b) => a - b);
  return {
    involvedSpans: involved,
    pageNumbers,
    firstPage: pageNumbers[0] || 1,
  };
}

/**
 * 在结构化 Span 流中定位 Quote（PDF Text Layer）
 */
export function locateQuoteInSpanStream(
  spans: TextSpanNodeInfo[],
  fullDocText: string,
  quote: string,
  options?: LocateOptions
): DocumentAnchor {
  const baseAnchor = locateQuoteInText(fullDocText, quote, options);
  if (!baseAnchor.located || !baseAnchor.textRange) {
    return baseAnchor;
  }

  const { pageNumbers, firstPage } = mapRangeToSpans(
    spans,
    baseAnchor.textRange.start,
    baseAnchor.textRange.end
  );

  return {
    ...baseAnchor,
    page: firstPage,
    pages: pageNumbers,
  };
}
