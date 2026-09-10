// Public copy transcribed/summarized from the user's 互联网简历.pdf.
// Keep sample sizes and measurement windows with their metrics.
export const projects = [
  {
    category: '照片整理 · 独立开发', date: '2026.06 — 2026.08', title: 'TravelFilm',
    headline: '把旅行，\n重新整理成故事。', subtitle: '从分散的照片，到可回顾的旅行胶卷。',
    image: './images/tf-footprints.webp', alt: 'TravelFilm 足迹真实界面', style: 'travel-project',
    metric: '2,000', metricLabel: '张照片单人回测', secondary: '9 / 12 段候选行程直接采纳',
    url: 'https://awoele.github.io/TravelFilm/', tech: 'React Native · Expo · TypeScript · SQLite',
    role: '产品设计与独立开发',
    body: [
      '针对旅行照片跨相册分散、人工整理成本高与回顾路径割裂，设计“相册导入—候选行程发现—人工确认—长期回顾”闭环，以旅行胶卷、足迹地图、城市统计、旅行星图与年度回顾承接整理结果。',
      '基于拍摄时间、地理位置与常驻区域生成候选行程，支持批量纳入／排除、地点修正及合并／拆分，并保留人工终审，让自动整理的结果始终可以校正。',
      '单人回测 2,000 张照片，生成 12 段候选行程，其中 9 段直接采纳（75.0%），其余经人工修正。这是单人回测结果，不代表大规模用户表现。',
    ],
  },
  {
    category: '摄影网站 · 独立运营', date: '2026.03 — 2026.08', title: 'MYSTIC ONE AURA',
    headline: '让每一帧，\n都被好好看见。', subtitle: '为持续发布与沉浸浏览，设计同一个空间。',
    image: './images/photo-nature.webp', alt: 'MYSTIC ONE AURA 当前 Nature 风景图集界面', style: 'photo-project',
    metric: '549', metricLabel: '幅作品 · 首个完整统计月', secondary: '186 UV · 1,172 次作品详情打开',
    url: 'https://awoelexuan.com/', tech: 'Next.js · TypeScript · Tailwind CSS · Google Cloud Storage · Vercel',
    role: '产品设计与独立运营',
    body: [
      '从摄影师持续发布与访客快速浏览两类任务出发，重构作品分类、瀑布流、横竖图适配与移动端信息层级，解决作品分散、风格表达不集中和分享链路冗长的问题。',
      '独立完成信息架构、响应式交互、部署与域名上线，建立“筛选—命名—分类—发布—维护”规范，把网站建设与日常内容运营连接起来。',
      '首个完整统计月上线 549 幅作品，获得 186 名 UV；作品详情打开 1,172 次，人均 6.3 次。',
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
    company: 'Loopit', fullName: '北京涌跃智能科技有限公司', role: 'AI 产品经理实习生', date: '2026.05 — 2026.08',
    headline: '让 AI 互动内容，\n从灵感走向交付。',
    summary: '负责 AI 互动内容的供给与消费体验，覆盖内容策略、Skill / Case 产品化、真实任务评测、Badcase 归因、上线验收与数据复盘。',
    metrics: [['29', '个 Skill · 9 期活动'], ['100+', '个 Case 推进上线'], ['约 1–2 小时', '单个 Skill 制作周期 · 原约 2 天']],
    points: [
      '建立需求拆解、资源配置、真实任务评测、Badcase 归因与迭代上线流程，沉淀可复用的制作及验收规范。',
      '拆解 10+ 款竞品，定义核心玩法、内容结构与移动端验收标准，推进 10+ 个模板上线，并负责模板面板需求设计与数据统计。',
      '独立完成 2 期质量复盘。以 Beat It Loop 为例，基于 1,708 个 task、1,599 个 project 拆解漏斗；Power 联用组 10s 留存率较仅用组高 9.85 pp，据此提出组合推荐与 Prompt 引导优化。',
      '参与 10+ 次运营／研发评审，闭环 8 项可验收需求，按期率 100%（8/8）。',
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
    company: '百度', fullName: '汉语垂类搜索', role: '产品经理实习生', date: '2023.02 — 2023.06',
    headline: '从内容生产，\n到质量与展示。',
    summary: '围绕 Query 供给、AIGC 生产、内容审核、实验监控与前端展示，推进 B / C 端产品落地。',
    metrics: [['13 → 5', '工作日 · 内容生产周期'], ['73% → 95%', 'Query 过滤准确率'], ['8 → 4', '关键人工节点']],
    points: [
      '定义 Query 抓取、模型调用、双团队审核及入库的状态与异常流，协同研发落地线上平台；生产周期缩短 61.5%，关键人工节点减少 50%。',
      '基于 400 条人工标注 Query 建立固定回测集，定义标签、过滤策略与结果回流；治理 1W+ 条脏数据，覆盖日均 5–10W 影响面，内容安全 0 事故。',
      '基于团队沉淀的近千万级内容资源设计内容推全测试方案，定义影响面、解决率与异常率等指标，搭建模拟环境监控台，支持测试报告一键导出。',
      '通过竞品调研定义字级、字形结构、字形演变 3 个模块及 B 端上传工具、C 端展示方案，推动 7,000+ 基线数据字段更新。',
    ],
    links: [],
  },
];
