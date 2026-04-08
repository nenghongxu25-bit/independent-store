'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import BrandStory from '@/components/BrandStory';
import Bestsellers from '@/components/BestSeller';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main style={{ minHeight: '100vh', background: '#FFFFFF' }} />;
  }

  return (
    <>
      {/* 第一板块：Hero 区 */}
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingTop: '120px',
        minHeight: '100vh' 
      }}>
        <div style={{ textAlign: 'center' }}>
 
          <p className={styles.subtitle}>
            <span className="handcraftedText">Handcrafted</span>{' '}
            <span className="excellenceText">Excellence</span>
          </p>
          
          <h1 className={`${styles['shimmer-title']} navLogo`} translate="no">
            DroSta
          </h1>
          
          <h2 className={styles['brand-jewelry']}>
            Jewelry
          </h2>
          
          <div style={{ marginTop: '110px' }}>
            <button className={styles['shop-button']}>
              EXPLORE THE COLLECTIONS
            </button>
          </div>
        </div>
      </main>

      {/* 第二板块：品牌故事 */}
      <BrandStory />
      
      {/* 第三板块：畅销产品 */}
      <Bestsellers />
    </>
  );
}