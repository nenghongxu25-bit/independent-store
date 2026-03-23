import styles from './page.module.css';
import PageTemplate from '@/components/PageTemplate';

export default function Page() {
  return (
    <main className={styles.mainContainer}>
      
      <PageTemplate pageNum="01">
        <h1 className={styles.shimmerText}>Shimmer</h1>
      </PageTemplate>

      <PageTemplate pageNum="02">
        <h2 style={{ color: '#d4af37' }}>科技缔造永恒</h2>
      </PageTemplate>

    </main>
  );
}
