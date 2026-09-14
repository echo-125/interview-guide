#!/bin/bash
echo "Starting Interview Guide (Low Memory Mode)..."
cd "$(dirname "$0")" || exit 1

# JVM flags:
#   -Xms128m -Xmx384m          heap capped at 128-384MB
#   -XX:MaxMetaspaceSize=256m  class metadata cap
#   -Xss256k                   smaller thread stacks
#   -XX:+UseSerialGC           smallest-footprint GC for 1-core / low-RAM hosts
# To give the app more memory, raise -Xmx / -XX:MaxMetaspaceSize first.

# File logs go to ./logs (console output stays visible).
mkdir -p logs

# Rebuild app.jar before every start so it always carries fresh frontend and
# backend artifacts (bootJar triggers pnpm build + static sync + jar pack).
# Gradle skips the pnpm build automatically when frontend sources unchanged.
# JDK 25 is exported as JAVA_HOME for the Gradle build when present; on build
# failure the start is aborted instead of silently serving a stale jar.
if [ -d "/c/Program Files/Java/jdk-25.0.4.101-hotspot" ]; then
  export JAVA_HOME="/c/Program Files/Java/jdk-25.0.4.101-hotspot"
  export PATH="$JAVA_HOME/bin:$PATH"
fi
echo "Building fresh app.jar (frontend + backend), this may take a moment..."
if ! ./gradlew :app:bootJar --console=plain -q --no-daemon; then
  echo "[ERROR] Build failed, refusing to start with a stale app.jar."
  exit 1
fi

# Load .env (KEY=VALUE, '#' comments) so the jar sees POSTGRES_*/REDIS_*/AI_* vars.
# Strip CR to tolerate CRLF files, and strip a wrapping pair of quotes.
set -a
if [ -f .env ]; then
  while IFS='=' read -r _k _v; do
    case "$_k" in ''|\#*) continue ;; esac
    _v="${_v%$'\r'}"
    case "$_v" in \"*\") _v="${_v#\"}" ; _v="${_v%\"}" ;; \'*\') _v="${_v#\'}" ; _v="${_v%\'}" ;; esac
    export "$_k=$_v"
  done < .env
else
  echo "[WARN] .env not found beside run.sh, falling back to application.yml defaults."
fi
set +a

exec java -server -Xms128m -Xmx384m -XX:MaxMetaspaceSize=256m -Xss256k -XX:+UseSerialGC -Dfile.encoding=UTF-8 -Dlogging.file.name=logs/app.log -jar app/build/libs/app.jar
