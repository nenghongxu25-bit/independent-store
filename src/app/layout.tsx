import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import Navbar from '@/components/Navbar/index';
import FloatingActions from '@/components/FloatingActions';
//import StarParticles from '@/components/_StarParticles';

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
          position: 'relative', 
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          backgroundColor: 'transparent', 
          color: '#f0f0f0',
          overflowX: 'hidden'
        }}>
          
          {/* 1. 粒子背景层 - 置于背景图之上 */}
          {/*<div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}>
            <StarParticles />
          </div>*/}

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
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)
            `,
          }} /> */}

          {/* 3. 内容层 */}
          <div id="content-layer" style={{ 
            position: 'relative', 
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
          }}>
            <Navbar />
            
            <main style={{ 
              flex: 1, 
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {children}
            </main>

            <FloatingActions />
          </div>

          {/* 极细微的噪点层 - 保持质感 */}
          <div style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            opacity: 0.015, pointerEvents: 'none', zIndex: 10,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }} />
        </body>
      </html>
    </ClerkProvider>
  );
}