# 简历分析模块演进记录

> 记录简历「AI 分析 / 分析结果页」从 V1 到当前版本的变更过程、设计取舍与已知限制。
> 本文档基于 git history 与实际代码核对，不含主观推测；无法从代码确认的内容会显式标注。

## 目录

- [阅读指引](#阅读指引)
- [版本时间线](#版本时间线)
- [产品逻辑的变化](#产品逻辑的变化)
- [功能对照表](#功能对照表)
- [数据结构变化](#数据结构变化)
- [评分系统](#评分系统)
- [AI 能力与确定性逻辑的边界](#ai-能力与确定性逻辑的边界)
- [代码结构变化](#代码结构变化)
- [删除与弱化项](#删除与弱化项)
- [已知限制](#已知限制)
- [验证方式](#验证方式)

---

## 阅读指引

本文档对比两个基线：

- **旧版**：`master` 分支 `b94d70b`（2026-09-12）
- **新版**：`main` 分支，含 `d97d49e`、`bb6441b`、`46c3fc6` 三个提交

关键结论标记：

- **[已确认]** 可直接从代码或 git 历史验证
- **[从代码推断]** 由代码结构推导，行为未实际运行验证
- **[无法确认]** 现有信息不足以判断

---

## 版本时间线

| 版本 | 时间 / Commit | 主要变化 |
| --- | --- | --- |
| V1 | ≤ 2026-09-12 `b94d70b`（`master`） | 打分报告：总分 + 雷达图 + 5 条分项进度条 + 按优先级分组的建议文字 |
| V2 | 2026-09-14 `a5209ff` | 可解释性诊断（新增 7 类字段）+ 逐条经历体检 + Java 词表术语检查 + 整篇重写接口 |
| V3 | 2026-09-16 `71dfb74` | 升级为优化工作流：优先行动项 + 改写状态机 + 复评面板 + 原文件预览 Tab |
| V3.5 | 2026-09-16 `9074663` `e69411c` `f43a02e` `686d8c6` | 配置清理、temperature 参数修复、错误前缀去重、日志落盘 |
| V4 | 2026-09-17 `d97d49e` `bb6441b` `46c3fc6` | 评分对账、限流修正、改写应用重写、类型化、27 例单测、删除死组件 |

**[无法确认]** `b94d70b` 之前的更早形态——仓库历史不足以回溯，无法确认是否存在更早的简历分析实现。

---

## 产品逻辑的变化

### 旧版流程

```
上传简历
  → AI 分析（总分 + 5 维分 + 一段总结 + 优势标签 + 建议列表）
  → 展示总分与雷达图
  → 列出按优先级排序的建议文字
  → 用户自行理解，离开页面
```

终态是**一份诊断书**：给出结论，但不提供可执行动作，也无法验证改进效果。

### 新版流程

```
上传简历
  → AI 分析（一次性产出 12 类结构化字段）
  → 首屏：一句话结论 + 当前分 + 预计优化后区间
  → 识别最值得修改的 3 件事（AI 排序 + 预估收益）
  → 逐条体检给出「原句 → 改写」对照
  → 用户确认采纳 / 跳过（可撤销）
  → 前端折算给出优化后评分预估
  → 应用到简历全文（精确替换，可导出 .txt）
  → 或走整篇重写（LLM 产出新全文，可导出 .txt）
```

### 形态判断

产品从**「一次性 AI 分析报告」**变成了**「优化工作流」**：

- **诊断能力**：真实且大幅增强（新增 7 类结构化输出）
- **可执行性**：骨架真实（状态机、Diff、精确替换均为实际实现）
- **评估闭环**：前端折算，非真实重评
- **落地闭环**：可导出文本，不回写简历、不落库

准确的定位是：**一次 AI 深度分析 + 一套前端优化工作流**。它不具备多步自主决策或工具调用循环，因此不是通常意义上的 Agent。

---

## 功能对照表

| 功能 | 旧版 | 新版 | 变化</br>类型 | 业务逻辑支撑 |
| --- | --- | --- | --- | --- |
| 顶部 Summary | 「核心评价」卡片：一段总结 + 总分 + 时间 | 一句话结论置顶 + 总分 + 预计优化后区间 + 主 CTA | 交互重构 | 后端 `headline` 字段 |
| 综合评分 | 直接展示 | 展示，且后端以五维之和为准强制对账 | 数据逻辑 | `reconcileOverallScore()` |
| 预计提升分数 | 无 | 「当前分 → 预计区间」，附提升依据明细 | 新增 | 前端 `localRescoreEngine` |
| 优势 | 全量展示 | 最多 4 条，超出标注 | 修改 | 后端字段 |
| 最大风险 | 无 | 风险列表（≤3 条） | 新增 | 后端 `risks` |
| 分项评分 | 5 条进度条，仅分数 | 分数 + 主要缺口文案 + 可展开具体缺口，按缺口排序 | 交互重构 | `dimensionExplanations` |
| 雷达图 | 有 | 已删除，替代为维度缺口面板与能力缺口卡片 | 删除 + 替代 | 有意的设计取舍 |
| Top 3 优先修改 | 无 | 独立区域，带序号与预计提升分 | 新增 | `topActions`（Prompt 约束恰好 3 条） |
| 预计提升分 | 无 | 每项标注预计提升 | 新增 | 优先行动项用 AI 值；其余按维度剩余缺口估算 |
| 原文 / 修改后 | 无 | 字符级 Diff（LCS） | 新增 | `charDiff` |
| 全部问题 | 主角，按优先级常驻展开 | 折叠进深度诊断层，新增影响说明 | 弱化 + 增强 | `suggestions` 从 4 字段扩到 8 |
| 能力缺口 | 无 | 按证据等级排序 | 新增 | `evidences[].status` |
| 术语检测 | 无独立展示 | 规范写法 + 行号定位 | 新增 | `ResumeTermChecker` 确定性词表 |
| 招聘方视角 | 无 | 第一印象 + 预判 + 顾虑 | 新增 | 后端 `recruiterView` |
| 面试追问 | 无 | 由顾虑套模板生成问句 | 新增 | 前端字符串拼接 |
| 重新分析 | 有 | 保留，失败时给出可见反馈 | 修改 | 真实异步 Redis Stream |
| 重新评分 | 无 | 原分 → 优化后 + 逐维度变化 | 新增 | 前端折算 |
| 简历原文件预览 | 无 | PDF 内嵌预览 / 文本回退 | 新增 | `GET /api/resumes/{id}/file` |
| 整篇重写 | 无 | 一键生成优化后全文 | 新增 | 真实 LLM 调用 |
| PDF 报告 | 基本信息 + 总分 + 维度 + 摘要 + 优势 + 建议 | 扩充 AI 结论、优先行动项、逐条体检、术语检查、招聘方视角 | 增强 | `PdfExportService` |

---

## 数据结构变化

### 后端 `ResumeAnalysisResponse`

| 字段 | 旧版 | 新版 | 来源 |
| --- | --- | --- | --- |
| `overallScore` | 有 | 有（以维度之和校正） | LLM |
| `scoreDetail` | 有 | 有（各维度收敛到合法区间） | LLM |
| `summary` | 有 | 有 | LLM |
| `strengths` | 有 | 有 | LLM |
| `suggestions` | 4 字段 | 8 字段（新增 `section` / `quote` / `rewrite` / `impact`） | LLM |
| `originalText` | 有 | 有 | 数据库 |
| `bulletAudits` | 无 | 新增 | LLM |
| `termIssues` | 无 | 新增 | **Java 词表**（非 LLM） |
| `headline` | 无 | 新增 | LLM |
| `dimensionExplanations` | 无 | 新增（含 `Evidence` 置信度三态） | LLM |
| `topActions` | 无 | 新增 | LLM |
| `risks` | 无 | 新增 | LLM |
| `recruiterView` | 无 | 新增 | LLM |

### 持久化

`ResumeAnalysisEntity` 新增 7 列：`bullet_audits_json`、`term_issues_json`、`headline`、`dimension_explanations_json`、`top_actions_json`、`risks_json`、`recruiter_view_json`。

对应迁移脚本：

- `V20260914__add_resume_analysis_feedback_columns.sql`
- `V20260915__add_resume_analysis_explanation_columns.sql`

两处均以 `ADD COLUMN IF NOT EXISTS` 添加，读取时对 `null` 回退为空列表，**旧数据可平滑兼容**。

### 前端派生类型

`types/optimization.ts` 中的 `Improvement`、`ImprovementStatus`、`EvidenceLevel`、`RescoreResult` 均为**前端派生结构**，由后端三类数据（`topActions` / `bulletAudits` / `suggestions`）收敛而来，不是后端下发的独立数据源。

---

## 评分系统

评分存在三个来源，务必区分：

| 来源 | 位置 | 性质 |
| --- | --- | --- |
| 后端 AI 评分 | `ResumeAnalysisResponse.overallScore` | 唯一有据可依的真实评分 |
| 前端预测区间 | `potentialRange` | 估算，附提升依据明细 |
| 前端「优化后评分」 | `RescorePanel` | 估算 |

### 各维度满分

与 `prompts/resume-analysis-system.st` 的 Scoring Rubrics 一致，合计 100：

| 维度 | 标识 | 满分 |
| --- | --- | --- |
| 项目经验 | `project` | 40 |
| 技能匹配 | `skillMatch` | 20 |
| 内容完整性 | `content` | 15 |
| 结构清晰度 | `structure` | 15 |
| 表达专业性 | `expression` | 10 |

### 后端对账（V4 新增）

LLM 分别输出总分与五个维度分，两者可能自相矛盾。V4 引入对账：

- `clamp` 各维度到合法区间，越界分数不再污染下游
- `reconcileOverallScore` 以五维之和为准校正总分
- `reconcileDimensionExplanations` 用 `scoreDetail` 覆盖解释中的 `score` / `maxScore` / `impactOnTotal`，保证 `impactOnTotal` 恒等于「满分 − 得分」

### 前端折算规则

`utils/rescore.ts`：

```
维度实际增益 = min(Σ 估算增益, 剩余缺口 × 0.75)
总分 = 各维度得分之和
```

封顶系数 0.75 用于避免「改完就满分」的误导性承诺；超出封顶的部分以 `cappedGain` 显式提示，不静默截断。预计区间上限取投影值，下限再打 8 折。

**注意**：该面板不调用任何接口，也不触发重新分析，刷新页面后状态即丢失。

---

## AI 能力与确定性逻辑的边界

### 真实 AI 能力（有 LLM 调用）

- 简历深度分析一次产出 7 类新结构（`ResumeGradingService` + `StructuredOutputInvoker`）
- 逐条体检改写（`bulletAudits[].rewrite` 由模型直接产出改写句）
- 整篇重写（`ResumeRewriteService`，独立 Prompt + 诊断摘要注入）
- JD 匹配诊断（新增证据置信度分档）
- 结构化输出重试与 JSON 未转义引号本地修复

Prompt 层面值得记录的两处设计：

- **Output Budget 硬约束**：要求输出 JSON 总长控制在 2500 字内、`suggestions` ≤ 6、`bulletAudits` 3–4 个。这是「新增 6 个字段」能落地的关键前提，否则极易因截断导致解析失败。
- **行号锚定**：送模型前对简历按行编号，并要求 `quote` 逐字摘录、不带行号前缀，使前端精确替换成为可能。

### 确定性逻辑（非 AI，不要误认为 AI）

| 逻辑 | 实现位置 |
| --- | --- |
| 术语大小写纠错 | `ResumeTermChecker`（Java 词表 + 正则 + 重叠剔除 + 词边界防误伤） |
| 重新评分折算 | `utils/rescore.ts` |
| 改写落地 | `utils/rewriteApply.ts`（精确替换 + 区间去重 + 空白容错） |
| 字符级 Diff | `utils/diff.ts`（LCS，1200 字上界） |
| 优化项派生与归因 | `utils/improvements.ts` |
| 预计提升估算 | `estimateDimensionGain()`（按维度剩余缺口比例） |
| 面试追问生成 | `RecruiterViewCard`（由 `concerns` 套字符串模板） |

术语纠错交由 Java 词表承担后，Prompt 同步告知模型**不再输出大小写类建议**，让模型专注技术深度与业务表达——这是一次明确的分工。

---

## 代码结构变化

### 核心页面

**`frontend/src/pages/ResumeDetailPage.tsx`**

- 为什么改：承载新增的预览 Tab 与两类改写对话流
- 改了什么：`TabType` 新增 `preview`；新增 `handleApplySingle` / `handleApplyAll` / `handleApplyAgentRewrites` / `handleAiRewrite` 与两个 Dialog 挂载
- 影响：页面从「看分析」变为「看 + 改 + 导出」
- 附带修复：失败反馈从 `console.error` 改为 `showToast`（此前用户会误以为「点击无反应」）

### 前端组件

| 文件 | 变化 |
| --- | --- |
| `AnalysisPanel.tsx` | 重写为三层结构；V4 完成类型化（去除 `any`） |
| `OptimizationSummary.tsx` | 新增 30 秒决策区 |
| `ImprovementCard.tsx` | 新增改写卡片（5 态状态机） |
| `DimensionGapPanel.tsx` | 新增，替代雷达图 |
| `CapabilityGapCard.tsx` | 新增能力缺口卡片 |
| `RescorePanel.tsx` | 新增复评面板 |
| `RecruiterViewCard.tsx` | 新增招聘方视角 |
| `EvidenceBadge.tsx` | 新增证据等级标签 |
| `DiffView.tsx` | 新增字符级 Diff 渲染 |
| `ApplyRewritesDialog.tsx` | 新增改写应用预览；V4 改为逐条 Diff |
| `RewriteResultDialog.tsx` | 新增整篇重写结果 |
| `ResumePreviewPanel.tsx` | 新增原文件预览 |
| `RadarChart.tsx` | V4 删除 |
| `ScoreProgressBar.tsx` | V4 删除 |
| `ScoreExplanationCard.tsx` | V4 删除 |

> `recharts` 依赖保留：面试历史等页面仍在使用。

### 状态管理

**`frontend/src/hooks/useResumeOptimization.ts`**（新增）

将散落的按钮语义收敛为单一状态机：`pending → generating → generated → applied / skipped`。

V4 新增 `analysisKey`（`id | analyzedAt | overallScore`）：分析结果变化时清空本地状态。因为优化项 id 按数组下标生成（`top-0` / `bullet-1`），换结果后同一 id 可能指向不同建议，沿用旧状态会导致分数与已应用项错位。

**`frontend/src/hooks/useModalA11y.ts`**（V4 新增）

补齐模态框无障碍行为：Esc 关闭、body 滚动锁定、打开时焦点移入、关闭后焦点归还、Tab 在弹窗内循环。

### 后端

| 文件 | 变化 |
| --- | --- |
| `ResumeRewriteService.java` | 新增整篇重写服务（诊断摘要注入，截断 6000 字） |
| `ResumeTermChecker.java` | 新增术语检查器（64 条规范写法，含 5 个连写变体，共 69 个检索键） |
| `ResumeController.java` | 新增 `GET /{id}/file`、`POST /{id}/rewrite`；V4 修正重写接口限流 |
| `ResumeGradingService.java` | 新增评分对账；V4 新增行号锚定与 `clamp` |
| `ResumeHistoryService.java` | 新增 6 个 JSON 字段提取方法（含空值回退） |
| `ResumeMapper.java` | 扩展映射参数 |
| `PdfExportService.java` | 新增 5 个报告章节；字体字节缓存（避免重复解析几 MB TTF） |

---

## 删除与弱化项

| 旧功能 | 当前状态 | 替代方案 |
| --- | --- | --- |
| 雷达图 | 删除 | `DimensionGapPanel` + `CapabilityGapCard` |
| `ScoreProgressBar` | 删除 | 合并进维度缺口面板的维度行 |
| `ScoreExplanationCard` | 删除 | 功能由维度缺口面板覆盖 |
| `HistoryList.tsx` | V2 删除 | 逻辑内联进 `HistoryPage.tsx` |
| 建议列表平铺 | 弱化 + 折叠 | 主角让给优先行动项 |
| 分项进度条常驻展示 | 弱化 | 收进深度诊断折叠层 |
| 逐条体检（超 3 条） | 折叠 | 「展开其余 N 条」 |
| 术语检查（超 6 处） | 折叠 | 「展开其余 N 处」 |

删除三个组件是有意的设计取舍，源码中留有保留说明注释；V4 确认它们已无引用后物理删除。

---

## 已知限制

### 1. 「AI 修改」按钮当前未调用 LLM

**[已确认]** `AnalysisPanel.tsx` 调用 `useResumeOptimization({ analysis })` 时**未传入 `generateRewrite`**。而 `useResumeOptimization.ts` 的逻辑是：

```
const rewrite = generateRewrite
  ? await generateRewrite(target)
  : buildPlaceholderRewrite(target.originalText);
```

全仓库 `generateRewrite` 仅出现在定义处与这一处未传参的调用，因此必然走 `buildPlaceholderRewrite`——即返回一段本地拼接的占位提示（「【待补充真实数据】…」），**不产生任何 AI 调用**，但按钮文案与加载态仍显示「AI 修改」/「AI 生成中」。

### 2. 该路径会覆盖已有的 AI 改写

**[已确认]** `bulletAudits` 派生项本身携带模型产出的 `rewrite`（经 `attachExistingRewrites` 匹配到 `suggestedText`），初始状态却是 `pending`，因此同样渲染出「AI 修改」按钮。用户点击后，`rewriteMap[item.id]` 被写入占位符，而取值优先级是 `rewriteMap[item.id] ?? item.suggestedText`——**原本可用的模型改写被占位内容替换**。

### 3. 「一键优化 Top 3」为同一根因

**[已确认]** 该按钮顺序调用 `requestRewrite`，注释说明「避免并发打爆 LLM」，但实际不触发任何 LLM 调用，因此会连续生成 3 条占位内容。

### 4. 复评不是真实重评

**[已确认]** `RescorePanel` 展示的「优化后评分」由前端折算得出，不调用接口、不触发重新分析。UI 文案未标明这是估算值。

### 5. `structureScore` 的评分依据与术语检查脱节

**[从代码推断]** 该维度的 rubric 定义为「技术名词大小写必须绝对规范」，但 Prompt 已要求模型不输出此类建议，而 `termIssues` 由 Java 侧产出且**不参与任何评分**。结果是模型被要求为一个自己不再负责检查的维度打分。

### 6. 维度满分注释过时

**[已确认]** `ResumeAnalysisResponse.ScoreDetail` 与 `frontend/src/types/resume.ts` 中的注释仍为旧版 25 / 20 / 25 / 15 / 15，与实际评分细则（15 / 15 / 20 / 10 / 40）不符。`types/optimization.ts` 的 `DIMENSION_META` 与 Prompt 一致，是当前正确来源。

### 7. 「分析失败」判定含字符串启发式

**[已确认]** `isAnalysisValid` 仍保留 `hasErrorKeywords` 字符串匹配，其中包含 `'handshake'`。正常简历若出现「三次握手」「TLS handshake」等表述，可能被误判为分析失败。

### 8. 优化成果不持久化

**[已确认]** 整篇重写不落库，前端采纳的改写同样只存在于内存，刷新页面即丢失。

---

## 验证方式

改动后端公共能力或简历模块时：

```bash
./gradlew :app:test --no-daemon
```

改动前端时：

```bash
cd frontend && pnpm run build
```

运行简历优化相关单测（27 例，覆盖 Diff、改写应用、复评折算、优化项派生）：

```bash
cd frontend && pnpm run test:resume-optimization
```
