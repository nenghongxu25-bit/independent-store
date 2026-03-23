import React, { ReactNode } from 'react';
import styles from '../app/page.module.css';

interface PageTemplateProps {
  children: ReactNode;
  innerBg?: string;
  pageNum?: string;
}

export default function PageTemplate({ 
  children, 
  innerBg = 'rgba(15, 5, 25, 0.8)', 
  pageNum = "01" 
}: PageTemplateProps) {
  return (
    <section style={{ 
      height: '100vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px' 
    }}>
      
      <div style={{ 
        position: 'absolute', top: '25px', width: '100%', 
        textAlign: 'center', fontSize: '0.7rem', 
        letterSpacing: '10px', color: '#d4af37', opacity: 0.6 
      }}>
        SHIMMER JEWELRY
      </div>

      <div className={styles.borderGlow} style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        display: 'flex', 
        flexDirection: 'column',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '4px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
      </div>

      <div style={{ 
        position: 'absolute', bottom: '25px', left: '40px', right: '40px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: '0.65rem', color: '#d4af37', opacity: 0.5
      }}>
        <span style={{ letterSpacing: '2px' }}>LAB-GROWN DIAMOND SELECTION</span>
        <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
      </div>

    </section>
  );
}
