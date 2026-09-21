<div align="center">

**智能 AI 面试官平台** - 基于大语言模型的简历分析、模拟面试和 RAG 知识库系统

[![Java](https://img.shields.io/badge/Java-25-orange?logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1-green?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-pgvector-336791?logo=postgresql)](https://www.postgresql.org/)


</div>


---

## 项目介绍

InterviewGuide 是一个集成了简历分析、模拟面试（文字 + 语音）、面试安排、知识库管理、知识库题库面试和多模型配置的智能面试辅助平台。系统利用大语言模型（LLM）、向量数据库、Redis Stream 异步任务和实时语音技术，为求职者、HR 和培训机构提供智能化的简历评估、面试练习、知识库问答和面试日程管理能力。

## 系统架构

![系统架构图](https://oss.javaguide.cn/xingqiu/pratical-project/interview-guide/interview-guide-architecture-diagram.png)

## 配套教程

本项目承诺**完整功能免费开源**，也不会做所谓的 Pro 版或“付费解锁核心功能”之类的设计。

如果你想学习这个项目，或者希望把它作为个人项目经历 / 毕设选题，我也整理了一套相对细致的教程：从基础设施搭建、核心业务实现，到最后如何在面试中讲清楚思路与亮点，尽量把容易卡住的地方讲透。

如果你确实需要更系统的辅导，可以点这里了解详情（**教程为付费内容**，主要是想覆盖一些时间成本，望理解，感谢支持）：[《SpringAI 智能面试平台+RAG 知识库》](https://javaguide.cn/zhuanlan/interview-guide.html)。

## 技术栈

### 后端技术

| 技术                  | 版本  | 说明                          |
| --------------------- | ----- | ----------------------------- |
| Spring Boot           | 4.1.0 | 应用框架                      |
| Java                  | 25    | 开发语言（虚拟线程）          |
| Spring AI             | 2.0.0 | AI 集成框架、OpenAI 兼容模型接入 |
| Spring AI Agent Utils | 0.10.0 | Skill 资源加载、Advisor 能力扩展 |
| PostgreSQL + pgvector | 14+   | 关系数据库 + 向量存储（Compose 默认 PG16） |
| Redis + Redisson      | 6+ / 4.0.0 | 缓存 + 消息队列（Stream） |
| Apache Tika           | 2.9.2 | 文档解析                      |
| iText 8               | 8.0.5 | PDF 导出                      |
| MapStruct             | 1.6.3 | 对象映射                      |
| SpringDoc OpenAPI     | 3.0.2 | API 接口文档                  |
| DashScope SDK         | 2.22.7 | 语音识别/合成默认实现（ASR/TTS 平台可在设置页切换）|
| AWS S3 SDK            | 2.29.51 | S3 兼容对象存储（MinIO/RustFS）|
| WebSocket             | -     | 语音面试实时双向通信          |
| Gradle                | 9.6.1 | 构建工具                      |

技术选型常见问题解答：

1. 数据存储为什么选择 PostgreSQL + pgvector？PG 的向量数据存储功能够用了，精简架构，不想引入太多组件。
2. 为什么引入 Redis？
   - Redis 替代 `ConcurrentHashMap` 实现面试会话的缓存。
   - 基于 Redis Stream 实现简历分析、知识库向量化等场景的异步（还能解耦，分析和向量化可以使用其他编程语言来做）。不使用 [Kafka](https://javaguide.cn/high-performance/message-queue/kafka-questions-01.html) 这类成熟的消息队列，也是不想引入太多组件。
3. 构建工具为什么选择 Gradle？个人更喜欢用 Gradle，也写过相关的文章：[Gradle核心概念总结](https://javaguide.cn/tools/gradle/gradle-core-concepts.html)。

### 前端技术

| 技术              | 版本  | 说明           |
| ----------------- | ----- | -------------- |
| React             | 18.3  | UI 框架        |
| TypeScript        | 5.6   | 开发语言       |
| Vite              | 5.4   | 构建工具       |
| Tailwind CSS      | 4.1   | 样式框架       |
| React Router      | 7.11  | 路由管理       |
| Framer Motion     | 12.23 | 动画库         |
| Recharts          | 3.6   | 图表库         |
| Lucide React      | 0.468 | 图标库         |
| React Big Calendar| 1.19  | 面试日历组件   |
| React Virtuoso    | 4.18  | RAG 聊天虚拟列表 |
| React PDF Renderer| 4.9   | A4 简历实时预览（三模板） |
| docx             | 9.7   | DOCX 导出        |
| PDF.js (pdfjs-dist)| 3.11 | PDF 原文件预览   |
| Harfbuzz.js      | 1.6   | PDF 中文字形整形 |
| Noto Sans SC     | 5.3   | PDF 中文字体     |
| JSZip            | 3.10  | DOCX 打包        |
| pnpm              | 10.26 | 前端包管理器   |

## 功能特性

### 简历管理模块

- **多格式解析**：支持 PDF、DOCX、DOC、TXT 等多种简历格式。
- **异步处理流**：基于 Redis Stream 实现异步简历分析，支持实时查看处理进度（待分析/分析中/已完成/失败）。
- **稳定性保障**：内置分析失败自动重试机制（最多 3 次）与基于内容哈希的重复检测。
- **可解释诊断**：首屏给出 AI 一句话结论（headline），与总分、优势亮点、最大风险并列；五个评分维度（项目经验 40 / 技能匹配 20 / 内容完整性 15 / 结构清晰度 15 / 表达专业性 10）逐项说明「为什么是这个分」与主要缺口，关键结论附带证据并标注置信度三态（已确认 / 推测 / 缺失），避免把推测当事实。
- **优先行动清单**：AI 按预期收益排序给出最值得修改的 3 件事，每项标注预计提升分与理由，并预估全部采纳后的分数区间（附提升依据明细，可逐项追溯）。
- **逐条经历体检**：依据 STAR 原则挑选代表性经历逐条审计，输出「原句 → 改写」对照与问题标签（弱动词开头、缺量化结果、技术堆砌、表述过长等），支持逐条采纳、跳过或撤销，并以字符级 Diff 预览修改前后差异。
- **术语规范扫描**：内置 `ResumeTermChecker` 词表做确定性扫描，自动识别技术名词的大小写与连写变体（如 `springboot` → `Spring Boot`），零模型成本、零遗漏，给出规范写法与行号定位。
- **招聘方视角**：模拟招聘官 10 秒快速筛选简历，给出第一印象、通过 / 存疑 / 不通过预判与主要顾虑，并据此提示面试可能被追问的方向。
- **简历原文件预览**：直接内嵌预览 PDF 原版式，非 PDF 格式回退为解析后的文本，同时支持新窗口打开与下载原文件。
- **整篇重写**：基于简历原文与最新诊断结果一键生成优化后全文，附修改概述，支持复制与下载。
- **结构化智能编辑工作区**：真实 PDF/DOCX → `ResumeDocument` → 结构化编辑器 → A4 实时预览，全程**不修改原始文件**；支持 Developer（程序员单栏）/ Classic（经典单栏）/ ATS（极简可解析）三种版式一键切换，并提供内容保留率指标（解析质量可视化）。
- **工作区自动保存 + 撤销/重做**：编辑过程在浏览器会话内自动保存，刷新后可恢复上次编辑；AI 建议应用与手动编辑并入统一修订记录，支持逐级撤销 / 重做，AI 修改可一键撤销且不会覆盖后续手动编辑。
- **AI 建议结构化应用**：建议卡支持「定位到编辑器 → 原文/改写字符级对照 → 一键采用修改 / 撤销此 AI 修改」闭环；已过期或无法映射的建议有兜底提示，避免静默修改错位置。
- **高质量导出**：PDF 导出采用手工折行（`cjkWrap`）从源头避免游离连字符与超宽行溢出；DOCX 导出与 A4 预览版式保持一致。
- **分析报告导出**：支持将 AI 分析结果一键导出为结构化 PDF 报告（含 AI 结论、优先行动项、逐条体检、术语检查与招聘方视角）。
- **JD 匹配诊断**：粘贴目标岗位 JD，AI 对比简历输出匹配度总分、技能缺口清单（含严重程度与证据置信度）、薄弱点与面试前补强建议；诊断结果保留历史可回看，并自动注入后续模拟面试出题。

### 模拟面试模块

- **Skill 驱动出题**：内置 10+ 面试方向（Java 后端、阿里/字节/腾讯专项、前端、Python、算法、系统设计、测开、AI Agent 等），每个方向由 `SKILL.md` 定义考察范围、难度分布和参考知识库。
- **历史题目去重**：出题时自动排除已有会话中问过的题目，避免重复考察。
- **面试阶段时长联动**：总时长滑块拖动后，各阶段（自我介绍、技术考察、项目深挖、反问环节）按时比自动分配。
- **智能追问流**：支持配置多轮智能追问（默认 1 条），模拟多轮问答场景。
- **统一评估架构**：文字面试和语音面试共用同一套评估引擎（分批评估 + 结构化输出 + 二次汇总 + 降级兜底），评估结果可对比。
- **报告一键导出**：支持异步生成并导出详细的 PDF 模拟面试评估报告。
- **面试中心入口**：面试中心页整合文字面试和语音面试入口，支持继续面试和重新面试。
- **薄弱点自动注入出题**：基于简历的 JD 匹配诊断结果（技能缺口、薄弱点）自动融入出题 Prompt，针对性考察候选人短板，无诊断数据时行为不变。

### 面试安排模块

- **邀请解析**：规则 + AI 双引擎，支持飞书/腾讯会议/Zoom 格式，自动提取公司、岗位、时间、会议链接
- **日历管理**：日/周/月视图 + 拖拽调整 + 列表视图
- **状态流转**：定时任务自动过期，手动标记待面试/已完成/已取消
- **面试提醒**：可配置提醒，避免错过面试

### 语音面试模块

实时语音对话面试，WebSocket + 千问3 语音模型（ASR/TTS/LLM 统一 API Key）：

- **实时流式对话**：句子级并发 TTS，边生成边合成边播放，首包延迟 200ms
- **服务端 VAD**：自动断句，实时字幕（含中间结果）
- **回声防护 + 手动提交**：避免 AI 语音被误录入
- **多轮上下文记忆 + 暂停/恢复**：超时自动暂停
- **Micrometer 埋点**：TTS/ASR 延迟、会话时长等指标

> **已知问题**：端到端延迟偏高（服务端音频中转）、无耳机时回声泄漏、TTS 音色单一、弱网音频断续。后续计划探索 WebRTC、客户端 VAD 降噪、端到端语音模型等方案。

### 知识库管理模块

- **文档智能处理**：支持 PDF、DOCX、Markdown 等多种格式文档的自动上传、分块与异步向量化。
- **RAG 检索增强**：集成 pgvector，通过查询改写、相似度阈值和 TopK 策略提升 AI 问答的准确性与专业度。
- **流式响应交互**：基于 SSE（Server-Sent Events）技术实现打字机式流式响应。
- **智能问答对话**：支持会话管理、置顶、多知识库关联、Markdown 展示和虚拟列表渲染。
- **知识库运维**：支持分类管理、下载、重新向量化、搜索和统计信息展示。

### 知识库题库与面试模块

- **基于知识库生成题目**：从已向量化文档生成主问题、参考答案、关键点、评分标准和追问，并按方向与难度组织题库。
- **异步生成与质量提示**：题目生成任务通过 Redis Stream 异步执行；生成不足时保留草稿，并展示实际追问数与目标追问数，避免静默丢失题目。
- **完整题库维护**：支持题目搜索、筛选、分页、手动新增、编辑、删除，以及草稿、已启用、已归档状态的单题或批量管理。
- **严格面试容量校验**：开始面试前按方向、难度、主问题数和每题追问数实时计算可用容量；追问数量是硬约束，容量不足的选项会直接禁用，后端同时进行兜底校验。
- **知识库专项面试**：从已启用题目中抽取主问题和追问，完整记录作答过程，并复用统一评估引擎异步生成总分、逐题评价、优势和改进建议。
- **评估与记录闭环**：交卷后展示评估进度，完成后自动进入本次面试详情；支持方向、时间、完成状态筛选、表现趋势统计和 PDF 报告导出。

### 多模型与系统设置模块

- **按能力管理模型**：模型服务按聊天 / 向量 / 重排三类能力独立管理，一个 Provider 可同时声明多种能力，也支持纯向量、纯重排等单一能力端点；系统不内置任何预设模型，全部由用户在设置页自行添加。
- **双协议与精细化配置**：聊天模型支持 OpenAI 兼容（`/chat/completions`）与 Anthropic（`/v1/messages`）两种协议，可从端点在线拉取模型列表，支持 temperature / Max Tokens / Top P 参数。
- **按能力独立设默认**：聊天、向量、重排各自设置默认模型；默认未显式设置时自动回退到第一个可用的对应能力模型。模拟面试、简历分析、知识库出题/面试、RAG 问答等页面均支持临时切换模型。
- **RAG 检索重排**：配置默认重排模型后，知识库问答在向量召回后自动对候选片段重排（支持 Cohere 兼容与百炼原生两种格式），重排失败自动回退向量排序。
- **向量维度可配置**：通过 `APP_VECTOR_DIMENSIONS` 配置 pgvector 向量维度（默认 1024），启动时自动对齐表结构；表中已有数据且维度不一致时拒绝启动并给出处理指引。
- **语音平台配置（通用化）**：ASR / TTS 不再绑定单一平台，改为通用的「语音平台 API」配置——设置页分别选择 ASR / TTS 平台并填写对应 API 参数，DashScope（Qwen3 语音模型）为默认实现；配置落库 `voice_platform_config`，保存即生效，支持连通性测试。
- **OCR 本地模型配置（预留）**：设置页新增「OCR 本地模型」配置，支持任意 OpenAI 兼容端点（如本地 Ollama 的 GLM-OCR 模型），提供可用性测试接口；当前为预留配置，文档解析仍走 Apache Tika，后续可平滑接入内容识别。
- **配置集中管理**：模型服务（聊天/向量/重排）、语音平台（ASR/TTS）、OCR 本地模型配置全部落库（`llm_provider_config` / `voice_platform_config` / `ocr_platform_config`），在设置页运维、保存即生效；不依赖任何 AI 相关环境变量。

### TODO

- [x] 问答助手的 Markdown 展示优化
- [x] 知识库管理页面的知识库下载
- [x] 异步生成模拟面试评估报告
- [x] Docker 快速部署（v1.0 起迁移为本地零 Docker 启动，旧编排文件归档至 `docs/legacy-docker/`）
- [x] 添加 API 限流保护
- [x] 前端性能优化（RAG 聊天 - 虚拟列表）
- [x] 模拟面试增加追问功能
- [x] 语音面试功能（基于 Qwen3 实时语音模型）
- [x] 面试安排管理（智能解析 + 日历视图）
- [x] Skill 驱动出题（10+ 面试方向 + 参考知识库）
- [x] 统一面试评估架构（文字/语音共用评估引擎）
- [x] 面试历史题目去重
- [x] 面试中心页（整合文字/语音入口）
- [x] 语音面试 LLM 流式输出 + 句子级并发 TTS
- [x] 语音面试暂停/恢复 + 手动提交 + 回声防护
- [x] 模型服务按能力拆分（聊天/向量/重排、双协议、页面级模型切换、RAG 重排）
- [x] RAG 聊天会话管理 + 虚拟列表优化
- [x] 可重复注解 API 限流（Global/IP/User 维度）
- [x] 打通知识库题库与模拟面试（异步出题、严格容量校验、统一评估与记录）
- [x] JD vs 简历匹配度诊断 + 薄弱点自动注入出题
- [x] 简历可解释性诊断、逐条经历体检与整篇重写 Diff 闭环
- [x] 简历「诊断 → 排序 → 改写 → 应用 → 复评」优化工作流（优先行动项、证据置信度、术语扫描、招聘方视角、原文件预览）
- [x] 简历评分口径对账（总分与维度之和强制一致）与重写接口限流修正
- [x] 简历结构化智能编辑工作区（三模板 A4 预览、自动保存、统一修订撤销/重做、AI 建议结构化应用）
- [x] 简历 PDF/DOCX 导出质量修复（cjkWrap 手工折行消除游离连字符、模板导出版式一致）
- [x] 语音 ASR/TTS 平台配置通用化（落库 `voice_platform_config`，设置页可切换平台）
- [x] OCR 本地模型配置（OpenAI 兼容端点预留，可测试连通性）
- [x] 简历管理 E2E 全链路修复与三阶段回归验证（列表/详情/编辑器/导出）
- [ ] 语音面试接入 WebRTC 降低延迟
- [ ] 语音面试支持更多 TTS 音色


## 效果展示

### 简历管理（v1.0 重点迭代）

> 截图含真实简历示例（姓名 / 电话 / 邮箱）等个人隐私已移除，以下为功能占位说明：

- **简历管理列表**：搜索、分析状态、AI 评分与面试状态跟踪
- **简历结构化编辑器**：结构化编辑区 + A4 实时预览 + AI 建议面板（Developer / Classic / ATS 三模板）
- **AI 建议结构化应用**：定位到编辑器 → 原文/改写对照 → 一键采用修改 / 撤销此 AI 修改
- **导出**：三模板一键切换 + 导出 PDF / DOCX（cjkWrap 手工折行，无游离连字符）

> 更多模块：模拟面试（文字 + 语音）、面试安排、知识库管理与问答助手，以及「设置 → 模型服务 / 语音服务 / OCR 本地模型」的完整配置能力，欢迎下载体验。

## 项目结构

```
interview-guide/
├── app/                              # 后端应用
│   ├── src/main/java/interview/guide/
│   │   ├── App.java                  # 主启动类
│   │   ├── common/                   # 通用基础能力
│   │   │   ├── ai/                   # LLM Provider、结构化输出、Prompt 安全
│   │   │   ├── annotation/           # @RateLimit 可重复限流注解
│   │   │   ├── aspect/               # RateLimitAspect + Redis Lua 限流
│   │   │   ├── async/                # Redis Stream 生产者/消费者模板
│   │   │   ├── config/               # CORS、S3、OpenAPI、SPA 路由等配置
│   │   │   ├── evaluation/           # 文字/语音共用的统一评估引擎
│   │   │   ├── exception/            # 业务异常与全局异常处理
│   │   │   └── result/               # 统一响应 Result<T>
│   │   ├── infrastructure/           # 基础设施
│   │   │   ├── export/               # PDF 导出
│   │   │   ├── file/                 # 文件解析、校验、清洗、S3 存储
│   │   │   ├── mapper/               # MapStruct 映射器
│   │   │   └── redis/                # RedisService、面试会话缓存
│   │   └── modules/                  # 业务模块
│   │       ├── interview/            # 模拟面试模块
│   │       ├── interviewschedule/    # 面试安排模块
│   │       ├── knowledgebase/        # 知识库模块
│   │       ├── llmprovider/          # 多模型 Provider 与语音配置
│   │       ├── resume/               # 简历模块
│   │       └── voiceinterview/       # 语音面试模块
│   └── src/main/resources/
│       ├── application.yml           # 应用配置
│       ├── db/migration/             # Flyway 数据库版本化迁移脚本
│       ├── fonts/                    # PDF 导出中文字体文件
│       ├── prompts/                  # AI 提示词模板（StringTemplate）
│       ├── scripts/                  # Redis Lua 脚本
│       ├── skills/                   # 面试 Skill 定义和参考题库
│       └── voice-interview-opening.yml # 语音面试开场白配置
│
├── frontend/                         # 前端应用
│   ├── src/
│   │   ├── api/                      # API 接口
│   │   ├── assets/                   # 静态资源（字体、图标）
│   │   ├── components/               # 公共组件（含 resume-builder/ 简历编辑器）
│   │   ├── constants/                # 路由等常量
│   │   ├── hooks/                    # 业务 Hooks
│   │   ├── pages/                    # 页面组件
│   │   ├── types/                    # 类型定义
│   │   └── utils/                    # 工具函数
│   ├── package.json
│   └── vite.config.ts
│
├── run.bat                           # Windows 低内存一键启动（整合构建前后端产物并以轻量 JVM 托管）
├── run.sh                            # Linux/macOS 低内存一键启动脚本
├── scripts/                          # 少量辅助脚本（如 git 提交信息 hook 校验）
├── 本地零Docker启动指南.md            # 零 Docker 启动教程（中间件走云端，本机只跑 Vite + Spring Boot）
├── docs/                             # 架构设计与改造记录；docs/legacy-docker 为旧 Docker 部署归档
├── .env.example                      # 环境变量示例
└── README.md
```

## 快速开始

环境要求：

| 依赖          | 版本 | 必需 | 说明                                     |
| ------------- | ---- | ---- | ---------------------------------------- |
| JDK           | 25   | 是   | 开发语言                                 |
| Node.js       | 18+  | 是   | 前端构建                                 |
| pnpm          | 10+  | 推荐 | 前端包管理器（项目 packageManager 指定 10.26）|

> 本项目采用**本地零 Docker 启动**：PostgreSQL 14+（含 pgvector 扩展）、Redis 6+ 和 S3 兼容存储由云端提供（或自行安装本机服务），本机只运行 Vite + Spring Boot，详见 [本地零Docker启动指南.md](本地零Docker启动指南.md)。

### 1. 克隆项目

```bash
git clone https://github.com/Snailclimb/interview-guide.git
cd interview-guide
```

### 2. 配置 AI 服务

**无需配置任何环境变量**。所有 AI 相关配置都在应用启动后于页面内完成：

- **模型服务**（聊天 / 向量 / 重排）：「设置 → 模型服务」新增 Provider，
  填写 Base URL、API Key、模型名并勾选其支持的能力。配置落库，重启后保留。
- **语音平台**（ASR / TTS）：「设置 → 语音服务」分别选择 ASR / TTS 平台并填写 API 参数，
  DashScope（Qwen3 语音模型）为默认平台；配置落库，重启后保留，支持连通性测试。
- **OCR 本地模型**（预留）：「设置 → OCR 本地模型」配置 OpenAI 兼容端点（如本地 Ollama 的 GLM-OCR），
  当前不参与文档解析，提供可用性测试入口。

> ⚠️ 模型服务的 Provider Key 目前为**明文存储**在数据库中，
> 请确保数据库访问受控。详见 [SETUP_API_KEYS.md](SETUP_API_KEYS.md)。

`.env` 仅用于数据库、Redis、S3 等基础设施连接信息（见 `.env.example`）。

### 3. 连接依赖服务

依赖中间件（PostgreSQL + pgvector / Redis / S3 兼容存储）**由云端提供**，连接信息统一配置在根目录 `.env`：

```dotenv
POSTGRES_HOST=<云端 PG 地址>
POSTGRES_PORT=5432
POSTGRES_DB=interview_guide
POSTGRES_USER=<用户名>
POSTGRES_PASSWORD=<密码>
POSTGRES_SSLMODE=require          # 云端强制 SSL；本机免 SSL 时改 disable

REDIS_HOST=<云端 Redis 地址>
REDIS_PORT=6379
REDIS_PASSWORD=<可选>

APP_STORAGE_ENDPOINT=<S3 兼容端点>
APP_STORAGE_ACCESS_KEY=xxx
APP_STORAGE_SECRET_KEY=xxx
```

若需本机自建依赖，可自行安装 PostgreSQL（含 pgvector）、Redis 与 MinIO，
填入 `.env` 后启动即可；历史 Docker 编排文件仍保留在 `docs/legacy-docker/`，仅供参考。

> **注意**：应用启动时会自动检查并创建 `interview-guide` Bucket，请确保 `.env` 中的
> `APP_STORAGE_ENDPOINT` / `APP_STORAGE_ACCESS_KEY` / `APP_STORAGE_SECRET_KEY` 指向可用且允许建桶的 S3 兼容存储。
> 应用侧不内置任何数据库默认连接，启动前必须在 `.env` 中配置完整的 `POSTGRES_*` / `REDIS_*` / `APP_STORAGE_*` 连接信息。

### 4. 启动应用

#### 方式 A：一键轻量启动（推荐，单进程低内存，适合日常使用）

项目根目录提供了自动构建并以低内存模式运行的脚本（自动读取 `.env`，自动编译前端与后端产物，并由单个 JVM 托管前端静态资源，常驻仅 ~400MB 内存）：

- **Windows**：双击或在终端运行 `run.bat`
- **Linux / macOS**：运行 `./run.sh`（需先赋予执行权限：`chmod +x run.sh`）

启动成功后，直接在浏览器中打开 **`http://localhost:8080`** 即可使用完整功能。

#### 方式 B：前后端独立开发模式（适合修改代码、享受前端 HMR 热更新）

**后端：**

```bash
./gradlew :app:bootRun
```

后端服务启动于 `http://localhost:8080`

**前端：**

```bash
cd frontend
corepack enable
pnpm install
pnpm dev
```

前端服务启动于 `http://localhost:5173`（会自动反向代理 `/api` 和 `/ws` 请求到 `:8080` 后端）

**最后一步：配置模型服务**

系统不内置任何预设模型。启动后进入「设置 → 模型服务」，按 Tab 分别添加聊天模型、向量模型（知识库功能需要）和重排模型（可选），并点击「设为默认」。以 Ollama 本地模型为例：Base URL 填 `http://localhost:11434/v1`，API Key 随意填一个非空占位即可。


## 本地零 Docker 启动

本项目以**零 Docker** 作为默认运行方式：中间件（PostgreSQL + pgvector / Redis / S3 兼容存储）走云端，
本机只启动应用层（后端 Spring Boot + 前端 Vite / 静态托管）。完整步骤、配置文件说明与排错见
[本地零Docker启动指南.md](本地零Docker启动指南.md)。

### 启动后的服务地址

| 服务           | 地址                                                                   | 说明                                         |
| -------------- | ---------------------------------------------------------------------- | -------------------------------------------- |
| 前端（开发模式） | [http://localhost:5173](http://localhost:5173)                       | `pnpm run dev`，自动代理 `/api`、`/ws` 到后端 |
| 前端（静态托管） | [http://localhost:8080](http://localhost:8080)                       | `run.bat` / `run.sh` 单进程模式               |
| 后端 API       | [http://localhost:8080](http://localhost:8080)                         | `./gradlew :app:bootRun` / run 脚本           |
| 接口文档       | [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) | SpringDoc / Swagger UI                        |

### 历史 Docker 部署（已归档）

旧版基于 Docker Compose 的一键部署（前后端 + PostgreSQL + Redis + MinIO）已归档到
[`docs/legacy-docker/`](docs/legacy-docker/)（含 `docker-compose.yml`、`docker-compose.dev.yml`、
前后端 `Dockerfile` 与 `docker/postgres/init.sql`），仅作历史参考，不再作为推荐启动方式。

## 使用场景

| 用户角色        | 使用场景                               |
| --------------- | -------------------------------------- |
| **求职者**      | 上传简历获取分析建议，进行模拟面试练习 |
| **HR/招聘人员** | 批量分析简历，评估候选人能力           |
| **培训机构**    | 提供面试培训服务，管理知识库资源       |

## 常见问题

### Q: 数据库表创建失败/数据丢失

本地开发首先检查 JPA 的 `ddl-auto` 配置。`ddl-auto` 模式对比：

| 模式     | 行为                            | 适用场景      | 数据保留 |
| -------- | ------------------------------- | ------------- | -------- |
| update   | 表不存在自动创建，存在则尝试增量更新 | 早期开发或临时实验，当前项目不推荐 | ✅ 保留 |
| create   | 无条件删除并重建所有表          | 仅首次建表时使用 | ❌ 删除 |
| **validate** | 只验证，不修改                  | **当前项目默认推荐，建表和变更交给 Flyway** | ✅ 保留 |
| none     | 什么都不做                      | 生产环境      | ✅ 保留 |

**推荐配置（已默认）**：

```yaml
jpa:
  hibernate:
    ddl-auto: validate  # 只校验 schema，建表和变更交给 Flyway
```

⚠️ **注意**：避免使用 `create` 模式，否则每次重启都会删除所有数据！

### Q: 知识库向量化失败

`vector_store` 表已由 Flyway 创建，Spring AI 不再自动建表。

```java
spring:
  ai:
    vectorstore:
      pgvector:
        initialize-schema: false

```

建议保持为 false，避免应用启动时绕过 Flyway 修改数据库 schema。

### Q: 数据库迁移需要手动执行脚本吗？

不需要。数据库 schema 已接入 Flyway，后端应用启动时会自动执行 `app/src/main/resources/db/migration/` 下的迁移，并记录到 `flyway_schema_history`。

当前项目通过 `V1__init_schema.sql` 支持空库初始化，后续版本通过增量迁移演进；Hibernate `ddl-auto` 只做 `validate` 校验。测试环境使用 H2，默认关闭 Flyway。

### Q: 启动时报 `Connection to localhost:5432 refused` 怎么办？

这通常不是 Flyway 脚本错误，而是后端连不上 PostgreSQL。本项目中间件走云端，请检查根目录 `.env`：

- `POSTGRES_HOST` / `POSTGRES_PORT` / `POSTGRES_DB` 是否指向云端地址（云端必须设 `POSTGRES_SSLMODE=require`，本机免 SSL 时改为 `disable`）
- `REDIS_HOST` / `REDIS_PORT` / `APP_STORAGE_*` 是否配置完整

若为本机自建依赖，请确认 PostgreSQL / Redis 已启动且端口与 `.env` 一致；完整排错表见
[本地零Docker启动指南.md](本地零Docker启动指南.md)。

### Q: 简历分析失败

到「设置 → 模型服务」检查模型配置：点击卡片上的「测试」确认端点连通性，并确认已设置默认模型（或在分析时明确选择了分析模型）。后端日志中的业务异常信息会给出具体原因。

### Q: 设置页新增/切换模型后不生效？

模型的增删改和默认设置保存在数据库（`llm_provider_config` / `llm_global_setting`），保存后立即生效，无需重启。遇到连接问题时点击卡片上的「测试」按钮按能力逐项排查；后端日志中的业务异常信息会给出具体原因。

### Q: 语音面试无法识别或没有声音？

语音面试的 ASR / TTS 平台在「设置 → 语音服务」配置（DashScope 为默认平台，ASR / TTS 可分别选择平台并
填写 API 参数），配置落库 `voice_platform_config`，**重启后保留**，保存后可通过连通性测试确认端点可用。
请检查浏览器麦克风权限、后端日志中的语音服务连接状态，以及设置页里的 ASR/TTS 测试结果。无耳机时可能触发回声录入，建议先使用手动提交模式或佩戴耳机测试。

### Q: 简历分析一直显示"分析中"？

检查 Redis 连接和 Stream Consumer 是否正常运行。查看后端日志确认是否有错误。

### Q: PDF 导出失败或中文显示异常？

项目已内置中文字体（珠圆玉润仿宋），支持跨平台导出。如遇到问题，请检查：
- 字体文件是否存在：`app/src/main/resources/fonts/ZhuqueFangsong-Regular.ttf`
- 检查日志中的字体加载信息
- 确认 iText 依赖是否正确

### Q: Windows PowerShell 下后端日志中文乱码？

**原因简述**：后端与 Logback 按 **UTF-8** 输出日志；中文 Windows 下控制台默认多为 **GBK（代码页 936）**，且 PowerShell 的 `$OutputEncoding`、控制台编码若未统一为 UTF-8，显示时就会把同一串字节解释错，出现乱码。

**本项目已做的配置**（一般无需再改）：根目录 `gradle.properties`（Gradle 进程 UTF-8）、`app/src/main/resources/logback-spring.xml`（控制台日志 UTF-8）、`app/build.gradle` 中 `bootRun` 的 JVM 参数（含 `file.encoding` / `stdout.encoding` / `stderr.encoding`）。

**仍乱码时（PowerShell 侧）**：在启动 `.\gradlew.bat :app:bootRun` 的同一终端先执行下面一段；或写入 **PowerShell 配置文件**（`$PROFILE`）以便每次自动生效：

```powershell
chcp 65001 | Out-Null
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::InputEncoding  = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
```

新建或编辑配置文件：`if (!(Test-Path $PROFILE)) { New-Item -Path $PROFILE -ItemType File -Force }`，再 `notepad $PROFILE` 将上述内容粘贴保存；新开终端后生效，或执行 `. $PROFILE` 立即加载。若提示脚本无法执行，可执行一次：`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`。

在 PowerShell 中建议使用 `.\gradlew.bat :app:bootRun`（或仓库根目录的 `.\gradlew.bat`），避免与执行策略、路径解析相关的问题。

## 测试

### 后端（JUnit 5 + Mockito + AssertJ，测试意图用中文 `@DisplayName` 描述）

```bash
./gradlew :app:compileJava                            # 先确认能编译
./gradlew :app:test --tests "包名.测试类"              # 只跑直接相关的类
./gradlew :app:test --tests "包名.*"                   # 扩大到同包
./gradlew :app:test --no-daemon                        # 全量（约 2.5 分钟，仅提交/合并前跑）
```

测试粒度原则：**按改动范围跑测试，不要每次改动都跑全量**。仅改注释/日志/单方法实现时可不跑测试。
集成测试使用 H2 配置；限流相关测试需要真实 Redis。

### 前端（TypeScript 类型检查 + 构建 + 测试）

```bash
cd frontend && pnpm run build                       # tsc 类型检查 + vite build
```

前端改动至少运行一次构建（`tsc && vite build`）确认类型与打包无误。单元测试基于 Node.js 原生测试运行器 / tsx：

```bash
cd frontend
pnpm run test:resume-optimization   # 简历 Diff / 改写落地 / 复评折算 / 优化项派生
pnpm run test:export-fidelity       # 三模板 PDF/DOCX 导出保真
pnpm run test:interview-history     # 面试历史趋势与统计
pnpm run test:question-generation   # 知识库出题状态流转
pnpm run test:interview-capacity    # 知识库面试容量校验
pnpm run test:interview-entry       # 面试中心入口状态推导
pnpm run test:vad-loader            # VAD 加载器
```

端到端测试（Playwright）：

```bash
cd frontend && pnpm run test:e2e
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

AGPL-3.0 License（只要通过网络提供服务，就必须向用户公开修改后的源码）
