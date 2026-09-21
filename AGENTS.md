# AI Interview Platform Agent Rules

Spring Boot 4.1.0 + Java 25 + Spring AI 2.0.0 + React 面试平台。

本文件是跨工具 Agent 入口，只放长期有效、代码里不容易直接推断、猜错会影响结果的规则。更细的目录规则放在 `.claude/rules/`，需要时再读取。

## Tech Stack

- Backend: Spring Boot 4.1.0 / Java 25 / Gradle / Spring AI 2.0.0
- Database: PostgreSQL + pgvector，向量维度可配置（`APP_VECTOR_DIMENSIONS`，默认 1024），距离类型 COSINE
- Cache & async: Redis / Redisson / Redis Stream
- Storage & parsing: RustFS/S3 / Apache Tika
- Mapping & export: MapStruct / iText 8 / SpringDoc OpenAPI
- Frontend: React 18 / TypeScript / Vite / TailwindCSS 4，代码在 `frontend/`

## Commands

编译与测试：

```bash
./gradlew :app:compileJava
./gradlew :app:test --no-daemon
```

后端（本地运行，:8080）：

```bash
./gradlew :app:bootRun
```

前端（另开终端，:5173，Vite 代理 /api 与 /ws 到 :8080）：

```bash
cd frontend && pnpm run dev
cd frontend && pnpm run build
```

> 本项目采用**本地零 Docker 启动**：中间件（PostgreSQL+pgvector / Redis / MinIO）全走云端，本机只跑 Vite + Spring Boot，详见 [本地零Docker启动指南.md](本地零Docker启动指南.md)。旧的 docker-compose 部署文件与 Dockerfile 已归档到 `docs/legacy-docker/`，仅供历史参考。

## Branch Convention

- **`main` 是主要开发分支**：日常开发、合并、推送都以 `main` 为目标分支。
- **`master` 是原始分支，只做保留**：不要删除、不要合并、不要推送、不要切换过去改动它。
- 提交前从 `main` 切出特性分支；合并回 `main` 时优先 `--ff-only` 快进，保持历史线性。
- 特性分支合并完成后可删除（本地与远端），`master` 不在此列。

## Project Structure

- `app/src/main/java/interview/guide/common/`: 通用能力，包括限流、AI 调用、异步模板、配置、异常、统一响应。
- `app/src/main/java/interview/guide/infrastructure/`: 技术基础设施，包括文件、导出、Redis、MapStruct 映射。
- `app/src/main/java/interview/guide/modules/`: 业务模块，每个模块自包含 MVC 分层。
- `app/src/main/resources/prompts/`: StringTemplate Prompt 模板。
- `frontend/src/`: React 前端页面、组件、API 客户端和类型定义。

## Architecture

- 后端遵循 `Controller -> Service -> Repository`，Controller 只做路由、校验和委托。
- Service 承担业务编排；`@Transactional` 只放 Service 层，并保持事务范围最小。
- Repository 继承 Spring Data JPA `JpaRepository`，自定义查询用方法名或 `@Query`。
- 基础设施能力优先放在 `common/` 或 `infrastructure/`，不要散落到业务 Service。
- 对外响应统一使用 `Result<T>`，禁止直接返回 Entity。

## Backend Rules

- 业务异常必须使用 `BusinessException(ErrorCode.XXX, "描述信息")`。
- 全局异常处理器返回 HTTP 200 + `Result.error(code, message)`。
- 请求体优先用不可变 `record`，命名后缀使用 `XxxRequest` / `XxxResponse` / `XxxDTO` / `XxxEntity`。
- Entity 到 DTO/Response 的映射优先使用 MapStruct。
- 使用构造器注入，优先配合 Lombok `@RequiredArgsConstructor`。
- 代码使用 2 空格缩进、无通配符导入、避免内联全限定类名。
- 日志使用 SLF4J 占位符，异常必须作为最后一个参数传入。

## AI And Async Rules

- 获取聊天模型统一走 `LlmProviderRegistry.getChatClientOrDefault(provider)`。
- AI 配置的唯一来源是「设置 → 模型服务 / 语音服务」页与数据库，**不要新增 AI 相关环境变量或 `.env` 条目**，也不要往源码目录/用户主目录写配置镜像文件（历史实现曾把配置写到 `~/.interview-guide/`，但没有加载入口，已删除）。
- Provider 配置按能力（聊天/向量/重排）拆分，存于 `llm_provider_config`（**明文**，加密已移除）；默认指针在 `llm_global_setting`，未显式设置时运行期自动回退到第一个启用且具备对应能力的 Provider，一个可用 Provider 都没有才抛 `BusinessException`。
- 语音 ASR/TTS 平台配置存于 `voice_platform_config`（按 asr/tts 平台分别配置，设置页运维，不占用 Provider 能力表）；OCR 本地模型配置存于 `ocr_platform_config`（OpenAI 兼容端点，如 Ollama 的 GLM-OCR，当前仅预留，文档解析仍走 Apache Tika）。
- 系统不内置预设模型，`application.yml` 不承载 Provider 定义（legacy YAML 轨仅供无数据库场景与测试使用）。
- 结构化输出统一走 `StructuredOutputInvoker`，不要在业务代码里复制重试逻辑。
- Prompt 模板放在 `resources/prompts/`，使用 StringTemplate `.st`。
- LLM、S3、外部 HTTP 调用不得放在数据库事务内。
- Redis Stream 生产/消费使用 `AbstractStreamProducer` / `AbstractStreamConsumer` 模板。
- 异步处理前先校验实体是否存在；实体已删除时 ACK 丢弃。
- 限流使用可重复 `@RateLimit`，不要手写散落的 Redis 限流逻辑。

## Config And Data

- 配置集中在 `application.yml`、`.env` 和 `@ConfigurationProperties` 类中。
- API Key、数据库密码等敏感信息只放 `.env`，不得提交到 Git。
- 不要在 Service 中散落 `@Value`。
- 本地默认后端端口是 `8080`：`server.port: ${SERVER_PORT:8080}`。
- 开发环境 `ddl-auto` 可为 `update`，生产环境不能依赖自动建表。

## Frontend Rules

- API 调用集中在 `frontend/src/api/`，复用 `request.ts` 的 Axios 实例。
- 类型定义放在 `frontend/src/types/`，不要在页面里重复定义共享接口。
- 页面放在 `frontend/src/pages/`，可复用 UI 放在 `frontend/src/components/`。
- 路由常量放在 `frontend/src/constants/routes.ts`。
- 组件交互优先使用现有设计语言和 `lucide-react` 图标。

## Testing

- 后端测试使用 JUnit 5 + Mockito + AssertJ。
- 测试意图用中文 `@DisplayName` 描述，复杂场景用 `@Nested` 分组。
- 集成测试使用 H2 配置；限流相关测试需要真实 Redis。
- 按改动范围选择测试粒度，不要每次改动都跑全量（全量约 2.5 分钟，且主要耗时在无关的语音服务测试）：
  1. `./gradlew :app:compileJava` —— 先确认能编译
  2. `./gradlew :app:test --tests "包名.测试类"` —— 只跑直接相关的类
  3. `./gradlew :app:test --tests "包名.*"` —— 扩大到同包
  4. `./gradlew :app:test --no-daemon` —— 全量，仅限：改动 `common/` 公共基础设施、影响面无法用 `--tests` 圈定、提交/合并前、用户明确要求
- 只改注释、日志文案、单个私有方法实现时，不要跑全量测试。
- 改前端时至少运行 `cd frontend && pnpm run build`。

## Never Do

- 不要 `throw new RuntimeException(...)`，业务失败必须用 `BusinessException`。
- 不要直接返回 Entity 给前端。
- 不要把 `@Value` 散落在 Service 中。
- 不要在事务内调用 LLM、S3 或外部 HTTP。
- 不要同类内部调用 `@Transactional` 方法。
- 不要 `catch (Exception e) {}` 静默忽略。
- 不要循环调用 DB，优先批量查询或批量写入。
- 不要硬编码密钥、Token、数据库密码。
- 不要使用 `Executors.newXxxThreadPool()`，需要线程池时显式配置 `ThreadPoolExecutor`。

## More Rules

- 后端 Java 细则：`.claude/rules/backend.md`
- AI、限流、异步细则：`.claude/rules/ai-and-async.md`
- 前端细则：`.claude/rules/frontend.md`
- 测试粒度与效率：`.claude/rules/testing-efficiency.md`
