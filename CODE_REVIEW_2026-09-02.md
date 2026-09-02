# 代码审查报告：模型服务能力化改造

- **审查对象**：commit `cdb19ce`（feat: 模型服务按能力拆分（聊天/向量/重排）并移除系统预设），59 个文件，+2875 / -719 行
- **审查日期**：2026-09-02
- **审查范围**：后端 Java（llmprovider 模块、common/ai、infrastructure/vector、Flyway 迁移、简历/知识库链路）+ 前端 TypeScript/React（设置页、模型选择组件、各业务页面）+ 文档
- **验证状态**：后端 `:app:test` 307 个测试全部通过；前端 `pnpm run build` 通过；功能已在真实环境验证（Ollama 向量模型接入、简历评分、模拟面试、设置页操作）

---

## 一、总体评价

改造目标（按能力细分模型配置、双协议、在线模型列表、维度可配置、页面级切换、移除预设、默认回退）全部达成，架构方向正确：

- **数据模型合理**：一个 Provider 可声明多能力（chat/embedding/rerank），按能力独立设默认，为后续扩展语音/多模态能力留了空间。
- **失效机制完整**：`LlmProviderRegistry` 三层缓存（client/chatModel/embeddingModel）+ 每次配置写操作后 `registry.reload()`，create / update / delete / 设默认 / 重载全部覆盖，无遗漏路径。
- **降级策略得当**：RAG 重排失败回退向量排序；默认未设置时回退第一个可用能力模型；真正无可用模型时报可操作的指引性错误。
- **迁移自洽**：V20260902（能力拆分）与 V20260903（清预设 + 清悬空引用）顺序正确，业务表中的悬空 `llm_provider` 一并清理。
- **测试习惯好**：新逻辑均有中文 `@DisplayName` 单测，含回归用例（`qwen3-embedding` 误判修复）。

以下问题按优先级列出，**无阻断性缺陷**，P1 项建议在公网部署前处理。

---

## 二、问题清单

### P1（建议尽快处理）

#### 1. SSRF 防护不一致：连通性测试有过滤，真实调用链没有

- 位置：`app/src/main/java/interview/guide/common/ai/ApiPathResolver.java:37`、`ModelCatalogService.java:88`
- 现象：`doTestProvider` 和 `RerankClient` 的 HTTP 客户端配置了 `InetAddressFilter`（external + loopback + 198.18.0.0/15），但**真正执行模型调用**的 `ApiPathResolver.buildOpenAiClient`（经反编译确认 `SpringAiOpenAiHttpClient` 只是普通 OkHttp builder，无地址过滤）以及 `ModelCatalogService.fetchAnthropicModels`（`AnthropicOkHttpClient` 直连）都没有过滤。
- 影响：设置页「测试」被拦的地址，实际聊天/向量调用和「获取模型列表」却能访问，防护形成漏洞；新增的 `POST /api/llm-provider/models` 端点还**没有 `@RateLimit`**（同文件其他写接口都有）。单用户内网部署风险低，公网/多用户部署时配置接口可被用来探测内网。
- 建议：为 openai-java / anthropic-java SDK 的 OkHttpClient 注入统一地址过滤（自定义 Dns 或 Interceptor），`/models` 补 `@RateLimit`。

#### 2. 默认 Provider 解析在每次请求都查库

- 位置：`LlmProviderRegistry.resolveDefaultChatProviderId / resolveDefaultEmbeddingProviderId`
- 现象：每次 `getChatClientOrDefault(...)` 都执行 `globalSettingRepository.findById`；默认未显式设置时还会追加一次 `providerRepository.findAll()`。面试每条回答、RAG 每条提问都会走到。
- 影响：当前表都很小，风险低，但属于高频路径上的无谓开销；且回退选择依赖 `findAll()` 顺序（已 `sorted()` 保证确定性）。
- 建议：给解析结果加短 TTL 缓存，或复用 `registry.reload()` 的失效机制在配置变更时刷新。

### P2（建议排期处理）

#### 3. 删除默认重排 Provider 的行为与另外两个能力不一致

- 位置：`LlmProviderConfigService.deleteProvider:488`
- 现象：删除聊天/向量默认 Provider 会被拒绝（`PROVIDER_DEFAULT_CANNOT_DELETE`），但删除重排默认会被放行——之后 `getDefaultRerankProvider()` 返回 empty，重排**静默关闭**，用户无感知。
- 建议：统一为「先切默认再删」或在删除成功时 toast 提示重排已关闭。

#### 4. DashScope 重排 URL 回退会把 API Key 发往硬编码域名

- 位置：`RerankClient.buildDashscopeRerankUrls:164`
- 现象：`rerankApiFormat=dashscope` 但 baseUrl 不是 dashscope 域名时，会跳过派生 URL、直接请求硬编码的 `https://dashscope.aliyuncs.com/...` 并携带用户 API Key。配置写错时 Key 会发往固定第三方。
- 建议：非 dashscope 域名时直接抛配置错误，不做硬编码回退。

#### 5. `RerankClient` 每次调用新建 HTTP 客户端

- 位置：`RerankClient.buildRestClient:104`
- 现象：每次 `rerank()` 新建 JDK `HttpClient` request factory。重排只在 RAG 检索时触发，频率不高，但可以复用。
- 建议：按 provider 缓存（API Key 在 header 中，可随 `registry.reload()` 重建）。

### P3（低风险 / 长期改进）

#### 6. 创建 Provider 强制要求 API Key

- 位置：`LlmProviderConfigService.createProvider`（`requireNonBlank(request.apiKey())`）、前端表单必填校验
- 现象：Ollama 等无鉴权端点只能填占位符（本次用户实际填写 `ollama` 通过）。功能可用，体验欠佳。
- 建议：后续允许留空并跳过 Authorization 头。

#### 7. 按类型拆分模态框后，UI 无法再创建"多能力合一"的 Provider

- 位置：`SettingsPage.tsx` 模态框
- 现象：后端数据模型仍支持一个 Provider 声明多能力，但前端入口收窄为每 Tab 一种能力。用户若想"百炼聊天+向量一体"，需建两条 Provider 指向同一端点（可用，略冗余）。
- 建议：知悉即可；若未来有需求，可在卡片上提供"追加能力"入口。

#### 8. `SettingsPage` 表单状态为约 30 个离散 `useState`

- 位置：`SettingsPage.tsx`
- 现象：form 状态与 `modalType` 耦合，打开时全量重置/加载，当前逻辑正确，但字段继续增加时容易漏重置/漏透传。
- 建议：演进为单一 form 对象 + reducer，或拆出 `ProviderFormModal` 子组件。

#### 9. 测试覆盖缺口

- `ModelCatalogService` 无单测（分页 `MAX_PAGE_FETCHES`、去重排序逻辑简单，风险低）。
- 前端无自动化测试覆盖设置页重构（`pnpm build` 仅做类型检查），回归依赖手工验证。

#### 10. `application-test.yml` 与生产配置形态不同步

- 位置：`app/src/test/resources/application-test.yml:52-66`
- 现象：仍保留 `app.ai.providers`（dashscope/lmstudio）与 `default-provider: dashscope`。作为 legacy 轨测试夹具自洽可用，但容易让后来者误以为 yml 预设仍生效。
- 建议：加注释说明仅 legacy 轨使用，或随测试改造清理。

---

## 三、验证过的关键正确性点

| 检查项 | 结论 |
|---|---|
| Registry 缓存失效 | create/update/delete/设默认全部调用 `registry.reload()`，无遗漏路径 |
| 客户端缓存键 | 空字符串 provider 先解析为真实 id 再进缓存，不会以空串为键污染缓存 |
| Anthropic 分支 | baseUrl 自动剥离 `/v\d+` 后缀；maxTokens 缺省 4096；启动期无 SDK client 依赖（懒创建），无 API Key 不影响启动 |
| 维度对齐器 | ALTER 语句参数为 int 拼接（无注入面）；晚于 Flyway 执行；有数据冲突时 `IllegalStateException` 阻断启动并给出双选项指引；检查本身失败不阻断（Hibernate validate 兜底） |
| RAG 重排降级 | 候选 topK×3 放大 → 重排 → 截回 topK；失败/空结果回退向量排序；index 越界过滤 |
| 保存时模型名校验 | 含 `embed`/`rerank` 的名字放行（qwen3-embedding:4b 实测通过），纯聊天模型名仍拒绝 |
| 面试创建链路 | 默认未设置 → 回退第一个可用能力模型；失败时前端展示后端真实原因；`return null` 空白路径已消灭 |
| Flyway 迁移 | 悬空默认指针、业务表 `llm_provider` 悬空值均清理；`DELETE ... WHERE builtin` 顺序正确 |
| 零配置报错 | "尚未配置模型服务，请到「设置 → 模型服务」…"，`BusinessException` → HTTP 200 + `Result.error`，前端拦截器正确抛出 |

---

## 四、遗留事项与建议路线

1. **P1-SSRF**：公网部署前必须补齐统一地址过滤与 `/models` 限流。
2. **默认解析缓存**（P1-2）：与后续"解析结果可观测"（设置页展示当前实际生效的默认，而非仅显式设置值）一起做，解决回退行为对用户不可见的问题。
3. **前端表单重构**（P3-8）：下次动设置页时一并处理，避免继续叠加离散 state。
4. **文档**：README / 启动指南 / AGENTS.md / SETUP_API_KEYS.md 已同步本次改造（无预设、语音专用百炼 Key、维度可配置、模型在设置页配置）；`application-test.yml` 的 legacy 夹具注释仍缺失。
