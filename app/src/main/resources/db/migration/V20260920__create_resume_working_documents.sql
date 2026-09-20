-- 简历工作区持久化表（Phase 4B 后正式持久化）
-- 存储结构化工作简历（original/current ResumeDocument + revisions 全量快照），一简历一行（resume_id 唯一）。
CREATE TABLE IF NOT EXISTS resume_working_documents (
  id BIGSERIAL PRIMARY KEY,
  resume_id BIGINT NOT NULL REFERENCES resumes(id) ON DELETE CASCADE,
  parser VARCHAR(10) NOT NULL DEFAULT 'llm',
  source_text_hash VARCHAR(64) NOT NULL,
  original_document_json TEXT NOT NULL DEFAULT '{}',
  document_json TEXT NOT NULL,
  revision_index INT NOT NULL DEFAULT -1,
  revision_seq INT NOT NULL DEFAULT 0,
  revisions_json TEXT NOT NULL DEFAULT '[]',
  created_at TIMESTAMP(6) NOT NULL,
  updated_at TIMESTAMP(6) NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uk_resume_working_document ON resume_working_documents(resume_id);
