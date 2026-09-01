-- 模型服务能力化：一个 Provider 可声明 聊天/向量/Rerank 中的一或多种能力，
-- 聊天协议支持 openai/anthropic，向量维度不再强制 1024。

-- 聊天模型改为可选（纯向量/纯 Rerank Provider 不再被迫填聊天模型）
ALTER TABLE llm_provider_config ALTER COLUMN model DROP NOT NULL;

ALTER TABLE llm_provider_config ADD COLUMN api_format VARCHAR(16) NOT NULL DEFAULT 'openai';
ALTER TABLE llm_provider_config ADD COLUMN rerank_model VARCHAR(128);
ALTER TABLE llm_provider_config ADD COLUMN rerank_api_format VARCHAR(16) NOT NULL DEFAULT 'cohere';
ALTER TABLE llm_provider_config ADD COLUMN max_tokens INTEGER;
ALTER TABLE llm_provider_config ADD COLUMN top_p DOUBLE PRECISION;

ALTER TABLE llm_global_setting ADD COLUMN default_rerank_provider_id VARCHAR(64);

-- 业务链路记录所用 Provider：简历分析、RAG 问答会话
ALTER TABLE resumes ADD COLUMN llm_provider VARCHAR(50);
ALTER TABLE rag_chat_sessions ADD COLUMN llm_provider VARCHAR(50);
