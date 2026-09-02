@echo off
chcp 65001 >nul
echo Starting Interview Guide (Low Memory Mode)...

REM 低内存模式参数说明：
REM   -Xms128m -Xmx384m          堆内存限制在 128~384MB
REM   -XX:MaxMetaspaceSize=256m  元空间上限（Spring Boot + 全部依赖的类元数据）
REM   -Xss256k                   单线程栈缩小
REM   -XX:+UseSerialGC           单核低内存场景最省内存的 GC
REM   -XX:MaxRAMPercentage 不适用（Xmx 已显式指定）
REM 如需调大内存，优先修改 -Xmx 与 -XX:MaxMetaspaceSize。

java -server -Xms128m -Xmx384m -XX:MaxMetaspaceSize=256m -Xss256k -XX:+UseSerialGC -Dfile.encoding=UTF-8 -jar app\build\libs\app.jar
pause
