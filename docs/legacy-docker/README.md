# 历史 Docker 部署（归档）

> v1.0 起项目改为**本地零 Docker 启动**（中间件走云端，本机只跑 Vite + Spring Boot，见根目录
> [本地零Docker启动指南.md](../../本地零Docker启动指南.md)）。
> 本目录为旧版 Docker 部署文件的归档，**仅作历史参考，不再作为推荐启动方式**。

## 归档内容

- `docker-compose.yml`：完整一键部署（前端 Nginx + 后端 + PostgreSQL + Redis + MinIO）
- `docker-compose.dev.yml`：本地开发依赖（PostgreSQL + Redis + RustFS）
- `.dockerignore`：Docker 构建上下文过滤
- `app/Dockerfile` / `frontend/Dockerfile`：前后端镜像
- `docker/postgres/init.sql`：PostgreSQL 初始化脚本

## 背景

旧版通过 `docker compose up -d` 一键拉起全部依赖；v1.0 迁移为零 Docker 启动后，
这些文件从仓库根目录移入本目录保留，避免删除历史产物。