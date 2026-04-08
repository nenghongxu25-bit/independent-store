import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google';
import Navbar from '@/components/Navbar/index';
import FloatingActions from '@/components/FloatingActions';
import StarParticles from '@/components/StarParticles';

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
        <body style={{ position: 'relative', minHeight: '100vh' }}>
          {/* 粒子背景层 */}
          <StarParticles />
          
          {/* 内容层 - 可以被模糊 */}
          <div id="content-layer" style={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <main style={{ flex: 1, width: '100%' }}>
              {children}
            </main>
            <FloatingActions />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}