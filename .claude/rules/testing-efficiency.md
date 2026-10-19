# 测试与验证

## 当前状态：无测试过渡期

旧测试已按计划**整体移除**，目的是重建一套更贴合现状的测试，**不是**放弃测试。
这是主动的临时状态，不要当成项目的长期约定。

已移除（勿假设其存在）：

- 后端 `app/src/test/`（原 63 个测试类 + `application-test.yml` + 测试资源）
- 前端 `frontend/src/**/*.test.ts`（26 个文件）、`frontend/e2e/`
- `app/build.gradle` 的测试依赖（JUnit / Testcontainers / H2）与 `test` task 配置
- `gradle/libs.versions.toml` 的 `junit-jupiter` 条目
- `frontend/package.json` 的 8 个 test 脚本、`@playwright/test` 与 `tsx` 依赖、`frontend/playwright.config.ts`

所以当前**不存在** `./gradlew :app:test`、`pnpm run test:*` 这类命令，不要凭空编写；
也不要因为看不到测试目录就认为「本项目不写测试」或阻挠重新引入测试。

## 过渡期的验证要求

```bash
# 1. 后端必须编译通过（秒级）
./gradlew :app:compileJava

# 2. 改了前端必须构建通过（含 tsc 类型检查）
cd frontend && pnpm run build
```

第 3 项无法省略：**涉及运行时行为的改动必须启动应用人工验证**。

高风险改动包括：

- AI 调用（Provider 切换、rerank、结构化输出）
- 向量检索与维度变更（`APP_VECTOR_DIMENSIONS`、pgvector 索引）
- Redis Stream 异步任务（向量化、题目生成、评估）
- 数据库 schema 与数据迁移

验证方式：`./gradlew :app:bootRun` 启后端，实际操作页面走完整链路，确认数据库落库结果正确。

## 重建测试时

有意重建测试时，必须在**同一提交**内恢复配套基础设施，否则测试跑不起来：

1. `app/build.gradle`：恢复测试依赖与 `tasks.named('test') { useJUnitPlatform() }`
2. `gradle/libs.versions.toml`：恢复 `junit-jupiter` 版本与库条目
3. 前端：恢复 test 脚本与依赖（`tsx`，E2E 需要 `@playwright/test` + `playwright.config.ts`）
4. 同步删除本文件的「无测试过渡期」表述，并更新 `AGENTS.md` 的 Testing 节

旧测试可从删除前的 Git 历史取回作参考，但它们多数已与当前代码脱节，**不要无脑还原**：
当时 63 个后端测试里有 4 个是整类 `@Disabled` 的占位壳、1 个是恒真断言，
还有 1 个是往线上库写数据的导入脚本（已单独删除）。

## 进程回收

`gradlew` 和 `bootRun` 都会常驻 JVM。反复启动会在后台累积多个 JDK 进程持续占用内存
（实测曾观察到 5 个 STOPPED 状态的守护进程残留）。

验证结束后执行：

```bash
./gradlew --stop                                      # 停止 Gradle 守护进程
powershell -NoProfile -Command "Get-Process java"     # 确认无残留 java 进程
```

- 不要并发跑多个 `./gradlew` 任务，每个都会各自拉起守护进程。
- `bootRun` 验证完要停掉对应进程，汇报时说明已清理。