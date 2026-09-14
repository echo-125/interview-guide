-- 简历分析反馈粒度扩展：逐条经历体检与名词规范检查结果（均为 JSON TEXT 列）
-- 旧数据两列为 NULL，读取时回退为空列表
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS bullet_audits_json TEXT;
ALTER TABLE resume_analyses ADD COLUMN IF NOT EXISTS term_issues_json TEXT;
