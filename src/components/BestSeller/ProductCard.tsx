// src/components/Bestsellers/ProductCard.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from './types';
import styles from './Bestsellers.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        {product.isBestseller && (
          <div className={styles.badgeBestseller}>BESTSELLER</div>
        )}
        {product.isNew && (
          <div className={styles.badgeNew}>NEW</div>
        )}
        
        <div className={styles.imageWrapper}>
          <Image 
            src={product.image} 
            alt={product.name}
            width={400}
            height={400}
            className={styles.productImage}
          />
        </div>
        
        <button className={styles.quickViewBtn}>
          QUICK VIEW
        </button>
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productCategory}>{product.category}</div>
        <div className={styles.productPrice}>${product.price}</div>
        
        <button className={styles.addToCartBtn}>
          <span className={styles.cartIcon}>✦</span>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}