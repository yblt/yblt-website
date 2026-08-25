export const profile = {
  name: '杨彬林',
  title: '全栈开发工程师',
  tagline: '全栈开发 | AI 应用开发者 | 开源爱好者',
  target: '求职意向：全栈开发 · 6-8K · 随时到岗',
  age: 21,
  phone: '13238339930',
  email: '2713764566@qq.com',
  github: 'https://github.com/yblt',
  ifdian: 'https://ifdian.net/a/yblt01',
  avatar: 'https://github.com/yblt.png',
  intro: '21 岁，计算机科学与技术本科在读。3 段开发实习经历，横跨高并发系统重构、AI 产品功能优化与 RAG 应用开发。每天都在寻找更强大更方便的 AI 工具，每天都有新的项目思路，每天都比昨天进步一点点。',
  resumeUrl: '/resume.pdf'
}

export const projects = [
  {
    name: '企业微信智能机器人桥接',
    repo: 'wecom-opencode-bridge',
    github: 'https://github.com/yblt/wecom-opencode-bridge',
    desc: '企业微信智能机器人(长连接API) ⇄ AI Agent 桥接，手机发消息驱动电脑上 Agent 执行，结果流式回到手机。',
    stack: ['JavaScript', 'Node.js', 'WebSocket', '企业微信API'],
    features: [
      '官方企微长连接 API，零封号风险',
      '与 opencode 全能力打通：读写文件、执行命令、多轮会话',
      '流式回复，手机上实时看到 AI 输出（打字机效果）',
      '支持 opencode / Claude Code / Codex CLI / OpenHands 多适配器',
      '按微信 userid 隔离独立会话'
    ],
    highlight: true
  },
  {
    name: 'GLM-Vision 视觉桥接',
    repo: 'glm-vision',
    github: 'https://github.com/yblt/glm-vision',
    desc: '用智谱完全免费的 GLM-4.6V-Flash 视觉模型，给 DeepSeek 等纯文本模型装上"眼睛"：图片/截图/OCR/图表/扫描文档 → 文字理解。',
    stack: ['Python', 'MCP', '智谱AI', 'OpenAI兼容接口'],
    features: [
      '完全免费，128K 上下文，OpenAI 兼容接口',
      '429/5xx 自动降级到其他免费视觉模型',
      'MCP 原生工具 + CLI 兜底双形态',
      '零依赖核心：纯 Python 标准库，无需 pip',
      '6 大能力：描述 / OCR / 图表 / 文档 / 截图 / 定位'
    ],
    highlight: true
  },
  {
    name: '足健手环小程序',
    repo: 'zepp-health',
    github: 'https://github.com/yblt/zepp-health',
    desc: '基于 Zepp OS 4.0 的健身训练小程序，为智能手环用户提供足部健康训练指导。',
    stack: ['JavaScript', 'Zepp OS 4.0', '小程序开发'],
    features: [
      '足部健康评估与个性化训练计划',
      '实时运动数据追踪与进度可视化',
      '手环端与手机端数据同步',
      '低功耗蓝牙通信优化'
    ]
  },
  {
    name: '刑法知识问答 AI Agent',
    repo: 'leagel-rag',
    github: 'https://github.com/yblt/leagel-rag',
    desc: '基于 RAG（检索增强生成）的刑法知识精准问答 Agent，以《中华人民共和国刑法》为知识源，实现从解析到问答的完整闭环。',
    stack: ['Python', 'RAG', 'Embedding', '向量数据库', 'LangChain'],
    features: [
      '法律文档解析与结构化',
      '语义索引与检索',
      '带法条引用的可溯源答案生成',
      '多轮对话上下文管理'
    ]
  },
  {
    name: '电商生图 RAG',
    repo: 'nano-banana-milvus',
    github: 'https://github.com/yblt/nano-banana-milvus',
    desc: '基于 RAG 技术的电商产品图生成系统，结合向量检索与 AI 生成，为电商商家提供智能产品图生成服务。',
    stack: ['Python', 'RAG', 'Milvus', 'AI图像生成'],
    features: [
      '产品图片特征提取与索引',
      '相似产品图智能检索',
      '基于参考图的 AI 生图',
      '电商场景适配与批量处理'
    ]
  },
  {
    name: '直播平台高并发系统重构',
    repo: '',
    github: '',
    desc: '针对娱乐直播平台 2 万用户并发时的直播间崩溃问题，进行系统架构重构和性能优化，实现高并发稳定运行。',
    stack: ['Java', 'SpringBoot', 'Netty', 'Redis', 'RocketMQ', 'MySQL', 'Docker'],
    features: [
      '网关层→业务层→数据层三层分离架构',
      'WebSocket 集群 + Redis Pub/Sub 跨节点同步',
      'RocketMQ 弹幕消息削峰填谷',
      'Redis 多级缓存，命中率 95%+',
      'Sentinel 限流降级保障稳定性'
    ]
  },
  {
    name: 'Upscayl 产品功能优化与性能提升',
    repo: '',
    github: '',
    desc: '基于竞品分析结果，对 AI 图像增强产品 Upscayl 进行功能优化与性能提升，实现作品管理、版本对比、批量处理等核心功能。',
    stack: ['Java', 'SpringBoot', 'Python', 'PyTorch', 'Redis', 'MySQL', 'Docker'],
    features: [
      '作品管理模块：历史记录、版本管理、云端保存',
      '版本对比：原图与增强图实时对比',
      '批量处理：ZIP 上传、逐图状态、批量导出',
      '模型量化 + 批处理，处理速度提升 50%+',
      '微服务架构：用户/图像处理/模型推理服务分离'
    ]
  },
  {
    name: '中医知识检索增强问答系统',
    repo: '',
    github: '',
    desc: '面向中医古籍、教材与医案的超长文本 RAG 问答系统，设计可控检索决策与分层记忆机制，提升可靠性与可解释性。',
    stack: ['SpringBoot', 'SpringCloud', 'Python', 'Embedding', 'Faiss', 'FastAPI', 'Redis', 'Docker', 'LangChain'],
    features: [
      '多格式文档解析微服务（PDFBox/Tika）',
      '动态检索决策 Agent，配置中心动态调阈值',
      'Redis 短期记忆 + MySQL 长期记忆分层',
      'Docker Compose 一键启停与扩缩容'
    ]
  }
]

export const skills = {
  backend: {
    label: '后端开发',
    color: '#4f46e5',
    items: [
      { name: 'Java', level: 90 },
      { name: 'SpringBoot / SpringCloud', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'RocketMQ / Kafka', level: 75 },
      { name: 'Python / FastAPI', level: 80 },
      { name: 'Docker / K8s', level: 75 }
    ]
  },
  ai: {
    label: 'AI 应用开发',
    color: '#0d9488',
    items: [
      { name: 'LangChain', level: 85 },
      { name: 'RAG / Embedding', level: 85 },
      { name: 'Milvus / Faiss', level: 75 },
      { name: 'Agent 开发 (CoT/ReAct)', level: 80 },
      { name: '提示词工程', level: 85 },
      { name: 'LoRA 微调', level: 70 }
    ]
  },
  frontend: {
    label: '前端开发',
    color: '#ea580c',
    items: [
      { name: 'Vue.js / React', level: 80 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: '小程序 / Zepp OS', level: 75 },
      { name: '响应式设计', level: 80 }
    ]
  },
  tools: {
    label: '工具与平台',
    color: '#334155',
    items: [
      { name: 'Git / GitHub Actions', level: 85 },
      { name: 'IDEA / VS Code', level: 90 },
      { name: 'Linux', level: 75 },
      { name: '阿里云 / 腾讯云', level: 70 }
    ]
  }
}

export const experiences = [
  {
    company: '深圳极数智能科技有限公司',
    role: '全栈开发工程师',
    time: '2026.08 · 1个月',
    points: [
      '完成 Upscayl 竞品（Nero AI / LetsEnhance）深度技术分析，输出 1.5 万字竞品分析报告',
      '开发作品管理、版本对比、批量处理等核心功能并上线，用户使用率提升 40%',
      '制定模型量化、批处理、异步处理方案，图像处理速度提升 50%'
    ]
  },
  {
    company: '泸州七点跨境电子商务有限公司',
    role: '全栈开发工程师',
    time: '2026.07 ~ 2026.08 · 1个月',
    points: [
      '重构高并发直播系统，直播间崩溃率从 15% 降至 0.5%，可用性达 99.9%',
      '搭建 Netty WebSocket 集群 + Redis Pub/Sub，单直播间支持 20000 人并发',
      'RocketMQ 削峰填谷，弹幕消息处理能力提升 10 倍至 5 万条/秒'
    ]
  }
]

export const education = {
  school: '广州华商学院',
  major: '计算机科学与技术',
  time: '2023.09 ~ 2027.07',
  degree: '本科',
  honors: ['校级奖学金一等奖', '绩点前 10%', '蓝桥杯省级二等奖', '大学英语四级']
}

export const highlights = [
  {
    title: '3 段实习经历',
    desc: '高并发系统重构、AI 产品优化、RAG 应用开发'
  },
  {
    title: '6+ 开源项目',
    desc: 'wecom-opencode-bridge、glm-vision 等原创项目'
  },
  {
    title: 'AI 持续学习',
    desc: '每天研究更强大的 AI 工具，项目思路不断迭代'
  }
]

export const nav = [
  { id: 'home', label: '首页' },
  { id: 'projects', label: '项目作品' },
  { id: 'skills', label: '技能栈' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系我' }
]
