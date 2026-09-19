/**
 * POC Demo 简历数据：模拟现有测试简历（Java 高级开发 - 李阳）
 * 用于「结构化编辑器 + A4 实时预览 + PDF 导出」链路验证
 */

import type { ResumeDocument } from '../../types/resumeDocument';

export const DEMO_RESUME: ResumeDocument = {
  version: 1,
  basics: {
    name: '李阳',
    title: 'Java 高级开发工程师',
    email: 'liyang.dev@example.com',
    phone: '138-0000-1234',
    location: '上海',
    website: 'github.com/liyang',
    summary:
      '7 年 Java 后端开发经验，专注高并发、分布式系统设计与性能优化。主导过日均百万级请求的短链接基础服务建设，'
      + '精通 Spring Boot / Spring Cloud / Redis / 分库分表等主流技术栈，具备从需求分析到线上稳定性保障的完整闭环能力。',
  },
  skills: [
    { id: 'sk-1', category: '后端', items: ['Java', 'Spring Boot', 'Spring Cloud', 'MyBatis', 'Netty'] },
    { id: 'sk-2', category: '中间件', items: ['Redis', 'Kafka', 'RabbitMQ', 'Elasticsearch', 'xxl-job'] },
    { id: 'sk-3', category: '数据库', items: ['MySQL', 'PostgreSQL', '分库分表', 'HBase'] },
    { id: 'sk-4', category: '部署运维', items: ['Docker', 'Kubernetes', 'Nginx', 'Prometheus', 'Grafana'] },
  ],
  experience: [
    {
      id: 'exp-1',
      company: '某头部支付科技公司',
      title: '高级 Java 开发工程师',
      startDate: '2021-07',
      endDate: '至今',
      location: '上海',
      description: '负责电子发票与支付核心链路系统建设。',
      bullets: [
        { id: 'bullet-1-1', text: '设计和开发了短链接基础服务，显著提高电子发票二维码识别速度，提高了用户体验和效率。' },
        { id: 'bullet-1-2', text: '参与了数据库的分库分表设计，支撑日开票量 400w+ 的稳定写入与查询。' },
        { id: 'bullet-1-3', text: '主导亿级动账表按月份 RANGE 分区改造，查询耗时从秒级降低到毫秒级。' },
      ],
    },
    {
      id: 'exp-2',
      company: '某电商平台',
      title: 'Java 开发工程师',
      startDate: '2019-03',
      endDate: '2021-06',
      location: '杭州',
      description: '',
      bullets: [
        { id: 'bullet-2-1', text: '负责订单中心与库存系统模块开发，支撑大促峰值 10w QPS 的稳定运行。' },
        { id: 'bullet-2-2', text: '基于 Redis 构建热点数据缓存，接口平均响应时间降低 40%。' },
      ],
    },
  ],
  projects: [
    {
      id: 'prj-1',
      name: '高可用短链接服务',
      role: '技术负责人',
      link: '',
      startDate: '2022-01',
      endDate: '2022-06',
      bullets: [
        { id: 'prj-1-1', text: '设计发号器 + 缓存 + 落库三级架构，单机 QPS 达 5w，可用性 99.99%。' },
        { id: 'prj-1-2', text: '通过 Redis 缓存优化进一步提升高峰期稳定性，P99 延迟从 200ms 降低至 50ms。' },
      ],
    },
    {
      id: 'prj-2',
      name: '亿级动账表分区改造',
      role: '核心开发者',
      link: '',
      startDate: '2023-03',
      endDate: '2023-08',
      bullets: [
        { id: 'prj-2-1', text: '主导按月份 RANGE 分区改造，历史数据归档查询耗时降低 95%。' },
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      school: '某理工大学',
      degree: '本科',
      major: '计算机科学与技术',
      startDate: '2015-09',
      endDate: '2019-06',
      bullets: [],
    },
  ],
  certifications: [
    { id: 'cert-1', name: 'PMP 项目管理认证', date: '2022' },
  ],
  awards: [],
  languages: [
    { id: 'lang-1', name: '英语', level: 'CET-6' },
  ],
  customSections: [],
};
