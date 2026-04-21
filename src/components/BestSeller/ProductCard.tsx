// src/components/Bestsellers/ProductCard.tsx

'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Product } from './types';
import styles from './Bestsellers.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.video && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (product.video && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const videoPath = product.video ? `/video/bestseller/${product.video}` : null;

  return (
    <div 
      className={styles.productCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        {product.isBestseller && (
          <div className={styles.badgeBestseller}>BESTSELLER</div>
        )}
        {product.isNew && (
          <div className={styles.badgeNew}>NEW</div>
        )}
        
        <div className={styles.mediaContainer}>
          <div className={`${styles.mediaItem} ${!isHovered ? styles.mediaVisible : styles.mediaHidden}`}>
            <Image 
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className={styles.productImage}
            />
          </div>
          
          {videoPath && (
            <div className={`${styles.mediaItem} ${isHovered ? styles.mediaVisible : styles.mediaHidden}`}>
              <video
                ref={videoRef}
                src={videoPath}
                className={styles.productVideo}
                muted
                playsInline
                loop={false}
                preload="metadata"
              />
            </div>
          )}
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