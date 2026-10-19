import type {
  QuestionGenStatus,
  QuestionGenStatusResponse,
} from '../api/knowledgebase';

export interface QuestionGenerationNotice {
  tone: 'info' | 'success' | 'warning' | 'error';
  text: string;
}

type NoticeSource = Pick<
  QuestionGenStatusResponse,
  'questionGenStatus' | 'savedCount' | 'skippedCount'
> & Partial<Pick<QuestionGenStatusResponse, 'message' | 'error'>>;

export function isQuestionGenerationActive(status?: QuestionGenStatus | null): boolean {
  return status === 'QUEUED' || status === 'PROCESSING';
}

export function shouldRefreshGeneratedQuestions(
  previousStatus: QuestionGenStatus | null | undefined,
  nextStatus: QuestionGenStatus,
  sameTask: boolean
): boolean {
  return sameTask
    && isQuestionGenerationActive(previousStatus)
    && nextStatus === 'COMPLETED';
}

/** 后端未给出具体原因时的兜底文案 */
export const GENERIC_FAILURE_TEXT = '题目生成失败，请稍后重试';

/**
 * 失败提示：优先展示后端解析后的具体原因（如「无法连接外部服务 127.0.0.1:9932」），
 * 让用户能据此自助排查；后端只保证落库的是已归类的原因，不含密钥与堆栈。
 */
function buildFailureText(error?: string | null): string {
  const reason = typeof error === 'string' ? error.trim() : '';
  if (!reason) {
    return GENERIC_FAILURE_TEXT;
  }
  return reason.startsWith('题目生成失败') ? reason : `题目生成失败：${reason}`;
}

export function getQuestionGenerationNotice(
  status: NoticeSource
): QuestionGenerationNotice | null {
  switch (status.questionGenStatus) {
    case 'QUEUED':
      return { tone: 'info', text: '任务已提交，正在等待生成题目…' };
    case 'PROCESSING':
      return { tone: 'info', text: '正在生成题目，期间可以继续管理已有题目…' };
    case 'COMPLETED':
      return {
        tone: status.skippedCount > 0 ? 'warning' : 'success',
        text: status.message
          || `已生成 ${status.savedCount} 道题，跳过 ${status.skippedCount} 道题`,
      };
    case 'FAILED':
      return { tone: 'error', text: buildFailureText(status.error) };
    case 'NONE':
    default:
      return null;
  }
}
