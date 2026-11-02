// Public copy transcribed/summarized from the user's latest resume PDF (杨玄一-AI多模态产品经理).
// Keep sample sizes and measurement windows with their metrics.
export const projects = [
  {
    category: '照片整理 · 独立开发', date: '2026.06 — 2026.08', title: 'TravelFilm',
    headline: '把旅行，\n重新整理成故事。', subtitle: '从分散的照片，到可回顾的旅行胶卷。',
    image: './images/tf-footprints.webp', alt: 'TravelFilm 足迹真实界面', style: 'travel-project',
    metric: '2,000', metricLabel: '张照片单人回测', secondary: '12 段行程 · 100% 采纳',
    url: 'https://awoele.github.io/TravelFilm/', tech: 'React Native · Expo · TypeScript · SQLite',
    role: '产品设计与独立开发',
    body: [
      '针对旅行照片跨相册分散、人工整理成本高与回顾路径割裂，设计“相册导入—候选行程发现—人工确认—长期回顾”闭环，以旅行胶卷、足迹地图、城市统计、旅行星图与年度回顾承接整理结果。',
      '基于拍摄时间、地理位置与常驻区域生成候选行程，支持批量纳入／排除、地点修正及合并／拆分，并保留人工终审，让自动整理的结果始终可以校正。',
      '单人回测 2,000 张照片，生成 12 段行程，全部采纳（100%）。这是单人回测结果，不代表大规模用户表现。',
    ],
  },
  {
    category: '摄影网站 · 独立运营', date: '2026.03 — 2026.08', title: 'MYSTIC ONE AURA',
    headline: '让每一帧，\n都被好好看见。', subtitle: '为持续发布与沉浸浏览，设计同一个空间。',
    image: './images/photo-nature.webp', alt: 'MYSTIC ONE AURA 当前 Nature 风景图集界面', style: 'photo-project',
    metric: '549', metricLabel: '幅作品 · 首个完整统计月', secondary: '186 UV · 1,172 次作品详情打开 · 营收 10,000 元',
    url: 'https://awoelexuan.com/', tech: 'Next.js · TypeScript · Tailwind CSS · Google Cloud Storage · Vercel',
    role: '产品设计与独立运营',
    body: [
      '从摄影师持续发布与访客快速浏览两类任务出发，重构作品分类、瀑布流、横竖图适配与移动端信息层级，解决作品分散、风格表达不集中和分享链路冗长的问题。',
      '独立完成信息架构、响应式交互、部署与域名上线，建立“筛选—命名—分类—发布—维护”规范，把网站建设与日常内容运营连接起来。',
      '首个完整统计月上线 549 幅作品，获得 186 名 UV；作品详情打开 1,172 次，人均 6.3 次。',
      '摄影项目营收 10,000 元。',
    ],
  },
  {
    category: 'AI 学习 Agent · 独立开发', date: '2026.04 — 2026.07', title: 'IELTS Workbench',
    headline: '把学习，\n变成清晰的下一步。', subtitle: '计划、训练、复盘，连接为一条学习路径。',
    image: './images/ielts-orbit-fresh.webp', alt: 'IELTS Orbit 当前本地首页：环绕学习卡片', style: 'ielts-project',
    metric: '83.3%', metricLabel: '核心问题识别一致率', secondary: '24 份写作／口语样本 · 双轮评估',
    url: 'https://ielts.awoelexuan.com/', tech: 'React · TypeScript · Cloudflare Workers · D1 · Gemini API',
    role: 'AI 产品设计与独立开发',
    body: [
      '将四科题库、练习记录、错题与词汇复习映射为任务优先级规则，形成“计划—训练—复盘”闭环；结合未完成练习、错题状态与记忆周期生成每日任务，并支持错题重练与间隔复习。',
      '基于 Gemini 构建 AI 学习 Agent，设计“证据校验—分项评分—原文引用—问题定位—改进建议”链路，让反馈能够定位到原始表达。',
      '回测 24 份写作／口语样本，双轮评估中 20 份核心问题识别一致，一致率为 83.3%。该指标衡量双轮识别一致性，不等同于考试评分准确率。',
    ],
  },
  {
    category: '内容雷达 · 开源二次开发', date: '2026.05 — 2026.06', title: 'TrendRadar',
    headline: '从信息噪声里，\n找到值得追踪的信号。', subtitle: '聚焦 Vibe Coding 的采集、打标与筛选工作流。',
    image: './images/radar-interface-fresh.webp', alt: 'TrendRadar 热点内容看板重新截取的完整界面', style: 'radar-project',
    metric: '90 → 20', metricLabel: '分钟／每 100 条内容的人工筛选', secondary: '连续 14 天 · 去重后沉淀 699 条内容',
    url: 'https://awoele.github.io/TrendRadar/content/', tech: 'Python · PowerShell · TikHub API · AI Agent · GitHub Pages',
    role: '产品重构与开源二次开发',
    body: [
      '设计 TikHub API 与 LLM 内容打标工作流，打通采集、去重、打标、入库、看板与发布，并增加超时及产物校验；连续 14 天处理 820 条原始内容，去重后沉淀 699 条。',
      '将通用热榜聚焦为 Vibe Coding 内容雷达，重构关键词、噪声过滤、内容价值与风险标签体系，支持按平台、工具栈、爆点与风险多维检索。',
      '每 100 条内容的人工筛选耗时由 90 分钟降至 20 分钟，下降 77.8%。',
    ],
  },
];

export const experience = [
  {
    id: 'manus', company: 'Manus', fullName: '北京蝴蝶效应科技有限公司', role: 'AI 产品市场经理实习生', date: '2026.10 — 至今',
    headline: '把 Agent 的能力，变成可复演的案例。',
    summary: '负责 Manus 的场景探索与能力验证，覆盖互动案例构建、任务回放验收、Badcase 反馈、热点跟进与监控台搭建。',
    metrics: [['6', '个可复演案例 · 场景探索'], ['80%', '任务回放达标率 · 24 / 30 次'], ['12', '条可复现 Badcase · 反馈研发']],
    points: [
      '使用 Manus 联动 Unity 探索 3D 体感跑酷，并探索 3D 语音互动影游、万圣节互动游戏与互联网乐高小镇；沉淀 6 个可复演案例，明确用户价值、操作步骤与适用条件。',
      '持续体验产品，按任务完成、交互可用与演示稳定性验收；完成 30 次任务回放，其中 24 次达标（80%）。',
      '整理 12 条可复现 Badcase，明确失败条件与人工介入环节，持续向研发反馈问题。',
      '与 Marketing 团队跟进热点，复用「热点雷达」的 API + LLM 采集筛选流程，推进监控台搭建；原项目每 100 条内容的人工筛选由 90 分钟缩至 20 分钟，持续沉淀选题与演示素材。',
    ],
    links: [
      ['3D 语音互动影游', 'https://andysroom-4svzs5ij.manus.space/'],
      ['热点雷达', 'https://awoele.github.io/TrendRadar/content/'],
    ],
  },
  {
    id: 'loopit', company: 'Loopit', fullName: '北京涌跃智能科技有限公司', role: 'AI 产品经理实习生', date: '2026.05 — 2026.09',
    headline: '让 AI 互动内容，从灵感走向交付。',
    summary: '负责海外明星内容 App 的互动内容产品化与多模态内容工作流，覆盖互动 Demo、模板上线、Skill 交付、任务评测与上线复盘。',
    metrics: [['100+', '个互动 Demo · 推进 10+ 模板上线'], ['29', '个 Skill 交付 · 9 期活动'], ['约 1–2 小时', '素材类 Skill 制作周期 · 原约 2 天']],
    points: [
      '面向海外明星内容 App，使用 Codex 与 SDK 开发 100+ 个互动 Demo，定义玩法、状态反馈和移动端验收标准，推进 10+ 个模板上线；负责模板面板、埋点与评测平台需求，闭环交付 8 项需求。',
      '参与 9 期活动、29 个 Skill 交付；自第二期起独立负责素材类 Skill，定义素材筛选、封装与调用规则，将制作周期由约 2 天缩短至 1–2 小时。',
      '封装世界模型 Case 制作 Skill，规范首帧构图、通行空间与交互事件；参与上线宣传片的选题、脚本及 Case 制作。',
      '围绕需求对齐、可玩性与表现质量设计 15 条用例，覆盖标准、泛化、边界及不适用场景；结合 CLI 批量生成、人工实操和有无 Skill 对照，定位交互失效与联用衔接问题；完成 2 期上线复盘，支持团队明确后续多 Skill 联用策略。',
    ],
    links: [
      ['模板动机', 'https://awoele.github.io/loopit-template-motivation-map/'],
      ['模板看板', 'https://awoele.github.io/loopit-template-showcase/'],
      ['代表性 Case', 'https://awoele.github.io/yxy-loopit-cases/'],
      ['复盘文档', 'https://awoele.github.io/beat-it-loop-launch-review-report/'],
      ['评测说明', 'https://awoele.github.io/power-evaluation-dashboard/'],
      ['Skill 工作台', 'https://awoele.github.io/material-skill-console/'],
    ],
  },
  {
    id: 'baidu', company: '百度', fullName: '汉语垂类搜索', role: '产品经理实习生', date: '2023.02 — 2023.06',
    headline: '从内容生产，到质量与展示。',
    summary: '负责汉语垂类搜索的 AIGC 内容生产与质量治理，覆盖生产平台、回测评测、内容模块、B / C 端展示与上线验证。',
    metrics: [['13 → 5', '工作日 · 内容生产周期'], ['73% → 95%', 'Query 过滤准确率 · 同批样本'], ['8 → 4', '关键人工节点']],
    points: [
      '针对线下交接与工具链割裂，梳理 Query 获取、模型批量调用、人机协同双审及入库流程，协同研发落地线上 AIGC 生产平台；生产周期由 13 个工作日缩短至 5 个，关键人工节点由 8 个减少至 4 个。',
      '基于 4,000 条人工标注 Query 建立固定回测集，参与标签与过滤策略设计，协同研发将同批样本过滤准确率由 73% 提升至 95%；参与治理 10,000+ 条问题数据。',
      '定义 3 个内容模块及 B 端管理、C 端展示方案，推进 7,000+ 条基线记录字段更新。',
      '设计模拟推全测试、监控与报告导出需求，支持内容上线验证。',
    ],
    links: [],
  },
];

export const studioProject = {
  category: '手机镜像 · 机身姿态感知', date: '在线演示', title: '3D Studio',
  headline: '手机画面与姿态，\n同步呈现。', subtitle: '让手机的操作与动作，一起被看见。',
  image: './images/studio-workbench.png', alt: 'PhoneTwin Studio 3D 手机展示工作台', style: 'studio-story',
  url: 'https://awoele.github.io/PhoneTwin-Studio/workbench/', tech: 'React · Three.js · Core Motion · ReplayKit',
  role: '工作台设计与开源二次开发',
  body: [
    '围绕手机产品演示，把实时屏幕画面镜像到 3D 手机模型，并通过机身姿态感知，让模型跟随真机旋转，将操作内容与手持动作同步呈现。',
    '基于 PhoneTwin Studio 开源项目进行工作台改造，结合视角、背景、灯光、镜头预设与自定义运动轨迹，支持逐镜调整顺序、时长与停留节奏，以及浏览器录制。',
    '真机镜像与姿态同步通过本地桌面版及 iOS Sender 连接：Core Motion 传递姿态，ReplayKit 采集屏幕，Relay 将两类数据转发至 Three.js 场景。在线版提供素材导入、镜头编排与录制，不直接连接真机。',
    '首页 Showcase 为带 BGM 的循环 3D 预演，使用截图与连续镜头展示 TravelFilm。它是产品演示效果，不是真机实时操作录屏。',
  ],
};
