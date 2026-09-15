-- 取消 Provider API Key 加密：密钥改为明文存储。
--
-- 背景：加密密钥原本来自环境变量 APP_AI_CONFIG_ENCRYPTION_KEY，与「AI 配置统一收敛到
-- 设置页」的目标冲突（且缺失时会导致应用启动失败）。现改为明文存储。
--
-- 安全影响：数据库中的 Provider Key 不再加密，库泄露即等同于密钥泄露。
-- 若后续需恢复加密，应由部署环境（环境变量/密钥管理服务）注入密钥，而非回退本次方案。
--
-- 数据影响：存量 api_key_ciphertext 为密文，重命名后语义正确但内容不可读，
-- 需要在「设置 → 模型服务」页重新填写 API Key。
ALTER TABLE llm_provider_config RENAME COLUMN api_key_ciphertext TO api_key;

ALTER TABLE llm_provider_config DROP COLUMN api_key_nonce;
