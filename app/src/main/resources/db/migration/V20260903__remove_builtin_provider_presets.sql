-- 移除系统预设（builtin）Provider：模型服务完全由用户在「设置 → 模型服务」中自行新增。
-- 先把指向预设的默认指针清空（chat/embedding 列 NOT NULL，置空串；rerank 列可空，置 NULL），再删除预设行。
UPDATE llm_global_setting
   SET default_chat_provider_id = ''
 WHERE default_chat_provider_id IN (SELECT id FROM llm_provider_config WHERE builtin);

UPDATE llm_global_setting
   SET default_embedding_provider_id = ''
 WHERE default_embedding_provider_id IN (SELECT id FROM llm_provider_config WHERE builtin);

UPDATE llm_global_setting
   SET default_rerank_provider_id = NULL
 WHERE default_rerank_provider_id IN (SELECT id FROM llm_provider_config WHERE builtin);

-- 历史业务数据里存的预设 Provider ID 置空，使其回退为系统默认，避免预设删除后悬空
UPDATE interview_sessions SET llm_provider = NULL
 WHERE llm_provider IN (SELECT id FROM llm_provider_config WHERE builtin);

UPDATE voice_interview_sessions SET llm_provider = NULL
 WHERE llm_provider IN (SELECT id FROM llm_provider_config WHERE builtin);

UPDATE resumes SET llm_provider = NULL
 WHERE llm_provider IN (SELECT id FROM llm_provider_config WHERE builtin);

UPDATE rag_chat_sessions SET llm_provider = NULL
 WHERE llm_provider IN (SELECT id FROM llm_provider_config WHERE builtin);

DELETE FROM llm_provider_config WHERE builtin;
