/**
 * Phase 5E：Builder AI 解析状态机收尾语义（纯函数，供 UI 与单测共用）
 *
 * 背景（P1）：持久化恢复工作区后会跳过 LLM 对 currentDocument 的覆盖，
 * 但若不在恢复路径上结束 aiStage，页面顶部会永久显示「AI 正在解析简历结构」。
 *
 * 语义（不新增状态，只用现有 idle/parsing/done/failed）：
 * - 恢复成功：无论 LLM 结果如何，工作版本都不会被覆盖 → 状态必须结束（done）
 * - 未恢复 + LLM 成功：done
 * - 未恢复 + LLM 失败/超时：failed（此时 Rule 基础结果仍可编辑，失败横幅有提示）
 */

export type BuilderAiStage = 'idle' | 'parsing' | 'done' | 'failed';

export function resolveAiStageAfterParse(
  restored: boolean,
  llmSuccess: boolean
): 'done' | 'failed' {
  if (restored) return 'done';
  return llmSuccess ? 'done' : 'failed';
}