import React, { ReactNode } from 'react';

export interface PageTemplateProps {
  children: ReactNode;
  innerBg?: string; 
  pageNum?: string; 
}

export default function PageTemplate({ 
  children, 
  // 核心修改：使用极低亮度的深紫色，透明度设为 0.8，产生深邃感
  innerBg = 'rgba(15, 5, 25, 0.8)', 
  pageNum = "01" 
}: PageTemplateProps) {
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: 'transparent', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px'
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        // 这里的边框调成暗金色，不要太晃眼
        border: '1px solid rgba(212, 175, 55, 0.15)', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        // 增加模糊滤镜，让底层的渐变透上来时像丝绒一样
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5)' 
      }}>
        
        {/* 页眉 */}
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '6px', color: '#d4af37', opacity: 0.8 
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
          fontSize: '0.7rem', color: '#d4af37', opacity: 0.6
        }}>
          <span>ROYAL DIAMOND SELECTION</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>
      </div>
    </section>
  );
}
