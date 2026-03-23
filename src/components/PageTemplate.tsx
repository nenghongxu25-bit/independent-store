import React, { ReactNode } from 'react';
import styles from '../app/page.module.css'; // 引入刚才定义的样式

interface PageTemplateProps {
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
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '60px' 
    }}>
      
      {/* 顶部页眉 - 贴在屏幕边缘 */}
      <div style={{ 
        position: 'absolute', top: '25px', width: '100%', 
        textAlign: 'center', fontSize: '0.7rem', 
        letterSpacing: '10px', color: '#d4af37', opacity: 0.5 
      }}>
        SHIMMER JEWELRY
      </div>

      {/* 中间玻璃卡片 - 挂载呼吸边框动画 */}
      <div className={styles.borderGlow} style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid rgba(212, 175, 55, 0.1)', // 初始极淡的金色
        display: 'flex', 
        flexDirection: 'column',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
      </div>

      {/* 底部页脚 - 贴在屏幕边缘 */}
      <div style={{ 
        position: 'absolute', bottom: '25px', left: '60px', right: '60px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: '0.65rem', color: '#d4af37', opacity: 0.4
      }}>
        <span style={{ letterSpacing: '2px' }}>LAB-GROWN DIAMOND SELECTION</span>
        <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
      </div>

    </section>
  );
}
