# 本地零 Docker 启动指南

> 中间件全走云端（PG + pgvector / Redis / MinIO / 阿里云百炼），本机只跑 Vite + Spring Boot。

## 启动命令

> 下面的命令都在**项目根目录**（即 `cd` 到 clone 下来的仓库目录）执行。

**后端**（PowerShell 7）：

```powershell
.\gradlew :app:bootRun
```

**前端**（另开终端）：

```powershell
cd frontend
pnpm install
pnpm run dev
```

打开 [http://localhost:5173](http://localhost:5173)，后端 :8080。

## 配置文件

### `.env`（仓库根目录，git 忽略）

只承载基础设施连接信息，不含任何 AI 配置：

- `POSTGRES_*` / `REDIS_*` / `APP_STORAGE_*`：指向云端

### AI 配置（web 界面）

系统**不内置任何预设模型**，也不读取 AI 相关环境变量。

**模型服务**：启动后打开「设置 → 模型服务」：

- **聊天模型 / 向量模型 / 重排模型** 三个 Tab 分别新增模型并「设为默认」；一个端点可同时声明多种能力，也支持纯向量、纯重排端点。
- 聊天协议支持 OpenAI 兼容（`/chat/completions`）与 Anthropic（`/v1/messages`）；模型名可点「获取模型列表」在线拉取。
- 本地 Ollama 示例：Base URL 填 `http://localhost:11434/v1`，API Key 随意填非空占位（如 `ollama`），向量模型 `qwen3-embedding:4b` + 向量维度 1024（Ollama 支持 `dimensions` 参数）。
- 模型配置存放在数据库 `llm_provider_config`，保存后即时生效，无需重启。
- ⚠️ Provider Key 当前为**明文存储**，请确保数据库访问受控。

**语音服务**：「设置 → 语音服务」分别选择 **ASR / TTS 平台**并填写对应 API 参数
（DashScope / Qwen3 语音模型为默认实现）。配置落库 `voice_platform_config`，保存后即时生效，
**重启后保留**，支持连通性测试。

**OCR 本地模型**（预留）：「设置 → OCR 本地模型」配置任意 **OpenAI 兼容端点**，
例如本机 Ollama 的 GLM-OCR 模型（Base URL `http://localhost:11434/v1`，模型名 `GLM-OCR`）。
当前仅提供可用性测试入口，不参与现有文档解析逻辑（解析仍走 Apache Tika）；配置落库 `ocr_platform_config`，重启后保留。

### `app/src/main/resources/application.yml`

- jdbc url 追加 `?sslmode=${POSTGRES_SSLMODE:disable}`
- Redisson 加 `password: "${REDIS_PASSWORD:}"`
- 向量维度默认 1024，如 Embedding 模型输出不同维度，在 `.env` 加 `APP_VECTOR_DIMENSIONS=<维度>`（需与向量库维度一致；换维度时若向量表已有数据，启动会报错并提示处理方式）

### `settings.gradle`

- `foojay-resolver-convention` 升到 `0.10.0`

### `gradle.properties`（仓库根目录，已 git 忽略）

该文件**机器相关**（内含本机 JDK 绝对路径），已在 `.gitignore` 中忽略、不随仓库分发。首次在本机运行时需手动创建：

```properties
# paths 必须为本机 Java 25 的安装绝对路径，按机器实际位置填写，
# 例如：C:/Program Files/Java/jdk-25.x.x-hotspot
org.gradle.java.installations.paths=<你的JDK25安装绝对路径>
org.gradle.java.installations.auto-detect=false
org.gradle.java.installations.auto-download=false
```

## 启动成功标志

- `HikariPool-1 - Start completed.` — PG
- `5 connections initialized for 106.52.109.128:6379` — Redis
- `存储桶已存在: interview-guide` — S3
- `Tomcat started on port 8080`
- `Started App in X.X seconds`

健康检查：`curl http://localhost:8080/actuator/health` → `{"status":"UP"}`

## 排错

| 报错                                    | 处理                                              |
| ------------------------------------- | ----------------------------------------------- |
| `JvmVendorSpec.IBM_SEMERU`            | 缺 `gradle.properties`，按上面建好再 `.\gradlew --stop` |
| `FATAL: SSL connection is required`   | jdbc url 没加 `?sslmode=...`                      |
| `password authentication failed`      | `.env` 密码错                                      |
| `ERR invalid password`                | Redisson 缺 `password:` 字段                       |
| `extension "vector" is not available` | 云 PG 没装 pgvector 扩展                             |
| `NoSuchBucket`                        | MinIO 控制台建桶 `interview-guide`                   |
| 语音面试无声音                          | 「设置 → 语音服务」未配置 ASR/TTS 平台或平台不可达（保存后点「测试」验证） |
| `尚未配置模型服务…` / `模型 'x' 不存在或未启用` | 设置页添加模型并「设为默认」；默认未设置时会自动回退到第一个可用模型，一个模型都没有才报此错 |

## 收尾

```powershell
.\gradlew --stop   # 停 Gradle daemon 和 bootRun
```
