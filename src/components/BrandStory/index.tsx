'use client';

import React from 'react';
import styles from './index.module.css';

export default function BrandStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        
        {/* 流星装饰图标 */}
        <div className={styles.starIcon}>
          <span className={styles.shootingStar}>✦</span>
        </div>

        {/* 英文主标语 */}
        <p className={styles.line1}>
          "A shooting star lasts a second."
        </p>

        {/* 英文副标语（更突出） */}
        <h2 className={styles.line2}>
          "We make it last forever."
        </h2>

        {/* 装饰线 */}
        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerDot}>✧</span>
          <span className={styles.dividerLine}></span>
        </div>

        {/* 英文故事 */}
        <div className={styles.englishStory}>
          <p className={styles.englishLine1}>
            That fleeting beauty shouldn't disappear.
          </p>
          <p className={styles.englishLine2}>
            We take that moment a shooting star crosses the sky,
            <br />
            and set it into jewelry you can hold forever.
          </p>
          <p className={styles.englishLine3}>
            Not the star itself — but the feeling of it.
          </p>
        </div>

        {/* 品牌落款 */}
        <div className={styles.brandFooter}>
          <span className={styles.brandName}>DroSta</span>
          <span className={styles.brandTagline}>—— Timeless moments, set in gold.</span>
        </div>

      </div>
    </section>
  );
}