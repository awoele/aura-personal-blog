# 杨玄一 · AURA

个人作品集：AI 产品、设计与创造，展示项目实践、实习经历、摄影和校园动物救助内容运营。

网站：https://awoele.github.io/aura-personal-blog/

## 本地开发

npm ci
npm run dev -- --host 127.0.0.1 --port 5190

## GitHub Pages 构建与预览

npm run build:pages
npx vite preview --config vite.pages.config.ts --host 127.0.0.1 --port 5191

打开 http://127.0.0.1:5191/aura-personal-blog/ 。静态输出位于 dist/pages，临时服务端渲染产物位于被忽略的 .pages-ssr。预渲染仅用于构建，访问网站不需要 Node.js 服务。

推送 main 分支会触发 .github/workflows/pages.yml，自动构建并部署到 GitHub Pages。仓库 Settings → Pages 发布来源为 GitHub Actions。更改仓库名时，同步修改 vite.pages.config.ts 中的 base。

原 Sites 开发与构建命令 npm run dev、npm run build 保留。

## 主要文件

- app/page.tsx：主页和项目详情交互。
- app/content.ts：项目、实习经历、真实指标和链接。
- app/community-story.tsx：小红书账号及四篇笔记入口。
- app/project-reel.tsx：六组 Loopit 页面展示。
- app/portrait-gallery.tsx：个人照片动态画廊。
- app/globals.css、app/dimensional.css：视觉、响应式与动效。
- pages/、scripts/build-pages.mjs、vite.pages.config.ts：静态构建入口。
- public/images/：公开展示的压缩图片。

## 内容与素材

履历事实来源于本人提供的简历；项目截图来源于对应产品页面。金属主视觉为生成素材，个人照片由本人提供，小红书封面来自本人指定的笔记。粉丝数与点赞数按页面注明日期保存快照，不作为实时数据。

保留样本量、统计周期与角色边界：IELTS 83.3% 为双轮核心问题识别一致率，不是考试评分准确率；TravelFilm 75.0% 为单人回测候选行程采纳率；Loopit 9.85 pp 为分组观察差异。
