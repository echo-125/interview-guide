-- 通用语音平台（ASR/TTS）配置 + OCR 本地模型配置（设置页 DB 驱动化）
-- 表结构需与 VoicePlatformConfigEntity / OcrPlatformConfigEntity 字段一致（ddl-auto=validate）

CREATE TABLE IF NOT EXISTS voice_platform_config (
    capability                       VARCHAR(16)  NOT NULL PRIMARY KEY,
    platform                         VARCHAR(32)  NOT NULL DEFAULT 'qwen',
    base_url                         VARCHAR(512),
    api_key                          VARCHAR(4096),
    model                            VARCHAR(128),
    language                         VARCHAR(16),
    format                           VARCHAR(16),
    sample_rate                      INTEGER,
    enable_turn_detection            BOOLEAN,
    turn_detection_type              VARCHAR(32),
    turn_detection_threshold         REAL,
    turn_detection_silence_ms        INTEGER,
    voice                            VARCHAR(64),
    mode                             VARCHAR(16),
    language_type                    VARCHAR(32),
    speech_rate                      REAL,
    volume                           INTEGER
);

CREATE TABLE IF NOT EXISTS ocr_platform_config (
    id              BIGINT       NOT NULL PRIMARY KEY,
    platform        VARCHAR(32)  NOT NULL DEFAULT 'ollama',
    base_url        VARCHAR(512) NOT NULL DEFAULT 'http://localhost:11434',
    api_key         VARCHAR(4096),
    model           VARCHAR(128) NOT NULL DEFAULT 'GLM-OCR',
    enabled         BOOLEAN      NOT NULL DEFAULT TRUE
);