/**
 * 可解释的重新评分引擎
 *
 * 设计原则：
 * 1. 不假造复杂算法 —— 只把「AI 已给出的估算增益」按维度做保守折算。
 * 2. 评分变化必须可解释 —— 每一项提升都能追溯到具体采用的优化项。
 * 3. 为未来接真实 Agent 打分留出接口 —— 见 RescoreEngine 抽象。
 */

import {
  DIMENSION_META,
  DIMENSION_SCORE_FIELD,
  type DimensionSnapshot,
  type Improvement,
  type RescoreResult,
  type ScoreDimension,
} from '../types/optimization.ts';

/**
 * 单次优化最多填补某维度缺口的比例。
 *
 * 原因：一次改写不可能彻底解决一个维度的所有问题（例如补齐量化指标
 * 不代表项目经验就满分），因此对剩余缺口做保守折算，避免给出「改完就满分」
 * 的误导性预测。
 */
export const MAX_DIMENSION_FILL_RATIO = 0.75;

/** 重新评分输入 */
export interface RescoreInput {
  /**
   * 原始分析结果（用于取各维度当前得分）。
   * 用 unknown 而非具体类型：调用方持有的是后端下发的分析结果，
   * 这里只读几个已知字段，不该为其建立强耦合。
   */
  analysis: unknown;
  /** 已采用的优化项 */
  applied: Improvement[];
}

/**
 * 重新评分引擎接口。
 *
 * 当前提供 localRescoreEngine（前端确定性折算）。
 * 未来后端若提供「应用修改后重新打分」能力，只需新增一个实现并注入即可，
 * 页面层无需改动（依赖的是本接口而非具体实现）。
 */
export interface RescoreEngine {
  readonly kind: 'local' | 'remote';
  project(input: RescoreInput): RescoreResult;
}

/** 读取某维度当前得分，缺失或非数值按 0 处理 */
function readDimensionScore(analysis: unknown, dimension: ScoreDimension): number {
  if (!analysis || typeof analysis !== 'object') return 0;
  const raw = (analysis as Record<string, unknown>)[DIMENSION_SCORE_FIELD[dimension]];
  const score = typeof raw === 'number' ? raw : Number(raw);
  return Number.isFinite(score) ? score : 0;
}

/** 构建维度快照（当前得分） */
export function buildDimensionSnapshot(analysis: unknown): DimensionSnapshot[] {
  return (Object.keys(DIMENSION_META) as ScoreDimension[]).map(dimension => ({
    dimension,
    label: DIMENSION_META[dimension].label,
    score: readDimensionScore(analysis, dimension),
    maxScore: DIMENSION_META[dimension].maxScore,
  }));
}

/**
 * 前端确定性折算引擎
 *
 * 计算规则（可解释）：
 * 1. 按维度归集已采用优化项的估算增益；
 * 2. 维度实际增益 = min(Σ估算增益, 剩余缺口 × MAX_DIMENSION_FILL_RATIO)；
 * 3. 总分 = 各维度得分之和（与后端 100 分制口径一致）。
 */
export const localRescoreEngine: RescoreEngine = {
  kind: 'local',

  project({ analysis, applied }: RescoreInput): RescoreResult {
    const snapshot = buildDimensionSnapshot(analysis);
    const gainByDimension = new Map<ScoreDimension, number>();

    for (const item of applied) {
      const current = gainByDimension.get(item.dimension) ?? 0;
      gainByDimension.set(item.dimension, current + Math.max(0, item.estimatedGain));
    }

    let cappedGain = 0;
    const dimensions = snapshot.map(({ dimension, label, score, maxScore }) => {
      const rawGain = gainByDimension.get(dimension) ?? 0;
      const remaining = Math.max(0, maxScore - score);
      const ceiling = remaining * MAX_DIMENSION_FILL_RATIO;
      const effectiveGain = Math.min(rawGain, ceiling);
      // 超出上限部分记录为「未计入」，保证预测透明而非静默截断
      cappedGain += Math.max(0, rawGain - effectiveGain);

      const after = Math.min(maxScore, Math.round(score + effectiveGain));
      return {
        dimension,
        label,
        before: score,
        after,
        delta: after - score,
        maxScore,
      };
    });

    const beforeTotal = dimensions.reduce((sum, d) => sum + d.before, 0);
    const afterTotal = dimensions.reduce((sum, d) => sum + d.after, 0);

    return {
      beforeTotal,
      afterTotal,
      totalDelta: afterTotal - beforeTotal,
      dimensions,
      appliedCount: applied.length,
      cappedGain: Math.round(cappedGain),
    };
  },
};
