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
