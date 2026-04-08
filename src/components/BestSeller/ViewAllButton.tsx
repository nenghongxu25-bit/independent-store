// src/components/Bestsellers/ViewAllButton.tsx

'use client';

import styles from './Bestsellers.module.css';

export default function ViewAllButton() {
  return (
    <div className={styles.viewAllWrapper}>
      <button className={styles.viewAllBtn}>
        VIEW ALL COLLECTION
        <span className={styles.arrow}>→</span>
      </button>
    </div>
  );
}