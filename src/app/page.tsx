import React, { ReactNode } from 'react';

// 1. 类型定义 (C++ Struct)
interface PageTemplateProps {
  children: ReactNode;
  outerBg?: string;
  innerBg?: string;
  pageNum?: string;
}

// 2. 模板组件定义 (子函数) - 必须放在 Page 前面或者 Page 外部
function PageTemplate({ 
  children, 
  outerBg = '#2d0a42', // 默认深紫
  innerBg = '#fff0ff', // 默认浅紫
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
        border: '1px solid rgba(212, 175, 55, 0.3)', // 带点金色的边框
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0 15px 50px rgba(0,0,0,0.2)' 
      }}>
        {/* 页眉 */}
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '4px', color: '#d4af37', fontWeight: 'bold' 
        }}>
          SHIMMER JEWELRY
        </div>

        {/* 内容 */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>

        {/* 页脚 */}
        <div style={{ 
          position: 'absolute', bottom: '30px', left: '40px', right: '40px',
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.7rem', color: '#d4af37'
        }}>
          <span>ROYAL DIAMOND COLLECTOR</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>
      </div>
    </section>
  );
}

// 3. 主页面导出 (Main 函数)
export default function Page() {
  const royalPurpleGoldProps = {
    outerBg: "#2d0a42",
    innerBg: "#fff0ff",
  };

  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      backgroundColor: '#2d0a42' 
    }}>
      
      {/* 第一页 */}
      <PageTemplate pageNum="01" {...royalPurpleGoldProps}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            color: '#d4af37', 
            fontSize: '5.5rem', 
            margin: '0', 
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)' 
          }}>
            Shimmer
          </h1>
          <p style={{ letterSpacing: '10px', color: '#6a0dad', marginTop: '10px' }}>JEWELRY</p>
        </div>
      </PageTemplate>

      {/* 第二页 */}
      <PageTemplate pageNum="02" {...royalPurpleGoldProps}>
        <div style={{ textAlign: 'center', maxWidth: '600px', color: '#2d0a42' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#d4af37' }}>科技缔造永恒</h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            实验室培育钻石专家。我们采用顶级 CVD 工艺，
            为您呈现与天然钻石物理特性完全一致的珠宝。
          </p>
        </div>
      </PageTemplate>

    </main>
  );
}
