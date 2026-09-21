# 本地零 Docker 启动指南

> 中间件全走云端（PG + pgvector / Redis / MinIO），本机只跑 Vite + Spring Boot。

## 启动

在**项目根目录**（clone 下来的仓库目录）执行：

**后端**（PowerShell 7）：

```powershell
.\gradlew :app:bootRun        # :8080
```

**前端**（另开终端）：

```powershell
cd frontend
pnpm install
pnpm run dev                 # :5173，自动代理 /api、/ws 到 :8080
```

打开 <http://localhost:5173>。

## 配置

### `.env`（根目录，git 忽略）

只放基础设施连接信息（`POSTGRES_*` / `REDIS_*` / `APP_STORAGE_*`，见 `.env.example`），不含任何 AI 配置。

### AI 配置（全部在设置页，无需环境变量）

系统**不内置任何预设模型**。启动后打开「设置」：

- **模型服务**：聊天 / 向量 / 重排三个 Tab 分别新增模型并「设为默认」；配置落库 `llm_provider_config`，保存即生效。本地 Ollama 示例：Base URL `http://localhost:11434/v1`、API Key 填非空占位、向量模型 `qwen3-embedding:4b` + 维度 1024。
  ⚠️ Provider Key 为**明文存储**，请确保数据库访问受控。
- **语音服务**：选择 ASR / TTS 平台（DashScope 为默认）并填写参数，配置落库 `voice_platform_config`，重启保留。
- **OCR 本地模型**（预留）：配置 OpenAI 兼容端点（如 Ollama 的 GLM-OCR），提供可用性测试，不参与现有文档解析。

### `gradle.properties`（根目录，已 git 忽略，需手动创建）

机器相关（含本机 JDK 25 绝对路径），按实际安装位置填写：

```properties
org.gradle.java.installations.paths=<你的JDK25绝对路径>
org.gradle.java.installations.auto-detect=false
org.gradle.java.installations.auto-download=false
```

### `application.yml`

- jdbc url 追加 `?sslmode=${POSTGRES_SSLMODE:disable}`
- Redisson 加 `password: "${REDIS_PASSWORD:}"`

## 启动成功标志

- `HikariPool-1 - Start completed.` — PG
- `5 connections initialized for <redis地址>:<port>` — Redis
- `存储桶已存在: interview-guide` — S3
- `Started App in X.X seconds`

健康检查：`curl http://localhost:8080/actuator/health` → `{"status":"UP"}`

## 排错

| 报错 | 处理 |
| --- | --- |
| `JvmVendorSpec.IBM_SEMERU` | 缺 `gradle.properties`，按上面建好再 `.\gradlew --stop` |
| `FATAL: SSL connection is required` | jdbc url 没加 `?sslmode=...` |
| `password authentication failed` | `.env` 密码错 |
| `ERR invalid password` | Redisson 缺 `password:` 字段 |
| `extension "vector" is not available` | 云 PG 没装 pgvector 扩展 |
| `NoSuchBucket` | MinIO 控制台建桶 `interview-guide` |
| 语音面试无声音 | 「设置 → 语音服务」未配置或平台不可达（保存后点「测试」验证） |
| `尚未配置模型服务…` | 设置页添加模型并「设为默认」；默认未设置时自动回退到第一个可用模型 |

## 收尾

```powershell
.\gradlew --stop   # 停 Gradle daemon 和 bootRun
```
