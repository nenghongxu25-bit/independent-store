// src/components/PageTemplate.tsx
// ... 之前的 import 和 Interface 保持不变 ...
import React, { ReactNode } from 'react';

// 1. 必须先定义这个“接口”，TypeScript 才知道参数里都有啥
export interface PageTemplateProps {
  children: ReactNode;
  innerBg?: string; // 选填：卡片内背景
  pageNum?: string; // 选填：页码
}

export default function PageTemplate({ 
  children, 
  // outerBg 不再需要了，因为我们用全局渐变
  innerBg = 'rgba(230, 220, 235, 0.85)', // 改成半透明浅紫，更有玻璃质感
  pageNum = "01" 
}: PageTemplateProps) {
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: 'transparent', // 关键：设为透明，露出底层的渐变
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px'
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid rgba(212, 175, 55, 0.3)', // 金色边框调淡
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        backdropFilter: 'blur(10px)', // 高级感核心：毛玻璃效果
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)' 
      }}>
        {/* 页眉、内容、页脚保持不变 */}
        <div style={{ position: 'absolute', top: '30px', width: '100%', textAlign: 'center', fontSize: '0.75rem', letterSpacing: '4px', color: '#d4af37', fontWeight: 'bold' }}>
          SHIMMER JEWELRY
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
        <div style={{ position: 'absolute', bottom: '30px', left: '40px', right: '40px', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#d4af37' }}>
          <span>ROYAL DIAMOND SELECTION</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>
      </div>
    </section>
  );
}
