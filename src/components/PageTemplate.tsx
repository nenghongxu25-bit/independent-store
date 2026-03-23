import React, { ReactNode } from 'react';

export interface PageTemplateProps {
  children: ReactNode;
  innerBg?: string; 
  pageNum?: string; 
}

export default function PageTemplate({ 
  children, 
  innerBg = 'rgba(15, 5, 25, 0.8)', 
  pageNum = "01" 
}: PageTemplateProps) {
  return (
    <section style={{ 
      height: '100vh', 
      position: 'relative', // 必须设为 relative，作为文字定位的参考系
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '60px' // 给边缘留出足够的空位
    }}>
      
      {/* 1. 挪到最顶部的页眉 - 现在它会贴在屏幕最上方边缘 */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        width: '100%', 
        textAlign: 'center', 
        fontSize: '0.75rem', 
        letterSpacing: '8px', 
        color: '#d4af37', 
        opacity: 0.6 
      }}>
        SHIMMER JEWELRY
      </div>

      {/* 中间的玻璃卡片 */}
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid rgba(212, 175, 55, 0.1)', 
        display: 'flex', 
        flexDirection: 'column',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        {/* 内容插槽 */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
      </div>

      {/* 2. 挪到最底部的页脚 - 贴在屏幕最下方边缘 */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '60px', 
        right: '60px',
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '0.7rem', 
        color: '#d4af37', 
        opacity: 0.5
      }}>
        <span>ROYAL DIAMOND SELECTION</span>
        <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
      </div>

    </section>
  );
}
