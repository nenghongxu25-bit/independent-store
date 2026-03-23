import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}

// 1. 保留衬线体用于副标题和正文
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
});

// 2. 引入手写连笔体，专门用于 Shimmer 标题
const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'], // 手写体通常只有一个粗细
  variable: '--font-great-vibes', // 定义 CSS 变量
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 关键：把两个字体的变量都挂载到 html 上
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
