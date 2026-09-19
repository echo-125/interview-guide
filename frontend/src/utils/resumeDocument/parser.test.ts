import assert from 'node:assert/strict';
import test from 'node:test';

import { computeCoverage, parseResume, parseResumeToDocument, serializeDocumentText } from './parser.ts';

const SAMPLE = `李阳
Java 高级开发工程师
liyang.dev@example.com
138-0000-1234
上海

个人总结：
7 年 Java 后端开发经验，专注高并发系统设计。

技能：
后端：Java、Spring Boot、Spring Cloud
中间件：Redis、Kafka

工作经历：
某支付公司 | 高级 Java 开发工程师 | 2021-07 - 至今
设计和开发了短链接基础服务，显著提高电子发票二维码识别速度。
参与了数据库的分库分表设计，支撑日开票量 400w+。

项目经历：
高可用短链接服务 | 技术负责人
设计发号器 + 缓存 + 落库三级架构，单机 QPS 达 5w。

教育经历：
某理工大学 计算机科学与技术
`;

/* ---------- 原有行为（回归） ---------- */

test('基本信息：姓名 / 邮箱 / 手机号 / 总结', () => {
  const doc = parseResumeToDocument(SAMPLE);
  assert.equal(doc.basics.name, '李阳');
  assert.equal(doc.basics.email, 'liyang.dev@example.com');
  assert.equal(doc.basics.phone, '138-0000-1234');
  assert.ok(doc.basics.summary.includes('7 年 Java 后端开发经验'));
});

test('技能分组（复合词不被拆散）', () => {
  const doc = parseResumeToDocument(SAMPLE);
  const backend = doc.skills.find(s => s.category === '后端');
  assert.ok(backend);
  assert.ok(backend!.items.includes('Java'));
  assert.ok(backend!.items.includes('Spring Boot'));
});

test('工作经历条目 + bullets + 稳定 id', () => {
  const doc = parseResumeToDocument(SAMPLE);
  assert.equal(doc.experience.length, 1);
  const exp = doc.experience[0];
  assert.equal(exp.company, '某支付公司');
  assert.equal(exp.title, '高级 Java 开发工程师');
  assert.equal(exp.startDate, '2021-07');
  assert.equal(exp.endDate, '至今');
  assert.equal(exp.bullets.length, 2);
  assert.ok(exp.bullets.every(b => b.id.startsWith('bullet-')));
});

test('项目与教育', () => {
  const doc = parseResumeToDocument(SAMPLE);
  assert.equal(doc.projects[0].name, '高可用短链接服务');
  assert.equal(doc.education[0].school, '某理工大学');
  assert.equal(doc.education[0].major, '计算机科学与技术');
});

/* ---------- Phase 4A 新增场景 ---------- */

test('多条工作经历', () => {
  const text = `工作经历：
腾讯科技 | Java 高级工程师 | 2021.03 - 2024.06
负责订单系统。

京东 | Java 工程师 | 2019.06 - 2021.02
负责库存系统。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience.length, 2);
  assert.equal(doc.experience[0].company, '腾讯科技');
  assert.equal(doc.experience[1].company, '京东');
});

test('多项目经历', () => {
  const text = `项目经历：
项目A | 负责人
开发A。

项目B | 核心开发
开发B。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.projects.length, 2);
  assert.equal(doc.projects[0].name, '项目A');
  assert.equal(doc.projects[1].name, '项目B');
});

test('教育经历（学历/专业/日期）', () => {
  const text = `教育经历：
北京大学 | 计算机科学与技术 | 本科 | 2020.09 - 2024.06
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.education.length, 1);
  const e = doc.education[0];
  assert.equal(e.school, '北京大学');
  assert.equal(e.major, '计算机科学与技术');
  assert.equal(e.degree, '本科');
  assert.equal(e.startDate, '2020.09');
  assert.equal(e.endDate, '2024.06');
});

test('日期：中文年月 / 至 / 单日期', () => {
  const text = `工作经历：
某公司 | 工程师 | 2021年3月至2024年6月
负责A。
`;
  const doc = parseResumeToDocument(text);
  const e = doc.experience[0];
  assert.equal(e.startDate, '2021年3月');
  assert.equal(e.endDate, '2024年6月');
});

test('中文/英文混合 section 标题', () => {
  const text = `Work Experience：
某公司 | 工程师 | 2021-2023
负责A。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience.length, 1);
});

test('section 标题变体：序号前缀 / 全角冒号', () => {
  const text = `一、工作经历：
某公司 | 工程师 | 2021-2023
负责A。

二、专业技能：
Java、MySQL
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience.length, 1);
  assert.ok(doc.skills.length >= 1);
});

test('bullet 识别：- / • / 1. / Markdown 列表', () => {
  const text = `工作经历：
某公司 | 工程师 | 2021-2023
- 负责支付系统。
• 优化性能。
1. 引入缓存。
* 降低延迟。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience[0].bullets.length, 4);
  assert.ok(doc.experience[0].bullets[0].text.includes('负责支付系统'));
  assert.ok(!doc.experience[0].bullets[0].text.startsWith('-'));
});

test('证书 / 获奖 / 语言能力', () => {
  const text = `证书：
PMP 项目管理认证 | 2023

获奖：
优秀员工奖 | 2022

语言能力：
英语（流利）
粤语 - 母语
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.certifications.length, 1);
  assert.equal(doc.certifications[0].name, 'PMP 项目管理认证');
  assert.equal(doc.awards.length, 1);
  assert.equal(doc.awards[0].title, '优秀员工奖');
  assert.equal(doc.languages.length, 2);
  assert.equal(doc.languages[0].name, '英语');
  assert.equal(doc.languages[0].level, '流利');
});

test('无法识别的内容进入 customSections（不硬拆）', () => {
  const text = `张三
hello@example.com

个人优势：
擅长团队协作与跨部门沟通，有较强的抗压能力，曾在多个大型项目里担任关键角色并推动落地。

项目经历：
项目A
一些无法确认结构的描述文字。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.projects.length, 0); // 无可靠头部行 → 不硬拆
  // 「个人优势」现在会映射为 summary；「项目A/无法确认描述」仍应保留在「其他内容」
  assert.ok(doc.basics.summary.includes('团队协作'));
  assert.ok(doc.customSections.length >= 1);
  assert.ok(doc.customSections[0].blocks.some(b => b.text.includes('项目A')));
});

test('不丢原文：coverage 高且内容可重建', () => {
  const { document: doc, diagnostics } = parseResume(SAMPLE);
  // 原文中大多数内容都被保留（结构化 + customSections）
  assert.ok(diagnostics.coverage > 0.8, `coverage=${diagnostics.coverage}`);
  assert.equal(diagnostics.totalChars, diagnostics.parsedChars + diagnostics.unparsedChars);
  const serialized = serializeDocumentText(doc);
  assert.ok(serialized.includes('短链接基础服务'));
  assert.ok(serialized.includes('分库分表'));
});

test('空文本 → 空文档 + 空诊断', () => {
  const { document: doc, diagnostics } = parseResume('   \n  \n');
  assert.equal(doc.basics.name, '');
  assert.equal(doc.experience.length, 0);
  assert.equal(diagnostics.totalChars, 0);
  assert.equal(diagnostics.confidence, 0);
});

test('极短简历：仅姓名', () => {
  const doc = parseResumeToDocument('张三');
  assert.equal(doc.basics.name, '张三');
  assert.equal(doc.customSections.length, 0);
});

test('长简历：多节且不崩溃', () => {
  const sections = Array.from({ length: 30 }, (_, i) =>
    `工作经历${i}：
公司${i} | 职位${i} | 202${i % 10}-01 - 202${i % 10}-06
负责模块${i}。
`
  ).join('\n');
  const { document: doc, diagnostics } = parseResume(`个人总结：\n多年经验。\n${sections}`);
  assert.equal(doc.experience.length, 30);
  assert.ok(diagnostics.sectionsDetected.includes('工作经历'));
});

test('复杂空格与多余空行', () => {
  const text = `工作经历：
\n\n
  某公司   |   工程师   |   2021 - 2023\n\n
    负责 A 系统。\n\n\n
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience.length, 1);
  assert.equal(doc.experience[0].company, '某公司');
  assert.equal(doc.experience[0].title, '工程师');
  assert.equal(doc.experience[0].startDate, '2021');
  assert.equal(doc.experience[0].endDate, '2023');
  // 描述行即便被多余空行与头部行拆开，也会折叠进该条目（而非丢进其他内容）
  assert.ok(doc.experience[0].bullets.some(b => b.text.includes('负责 A 系统。')));
  assert.equal(doc.customSections.length, 0);
});

test('全角/半角冒号：技能与标题', () => {
  const text = `技能：
后端：Java、Spring Boot
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.skills[0].category, '后端');
  assert.ok(doc.skills[0].items.includes('Spring Boot'));
});

test('项目技术栈识别', () => {
  const text = `项目经历：
高并发网关 | 负责人 | 2022-2023
技术栈：Java、Netty、Redis
实现了百万并发网关。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.projects.length, 1);
  assert.deepEqual(doc.projects[0].technologies, ['Java', 'Netty', 'Redis']);
  assert.equal(doc.projects[0].bullets.length, 1);
});

test('coverage 计算与诊断字段完整', () => {
  const { diagnostics } = parseResume(SAMPLE);
  assert.ok(Array.isArray(diagnostics.sectionsDetected));
  assert.ok(Array.isArray(diagnostics.warnings));
  assert.ok(diagnostics.sectionsDetected.includes('工作经历'));
  assert.ok(diagnostics.sectionsDetected.includes('技能'));
  assert.ok(diagnostics.sectionsDetected.includes('个人简介'));
  assert.ok(diagnostics.sectionsDetected.includes('项目经历'));
  assert.ok(diagnostics.sectionsDetected.includes('教育经历'));
});

test('computeCoverage 独立函数', () => {
  const doc = parseResumeToDocument(SAMPLE);
  const c = computeCoverage(SAMPLE, doc);
  assert.ok(c.totalChars > 0);
  assert.ok(c.parsedChars <= c.totalChars);
  assert.equal(c.totalChars, c.parsedChars + c.unparsedChars);
});

test('被打散的正文块折叠进所属条目（不挤进其他内容）', () => {
  const text = `工作经历：
某公司 | 工程师 | 2021-2023

负责支付系统设计与开发，支撑日单量 400w。
同时参与订单中心的灰度发布。

另一公司 | 高级工程师 | 2019-2021

负责库存系统。

项目经历：
网关项目 | 负责人 | 2022
技术栈：Java、Netty
实现百万并发网关。
`;
  const doc = parseResumeToDocument(text);
  // 工作经历：2 条，每条都能折叠到被打散拆开的正文块
  assert.equal(doc.experience.length, 2);
  assert.ok(
    doc.experience[0].bullets.some(b => b.text.includes('负责支付系统设计与开发')),
    '第一条的描述块应被折叠进该条目',
  );
  assert.ok(doc.experience[1].bullets.some(b => b.text.includes('负责库存系统')));
  // 项目：技术栈被识别为 technologies，正文进 bullets
  assert.equal(doc.projects.length, 1);
  assert.deepEqual(doc.projects[0].technologies, ['Java', 'Netty']);
  assert.ok(doc.projects[0].bullets.some(b => b.text.includes('实现百万并发网关')));
  // 被打散的正文不再挤进「其他内容」
  assert.equal(doc.customSections.length, 0);
});

test('姓名含 Tika「内容」噪声被清理', () => {
  const text = `程仕 内容:
hello@example.com
工作经历：
某公司 | 工程师 | 2021-2023
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.basics.name, '程仕');
});

/* ---------- 本轮修复回归 ---------- */

test('行内 af:// 锚点噪声被清理（李阳，含连续锚点）', () => {
  const text = `自我评价
较强的执行力。
af://n61 af://n78

工作经历：
某公司 | 工程师 | 2021-2023
负责A。
af://n0af://n4af://n7
`;
  const doc = parseResumeToDocument(text);
  assert.ok(doc.basics.summary.includes('较强的执行力'));
  assert.ok(doc.basics.summary && !doc.basics.summary.includes('af://'), 'summary 不应含锚点');
  doc.experience.forEach(e =>
    e.bullets.forEach(b => assert.ok(!b.text.includes('af://'), `bullet 不应含锚点: ${b.text}`)),
  );
});

test('PDF 书签目录（缩进标题行）被丢弃（李阳）', () => {
  const text = `自我评价
多年经验。

        基本信息
        专业技能
        工作经历
        自我评价
`;
  const doc = parseResumeToDocument(text);
  const all = serializeDocumentText(doc);
  assert.ok(!all.includes('书签目录'), '不应出现书签目录内容');
  assert.ok(!doc.customSections.some(s => s.blocks.some(b => b.text.includes('专业技能'))));
});

test('基本信息节（李阳）识别为 info 而非其他内容，提取姓名/邮箱/工作年限', () => {
  const text = `基本信息
姓   名：李阳
工作经验：7年
手   机：17990781122
邮   箱：176@163.com
求职意向：Java高级工程师
毕业院校：揭阳科技学院 / 计算机科学与技术 / 本科

专业技能
【Java】精通Java核心知识。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.basics.name, '李阳');
  assert.equal(doc.basics.phone, '17990781122');
  assert.equal(doc.basics.email, '176@163.com');
  assert.equal(doc.basics.title, 'Java高级工程师');
  assert.equal(doc.basics.workYears, '7年');
  assert.ok(doc.education.some(e => e.school.includes('揭阳科技学院')));
  // 基本信息节的内容不应进入「其他内容」
  assert.ok(!doc.customSections.flatMap(s => s.blocks).some(b => b.text.includes('李阳')));
});

test('技能折叠：【X】标签 + 独占标签词 + 残字并入（李阳/王昕）', () => {
  const text = `专业技能
【Java】精通Java核心知识、设计模式及JUC。

数据库
熟练使用MySQL数据库以及常见优化手段。

分布式
经验丰富的云原生架构开发者。
DevOps和Service Mesh等技术

框架：熟练掌握SpringBoot。

敏捷：熟悉敏捷开发。

开发工具：熟悉Linux命令。
`;
  const doc = parseResumeToDocument(text);
  const java = doc.skills.find(s => s.category === 'Java');
  assert.ok(java, '应有 Java 分组');
  assert.ok(java!.items.some(i => i.includes('精通Java')), '【Java】标签内容应归入 Java');
  const db = doc.skills.find(s => s.category === '数据库');
  assert.ok(db, '独占标签词「数据库」应形成独立分组');
  assert.ok(db!.items.some(i => i.includes('熟练使用MySQL')));
  const devops = doc.skills.find(s => s.category === '分布式');
  assert.ok(devops, '应有 分布式 分组');
  assert.ok(devops!.items.some(i => i.includes('DevOps和Service Mesh等技术')), '残字应并入上一条描述');
});

test('技能：标签行「工具:」尾部冒号清理', () => {
  const text = `专业技能
【工具】: 熟识Linux、Docker。
`;
  const doc = parseResumeToDocument(text);
  const t = doc.skills.find(s => s.category === '工具');
  assert.ok(t);
  assert.ok(t!.items.some(i => i.includes('熟识Linux')));
});

test('关键字版本号不被序号剥离误伤（程仕 http 1.0 协议）', () => {
  const text = `工作经历：
某公司 | 工程师 | 2021-2023
使用自写框架和容器（http 1.0协议）。
`;
  const doc = parseResumeToDocument(text);
  assert.ok(doc.experience[0].bullets.some(b => b.text.includes('1.0协议')), '不应把版本号剥掉');
});

test('两行式工作经历头：公司+日期 与 职位行（王昕）', () => {
  const text = `工作经历：
联想有限公司 2021.06            -       2023.07
Java软件开发工程师 北京

工作职责：
1.       担任核心开发人员。
2.       参与敏捷转型。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience.length, 1);
  const e = doc.experience[0];
  assert.ok(e.company.includes('联想有限公司'));
  assert.equal(e.title, 'Java软件开发工程师');
  assert.equal(e.location, '北京');
  assert.ok(e.bullets.some(b => b.text.includes('担任核心开发人员')));
});

test('两行式教育头：学校+日期 与 专业学历城市（王昕）', () => {
  const text = `教育经历
河南财政金融学院 2017.09                -       2021.06
计算机科学与技术        本科 郑州
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.education.length, 1);
  const e = doc.education[0];
  assert.ok(e.school.includes('河南财政金融学院'));
  assert.equal(e.degree, '本科');
  assert.equal(e.major, '计算机科学与技术');
});

test('断句合并：bullet 行与裸续行合并（程仕「框架搭」+"建的自主框架"）', () => {
  const text = `工作经历：
某公司 | 工程师 | 2021-2023
1、整个后端短信业务由我一人开发，使用了基于 springboot 框架搭
建的自主分布式框架(非 feign 远程调用)。
2、边缘节点由我一人开发，采用单体架构。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.experience[0].bullets.length, 2);
  assert.ok(doc.experience[0].bullets[0].text.includes('框架搭建'), '跨行 bullet 应合并为一条');
  assert.ok(!doc.experience[0].bullets[0].text.includes('\n'));
});

test('双栏交错：正文行内的电话/邮箱值被清理（程仕）', () => {
  const text = `程仕 内容:
男 | 25岁 1、完成整个后端短信业务开发重构。

工作经历：
某公司 | 工程师 | 2021-2023
微信号: 13125217338 发的探针进行 unix 通道交互。
`;
  const doc = parseResumeToDocument(text);
  const bullets = doc.experience.flatMap(e => e.bullets.map(b => b.text)).join(' ');
  assert.ok(!bullets.includes('13125217338'), '双栏交错应删掉行内电话值');
  assert.ok(bullets.includes('发的探针进行 unix 通道交互'));
});

test('个人优势节映射为 summary（程仕）', () => {
  const text = `个人优势
自主编写web容器与框架实用，对javaSE了解较深。
\n工作经历：
某公司 | 工程师 | 2021-2023
负责A。
`;
  const doc = parseResumeToDocument(text);
  assert.ok(doc.basics.summary.includes('自主编写web容器与框架实用'));
});

test('求职意向/期望城市 在正文节之后仍被识别（程仕右栏交错）', () => {
  const text = `工作经历：
某公司 | 工程师 | 2021-2023
前端请求量不大。
求职意向：Java 号码短信
期望城市：南昌 史表中
工作时长：4年 用
`;
  const doc = parseResumeToDocument(text);
  assert.ok(doc.basics.title.includes('Java'), `title 应含 Java：${doc.basics.title}`);
  assert.ok((doc.basics.location || '').includes('南昌'), `location 应含南昌：${doc.basics.location}`);
  assert.ok((doc.basics.workYears || '').includes('4年'), `workYears 应含4年：${doc.basics.workYears}`);
});

test('期望城市/工作时长 去掉交错噪声尾部（南昌 史表中 / 4年 用）', () => {
  const text = `基本信息
期望城市：南昌 史表中）
工作时长：4年 用），前端请求量不大。
`;
  const doc = parseResumeToDocument(text);
  assert.equal(doc.basics.location, '南昌');
  assert.equal(doc.basics.workYears, '4年');
});

test('项目内部小节标签不落到 bullet（李阳：技术选型/核心职责/项目周期）', () => {
  const text = `项目经历：
SLA服务
核心开发人员
项目描述：联想标品项目，运营层面的SLA。
技术选型：SpringBoot、Mybatis、Redis。
核心职责：
负责配置模块开发，使用Groovy转换配置项。

项目周期：2018.11 – 至今
51云发票系统
负责发票开具。
`;
  const doc = parseResumeToDocument(text);
  const prj = doc.projects.find(p => p.name === 'SLA服务');
  assert.ok(prj, '应有 SLA服务 项目');
  assert.deepEqual(prj!.technologies, ['SpringBoot', 'Mybatis', 'Redis']);
  assert.ok(prj!.bullets.length > 0);
  // 标签残行不应作为 bullet
  assert.ok(!prj!.bullets.some(b => /技术选型|核心职责|项目周期/.test(b.text)), `残留标签: ${JSON.stringify(prj!.bullets.map(b => b.text))}`);
});

test('两行式经历头：独立职位行提升为 title/location（王昕）', () => {
  const text = `工作经历：
联想有限公司 2021.06 - 2023.07

Java软件开发工程师 北京

工作职责：
1. 担任核心开发人员。
`;
  const doc = parseResumeToDocument(text);
  const e = doc.experience[0];
  assert.equal(e.title, 'Java软件开发工程师');
  assert.equal(e.location, '北京');
  // 职位行不再作为 bullet
  assert.ok(!e.bullets.some(b => b.text.includes('Java软件开发工程师')));
});
