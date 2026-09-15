import { useCallback, useMemo, useState } from 'react';
import {
  attachExistingRewrites,
  buildImprovements,
  buildPlaceholderRewrite,
} from '../utils/improvements';
import { localRescoreEngine } from '../utils/rescore';
import type { RewritePair } from '../utils/rewriteApply';
import type { Improvement, ImprovementStatus, RescoreResult } from '../types/optimization';

const SOURCE_LABEL: Record<Improvement['source'], string> = {
  topAction: '重点改进项',
  bulletAudit: '逐条体检',
  suggestion: '改进建议',
};

interface UseResumeOptimizationOptions {
  /** 原始分析结果（AnalysisItem） */
  analysis: any;
  /** 生成改写的异步实现；未传入时退化为本地占位方案 */
  generateRewrite?: (item: Improvement) => Promise<string>;
}

export interface ResumeOptimization {
  /** 全部优化项（含状态） */
  items: Improvement[];
  /** Top3 优化项，页面核心区域 */
  topItems: Improvement[];
  /** 各优化项状态 */
  statusOf: (id: string) => ImprovementStatus;
  /** 已采用的优化项 */
  appliedItems: Improvement[];
  /** 已采用数量 */
  appliedCount: number;
  /** 触发 AI 修改 */
  requestRewrite: (id: string) => Promise<void>;
  /** 采用修改 */
  apply: (id: string) => void;
  /** 跳过 */
  skip: (id: string) => void;
  /** 重置为未处理（支持重新生成） */
  reset: (id: string) => void;
  /** 一键优化 Top3：批量请求改写 */
  optimizeTop: () => Promise<void>;
  /** 是否在批量优化中 */
  optimizingTop: boolean;
  /** 重新评分结果（仅在存在已采用项时返回） */
  rescore: RescoreResult | null;
  /** 清空全部已采用（回到初始评分） */
  clearApplied: () => void;
  /**
   * 已采用项对应的「原句 → 改写」对，可直接喂给 applyRewrites 落到简历全文。
   * 闭环的最后一环：确认的修改必须能真正写回底稿，而不只是停留在分数变化。
   */
  appliedPairs: RewritePair[];
}

/**
 * 简历优化 Agent 状态机
 *
 * 统一页面上的按钮语义：
 *   pending    → [AI 修改]
 *   generating → 加载中
 *   generated  → [查看修改] → Diff → [采用] [重新生成] [跳过]
 *   applied    → ✓ 已应用
 *   skipped    → 已跳过
 */
export function useResumeOptimization({
  analysis,
  generateRewrite,
}: UseResumeOptimizationOptions): ResumeOptimization {
  const [statusMap, setStatusMap] = useState<Record<string, ImprovementStatus>>({});
  const [rewriteMap, setRewriteMap] = useState<Record<string, string>>({});
  const [optimizingTop, setOptimizingTop] = useState(false);

  const items = useMemo(() => {
    const base = buildImprovements(analysis);
    return attachExistingRewrites(base, analysis);
  }, [analysis]);

  /** 合并运行时改写后的最终列表 */
  const resolvedItems = useMemo(
    () =>
      items.map(item => ({
        ...item,
        suggestedText: rewriteMap[item.id] ?? item.suggestedText,
      })),
    [items, rewriteMap]
  );

  const statusOf = useCallback(
    (id: string): ImprovementStatus => statusMap[id] ?? 'pending',
    [statusMap]
  );

  const appliedItems = useMemo(
    () => resolvedItems.filter(item => statusOf(item.id) === 'applied'),
    [resolvedItems, statusOf]
  );

  const requestRewrite = useCallback(
    async (id: string) => {
      const target = resolvedItems.find(item => item.id === id);
      if (!target) return;

      setStatusMap(prev => ({ ...prev, [id]: 'generating' }));
      try {
        const rewrite = generateRewrite
          ? await generateRewrite(target)
          : buildPlaceholderRewrite(target.originalText);
        setRewriteMap(prev => ({ ...prev, [id]: rewrite }));
        setStatusMap(prev => ({ ...prev, [id]: 'generated' }));
      } catch {
        // 失败回到未处理，保留重试入口，不静默吞错
        setStatusMap(prev => ({ ...prev, [id]: 'pending' }));
        throw new Error('生成改写失败，请重试');
      }
    },
    [resolvedItems, generateRewrite]
  );

  const apply = useCallback((id: string) => {
    setStatusMap(prev => ({ ...prev, [id]: 'applied' }));
  }, []);

  const skip = useCallback((id: string) => {
    setStatusMap(prev => ({ ...prev, [id]: 'skipped' }));
  }, []);

  // 重置为未处理。
  // 刻意保留 rewriteMap：reset 同时承担「撤销已应用」和「恢复已跳过」两种语义，
  // 这两种场景下改写内容是用户已经确认过的，丢掉会迫使重新生成。
  // 「重新生成」走 requestRewrite，它本来就会覆盖同 id 的改写。
  const reset = useCallback((id: string) => {
    setStatusMap(prev => ({ ...prev, [id]: 'pending' }));
  }, []);

  const optimizeTop = useCallback(async () => {
    const targets = resolvedItems
      .filter(item => item.source === 'topAction')
      .filter(item => {
        const status = statusOf(item.id);
        return status === 'pending' || status === 'skipped';
      });

    if (targets.length === 0) return;

    setOptimizingTop(true);
    try {
      // 顺序执行，避免并发打爆 LLM；失败项保持 pending 可单独重试
      for (const target of targets) {
        try {
          await requestRewrite(target.id);
        } catch {
          // 单项失败不影响其余项
        }
      }
    } finally {
      setOptimizingTop(false);
    }
  }, [resolvedItems, statusOf, requestRewrite]);

  const rescore = useMemo(() => {
    if (appliedItems.length === 0) return null;
    return localRescoreEngine.project({ analysis, applied: appliedItems });
  }, [appliedItems, analysis]);

  // 状态与改写一起清空：只清 statusMap 会让卡片回到 pending 但仍渲染上一次的
  // Diff 内容，用户「重置」后再点 AI 修改会先看到旧结果，误以为是本次生成的
  const clearApplied = useCallback(() => {
    setStatusMap({});
    setRewriteMap({});
  }, []);

  // 只导出「原句与改写都在」的项：缺任一侧都无法做确定性替换，
  // 强行替换会破坏简历原文
  const appliedPairs = useMemo<RewritePair[]>(
    () =>
      appliedItems
        .filter(item => item.originalText.trim() && item.suggestedText.trim())
        .map(item => ({
          quote: item.originalText,
          rewrite: item.suggestedText,
          source: SOURCE_LABEL[item.source],
        })),
    [appliedItems]
  );

  return {
    items: resolvedItems,
    topItems: resolvedItems.filter(item => item.source === 'topAction'),
    statusOf,
    appliedItems,
    appliedCount: appliedItems.length,
    requestRewrite,
    apply,
    skip,
    reset,
    optimizeTop,
    optimizingTop,
    rescore,
    clearApplied,
    appliedPairs,
  };
}
