import React, { ReactNode } from 'react';
import styles from '../app/page.module.css';

interface PageTemplateProps {
  children: ReactNode;
  innerBg?: string;
  pageNum?: string;
}

export default function PageTemplate({ children, pageNum = "01" }: PageTemplateProps) {
  return (
    <section style={{ 
      minHeight: '80vh', 
      width: '100%',
      position: 'relative', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      borderBottom: '1px solid rgba(212, 175, 55, 0.1)' 
    }}>
     
      <div style={{ 
        flex: 1, 
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '120px 0' 
      }}>
        {children}
      </div>
     
      <div style={{ 
        position: 'absolute', right: '40px', bottom: '40px',
        fontSize: '0.6rem', color: '#d4af37', opacity: 0.3
      }}>
        INDEX / {pageNum}
      </div>

    </section>
  );
}
