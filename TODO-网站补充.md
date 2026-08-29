# TODO：网站待补充/更新清单

> 来源：比对 `E:\简历材料\new\` 下文件与 `personal-website` 网站现有内容，提取"新增"与"不足"信息。
> 处理方式：网站所有文字内容都在 `src/data/site.js`，改数据即可，无需动组件。

---

## ✅ 已完成 / 已确认

- [x] **简历 PDF 已更新**：网站 `public/resume.pdf` 与 `new/杨彬林 -1年经验-全栈开发.pdf` 大小一致（784483字节），已是"1年经验"版本。无需再改。
- [x] **zepp-health 保留**：确认不删除网站上的足健手环小程序卡片。
- [x] **标题/intro 同步"1年经验"**：`profile.title` → "全栈开发工程师 · 1年经验"，intro 已强调 1 年经验。
- [x] **项目架构图**：8 个项目全部新增 `arch` 架构流程数据 + `ArchDiagram.vue` 组件，卡片内直观展示流程。
- [x] **技能栈补项**：已添加 MongoDB、Node.js、MQTT (Eclipse Paho)、Jenkins、Maven、多轮对话
- [x] **新增项目卡片：智能温控数据网关**：已添加 IoT 项目卡片，包含 6 个 features 和架构流程
- [x] **新增项目卡片：XR机器人挑战赛任务链**：已添加 AutolifeXAIR 项目卡片，包含 6 个 features 和架构流程
- [x] **新增项目卡片：AI Website Cloner**：已添加 web-clone 项目卡片，包含 6 个 features 和架构流程
- [x] **更新 highlighs 数组**：项目数量从 "6+" 更新为 "9+"

---

## ⚠️ 待确认（先答复再做）

- [ ] **个人介绍是否强调"1年经验"？**
  - ~~新 PDF 标题为"1年经验-全栈开发"，但网站 `profile.title` 仍是"全栈开发工程师"、intro 写"3 段开发实习经历"。~~ ✅ 已同步
  - → 需确认是否把标题/intro 改成突出"1 年全栈开发经验"（与简历口径一致）。

---

## 🔧 建议补充（提取自 `new/` 各文件）

### 1. 技能栈补项 —— 来自 `个人网站项目信息.md` 技术栈总览

网站 `skills` 目前缺失/未单独列出以下项（文件里有，但网站没体现）：

| 技术 | 建议 | 放哪个分类 | 状态 |
|---|---|---|---|
| **MongoDB** | 新增技能条 | 后端开发 | ✅ 已完成 |
| **Node.js** | 新增技能条（现只有 JavaScript/TypeScript 合并） | 后端开发（或前端） | ✅ 已完成 |
| **Kafka** | 目前和 RocketMQ 合并为一条"RocketMQ / Kafka"，可拆分独立 | 后端开发 | 保持合并 |
| **Kubernetes** | 目前合并为"Docker / K8s"，可拆分独立 | 后端开发 | 保持合并 |
| **Jenkins** | 新增技能条 | 工具与平台 | ✅ 已完成 |
| **Maven** | 新增技能条（目前无） | 工具与平台 | ✅ 已完成 |
| **多轮对话** | 补充进"Agent 开发 (CoT/ReAct)"或新增 | AI 应用开发 | ✅ 已完成（新增独立条目） |
| **MQTT** | 新增技能条（IoT项目用到） | 后端开发 | ✅ 已完成 |
| **Eclipse Paho** | 合并进 MQTT 技能条说明 | 后端开发 | ✅ 已完成 |

### 2. 直播项目卡片加强 —— 来自 `直播平台高并发项目面试问答.md`

网站该卡片 features 只有 5 条，面试问答里有更多可放上去的亮点：
- [ ] 加 **L1/L2/L3 三级缓存**（Caffeine 本地 + Redis 集群 + MySQL）
- [ ] 加 **MyCAT 读写分离 + HikariCP 连接池优化**
- [ ] 加 **全链路监控**：ELK 日志 + Prometheus/Grafana 指标 + SkyWalking 链路 + JMeter 压测
- [ ] 加 **Protobuf 序列化**（连麦延迟 500ms→100ms 的关键）
- [ ] 加 **心跳检测 / 断线重连机制**

### 3. Upscayl 项目卡片加强 —— 来自 `AI图像增强竞品分析报告.md`

- [ ] 加 **竞品分析 5 维度方法论**（产品定位 / 商业策略 / 功能设计 / 交互视觉 / 技术架构）
- [ ] 加 **功能三层结构**（任务入口 → 统一工作台 → 作品资产）
- [ ] 加 **用户分层策略**（轻度/中度/重度用户对应不同入口与定价）

### 4. wecom-opencode-bridge 卡片加强 —— 来自 `个人网站项目信息.md`

- [ ] 加**架构说明**一行（原文有）：
  `手机(企微App) ⇄ 企微服务器 ⇄ [WebSocket长连接, 电脑主动外连] ⇄ 桥接程序 ⇄ Agent serve`

### 5. 中医RAG卡片加强 —— 来自 `杨彬林-全栈开发-完整版.md` + 面试四问

- [ ] 加 **CoT + ReAct 范式** / **RAGAS 自动化评估闭环** / **LoRA 微调思路**
  （这些技能在"技能特长-AI应用开发"里有，但项目卡片没体现）

---

## 📌 简历原文有、网站未展示的内容（可选加）

来自 `杨彬林-全栈开发-完整版.md` 技能特长，网站技能条未覆盖：

- [ ] **JUC / JVM / 反射 / 异常体系**（Java核心能力）
- [ ] **MySQL 索引 / 事务 / MVCC / Explain**（数据存储）
- [ ] **缓存雪崩 / 穿透 / 击穿解决方案**
- [ ] **微服务架构设计 / 分布式设计原则 / 技术选型评估**

> 提示：技能条数量不宜过多（当前 21 条），优先加"就业目标岗位（Java后端/全栈）JD 里高频出现的关键词"。

---

### 6. 新增项目卡片：智能温控数据网关（IoT）—— 来自 `industry-demo`

- [x] **新增项目卡片**，`site.js` 的 `projects` 数组追加：
  - **名称**：智能温控数据网关
  - **标签**：`SpringBoot` `MQTT` `RabbitMQ` `MySQL` `Docker` `Jenkins`
  - **一句话**：模拟工厂温度传感器通过 MQTT 上报数据，经 SpringBoot 处理后存入 MySQL，并通过 RabbitMQ 转发给下游系统
  - **架构流程**：
    ```
    传感器模拟器 → MQTT Broker → 网关(SpringBoot) → MySQL(存储)
                                              → RabbitMQ(转发)
                                              → REST API(查询)
    ```
  - **features（6条）**：
    1. 使用 **MQTT 协议**（Eclipse Paho）实现物联网设备数据接入，支持断线自动重连
    2. 基于 **SpringBoot 四层架构**（Controller / Service / Repository / DTO），代码结构清晰
    3. 集成 **RabbitMQ Topic Exchange**，通过 routing key 区分正常/告警消息，实现系统解耦
    4. 内置 **传感器模拟器**（SensorSimulator），每5秒自动生成模拟数据，无需外部工具即可演示完整数据流
    5. **Docker Compose** 编排 4 个服务（MySQL / RabbitMQ / EMQX / 应用），一键启动全套环境
    6. 配置 **Jenkins Pipeline** 实现 CI/CD 自动化构建与部署
  - **GitHub**：`https://github.com/yblt/temperature-gateway`
  - **技术细节**：温度 >30℃ 自动标记为 HIGH 告警状态；`temp_log` 表最多保留100条记录，自动删除最旧数据

### 7. 新增项目卡片：XR机器人挑战赛任务链 —— 来自 `AutolifeXAIR`

- [x] **新增项目卡片**，`site.js` 的 `projects` 数组追加：
  - **名称**：XR机器人挑战赛任务链
  - **标签**：`Python` `ROS` `计算机视觉` `状态机` `机器人导航`
  - **一句话**：XR 机器人挑战赛 AutoLife S2 任务链：导航、识别抓取、投放的完整解决方案，支持多物品分拣与双臂切换
  - **架构流程**：
    ```
    导航模块 → 视觉检测 → 抓取状态机 → 投放状态机 → flow.sh（一条龙入口）
    ```
  - **features（6条）**：
    1. 实现导航、识别、抓取、投放完整任务链（T1-T5）
    2. HSV视觉伺服 + 深度引导抓取，支持多物品分拣（瓶子/衣物）
    3. 双臂支持（左臂/右臂切换），右臂作为备用链路
    4. 安全机制：preview模式预览、fail-closed中止、物理急停
    5. 状态机架构，每段独立运行，任一段失败即整链中止
    6. 证据自动归档，运行日志写入chain_log.csv
  - **GitHub**：`https://github.com/yblt/AutolifeXAIR`
  - **技术亮点**：HSV颜色检测、深度相机引导、ROS导航、状态机设计模式

### 8. 新增项目卡片：AI Website Cloner —— 来自 `web-clone`

- [x] **新增项目卡片**，`site.js` 的 `projects` 数组追加：
  - **名称**：AI Website Cloner
  - **标签**：`Next.js` `AI应用` `前端工程化` `Cloudflare Workers`
  - **一句话**：基于AI的网站克隆工具，一条命令将任意网站重建为现代Next.js应用，支持12+AI编程代理
  - **架构流程**：
    ```
    AI代理 → 侦察阶段 → 并行构建 → Next.js应用 → Cloudflare Workers部署
    ```
  - **features（6条）**：
    1. 一条命令克隆任意网站，支持12+AI编程代理（Claude Code/Codex/Cursor等）
    2. 多阶段流水线：侦察→基础搭建→组件规格→并行构建→组装QA
    3. 自动提取设计token、下载资源、生成组件规格
    4. 部署到Cloudflare Workers，支持Docker开发环境
    5. 支持多页面克隆，保留原站布局与交互行为
    6. MIT开源，可扩展的架构设计
  - **GitHub**：`https://github.com/yblt/web-clone`
  - **技术亮点**：多代理协作、git worktree并行构建、设计token提取、边缘部署

---

## 📝 面试话术准备（智能温控数据网关）

### 包装项目经历

> 在学习物联网后端开发过程中，独立完成了一个**工业级温控数据网关**项目。模拟工厂温度传感器通过 MQTT 协议上报数据，经 SpringBoot 网关处理后存入 MySQL，并通过 RabbitMQ 转发给下游系统。项目采用 Docker Compose 编排部署，配置了 Jenkins CI/CD 流水线，完整覆盖了从数据采集到存储转发的全链路。

---

### Q1：为什么要做这个项目？

> 想深入学习 Java 后端和物联网方向，选了一个**有实际业务场景**的题目。工厂温度监控是真实的工业需求，涉及 MQTT、消息队列、数据库、容器化部署，技术点覆盖面广，能体现全栈能力。做完之后对后端架构和中间件的理解比纯看文档深很多。

---

### Q2：项目整体流程是什么？

```
1. 传感器每隔5秒采集温度，通过 MQTT 协议发送到 Broker
2. 网关订阅 MQTT 主题，收到消息后 JSON 反序列化为 DTO
3. Service 层判断温度状态：>30℃ 标记为 HIGH，≤30℃ 为 NORMAL
4. 保存到 MySQL（最多100条，自动删旧）
5. 通过 RabbitMQ Topic Exchange 转发（routing key 区分正常/告警）
6. 前端/下游系统通过 REST API 查询最新数据
```

> 整体采用**四层架构**：Controller 只做参数校验和返回 VO，Service 做业务逻辑，Repository 只做数据库 CRUD，DTO 负责层间数据传输。职责分离，便于维护和测试。

---

### Q3：为什么选择这些技术？

| 技术 | 为什么选 | 为什么不选 |
|------|----------|------------|
| **MQTT** | 物联网标准协议，轻量、低功耗、支持断线重连 | HTTP 太重（每次建连开销大），WebSocket 大材小用 |
| **RabbitMQ** | SpringBoot 集成简单，Topic Exchange 满足路由需求 | Kafka 太重（杀鸡用牛刀），Redis Pub/Sub 消息可能丢 |
| **MySQL** | 熟悉、够用、JPA 开发快 | MongoDB 对关系型数据没必要 |
| **SpringBoot** | 四层架构清晰，生态成熟 | 裸 Spring 太麻烦 |
| **Docker Compose** | 一键启动全套环境，便于开发和部署 | 手动装每个中间件太慢且环境不一致 |

---

### Q4：项目中的难点是什么？怎么解决的？

**难点1：MQTT 断线后消息丢失**
> 传感器在工厂环境下网络不稳定，MQTT 连接会断开。解决方案：配置 `automaticReconnect=true`，连接断开后自动重连；重连成功后自动重新订阅所有主题。使用 QoS 1（至少一次投递），保证消息不丢。

**难点2：RabbitMQ 不可用时应用不能挂**
> 下游系统可能维护，RabbitMQ 可能重启。解决方案：`RabbitTemplate` 设置 `@Autowired(required = false)`，代码里判空处理。MQTT 消息照常接收和存库，只是转发功能暂时失效，不影响核心流程。

**难点3：数据库记录无限增长**
> 传感器每5秒一条数据，一天就是17000条。解决方案：每次写入后检查总数，超过100条时按 `receive_time` 升序删除最旧记录。用 `@Transactional` 保证删除和插入的原子性。

**难点4：Docker 容器间通信**
> MySQL、RabbitMQ、MQTT Broker、应用分别在不同容器里，互相访问用容器名而不是 localhost。解决方案：`docker-compose.yml` 里配置 `gateway-network` 桥接网络，环境变量用容器名作为 hostname。

---

## 🚀 改完后的操作

1. 改 `src/data/site.js` → `npm run build` 验证
2. `git add -A && git commit -m "..."` → `git push origin main`
3. Netlify 自动重新部署，等待 ~1-2 分钟
