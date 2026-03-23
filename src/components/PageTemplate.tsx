import React, { ReactNode } from 'react';

// 定义接口，方便其他页面调用时有类型提示
export interface PageTemplateProps {
  children: ReactNode;
  outerBg?: string;
  innerBg?: string;
  pageNum?: string;
}

// 使用 export 导出，这样 page.tsx 才能 import 它
export default function PageTemplate({ 
  children, 
  outerBg = '#2d0a42', 
  innerBg = '#fff0ff', 
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
      // 注意：这里已经去掉了 scrollSnapAlign，实现了你要求的自由滑动
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid rgba(212, 175, 55, 0.4)', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)' 
      }}>
        
        {/* 页眉：固定的小字 Shimmer */}
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '4px', color: '#d4af37', fontWeight: 'bold' 
        }}>
          SHIMMER JEWELRY
        </div>

        {/* 核心内容插槽 (Slot) */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>

        {/* 页脚：动态页码 */}
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
