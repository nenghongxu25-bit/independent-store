// src/components/Bestsellers/ProductGrid.tsx

'use client';

import { Product } from './types';
import ProductCard from './ProductCard';
import styles from './Bestsellers.module.css';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}