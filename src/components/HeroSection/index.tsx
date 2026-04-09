import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      paddingTop: '120px',
      minHeight: '100vh' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <p className={styles.subtitle}>
          <span className="handcraftedText">Handcrafted</span>{' '}
          <span className="excellenceText">Excellence</span>
        </p>
        
        <h1 className={`${styles['drosta-title']} navLogo`} translate="no">
          DroSta
        </h1>
        
        <h2 className={styles['brand-jewelry']}>
          Jewelry
        </h2>
        
        <div style={{ marginTop: '110px' }}>
          <button className={styles['shop-button']}>
            EXPLORE THE COLLECTIONS
          </button>
        </div>
      </div>
    </main>
  );
}