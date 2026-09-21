# AI Interview Platform - Frontend

智能 AI 面试官平台前端应用，基于 **React 18.3 + TypeScript 5.6 + Vite 5.4 + Tailwind CSS 4.1** 构建。

---

## 🛠️ 技术栈

- **核心框架**：React 18.3、TypeScript 5.6
- **构建工具**：Vite 5.4（带 WASM 与 top-level await 支持）
- **样式方案**：Tailwind CSS 4.1、Tailwind Typography
- **路由管理**：React Router 7.11
- **动画与交互**：Framer Motion 12.23、Lucide React 图标库
- **数据可视化**：Recharts 3.6
- **日程管理**：React Big Calendar 1.19
- **性能优化**：React Virtuoso 4.18（RAG 虚拟滚动列表）
- **富文本渲染**：React Markdown 9.0、Remark GFM、React Syntax Highlighter
- **网络通信**：Axios（REST API）、Server-Sent Events（SSE 流式问答）、原生 WebSocket（实时语音面试）
- **简历渲染与导出**：ReactPDF Renderer（A4 三模板实时预览）、docx（DOCX 导出）、pdfjs-dist（PDF 原文件预览）、harfbuzzjs + Noto Sans SC（PDF 中文字形整形）、JSZip（打包）
- **测试框架**：Playwright（E2E 测试）、Node.js 内置测试运行器（逻辑单元测试）

---

## 📁 目录结构

```
frontend/src/
├── api/                    # 集中式 API 接口定义与 Axios 请求封装
│   ├── history.ts          # 面试历史与详情接口
│   ├── interview.ts        # 模拟面试与题目生成接口
│   ├── interviewSchedule.ts # 面试日程安排接口
│   ├── knowledgebase.ts    # 知识库与题库管理接口
│   ├── llmProvider.ts      # 多模型、语音与 OCR 配置接口
│   ├── ragChat.ts          # RAG 问答会话接口
│   ├── request.ts          # 统一 Axios 实例、拦截器与统一响应 Result<T> 解包
│   ├── resume.ts           # 简历上传、分析、结构化解析、重写接口
│   ├── skill.ts            # Skill 驱动出题接口
│   ├── stream.ts           # SSE 流式响应工具
│   └── voiceInterview.ts   # 语音面试会话管理接口
├── assets/                 # 静态资源（图标、字体、图片）
├── components/             # 可复用业务组件与通用 UI
│   ├── resume-builder/     # 简历结构化编辑器（StructuredEditor、A4Preview、SuggestionReviewPanel、ResumePdf/ResumeDocx、templates 三模板样式）
│   ├── resume-review/      # 简历分析展示组件（AnalysisPanel、JdMatchPanel、DiffView 等）
│   ├── knowledgebase/      # 知识库问答、会话列表与管理组件
│   ├── knowledgebaseInterview/ # 知识库专项面试与容量校验卡片
│   ├── settings/           # 模型服务配置卡片与测试弹窗
│   └── ...                 # 弹窗、加载状态、卡片骨架等
├── constants/              # 全局常量（routes.ts 路由定义等）
├── hooks/                  # 自定义业务 Hooks（录音、WebSocket、滚动控制等）
├── pages/                  # 顶级路由页面
│   ├── InterviewHubPage.tsx               # 面试中心聚合入口
│   ├── InterviewPage.tsx                  # 文字模拟面试互动页
│   ├── InterviewHistoryPage.tsx           # 面试历史与统计趋势页
│   ├── VoiceInterviewPage.tsx             # 实时语音面试对话页
│   ├── VoiceInterviewEvaluationPage.tsx   # 语音面试评估报告详情页
│   ├── KnowledgeBaseManagePage.tsx        # 知识库文档管理与重新向量化
│   ├── KnowledgeBaseQueryPage.tsx         # RAG 智能问答助手
│   ├── KnowledgeBaseInterviewQuestionsPage.tsx # 知识库生成题库管理
│   ├── KnowledgeBaseInterviewSessionPage.tsx   # 知识库专项面试作答页
│   ├── UploadPage.tsx                     # 简历上传与处理进度页
│   ├── ResumeBuilderPage.tsx              # 简历结构化编辑器（三模板 A4 预览 + 导出 PDF/DOCX）
│   ├── ResumeDetailPage.tsx               # 简历体检、术语检查与整篇重写
│   ├── InterviewSchedulePage.tsx          # 面试日程日历视图
│   └── SettingsPage.tsx                   # 模型服务 / 语音平台 / OCR 设置
├── types/                  # TypeScript 类型定义（API、业务实体、状态枚举）
├── utils/                  # 工具函数（diff 计算、格式化、防抖等）
├── App.tsx                 # 根组件与路由布局
├── index.css               # 全局样式与 Tailwind 4 样式指令
└── main.tsx                # 应用启动入口
```

---

## 🚀 本地开发与运行

### 1. 安装依赖

推荐使用 `pnpm`（10+）：

```bash
cd frontend
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

本地服务默认启动于 `http://localhost:5173`。

> **后端代理说明**：`vite.config.ts` 已内置反向代理，默认将 `/api` 请求转发至 `http://localhost:8080`。如需变更后端代理地址，可配置环境变量 `VITE_API_PROXY_TARGET`。

### 3. 构建生产产物

```bash
pnpm build
```

构建前会自动执行 `tsc` 进行严格类型校验，产物输出至 `frontend/dist/`。

### 4. 预览生产构建

```bash
pnpm preview
```

---

## 🧪 自动化测试

### 单元测试（核心纯函数与业务逻辑）

项目使用 Node.js 22+ 原生测试运行器进行轻量级、无依赖的高速单元测试：

```bash
# 简历 Diff / 改写落地 / 复评折算 / 优化项派生测试
pnpm run test:resume-optimization

# 三模板 PDF/DOCX 导出一致性测试
pnpm run test:export-fidelity

# 面试历史趋势与统计计算测试
pnpm run test:interview-history

# 知识库题目异步生成状态流转测试
pnpm run test:question-generation

# 知识库面试容量与追问硬约束校验测试
pnpm run test:interview-capacity

# 面试中心入口状态推导测试
pnpm run test:interview-entry

# VAD 加载器测试
pnpm run test:vad-loader
```

### 端到端测试（Playwright E2E）

```bash
pnpm run test:e2e
```

---

## 💡 开发规范建议

1. **API 调用**：统一在 `src/api/` 下编写独立函数，复用 `request.ts` 的 Axios 实例，禁止在组件中散落原生 `fetch` 或自建 Axios 实例。
2. **类型安全**：跨组件共享的数据结构必须在 `src/types/` 下统一定义，避免使用 `any`，不可变数据模式优先。
3. **UI 风格**：遵循既有的 Tailwind CSS 4 视觉规范与 Lucide 图标设计语言，保持界面精致、高内聚。
