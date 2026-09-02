-- 简历 vs JD 匹配度诊断表
CREATE TABLE IF NOT EXISTS resume_jd_analyses (
  id BIGSERIAL PRIMARY KEY,
  resume_id BIGINT NOT NULL REFERENCES resumes(id),
  jd_text TEXT,
  match_score INTEGER,
  summary TEXT,
  skill_gaps_json TEXT,
  weaknesses_json TEXT,
  recommendations_json TEXT,
  analysis_status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
  analysis_error VARCHAR(500),
  llm_provider VARCHAR(50),
  created_at TIMESTAMP(6) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_jd_analysis_resume ON resume_jd_analyses(resume_id);
