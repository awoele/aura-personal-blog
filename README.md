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

## 第四版：保留第三版交互的排版修正

- 按最终确认恢复第一版的蓝银色镜面金属原图 hero.webp，移除旁边的作品截图。标题与金属分别排布；保留原素材的慢速悬浮、鼠标视差、滚动缩放和标题淡出。
- 以第三版为基准保留原有文案、配色、双列项目卡片、实习区及横向滚动展廊；项目卡片内部按分类、标题、画面、入口分行，标题不再覆盖图像。
- 网页截图移除常驻倾斜和厚设备框，完整显示在自己的画面区域；保留原版鼠标跟随、卡片倾斜反馈、阅读弹窗空间过渡和滚动展廊。支持暂停与系统减少动效偏好。
- 电脑网页截图统一使用 16:10 展示框、精细描边、柔和投影和圆角；原图以 contain 保持比例，完整显示，不裁切界面内容。
- 保留第三版真实素材和数据口径；旧概念图留存于资源目录，当前页面不使用。

## 第五版：石墨灰表面与滚动层次

- 保留第一版镜面金属素材，将 screen 混合放到最外层金属容器，消除变换层带来的黑色矩形底框。
- 页面、项目卡片与阅读弹窗统一深色表面；白色 UI 截图适度降低亮度，悬停时柔和提亮。
- 卡片高度由内容与 16:10 画面比例决定，1100px 以下单列展示，避免小截图留在过高的固定卡片中。
- 增加截图随滚动放大、转正与显现，展廊文字与画面的分层位移；保留鼠标倾斜、金属悬浮、弹窗过渡、暂停与减少动效支持。

## 第六版：文字节奏与交互细节

- 调整标题、说明、项目名与数字的字重、字距、行距，保持原有内容及信息层级。
- 分区标题随滚动逐渐提亮，主按钮提供轻微磁吸反馈，截图在卡片悬停时增加独立的纵深变化。
- 所有新增动效遵守暂停开关和系统减少动效偏好。
- TravelFilm 手机截图采用独立的细金属边框、黑色屏幕边缘、顶部开孔与侧键，保留原图状态栏；两部设备分层悬浮，滚动和悬停时轻微展开。
- 展廊改为互动实验、光影之间、城市回忆，使用不同于项目卡片的画面，并保留横向滚动控制和分层视差。
- 新增真实素材（从本地对应已发布项目源文件转换 WebP）：
  - https://awoele.github.io/yxy-loopit-cases/covers/loopit-case-06-live-v3.png
  - https://awoele.github.io/TravelFilm/screens/07-city-memories-a.png
  - https://awoele.github.io/TravelFilm/screens/05-photo-viewer.jpg
- 雪山及湖畔图来源沿用上方 MYSTIC ONE AURA 图集记录；只作为站内图集展示，不声明摄影著作权。

## 第七版：生活影像与项目相册

- 按用户补充明确分区：展廊只展示旅行、生活和光影，不再重复项目介绍；项目照片和产品界面放回项目区。
- 按最终反馈移除主卡内、外新增的照片横排；TravelFilm 主卡只保留适配后的手机项目截图。
- 手机外观参考 iPhone 17 Pro Max 正面，采用橙色／深蓝色细边、78:163.4 机身比例，并按原截图 900:1950 的比例匹配内框。属于 CSS 展示模型，不是官方设备素材。
- 设备设计参考：https://www.apple.com/iphone-17-pro/ （官方正面图，未嵌入站点）。
- 新增生活照片来自原 TravelFilm 公开素材 hero-memory/02-profile-sunflowers.jpg、03-landscape-red-cap.jpg、06-standing-sheep.jpg。页面不将影像中人物认定为网站作者。

## 第八版：当前雅思首页与隐藏滚动条

- 按用户指定从 http://127.0.0.1:4190/ 采集 IELTS Orbit 当前首页，替换此前的阅读训练历史截图；主卡和详情同步使用。
- 采集视口 1400×875，展示框保留 16:10，以轻微边缘放大裁去源页面的滚动条和空白边缘，不改变界面文字与内容。
- 主页面及阅读弹窗隐藏可见滚动条，保留原生滚轮、触控和键盘滚动。
- 修复阅读弹窗入场动画覆盖居中 translate 的问题，保留空间过渡并正确居中。
- 电脑截图先在独立的原始比例容器中裁掉源页面边缘，再置入统一的 16:10 外框；主卡与阅读详情一致处理，包括摄影网站截图。

## 第十版：重新采集原生截图

- 重新从 https://awoelexuan.com/ 与 http://127.0.0.1:4190/ 实时加载源网页，在无滚动条的 iframe 视口中采集当前摄影首页与 IELTS Orbit 首页，等待可见图像加载完成。
- 雅思新图为 1400×875；摄影新图使用更大的 1600×1000 取景视口，按宽 1400 等比保存。没有在旧图片上抹除内容，也不再依赖 CSS 放大遮挡边缘；对应项目卡片和详情完整显示新截图。
- 采集用的本地 HTML 仅为临时工具，不包含在发布产物中。
- 按最新反馈，摄影截图选择 Nature 风景分类，重新以更宽视口采集，让湖泊、雪林与山野图集占据更多画面；不再采用人物混排的首页截图。
- TravelFilm 手机展示区增加高度、减少设备外围留白，手机较此前放大约 20%，保留标题与底部入口间距。
