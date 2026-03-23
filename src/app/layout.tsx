import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import Navbar from '@/components/Navbar'; // 建议把导航逻辑拆分成独立组件

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'], 
  variable: '--font-cormorant' 
});

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'], 
  variable: '--font-great-vibes' 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body style={{ margin: 0, backgroundColor: '#0a0210' }}>
        {/* 导航栏放在这里，它就是固定（Fixed）的，不随 children 滚动 */}
        <Navbar /> 
        
        {/* 这里的 children 就是你 page.tsx 里那一列长长的内容 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
