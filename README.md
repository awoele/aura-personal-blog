# AURA 个人博客

苹果官网质感的个人博客演示，当前姓名、介绍、日期和文章均为占位内容。

## 运行

npm install
npm run dev -- --host 127.0.0.1 --port 5190

## 替换内容

- app/page.tsx：posts 数组中的文章，以及关于区域的姓名和介绍。
- app/layout.tsx：网站标题、描述。
- app/globals.css：视觉色彩、排版、响应式布局和动画。
- public/hero.png：生成的液态金属主视觉。

## 交互

首屏浮动与滚动视差、入场动画、卡片鼠标倾斜与追光、文章阅读弹层、下一篇、移动端导航、阅读进度线。支持键盘操作、减少动态效果设置及暂停动画。

## 验证

npm run build
npx tsc --noEmit
