import './styles/globals.css';  // 引用全局样式
// import { ClerkProvider } from '@clerk/nextjs'; // Clerk 暂时注释
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';// 引入字体
import Navbar from '@/components/Navbar/index';// 引入 导航栏 组件
import FloatingActions from '@/components/FloatingActions';// 引入 悬浮按钮 组件
import StarParticles from '@/components/StarParticles';// 引入 粒子效果 组件

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'], 
  variable: '--font-cormorant' 
}); //配置第一板块大标题字体参数

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'], 
  variable: '--font-great-vibes' 
});//配置导航栏标题字体参数


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body>       
        {/* 1. 粒子背景层 - 置于背景图之上 */}
          <StarParticles />
        {/* 2. 多色氛围滤镜层 - 已注释 */}
        {/* <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          background: `
            radial-gradient(circle at 15% 20%, rgba(30, 58, 138, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 40%, rgba(138, 43, 226, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 90%, rgba(20, 184, 166, 0.04) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%),
        }} /> */}

        {/* 3. 内容层 */}
        <div id="content-layer">
          <Navbar />
          
          <main>
            {children}
          </main>

          <FloatingActions />
        </div>

        {/* 极细微的噪点层 - 保持质感 */}
        <div className="noise-layer" />
      </body>
    </html>
  );
}
