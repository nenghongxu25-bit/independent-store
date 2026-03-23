import React, { ReactNode } from 'react';

// 1. 类型定义 (Interface)
interface PageTemplateProps {
  children: ReactNode;
  outerBg?: string;
  innerBg?: string;
  pageNum?: string;
}

// 2. 模板组件定义 (子函数)
function PageTemplate({ 
  children, 
  outerBg = '#2d0a42', // 深紫底
  innerBg = '#fff0ff',  // 浅紫卡片
  pageNum = "01" 
}: PageTemplateProps) {
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: outerBg, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px'
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid rgba(212, 175, 55, 0.4)', // 淡淡的金色边框
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)' 
      }}>
        
        {/* 页眉 */}
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '4px', color: '#d4af37', fontWeight: 'bold' 
        }}>
          SHIMMER JEWELRY
        </div>

        {/* 核心内容 */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>

        {/* 页脚 */}
        <div style={{ 
          position: 'absolute', bottom: '30px', left: '40px', right: '40px',
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.7rem', color: '#d4af37'
        }}>
          <span>ROYAL DIAMOND SELECTION</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>
      </div>
    </section>
  );
}

// 3. 主页面导出 (Main 函数)
export default function Page() {
  const royalTheme = {
    outerBg: "#2d0a42",
    innerBg: "#fff0ff",
  };

  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      backgroundColor: '#2d0a42' 
    }}>
      
      {/* 🛑 关键：我们在这里定义 CSS 动画和样式 🛑 */}
      <style>{`
        @keyframes shimmerEffect {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-text {
          font-size: 6rem;
          font-weight: bold;
          margin: 0;
          text-transform: uppercase;
          
          /* 核心：定义文字的渐变背景 (金色 -> 亮白 -> 金色) */
          background: linear-gradient(
            to right, 
            #d4af37 20%, /* 金色 */
            #fff 40%,    /* 亮白 (光带核心) */
            #fff 60%,    /* 亮白 (光带核心) */
            #d4af37 80%  /* 金色 */
          );
          background-size: 200% auto; /* 让背景比文字宽，方便滑动 */
          
          /* 核心：把背景“剪切”到文字内部 */
          -webkit-background-clip: text;
          background-clip: text;
          
          /* 核心：把文字本身的颜色变透明，只漏出背景渐变 */
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          
          /* 核心：执行动画：3秒一次，无限循环，线性速度 */
          animation: shimmerEffect 3s linear infinite;
        }
      `}</style>
      
      {/* 第一页：应用了流光效果的店名 */}
      <PageTemplate pageNum="01" {...royalTheme}>
        <div style={{ textAlign: 'center' }}>
          {/* 这里我们使用了上面定义的 CSS 类名 */}
          <h1 className="shimmer-text">Shimmer</h1>
          <p style={{ letterSpacing: '10px', color: '#6a0dad', marginTop: '10px' }}>JEWELRY</p>
        </div>
      </PageTemplate>

      {/* 第二页：科技感介绍 */}
      <PageTemplate pageNum="02" {...royalTheme}>
        <div style={{ textAlign: 'center', maxWidth: '600px', color: '#2d0a42', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#d4af37' }}>科技缔造永恒</h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            我们采用最先进的 CVD 工艺，为您呈现与天然钻石物理特性完全一致的顶级珠宝。
          </p>
        </div>
      </PageTemplate>

    </main>
  );
}
