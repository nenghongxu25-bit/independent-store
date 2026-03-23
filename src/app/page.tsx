import React from 'react';
import PageTemplate from '@/components/PageTemplate';
// 导入你的 CSS 模块
import styles from './page.module.css';

export default function Page() {
  return (
    /* 使用 styles.mainContainer 挂载背景 */
    <main className={styles.mainContainer}>
      
      <PageTemplate pageNum="01">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 使用 styles.shimmerText 挂载标题样式 */}
          <h1 className={styles.shimmerText}>Shimmer</h1>
          
          <p style={{ letterSpacing: '12px', color: '#d4af37', marginTop: '15px', opacity: 0.8 }}>
            JEWELRY
          </p>
        </div>
      </PageTemplate>

      <PageTemplate pageNum="02">
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ color: '#d4af37', fontSize: '2.5rem', fontWeight: '300' }}>
            科技缔造永恒
          </h2>
        </div>
      </PageTemplate>

    </main>
  );
}
