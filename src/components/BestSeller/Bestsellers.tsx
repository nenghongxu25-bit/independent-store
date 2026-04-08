'use client';

import React from 'react';
import styles from './Bestsellers.module.css';

// 产品数据
const bestsellers = [
  {
    id: 1,
    name: 'Stellar Halo Ring',
    category: 'Engagement Rings',
    price: '$4,800',
    image: '/images/ring1.jpg',  // 替换为您的图片路径
    isNew: false,
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Midnight Sapphire Necklace',
    category: 'Fine Jewelry',
    price: '$6,200',
    image: '/images/necklace1.jpg',
    isNew: true,
    isBestseller: true,
  },
  {
    id: 3,
    name: 'Eternity Diamond Band',
    category: 'Wedding Bands',
    price: '$3,900',
    image: '/images/ring2.jpg',
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: 'Falling Star Earrings',
    category: 'Gemstones',
    price: '$5,500',
    image: '/images/earrings1.jpg',
    isNew: true,
    isBestseller: false,
  },
];

export default function Bestsellers() {
  return (
    <section className={styles.bestsellersSection}>
      <div className={styles.container}>
        
        {/* 板块标题 */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Curated for You</span>
          <h2 className={styles.title}>Best Sellers</h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerStar}>✦</span>
            <span className={styles.dividerLine}></span>
          </div>
          <p className={styles.description}>
            Beloved by our customers. Each piece tells a story.
          </p>
        </div>

        {/* 产品网格 */}
        <div className={styles.grid}>
          {bestsellers.map((product) => (
            <div key={product.id} className={styles.productCard}>
              
              {/* 图片容器 */}
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  {/* 占位图 - 请替换为实际图片 */}
                  <div className={styles.placeholderImage}>
                    <span className={styles.placeholderIcon}>✨</span>
                  </div>
                  {/* 实际图片使用时取消注释
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={styles.productImage}
                  />
                  */}
                </div>
                
                {/* 标签 */}
                {product.isBestseller && (
                  <span className={styles.badgeBestseller}>⭐ Best Seller</span>
                )}
                {product.isNew && (
                  <span className={styles.badgeNew}>New</span>
                )}
                
                {/* 快速查看按钮 */}
                <button className={styles.quickViewBtn}>
                  Quick View
                </button>
              </div>
              
              {/* 产品信息 */}
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productCategory}>{product.category}</p>
                <p className={styles.productPrice}>{product.price}</p>
                
                {/* 购物车按钮 */}
                <button className={styles.addToCartBtn}>
                  <span>Add to Cart</span>
                  <span className={styles.cartIcon}>🛒</span>
                </button>
              </div>
              
            </div>
          ))}
        </div>
        
        {/* 查看全部按钮 */}
        <div className={styles.viewAllWrapper}>
          <button className={styles.viewAllBtn}>
            View All Collections
            <span className={styles.arrow}>→</span>
          </button>
        </div>
        
      </div>
    </section>
  );
}