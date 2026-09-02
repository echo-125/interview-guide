#!/bin/bash
echo "Starting Interview Guide (Low Memory Mode)..."

# 低内存模式参数说明：
#   -Xms128m -Xmx384m          堆内存限制在 128~384MB
#   -XX:MaxMetaspaceSize=256m  元空间上限（Spring Boot + 全部依赖的类元数据）
#   -Xss256k                   单线程栈缩小
#   -XX:+UseSerialGC           单核低内存场景最省内存的 GC
# 如需调大内存，优先修改 -Xmx 与 -XX:MaxMetaspaceSize。

exec java -server -Xms128m -Xmx384m -XX:MaxMetaspaceSize=256m -Xss256k -XX:+UseSerialGC -Dfile.encoding=UTF-8 -jar app/build/libs/app.jar
