import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <main className={styles.hero}>
      {/*hero页面总布局 */}
      <div className={styles.content}>
        {/*容器内容格式*/}
        <p className={styles.subtitle}>
          <span className="handcraftedText">Handcrafted</span>{' '}
          <span className="excellenceText">Excellence</span>
        </p>
        
        <h1 className={`${styles.drostaTitle} navLogo`} translate="no">
          DroSta
        </h1>
        
        <h2 className={styles.brandJewelry}>
          Jewelry
        </h2>
        
        <div className={styles.buttonWrapper}>
          <button className={styles.shopButton}>
            EXPLORE THE COLLECTIONS
          </button>
        </div>
      </div>
    </main>
  );
}