import React, { ReactNode } from 'react';

// 1. 定义接口 (像 C++ 的 struct)
interface PageTemplateProps {
  children: ReactNode;
  outerBg?: string;
  innerBg?: string;
  pageNum?: string;
}

// 2. 定义模板组件 (子函数)
function PageTemplate({ 
  children, 
  outerBg = '#f7f7f7', 
  innerBg = '#ffffff', 
  pageNum = "01" 
}: PageTemplateProps) {
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: outerBg, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      scrollSnapAlign: 'start',
      padding: '40px'
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid #e0e0e0',
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)' 
      }}>
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '4px', color: '#999', fontWeight: '300' 
        }}>
          SHIMMER JEWELRY
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
        <div style={{ 
          position: 'absolute', bottom: '30px', left: '40px', right: '40px',
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.7rem', color: '#bbb'
        }}>
          <span>LAB-GROWN DIAMOND COLLECTOR</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>
      </div>
    </section>
  );
}

// 3. 唯一的默认导出页面 (这就是你的 main 函数)
export default function Page() {
  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      scrollSnapType: 'y mandatory'
    }}>
      {/* 第一页 */}
      <PageTemplate pageNum="01" outerBg="#fff">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'gold', fontSize: '5rem', margin: '0', fontWeight: '200' }}>
            Shimmer
          </h1>
          <p style={{ letterSpacing: '8px', color: '#666' }}>JEWELRY</p>
        </div>
      </PageTemplate>

      {/* 第二页 */}
      <PageTemplate pageNum="02" outerBg="#111" innerBg="#000">
        <div style={{ color: '#fff', textAlign: 'center', maxWidth: '600px', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>科技缔造永恒</h2>
          <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
            采用顶级 CVD 工艺，为您呈现与天然钻石物理特性一致的珠宝。
          </p>
        </div>
      </PageTemplate>

      {/* 第三页 */}
      <PageTemplate pageNum="03" outerBg="#f0f0f0">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem' }}>国际权威认证</h2>
          <div style={{ marginTop: '20px', border: '1px solid #333', padding: '10px 20px', cursor: 'pointer' }}>
            WHATSAPP US
          </div>
        </div>
      </PageTemplate>
    </main>
  );
}
