/**
 * 确定性应用改写：把「原句 → 改写」对替换进简历原文，零 LLM 成本
 */
export interface RewritePair {
  quote: string;
  rewrite: string;
  source?: string; // 来源标注：逐条体检 / 改进建议
}

export interface ApplyRewritesResult {
  text: string;
  applied: RewritePair[];
  skipped: RewritePair[];
}

/**
 * 从分析结果收集所有可应用的 quote→rewrite 对（按 quote 去重，体检优先于建议）
 */
export function collectRewritePairs(analysis: any): RewritePair[] {
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
  (analysis.bulletAudits || []).forEach((b: any) => push(b.quote, b.rewrite, '逐条体检'));
  (analysis.suggestions || []).forEach((s: any) => push(s.quote, s.rewrite, '改进建议'));
  return pairs;
}

/**
 * 顺序应用替换：quote 精确匹配原文（含已应用后的文本），找不到则跳过并记录
 */
export function applyRewrites(originalText: string, pairs: RewritePair[]): ApplyRewritesResult {
  let text = originalText;
  const applied: RewritePair[] = [];
  const skipped: RewritePair[] = [];

  for (const pair of pairs) {
    if (text.includes(pair.quote)) {
      text = text.split(pair.quote).join(pair.rewrite);
      applied.push(pair);
    } else {
      skipped.push(pair);
    }
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
