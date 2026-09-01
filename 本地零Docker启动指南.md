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
- `AI_BAILIAN_API_KEY`：占位即可，web 界面填真实 Key
- `POSTGRES_*` / `REDIS_*` / `APP_STORAGE_*`：指向云端

### `app/src/main/resources/application.yml`

- jdbc url 追加 `?sslmode=${POSTGRES_SSLMODE:disable}`
- Redisson 加 `password: "${REDIS_PASSWORD:}"`

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

## 收尾

```powershell
.\gradlew --stop   # 停 Gradle daemon 和 bootRun
```
