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
rem The packaged jar targets Java 25 (class file 69). Use the local JDK 25
rem install explicitly because PATH may point to an older Java. Falls back
rem to PATH java only if the JDK 25 path does not exist.
rem Logs: file appender writes to logs/app.log (created relative to this
rem directory); console output stays visible.

set "JAVA_EXE=C:\Program Files\Java\jdk-25.0.4.101-hotspot\bin\java.exe"
if not exist "%JAVA_EXE%" (
  echo [WARN] JDK 25 not found at "%JAVA_EXE%", falling back to PATH java.
  set "JAVA_EXE=java"
)
if not exist logs mkdir logs

rem ---------------------------------------------------------------------------
rem Rebuild app.jar before every start so it always carries fresh frontend and
rem backend artifacts (bootJar triggers pnpm build + static sync + jar pack).
rem Gradle skips the pnpm build automatically when frontend sources unchanged.
rem JDK 25 is exported as JAVA_HOME for the Gradle build; on failure the start
rem is aborted instead of silently serving a stale jar.
rem ---------------------------------------------------------------------------
if exist "C:\Program Files\Java\jdk-25.0.4.101-hotspot" set "JAVA_HOME=C:\Program Files\Java\jdk-25.0.4.101-hotspot"
rem single-line ifs on purpose: %VAR% inside a parenthesized block expands at parse time
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
