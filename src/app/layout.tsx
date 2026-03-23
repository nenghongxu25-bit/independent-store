import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';

// 1. 初始化衬线体 (用于副标题和正文)
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
});

// 2. 初始化手写连笔体 (专门用于 Shimmer 标题)
const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 关键：这里只保留一个 html 标签，并挂载两个字体的 CSS 变量
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
