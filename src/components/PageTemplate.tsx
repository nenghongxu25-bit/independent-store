import React, { ReactNode } from 'react';
import styles from '../app/page.module.css';

interface PageTemplateProps {
  children: ReactNode;
  innerBg?: string;
  pageNum?: string;
}

export default function PageTemplate({ children, pageNum = "01" }: PageTemplateProps) {
  return (
    <section style={{ 
      minHeight: '80vh', // 改为最小高度，内容多时自动撑开
      width: '100%',
      position: 'relative', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      borderBottom: '1px solid rgba(212, 175, 55, 0.1)' // 淡淡的分割线
    }}>
      {/* 内容区域直接铺满，不再套那个厚重的玻璃盒子 */}
      <div style={{ 
        flex: 1, 
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '120px 0' // 上下留白，保持高级感
      }}>
        {children}
      </div>

      {/* 页码移到侧边或者去掉，避免干扰视觉 */}
      <div style={{ 
        position: 'absolute', right: '40px', bottom: '40px',
        fontSize: '0.6rem', color: '#d4af37', opacity: 0.3
      }}>
        INDEX / {pageNum}
      </div>
    </section>
  );
}
