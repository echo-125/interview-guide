@echo off
chcp 65001 >nul
setlocal EnableExtensions
echo Starting Interview Guide (Low Memory Mode)...

rem ---------------------------------------------------------------------------
rem NOTE: keep this file ASCII-only. cmd.exe parses batch files with the local
rem ANSI codepage (GBK on zh-CN systems), so UTF-8 Chinese comments get decoded
rem as garbage and break line parsing.
rem
rem Load .env (KEY=VALUE lines, '#' comments) from the script directory so the
rem packaged jar sees POSTGRES_*/REDIS_*/AI_* variables, same as bootRun does.
rem ---------------------------------------------------------------------------
if not exist "%~dp0.env" (
  echo [WARN] .env not found beside run.bat, falling back to application.yml defaults.
) else (
  for /f "usebackq eol=# tokens=1,* delims==" %%A in ("%~dp0.env") do call :setenv "%%A" "%%B"
)

rem JVM flags:
rem   -Xms128m -Xmx384m          heap capped at 128-384MB
rem   -XX:MaxMetaspaceSize=256m  class metadata cap
rem   -Xss256k                   smaller thread stacks
rem   -XX:+UseSerialGC           smallest-footprint GC for 1-core / low-RAM hosts
rem To give the app more memory, raise -Xmx / -XX:MaxMetaspaceSize first.
rem
rem The packaged jar targets Java 25 (class file 69). Prefer %JAVA_HOME%
rem when it is set and points to a real JDK; otherwise fall back to
rem whatever java is on PATH.
rem Logs: file appender writes to logs/app.log (created relative to this
rem directory); console output stays visible.

set "JAVA_EXE="
if defined JAVA_HOME set "JAVA_EXE=%JAVA_HOME%\bin\java.exe"
if not exist "%JAVA_EXE%" (
  echo [WARN] JAVA_HOME missing or not a JDK, falling back to PATH java.
  set "JAVA_EXE=java"
)
if not exist logs mkdir logs

rem ---------------------------------------------------------------------------
rem Rebuild app.jar before every start so it always carries fresh frontend and
rem backend artifacts (bootJar triggers pnpm build + static sync + jar pack).
rem Gradle skips the pnpm build automatically when frontend sources unchanged.
rem Gradle resolves the JDK via gradle.properties (machine-local); on failure
rem the start is aborted instead of silently serving a stale jar.
rem ---------------------------------------------------------------------------
rem JAVA_HOME is used for the Gradle build only when already set in the
rem environment (no hardcoded JDK path here; set JAVA_HOME to your JDK 25
rem install if java is not first on PATH).
if defined JAVA_HOME set "PATH=%JAVA_HOME%\bin;%PATH%"
echo Building fresh app.jar (frontend + backend), this may take a moment...
call gradlew.bat :app:bootJar --console=plain -q --no-daemon
if errorlevel 1 (
  echo [ERROR] Build failed, refusing to start with a stale app.jar.
  pause
  exit /b 1
)

"%JAVA_EXE%" -server -Xms128m -Xmx384m -XX:MaxMetaspaceSize=256m -Xss256k -XX:+UseSerialGC -Dfile.encoding=UTF-8 -Dlogging.file.name=logs/app.log -jar app\build\libs\app.jar
pause
goto :eof

:setenv
set "_k=%~1"
set "_v=%~2"
if not defined _k goto :eof
if not defined _v goto :eof
rem tolerate docker-env style quoted values
set "_v=%_v:"=%"
set "%_k%=%_v%"
goto :eof
