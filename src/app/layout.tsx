import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import Navbar from '@/components/Navbar/index';
import FloatingActions from '@/components/FloatingActions'; // 确保路径正确

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
    <ClerkProvider>
      <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
        <body style={{ 
          margin: 0, 
          backgroundColor: '#0a0210', 
          color: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          
          {/* 1. 顶部导航栏 (已集成左上角无弹窗跳转) */}
          <Navbar /> 
          
          {/* 2. 主内容区 */}
          <main style={{ flex: 1, width: '100%' }}>
            {children}
          </main>
          
          {/* 3. 右下角悬浮组件 (WhatsApp + 客服 Vikas) */}
          <FloatingActions />
          
        </body>
      </html>
    </ClerkProvider>
  );
}