/**
 * 从既有分析结果派生「可执行优化项」
 *
 * 后端已产出三类可行动数据：topActions、bulletAudits、suggestions。
 * 这里把它们统一收敛成 Improvement，让页面只面对一种数据结构。
 *
 * 重要：本次改造不新增任何 AI 调用，也不新增数据源 ——
 * 全部内容都是对后端既有输出的重组与归因。
 */

import type {
  EvidenceLevel,
  Improvement,
  ScoreDimension,
} from '../types/optimization';

/** 已确认/推测/缺失 → 统一证据等级 */
export function toEvidenceLevel(status?: string | null): EvidenceLevel {
  if (status === '已确认') return 'confirmed';
  if (status === '缺失') return 'missing';
  return 'insufficient';
}

/**
 * 依据问题标签/类别推断归属维度。
 *
 * 后端没有直接给出建议→维度的映射，这里用关键词做确定性归因，
 * 保证同一份分析结果每次得到一致的重评分预测。
 */
const CATEGORY_DIMENSION_RULES: Array<{
  keywords: string[];
  dimension: ScoreDimension;
}> = [
  { keywords: ['量化', '成果', '项目', '业务', '性能', '规模', '贡献'], dimension: 'project' },
  { keywords: ['技能', '技术栈', '关键词', '框架', '中间件', '工具'], dimension: 'skillMatch' },
  { keywords: ['模块', '缺失', '教育', '信息', '完整'], dimension: 'content' },
  { keywords: ['结构', '顺序', '排版', '格式', '层级'], dimension: 'structure' },
  { keywords: ['表达', '措辞', '动词', '冗余', '精简', '专业'], dimension: 'expression' },
];

const PROBLEM_DIMENSION_RULES: Array<{
  keywords: string[];
  dimension: ScoreDimension;
}> = [
  { keywords: ['缺量化结果', '缺业务场景', '技术堆砌', '职责描述含糊'], dimension: 'project' },
  { keywords: ['名词不规范'], dimension: 'structure' },
  { keywords: ['表述过长', '弱动词开头'], dimension: 'expression' },
];

function matchDimension(text: string, rules: typeof CATEGORY_DIMENSION_RULES): ScoreDimension {
  for (const rule of rules) {
    if (rule.keywords.some(keyword => text.includes(keyword))) {
      return rule.dimension;
    }
  }
  return 'project';
}

/** 由 bulletAudit 的问题标签推断维度 */
function inferDimensionFromProblems(problems: string[]): ScoreDimension {
  const joined = problems.join('、');
  const matched = matchDimension(joined, PROBLEM_DIMENSION_RULES);
  return matched;
}

/**
 * bulletAudit 的问题标签 → 修改原因（面向用户的正向表述）
 */
const PROBLEM_REASON_MAP: Record<string, string> = {
  弱动词开头: '强化动词开头，突出主导性',
  缺量化结果: '补充真实可验证的量化结果',
  缺业务场景: '补充业务场景与技术价值',
  技术堆砌: '建立技术与业务结果的关联',
  表述过长: '精简表述，控制在两行内',
  名词不规范: '规范技术名词写法',
  职责描述含糊: '明确个人贡献边界',
};

function toReasons(problems: string[], fallback: string[]): string[] {
  const reasons = problems
    .map(p => PROBLEM_REASON_MAP[p])
    .filter((r): r is string => Boolean(r));
  return reasons.length > 0 ? reasons : fallback;
}

/**
 * 构建优化项列表
 *
 * 排序策略：topActions 优先（后端已按收益排序），
 * 其后是带 quote→rewrite 对的 bulletAudits 与 suggestions（可直接应用改写的项）。
 */
export function buildImprovements(analysis: any): Improvement[] {
  if (!analysis) return [];

  const improvements: Improvement[] = [];
  const seenQuotes = new Set<string>();

  // 1. Top3 优先行动：保留后端排好的收益顺序
  (analysis.topActions || []).forEach((action: any, index: number) => {
    const quote = typeof action.relatedQuote === 'string' ? action.relatedQuote.trim() : '';
    if (quote) seenQuotes.add(quote);

    improvements.push({
      id: `top-${index}`,
      title: action.title || '优化建议',
      priority: '高',
      estimatedGain: Number(action.estimatedGain) || 0,
      currentProblem: action.reason || '',
      suggestion: action.reason || '',
      evidenceLevel: 'insufficient',
      originalText: quote,
      suggestedText: '',
      reasons: [],
      source: 'topAction',
      dimension: matchDimension(
        `${action.title || ''}${action.reason || ''}`,
        CATEGORY_DIMENSION_RULES
      ),
      rank: action.rank || index + 1,
    });
  });

  // 2. 逐条体检：已有 AI 改写，直接可应用
  (analysis.bulletAudits || []).forEach((audit: any, index: number) => {
    const quote = typeof audit.quote === 'string' ? audit.quote.trim() : '';
    const rewrite = typeof audit.rewrite === 'string' ? audit.rewrite.trim() : '';
    if (!quote || !rewrite) return;
    if (seenQuotes.has(quote)) return;
    seenQuotes.add(quote);

    const problems: string[] = Array.isArray(audit.problems) ? audit.problems : [];
    improvements.push({
      id: `bullet-${index}`,
      title: problems[0] ? `修正：${problems[0]}` : '优化经历描述',
      priority: '中',
      // 逐条体检本身不携带 estimatedGain，按维度缺口给保守估算
      estimatedGain: 2,
      currentProblem: problems.length > 0 ? problems.join('、') : '描述表达可进一步优化',
      suggestion: '基于原文真实背景改写，补充技术方案与结果表达',
      evidenceLevel: 'confirmed',
      originalText: quote,
      suggestedText: rewrite,
      reasons: toReasons(problems, ['保留原文真实背景', '强化结果表达']),
      source: 'bulletAudit',
      dimension: inferDimensionFromProblems(problems),
    });
  });

  // 3. 改进建议：仅取带 quote→rewrite 的项（可确定性应用）
  (analysis.suggestions || []).forEach((sug: any, index: number) => {
    const quote = typeof sug.quote === 'string' ? sug.quote.trim() : '';
    const rewrite = typeof sug.rewrite === 'string' ? sug.rewrite.trim() : '';
    if (!quote || !rewrite) return;
    if (seenQuotes.has(quote)) return;
    seenQuotes.add(quote);

    improvements.push({
      id: `suggestion-${index}`,
      title: sug.issue || '优化建议',
      priority: (sug.priority as Improvement['priority']) || '中',
      estimatedGain: sug.priority === '高' ? 3 : sug.priority === '中' ? 2 : 1,
      currentProblem: sug.impact || sug.issue || '',
      suggestion: sug.recommendation || '',
      evidenceLevel: 'confirmed',
      originalText: quote,
      suggestedText: rewrite,
      reasons: ['保留原文真实背景', '强化岗位相关性'],
      source: 'suggestion',
      dimension: matchDimension(
        `${sug.category || ''}${sug.issue || ''}`,
        CATEGORY_DIMENSION_RULES
      ),
    });
  });

  return improvements;
}

/**
 * 为 Top 行动项匹配已有的 AI 改写（按原句精确匹配）
 *
 * Top3 在后端只给了 relatedQuote，没有 rewrite。
 * 这里从 bulletAudits / suggestions 里找同原句的改写，
 * 让 Top3 也能直接展示 Diff 并一键应用 —— 不触发新的 AI 调用。
 */
export function attachExistingRewrites(
  improvements: Improvement[],
  analysis: any
): Improvement[] {
  if (!analysis) return improvements;

  const rewriteByQuote = new Map<string, { rewrite: string; reasons: string[] }>();

  (analysis.bulletAudits || []).forEach((audit: any) => {
    const quote = typeof audit?.quote === 'string' ? audit.quote.trim() : '';
    const rewrite = typeof audit?.rewrite === 'string' ? audit.rewrite.trim() : '';
    if (quote && rewrite && !rewriteByQuote.has(quote)) {
      const problems: string[] = Array.isArray(audit.problems) ? audit.problems : [];
      rewriteByQuote.set(quote, { rewrite, reasons: toReasons(problems, []) });
    }
  });

  (analysis.suggestions || []).forEach((sug: any) => {
    const quote = typeof sug?.quote === 'string' ? sug.quote.trim() : '';
    const rewrite = typeof sug?.rewrite === 'string' ? sug.rewrite.trim() : '';
    if (quote && rewrite && !rewriteByQuote.has(quote)) {
      rewriteByQuote.set(quote, { rewrite, reasons: [] });
    }
  });

  return improvements.map(item => {
    if (item.suggestedText || !item.originalText) return item;
    const matched = rewriteByQuote.get(item.originalText);
    if (!matched) return item;
    return {
      ...item,
      suggestedText: matched.rewrite,
      reasons: matched.reasons.length > 0 ? matched.reasons : item.reasons,
    };
  });
}

/**
 * 生成「占位式」改写提示
 *
 * 当 AI 没有可用改写时，绝不编造具体数字（如「QPS 提升 2.4 倍」），
 * 只给出用户可自行填写的占位符，明确标注需补充真实数据。
 */
export function buildPlaceholderRewrite(originalText: string): string {
  if (!originalText) {
    return '（请在此补充该模块的真实经历描述）';
  }
  return `${originalText}\n\n【待补充真实数据】\n· 补充实际业务规模（如日订单量 / 用户量）\n· 补充性能指标（如接口响应时间、QPS）\n· 补充你在其中的具体贡献边界`;
}
