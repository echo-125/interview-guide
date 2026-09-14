-- 简历分析可解释升级：一句话结论、维度解释、优先行动、风险、招聘方视角（均为 JSON TEXT 列）
-- 旧数据为 NULL，读取时回退；suggestion 的 impact 存于现有 suggestions_json 内无需新列
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS headline TEXT;
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS dimension_explanations_json TEXT;
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS top_actions_json TEXT;
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS risks_json TEXT;
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS recruiter_view_json TEXT;
