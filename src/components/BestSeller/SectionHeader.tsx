// src/components/Bestsellers/SectionHeader.tsx

'use client';

import styles from './Bestsellers.module.css';

export default function SectionHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.subtitle}>BESTSELLERS</div>
      <h2 className={styles.title}>Our Most-Loved Pieces</h2>
      <div className={styles.divider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.dividerStar}>✧</span>
        <span className={styles.dividerLine}></span>
      </div>
      <p className={styles.description}>
        Discover the jewels that have captured hearts worldwide.
      </p>
    </div>
  );
}