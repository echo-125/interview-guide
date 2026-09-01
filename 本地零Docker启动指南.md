# 本地零 Docker 启动指南

> 中间件全走云端（PG + pgvector / Redis / MinIO / 阿里云百炼），本机只跑 Vite + Spring Boot。

## 启动命令

**后端**（PowerShell 7）：

```powershell
cd D:\workspace\agent\interview-guide
.\gradlew :app:bootRun
```

**前端**（另开终端）：

```powershell
cd D:\workspace\agent\interview-guide\frontend
pnpm install
pnpm run dev
```

打开 [http://localhost:5173](http://localhost:5173)，后端 :8080。

## 配置文件

### `.env`（仓库根目录，git 忽略）

- `APP_AI_CONFIG_ENCRYPTION_KEY`：≥32 位随机字符串，**必填**
- `AI_BAILIAN_API_KEY`：语音面试（ASR/TTS）使用；聊天/向量/重排模型不依赖 `.env`
- `POSTGRES_*` / `REDIS_*` / `APP_STORAGE_*`：指向云端

### 模型服务配置（web 界面）

系统**不内置任何预设模型**。启动后打开「设置 → 模型服务」：

- **聊天模型 / 向量模型 / 重排模型** 三个 Tab 分别新增模型并「设为默认」；一个端点可同时声明多种能力，也支持纯向量、纯重排端点。
- 聊天协议支持 OpenAI 兼容（`/chat/completions`）与 Anthropic（`/v1/messages`）；模型名可点「获取模型列表」在线拉取。
- 本地 Ollama 示例：Base URL 填 `http://localhost:11434/v1`，API Key 随意填非空占位（如 `ollama`），向量模型 `qwen3-embedding:4b` + 向量维度 1024（Ollama 支持 `dimensions` 参数）。
- 模型配置加密存放在数据库 `llm_provider_config`，保存后即时生效，无需重启。

### `app/src/main/resources/application.yml`

- jdbc url 追加 `?sslmode=${POSTGRES_SSLMODE:disable}`
- Redisson 加 `password: "${REDIS_PASSWORD:}"`
- 向量维度默认 1024，如 Embedding 模型输出不同维度，在 `.env` 加 `APP_VECTOR_DIMENSIONS=<维度>`（需与向量库维度一致；换维度时若向量表已有数据，启动会报错并提示处理方式）

### `settings.gradle`

- `foojay-resolver-convention` 升到 `0.10.0`

### `gradle.properties`（仓库根目录，新建）

```properties
org.gradle.java.installations.paths=C:/Program Files/Java/jdk-25.0.4.101-hotspot
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
| `APP_AI_CONFIG_ENCRYPTION_KEY 未配置`    | `.env` 里必须设值                                    |
| `尚未配置模型服务…` / `模型 'x' 不存在或未启用` | 设置页添加模型并「设为默认」；默认未设置时会自动回退到第一个可用模型，一个模型都没有才报此错 |

## 收尾

```powershell
.\gradlew --stop   # 停 Gradle daemon 和 bootRun
```
