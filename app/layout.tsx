import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'AURA — 想法，自有引力。',
  description: '一个关于设计、创造与生活的个人宇宙。记录思考，保持好奇，让想法发生。',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
