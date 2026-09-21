# 🔑 API 密钥配置指南

所有 AI 相关密钥（模型服务与语音服务）均在**应用内**配置，不需要环境变量，
也不依赖 `.env` 文件。

## 📋 需要配置的 API 服务

### 阿里云百炼 AI (DashScope)

**用途**:
- **ASR 语音识别**: 将用户语音实时转换为文本（qwen3-asr-flash-realtime）
- **TTS 语音合成**: 将 AI 回答实时转换为语音（qwen3-tts-flash-realtime）
- **聊天/向量/重排模型**（可选）: 也可在「设置 → 模型服务」页用同一个百炼 Key 配置模型服务

**统一 API Key**: 语音功能一个密钥即可，无需分别申请！

**获取步骤**:
1. 访问 [阿里云百炼平台](https://bailian.console.aliyun.com/)
2. 登录/注册阿里云账号
3. 开通 DashScope 服务（有免费额度）
4. 创建 API Key
5. 复制 API Key

**费用**:
- 新用户有免费额度
- LLM（qwen3.5-flash 模型）: 请以阿里云最新价格页为准
- ASR 语音识别: ¥2.4/小时（实际使用流式服务）
- TTS 语音合成: ¥2/百万字符

---

## ⚙️ 配置步骤

### 模型服务（聊天 / 向量 / 重排）

1. 启动应用，进入「设置 → 模型服务」
2. 新增 Provider：填写 Base URL、API Key、模型名，并勾选它支持的能力
   （聊天 / 向量 / 重排，一个 Provider 可同时支持多种）
3. 分别指定默认的聊天、向量、重排服务
4. 配置存储在数据库（`llm_provider_config` / `llm_global_setting`），重启后保留
   （⚠️ Key 当前为**明文存储**，加密已移除，请确保数据库访问受控）

### 语音平台（ASR / TTS）

1. 进入「设置 → 语音服务」
2. 分别选择 **ASR / TTS 平台**并填写对应 API 参数（DashScope / Qwen3 为默认实现；
   也可通过平台下拉切换到其他 OpenAI 兼容实现）
3. 保存后即时生效，支持「测试」连通性验证

> ✅ 语音平台配置落库 `voice_platform_config`，**重启后保留**。

---

## 🔍 验证配置

启动应用后，检查日志：

```
✅ 成功日志示例:
QwenAsrService initialized with model: qwen3-asr-flash-realtime
QwenTtsService initialized with model: qwen3-tts-flash-realtime, voice: Cherry

❌ 失败日志示例:
WebSocket failed: Expected HTTP 101 response but was '401 Unauthorized'
（说明 API Key 无效或未配置）
```

---

## 💡 成本优化建议

1. **使用免费额度**: 新用户都有免费试用额度
2. **限制并发**: 配置 `rate-limit` 参数控制并发数
3. **选择合适模型**: 开发测试可选更便宜的模型，生产环境按场景在「设置 → 模型服务」中选择
4. **控制面试时长**: 通过 `plannedDuration` 参数限制面试时长

---

## 🆘 常见问题

**Q: 必须使用阿里云吗？**

A: 语音服务 v1.0 起为**通用平台配置**，默认使用 Qwen3 实时语音模型（阿里云 DashScope），
也可在「设置 → 语音服务」切换 ASR / TTS 平台（OpenAI 兼容实现）。聊天/向量/重排模型支持任意 OpenAI 兼容或 Anthropic 协议的服务，在「设置 → 模型服务」页配置。

**Q: 密钥存在哪里？**

A: 模型服务的 Provider Key 存储在数据库 `llm_provider_config` 表中；语音平台参数存储在 `voice_platform_config`，OCR 配置存储在 `ocr_platform_config`。
> ⚠️ 当前为**明文存储**（加密功能已移除）。请确保数据库访问受控，
> 不要把生产数据库暴露在公网。

**Q: 重启后语音服务要不要重新配置？**

A: 不需要。语音 ASR/TTS 平台配置已落库（`voice_platform_config`），重启后保留。

**Q: 如何降低成本？**

A: 1) 在「设置 → 模型服务」中选择更便宜的模型；2) 限制面试时长；3) 添加用户配额限制


**Q: 测试时需要付费吗？**

A: 阿里云新用户有免费额度，足够测试使用。正式上线后再考虑付费。

**Q: 一个 API Key 真的够用吗？**

A: 是的！默认的语音平台（DashScope）ASR + TTS 共用一个 API Key。聊天/向量/重排模型在「设置 → 模型服务」页配置，可以用同一个 Key，也可以用其他厂商的 Key。

---

## 📞 获取帮助

- 阿里云文档: https://help.aliyun.com/
- DashScope 文档: https://help.aliyun.com/zh/dashscope/
- Qwen3 实时语音文档: https://help.aliyun.com/zh/model-studio/realtime-api-reference
