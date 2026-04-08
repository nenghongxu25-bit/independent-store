// src/components/Bestsellers/index.tsx

'use client';

import SectionHeader from './SectionHeader';
import ProductGrid from './ProductGrid';
import ViewAllButton from './ViewAllButton';
import { products } from './data';
import styles from './Bestsellers.module.css';

export default function Bestsellers() {
  return (
    <section className={styles.bestsellersSection}>
      <div className={styles.container}>
        <SectionHeader />
        <ProductGrid products={products} />
        <ViewAllButton />
      </div>
    </section>
  );
}