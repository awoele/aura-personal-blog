# 杨玄一 · AURA

个人网站，公开访问。姓名、教育、实习经历、项目和指标根据用户提供的《互联网简历.pdf》整理；电话与出生日期未放入公开页面。

## 编辑

- `app/content.ts`：四个项目、两段实习、数据口径与作品链接。
- `app/page.tsx`：主页结构、个人介绍、教育背景、联系方式与交互。
- `app/globals.css`：苹果风格视觉、滚动及悬停动效、响应式布局。
- `app/layout.tsx`：页面标题与描述。
- `public/images`：八张压缩后的 WebP 配图。

## 运行和验证

npm install
npm run dev -- --host 127.0.0.1 --port 5190
npm run build
npx tsc --noEmit

## 素材来源

- hero.webp：本任务生成的银色液态雕塑。
- loopit.webp、radar.webp、ielts.webp：本任务生成的项目概念图，不是产品截图。
- mountains.webp：https://storage.googleapis.com/shane-photos/photos/nature/nature-014.jpg
- lakeside.webp：https://storage.googleapis.com/shane-photos/photos/nature/nature-090.jpg
- seaside.webp：https://storage.googleapis.com/shane-photos/photos/travel/travel-117.jpg
- travel.webp：https://awoele.github.io/TravelFilm/hero-memory/05-camera-grassland.jpg

摄影图取自简历链接中的 MYSTIC ONE AURA 和 TravelFilm 网站。页面标记来源，不将项目影像中的人物认定为网站作者。

## 数据口径

保留样本量、统计周期与角色边界。IELTS 的 83.3% 为双轮核心问题识别一致率；TravelFilm 的 75.0% 为单人回测候选行程采纳率；摄影网站指标为首个完整统计月；Loopit 的 9.85 pp 为分组观察差异。

## 第三版：真实产品画面与实时 3D

- 首屏：Three.js 实时渲染金属结体、立体屏幕、镜面环境与视角变化；鼠标视差、滚动展开。离开视口暂停渲染，支持减少动效、手动暂停与无 WebGL 静态回退。
- 展示：原生纵向滚动驱动横向三幕产品展廊；暂停／减少动态时变为纵向静态内容。
- 配图：TravelFilm 使用官网发布的三张 App 界面；Loopit 使用案例页的三张实际封面；TrendRadar、模板看板和摄影网站使用本次采集的线上页面截图。
- IELTS 在线入口需要访问口令，本版采用项目内保存的 2026-08-03 阅读训练界面截图，alt 文本标注为历史界面。未绕过登录。
- 实际素材来源：
  - https://awoele.github.io/TravelFilm/screens/01-footprints-overview.jpg
  - https://awoele.github.io/TravelFilm/screens/03-rolls.jpg
  - https://awoele.github.io/TravelFilm/screens/04-roll-detail.jpg
  - https://awoele.github.io/yxy-loopit-cases/covers/loopit-template-case.png
  - https://awoele.github.io/yxy-loopit-cases/covers/katseye-free-normal.png
  - https://awoele.github.io/yxy-loopit-cases/covers/loopit-case-04-live-v3.png
  - https://awoele.github.io/TrendRadar/content/
  - https://awoele.github.io/loopit-template-showcase/dashboard/index.html
  - https://awoelexuan.com/

## 第四版：简约展示

- 按用户反馈移除首屏作品和 WebGL 悬浮物，改为纯文字封面、逐行入场和滚动淡出。
- 四个项目使用独立文字栏与完整截图栏，移动端依次排列；标题不再覆盖图像。
- 统一白、浅灰与石墨色，缩小透视角度、阴影和装饰。经历与交互展廊保留原有内容、入口和暂停动效控制。
- 保留第三版真实素材和数据口径；旧概念图留存于资源目录，当前页面不使用。
