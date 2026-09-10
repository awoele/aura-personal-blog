import type { Metadata } from 'next';
import './globals.css';
import './dimensional.css';
export const metadata: Metadata = {
  title: 'AURA — AI 产品、设计与创造',
  description: '杨玄一的个人网站。关注 AI 应用、Agent 工作流、内容与效率产品，展示 Loopit、百度实习经历以及 TravelFilm、MYSTIC ONE AURA、IELTS Workbench、TrendRadar 项目。',
  icons: { icon: './favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
