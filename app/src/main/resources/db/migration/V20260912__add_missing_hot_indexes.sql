-- 补齐三张热表的高频查询索引（2026-09-12 代码评审 P1）
-- 此前三张表的这些查询条件均为顺序扫描，随数据量线性恶化

-- 语音面试每一轮对话的计数、补答案查询、历史读取都按 session_id 过滤
CREATE INDEX IF NOT EXISTS idx_voice_message_session
  ON voice_interview_messages(session_id);

-- 简历列表页按 resume_id 批量取最新分析
CREATE INDEX IF NOT EXISTS idx_resume_analysis_resume
  ON resume_analyses(resume_id);

-- 语音会话列表（用户+状态+更新时间）与每分钟清理任务（评估状态+更新时间）
CREATE INDEX IF NOT EXISTS idx_voice_session_user_status_updated
  ON voice_interview_sessions(user_id, status, updated_at);

CREATE INDEX IF NOT EXISTS idx_voice_session_evaluate_status_updated
  ON voice_interview_sessions(evaluate_status, updated_at);
