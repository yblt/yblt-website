export const profile = {
  name: '杨彬林',
  title: '全栈开发工程师 · 1年经验',
  tagline: 'Java 后端 / 全栈 | AI 应用 Agent 方向 | 开源爱好者',
  target: '求职意向：Java 后端 / 全栈开发（AI 应用 Agent 方向） · 随时到岗',
  age: 21,
  phone: '13238339930',
  email: '2713764566@qq.com',
  github: 'https://github.com/yblt',
  ifdian: 'https://ifdian.net/a/yblt01',
  avatar: 'https://github.com/yblt.png',
  intro: '21 岁，计算机科学与技术本科在读，1 年全栈开发经验。3 段实习横跨高并发系统重构、AI 产品功能优化与电力行业企业级 Agent 平台的部署联调和 trace 实测验证。同时是 AI 工具重度玩家与开源爱好者，自研 MCP 视觉工具与 Agent 桥接项目对外开源。每天都在寻找更强大更方便的 AI 工具，每天都有新的项目思路，每天都比昨天进步一点点。',
  resumeUrl: '/resume.pdf'
}

export const projects = [
  {
    name: '企业级多智能体平台 · trace 验证与调优',
    repo: '',
    github: '',
    desc: '某省级电网多智能体工作台的验证与调优项目：以 14 项疑问清单驱动，基于落盘 trace 对分层记忆、主从式多 Agent、安全阀与安全边界做全量量化核查，把"我见过一个系统"做成"我验证过一个系统"。',
    stack: ['Agent架构', 'trace可观测性', '分层记忆', '多Agent协作', 'Docker沙箱', 'Python'],
    features: [
      '建立 trace 级复盘能力：全量统计 12 会话 / 1,293 次工具调用，量化失败率 6.3%，定位文件读取类工具 8.7% 失败率为 Top 瓶颈，归纳 schema 类问题为根因前三',
      '区分"工具清单文本出现"与"实际调用"：逐条解析 tool_calls 证实子 Agent 真实派发为 0 次，为多 Agent 启用策略提供一手证据',
      '实测复核安全阀（100 轮上限，最大实测 31 轮）与超时容错（30s，最大轮间隔 16s）的真实触发状态；以文件 mtime 硬证据核查记忆回写链路',
      '以库内实测推翻技能文档口径：发现风险等级编码与文档相反，确立"以库为准"取数纪律并复现验证',
      '复盘定位"空查询结果被当作业务结论交付"的系统性缺陷，提出运行参数快照落盘、空结果降级门禁、长尾探索止损三项改进（按业务正确性＞可观测性＞效率排序）',
      '验证 Docker 沙箱隔离与权限边界：越狱请求被运行时拦截，trace 全量落盘支撑合规审计回溯'
    ],
    arch: [
      { items: [{ title: '疑问清单', sub: '14 问 · 量化基线→设计取舍→机制→反思 四轮' }] },
      { items: [{ title: '对话取证', sub: 'trace 统计 / mtime / 编码实测' }] },
      { items: [{ title: '证据三栏表', sub: '问题 / 证据 / 可写结论' }] },
      { items: [{ title: '产出', sub: '量化画像 + 失败复盘 + 三项改进方案' }] }
    ],
    highlight: true
  },
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
    arch: [
      { items: [{ title: '手机 · 企业微信App', sub: '发消息 / 收流式回复' }] },
      { items: [{ title: '企微服务器', sub: '智能机器人长连接API' }] },
      { items: [{ title: '桥接程序', sub: 'WebSocket 长连接 · 电脑主动外连' }] },
      { items: [{ title: 'Agent serve', sub: 'opencode / Claude Code / Codex' }] }
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
      '429/5xx 自动降级轮换到其他免费视觉模型，限流自愈',
      'MCP 原生工具 + CLI 兜底双形态，同一份核心代码',
      '零依赖核心：纯 Python 标准库，无需 pip',
      '6 大能力：描述 / OCR / 图表 / 文档 / 截图 / 定位',
      '与实习中企业 MCP 服务部署联调经验互补：工作中接入，业余自研输出'
    ],
    arch: [
      { items: [{ title: '图片 / 截图 / OCR / 图表', sub: '本地文件或URL' }] },
      { items: [{ title: 'glm-4.6v-flash', sub: '免费视觉模型 · OpenAI兼容接口' }] },
      { items: [{ title: '文字理解', sub: '描述 / OCR / 图表 / 文档 / 定位' }] },
      { items: [{ title: 'MCP 工具 + CLI', sub: '无缝接入 DeepSeek 等 Agent' }] }
    ],
    highlight: true
  },
  {
    name: '中医知识检索增强问答系统',
    repo: '',
    github: '',
    desc: '面向中医古籍、教材与医案的超长文本 RAG 问答系统，针对 embedding 截断、OCR 干扰与证据不足导致的错误自信回答，设计可控检索决策与分层记忆机制。',
    stack: ['SpringBoot', 'SpringCloud', 'Python', 'Embedding', 'Faiss', 'FastAPI', 'Redis', 'LangChain', 'Docker'],
    features: [
      '多格式文档解析微服务（PDFBox / Tika），支持 PDF/MD/JSON 中医古籍解析',
      '基于 LangChain + CoT·ReAct 范式的动态检索决策 Agent，配置中心动态调整决策阈值',
      'Redis 短期记忆 + MySQL 长期记忆的分层记忆机制',
      'RAGAS 自动化评估闭环，验证检索与生成质量',
      '实测检索命中率提升 10%，错误回答率降低 13%',
      'Docker Compose 一键启停与扩缩容'
    ],
    arch: [
      { label: '解析层', items: [{ title: '多格式文档解析', sub: 'PDFBox / Tika' }] },
      { label: '索引层', items: [{ title: '语义切片 + Embedding', sub: 'Faiss 向量库' }] },
      { label: '检索层', items: [{ title: '向量检索', sub: '召回相关片段' }] },
      { label: '决策层', items: [{ title: '动态检索决策 Agent', sub: 'CoT + ReAct · 证据充分度阈值' }] },
      { label: '生成层', items: [{ title: 'LangChain + 大模型', sub: '带引用可溯源答案 · RAGAS 评估' }] }
    ]
  },
  {
    name: 'XR机器人挑战赛任务链（省赛三等奖）',
    repo: 'AutolifeXAIR',
    github: 'https://github.com/yblt/AutolifeXAIR',
    desc: '2026 广东省人工智能与机器人大赛 · 服务机器人应用技术员赛项：轮式双臂机器人"导航→抓瓶→投瓶→抓衣→投衣"T1~T5 全流程任务链，实机全链跑通，获省赛三等奖（2 人队伍）。',
    stack: ['Python', 'ROS 2', 'OpenCV', 'RGBD深度反投影', 'Nav2', '状态机'],
    features: [
      'T1~T5 任务链联调：导航、识别、抓取、投放完整链路实机跑通',
      'HSV 视觉伺服 + 深度引导抓取，支持多物品分拣（瓶子/衣物）',
      '建立"HSV采样→改标定JSON→验证"现场调参工作流与速查文档，换目标/换工位快速适配',
      'fail-closed 安全设计：默认预览零动作、运动前范围校验拒跑超限参数、物理急停',
      '状态机架构，每段独立运行，任一段失败即整链中止',
      '证据链自动归档（chain_log.csv）支撑赛后复盘'
    ],
    arch: [
      { items: [{ title: '导航模块', sub: 'Nav2 命名点导航' }] },
      { items: [{ title: '视觉检测', sub: 'HSV + 深度相机反投影' }] },
      { items: [{ title: '抓取状态机', sub: '左臂/右臂切换' }] },
      { items: [{ title: '投放状态机', sub: '瓶子/衣物分拣' }] },
      { items: [{ title: 'flow.sh', sub: '一条龙入口 · 全链执行' }] }
    ],
    highlight: true
  },
  {
    name: '直播平台高并发系统重构',
    repo: '',
    github: '',
    desc: '针对娱乐直播平台 2 万用户并发时的直播间崩溃问题，进行系统架构重构和性能优化，实现高并发稳定运行。',
    stack: ['Java', 'SpringBoot', 'Netty', 'Redis', 'RocketMQ', 'MySQL', 'Docker'],
    features: [
      '网关层→业务层→数据层三层分离架构重构',
      'Netty WebSocket 集群 + Redis Pub/Sub 跨节点同步，支持 50 人同时连麦',
      'RocketMQ 弹幕消息削峰填谷，弹幕/礼物/系统通知分离处理',
      'L1/L2/L3 三级缓存（Caffeine 本地 + Redis 集群 + MySQL），直播间状态缓存命中率 95%+',
      'MyCAT 读写分离 + HikariCP 连接池优化，热点查询响应大幅缩短',
      'Protobuf 序列化压缩信令体积，连麦信令延迟 500ms → 100ms',
      '心跳检测 + 断线重连机制保障长连接可靠性',
      'Sentinel 限流降级，压力过大时自动降级非核心功能',
      '全链路监控：ELK 日志 + Prometheus/Grafana 指标 + SkyWalking 链路 + JMeter 压测'
    ],
    arch: [
      { label: '网关层', items: [{ title: 'Nginx 负载均衡' }, { title: 'Netty WebSocket 集群', sub: 'Redis Pub/Sub 跨节点同步 · Protobuf' }] },
      { label: '业务层', items: [{ title: '直播间服务' }, { title: '用户服务' }, { title: '消息服务' }, { title: 'Sentinel 限流降级' }] },
      { label: '数据层', items: [{ title: 'MySQL 主从', sub: 'MyCAT 读写分离' }, { title: '三级缓存', sub: 'Caffeine + Redis 集群' }, { title: 'RocketMQ', sub: '弹幕削峰' }] },
      { label: '可观测', items: [{ title: 'ELK / Prometheus / SkyWalking', sub: '日志·指标·链路 + JMeter 压测' }] }
    ]
  },
  {
    name: 'Upscayl 产品功能优化与性能提升',
    repo: '',
    github: '',
    desc: '基于竞品分析结果，对 AI 图像增强产品 Upscayl 进行功能优化与性能提升，实现作品管理、版本对比、批量处理等核心功能。',
    stack: ['Java', 'SpringBoot', 'Python', 'PyTorch', 'Redis', 'MySQL', 'Docker'],
    features: [
      '竞品分析 5 维度方法论：产品定位 / 商业策略 / 功能设计 / 交互视觉 / 技术架构，输出 1.5 万字报告',
      '功能三层结构设计：任务入口 → 统一工作台 → 作品资产',
      '用户分层策略：轻度/中度/重度用户对应不同入口与定价',
      '作品管理模块：历史记录、版本管理、云端保存，功能上线后用户使用率提升 40%',
      '版本对比：原图与增强图实时对比；批量处理：ZIP 上传、逐图状态、批量导出',
      '模型量化 + 批处理 + 异步处理，处理速度提升 50%+',
      '微服务架构：用户 / 图像处理 / 模型推理服务分离'
    ],
    arch: [
      { label: '前端', items: [{ title: '任务入口', sub: '上传 / 作品库 / 对比' }] },
      { label: '业务层', items: [{ title: '用户服务' }, { title: '图像处理服务' }] },
      { label: '推理层', items: [{ title: '模型推理服务', sub: 'PyTorch · GPU 量化加速' }] },
      { label: '存储', items: [{ title: 'MySQL', sub: '作品元数据' }, { title: 'Redis', sub: '任务状态缓存' }] }
    ],
    compact: true
  },
  {
    name: '智能温控数据网关',
    repo: 'temperature-gateway',
    github: 'https://github.com/yblt/temperature-gateway',
    desc: '模拟工厂温度传感器通过 MQTT 上报数据，经 SpringBoot 处理后存入 MySQL，并通过 RabbitMQ 转发给下游系统。',
    stack: ['SpringBoot', 'MQTT', 'RabbitMQ', 'MySQL', 'Docker', 'Jenkins'],
    features: [
      '使用 MQTT 协议（Eclipse Paho）实现物联网设备数据接入，支持断线自动重连',
      '基于 SpringBoot 四层架构（Controller / Service / Repository / DTO），代码结构清晰',
      '集成 RabbitMQ Topic Exchange，通过 routing key 区分正常/告警消息，实现系统解耦',
      '内置传感器模拟器（SensorSimulator），每5秒自动生成模拟数据，无需外部工具即可演示完整数据流',
      'Docker Compose 编排 4 个服务（MySQL / RabbitMQ / EMQX / 应用），一键启动全套环境',
      '配置 Jenkins Pipeline 实现 CI/CD 自动化构建与部署'
    ],
    arch: [
      { items: [{ title: '传感器模拟器', sub: '每5秒生成温度数据' }] },
      { items: [{ title: 'MQTT Broker', sub: 'EMQX · 消息路由' }] },
      { items: [{ title: 'SpringBoot 网关', sub: '数据处理 · 状态判断' }] },
      { items: [{ title: 'MySQL', sub: '数据存储 · 自动清理' }] },
      { items: [{ title: 'RabbitMQ', sub: 'Topic Exchange · 消息转发' }] }
    ],
    compact: true
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
    ],
    arch: [
      { items: [{ title: '《刑法》文档解析', sub: '结构化 + 清洗' }] },
      { items: [{ title: 'Embedding + 语义索引', sub: '向量数据库' }] },
      { items: [{ title: '法律问题检索', sub: '相关法条召回' }] },
      { items: [{ title: '可溯源答案生成', sub: '带法条引用' }] }
    ],
    compact: true
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
    ],
    arch: [
      { items: [{ title: '产品图片入库', sub: '特征提取' }] },
      { items: [{ title: 'Milvus 向量索引', sub: '高效相似检索' }] },
      { items: [{ title: '相似产品图检索', sub: '电商场景' }] },
      { items: [{ title: 'AI 生图', sub: '基于参考图生成' }] }
    ],
    compact: true
  },
  {
    name: '足健手环',
    repo: 'zepp-health',
    github: 'https://github.com/yblt/zepp-health',
    desc: '基于 Zepp OS 4.0 的力量训练辅助工具，在手表端实现组数计数、心率三级预警与间歇计时，帮助健身爱好者高效完成力量训练。',
    stack: ['JavaScript', 'Zepp OS 4.0', '传感器API', '本地持久化'],
    features: [
      '组数计数器：上滑手势记录，支持目标组数配置（1-20组），完成后震动反馈',
      '实时心率监测：Tanaka 公式计算 HRmax，绿(≤90%)/黄(90-95%)/红(≥95%) 三级预警',
      '间歇倒计时：可配置时长（15-300s），倒计时结束震动提示，防误触冷却机制',
      '首次启动问卷：出生年份设置 + 免责声明确认，自动计算个人 HRmax',
      '本地持久化：所有配置与训练状态保存至设备本地存储，重启不丢失'
    ],
    arch: [
      { items: [{ title: '首次启动问卷', sub: '出生年份 → Tanaka 公式算 HRmax' }] },
      { items: [{ title: '训练主页', sub: '组数计数 + 实时心率 + 三级颜色预警' }] },
      { items: [{ title: '间歇倒计时', sub: '可配置时长 · 震动提示 · 防误触' }] },
      { items: [{ title: '本地持久化', sub: 'KV 存储 · 重启不丢失' }] }
    ],
    compact: true
  },
  {
    name: 'AI Website Cloner',
    repo: 'web-clone',
    github: 'https://github.com/yblt/web-clone',
    desc: '基于AI的网站克隆工具，一条命令将任意网站重建为现代Next.js应用，支持12+AI编程代理。',
    stack: ['Next.js', 'AI应用', '前端工程化', 'Cloudflare Workers'],
    features: [
      '一条命令克隆任意网站，支持12+AI编程代理（Claude Code/Codex/Cursor等）',
      '多阶段流水线：侦察→基础搭建→组件规格→并行构建→组装QA',
      '自动提取设计token、下载资源、生成组件规格',
      '部署到Cloudflare Workers，支持Docker开发环境',
      '支持多页面克隆，保留原站布局与交互行为',
      'MIT开源，可扩展的架构设计'
    ],
    arch: [
      { items: [{ title: 'AI代理', sub: 'Claude Code / Codex / Cursor' }] },
      { items: [{ title: '侦察阶段', sub: '截图 · 设计token提取' }] },
      { items: [{ title: '并行构建', sub: 'git worktree · 多代理协作' }] },
      { items: [{ title: 'Next.js应用', sub: 'App Router · React 19' }] },
      { items: [{ title: 'Cloudflare Workers', sub: '边缘部署 · 全球加速' }] }
    ],
    compact: true
  }
]

export const skills = {
  backend: {
    label: '后端开发',
    color: '#4f46e5',
    items: [
      { name: 'Java', level: 90 },
      { name: 'JUC / JVM / 反射 / 异常体系', level: 80 },
      { name: 'SpringBoot / SpringCloud', level: 85 },
      { name: 'MySQL（索引 / 事务 / MVCC / Explain）', level: 85 },
      { name: 'Redis（含雪崩/穿透/击穿治理）', level: 80 },
      { name: 'RocketMQ / Kafka', level: 75 },
      { name: '微服务架构设计 / 技术选型评估', level: 78 },
      { name: 'Python / FastAPI', level: 80 },
      { name: 'Docker / K8s', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Node.js', level: 75 },
      { name: 'MQTT (Eclipse Paho)', level: 70 }
    ]
  },
  ai: {
    label: 'AI 应用开发',
    color: '#0d9488',
    items: [
      { name: 'LangChain', level: 85 },
      { name: 'RAG / Embedding', level: 85 },
      { name: 'Agent 开发 (CoT/ReAct)', level: 80 },
      { name: 'MCP 协议 / 工具调用链路', level: 85 },
      { name: 'trace 可观测性与量化验证', level: 80 },
      { name: '提示词工程', level: 85 },
      { name: '多轮对话', level: 80 },
      { name: 'RAGAS 评估闭环', level: 75 },
      { name: 'Milvus / Faiss', level: 75 },
      { name: 'LoRA 微调', level: 70 }
    ]
  },
  frontend: {
    label: '前端开发',
    color: '#ea580c',
    items: [
      { name: 'Vue 3 / Composition API', level: 80 },
      { name: 'React', level: 75 },
      { name: 'JavaScript / TypeScript', level: 80 },
      { name: 'Vite / Pinia / Axios / Element Plus', level: 78 },
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
      { name: '阿里云 / 腾讯云', level: 70 },
      { name: 'Jenkins', level: 70 },
      { name: 'Maven', level: 75 }
    ]
  }
}

export const experiences = [
  {
    company: '北京华源格林科技有限公司（派驻某省级电网项目）',
    role: 'Java后端开发实习生',
    time: '2026.08 ~ 至今',
    points: [
      '动态DDL执行系统：设计表结构变更执行表与错误日志表，支持按主键跨多局点循环执行并自动记录报错，表结构变更从逐库手动升级为自动化批量执行 + 错误可追溯，支撑多局点统一发版',
      '智能体MCP服务部署与联调：在客户服务器完成 MCP（Model Context Protocol）服务部署与链路调通，实现风险评估审核结果全链路溯源；配合智能体平台内网部署测试',
      '多智能体工作台 trace 验证与调优：14 项疑问清单驱动，全量统计 12 会话 / 1,293 次工具调用，量化失败率 6.3%；复盘定位"空结果当业务结论"缺陷并提出三项按收益排序的改版方案',
      '预置位纠偏算法（客户现场）：归一化中心距离、目标宽高、置信度四维加权的目标识别算法，基于 IOU 输出连续帧运动轨迹',
      '数据治理系统维护：本地跑通系统架构，定位并修复外单位组织树不显示数据的问题，完成达梦与 MySQL 间数据同步'
    ]
  },
  {
    company: '深圳极数智能科技有限公司',
    role: '全栈开发工程师',
    time: '2026.08 · 1个月',
    points: [
      '完成 Upscayl 竞品（Nero AI / LetsEnhance）深度技术分析，建立产品定位/商业策略/功能设计/交互视觉/技术架构 5 维度分析框架，输出 1.5 万字竞品分析报告',
      '开发作品管理、版本对比、批量处理等核心功能并上线，用户使用率提升 40%',
      '制定模型量化、批处理、异步处理性能优化方案，图像处理速度提升 50%；完成用户/图像处理/模型推理微服务拆分架构设计'
    ]
  },
  {
    company: '泸州七点跨境电子商务有限公司',
    role: '全栈开发工程师',
    time: '2026.07 ~ 2026.08 · 1个月',
    points: [
      '针对直播平台 2 万用户并发时直播间频繁崩溃问题进行系统重构：设计"网关层→业务层→数据层"三层分离架构，引入 Redis 集群与 RocketMQ',
      'Netty WebSocket 集群 + Redis Pub/Sub 跨节点信令同步，支撑 2 万+用户同时在线、50 人同时连麦',
      '弹幕/礼物/系统通知分离处理 + RocketMQ 削峰填谷，消除消息堆积瓶颈；Sentinel 限流降级保障高并发时段稳定运行'
    ]
  }
]

export const education = {
  school: '广州华商学院',
  major: '计算机科学与技术',
  time: '2023.09 ~ 2027.07',
  degree: '本科',
  honors: ['校级奖学金一等奖', '绩点前 10%', '2026广东省人工智能与机器人大赛·服务机器人应用技术员赛项 三等奖', '蓝桥杯省级二等奖', '大学英语四级']
}

export const highlights = [
  {
    title: '3 段实习经历',
    desc: '高并发系统重构 · AI 产品功能优化 · 电网企业级 Agent 平台部署与 trace 实测'
  },
  {
    title: 'Agent 实测验证',
    desc: '分层记忆 / 多Agent编排 / trace可观测性的企业级一手验证经验，1,293 次调用量化分析'
  },
  {
    title: '8+ 开源项目',
    desc: 'wecom-opencode-bridge、glm-vision、AutolifeXAIR、temperature-gateway 等原创项目'
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
