# 测试效率

## 按改动范围选择测试，不要无脑跑全量

全量 `./gradlew :app:test` 约 2.5 分钟，且大部分耗时与本仓库改动无关
（`QwenAsrService` 两个套件就占约 121 秒）。改一行代码就跑全量会严重拖慢迭代。

按以下顺序逐级扩大范围，**上一级通过且改动范围明确时才进入下一级**：

```bash
# 1. 只编译（秒级）——改完先确认能编译
./gradlew :app:compileJava

# 2. 只跑直接相关的测试类（秒级）
./gradlew :app:test --tests "interview.guide.common.ai.StructuredOutputInvokerTest"

# 3. 只跑同一包/模块的测试
./gradlew :app:test --tests "interview.guide.common.ai.*"

# 4. 全量（仅在下面「必须跑全量」的情形才执行）
./gradlew :app:test --no-daemon
```

前端同理：改单个组件优先 `pnpm run build` 或定向类型检查，不必每次跑完整构建。

## 必须跑全量的情形

- 改动 `common/` 下的公共基础设施（被多模块复用，影响面不可枚举）
- 改动影响面无法用 `--tests` 精确圈定（如全局配置、基类、切面）
- 准备提交 / 合并前
- 用户明确要求

## 反例（不要这样做）

- 改一个私有方法实现，跑全量测试
- 只改了注释/日志文案，跑全量测试
- 一次会话内为了「确认没坏」重复跑多次全量

## 提速手段

- `--tests` 定向：每次都能省下 2 分钟以上
- 去掉 `--no-daemon` 可复用守护进程（本地迭代时）
- 若某测试类异常慢且与改动无关，在回报里单独说明，不要让它掩盖真实问题

## 测试结束后必须回收进程

`gradlew` 和 `bootRun` 都会常驻 JVM。反复跑测试会在后台累积多个 JDK 进程持续占用内存
（实测曾观察到 5 个 STOPPED 状态的守护进程残留）。

每轮测试结束后执行：

```bash
./gradlew --stop                                      # 停止 Gradle 守护进程
powershell -NoProfile -Command "Get-Process java"     # 确认无残留 java 进程
```

- 不要并发跑多个 `./gradlew` 任务，每个都会各自拉起守护进程。
- `bootRun` 启动后端验证完，同样要停掉对应进程。
- 汇报结果时顺带说明进程已清理。
