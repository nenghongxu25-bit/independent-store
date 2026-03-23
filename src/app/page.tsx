import React from 'react';
import PageTemplate from '@/components/PageTemplate';
// 导入你的 CSS 模块
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.mainContainer}>
      {/* 去掉原来的高度限制，让它随内容伸展 */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <PageTemplate pageNum="01">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className={styles.shimmerText}>Shimmer</h1>
            <p className={styles.subtitle}>JEWELRY</p>
          </div>
        </PageTemplate>

        {/* 关键：第二个板块紧跟其后 */}
        <PageTemplate pageNum="02">
          <div style={{ textAlign: 'center', maxWidth: '800px', padding: '100px 20px' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-cormorant)', 
              color: '#d4af37', 
              fontSize: '3rem', 
              fontWeight: '300',
              marginBottom: '30px'
            }}>
              科技缔造永恒
            </h2>
            <p style={{ 
              color: '#d4af37', 
              opacity: 0.8, 
              lineHeight: '2', 
              fontSize: '1.1rem',
              letterSpacing: '1px' 
            }}>
              精选顶级实验室培育钻石，每一颗都经过精密的 HPHT 或 CVD 工艺生长，<br/>
              只为呈现超越自然的纯净火彩。
            </p>
          </div>
        </PageTemplate>
      </div>
    </main>
  );
}
