import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  /* 重点：现在它是二级导航容器的子元素，top: 100% 刚好是 45px 处 */
  top: '100%', 
  left: 0,
  width: '100vw',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0 60px 0', 
  color: '#333',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  borderTop: '1px solid #f2f2f2',
  marginTop: '-1px', 
};

// ... 下面其余样式 containerStyles, headerStyles 等保持原样，不要动 ...
export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '40px',
  padding: '0 20px',
};

export const headerStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  marginBottom: '15px',
  fontWeight: '400',
  fontFamily: '"Playfair Display", serif',
  color: '#000',
  letterSpacing: '0.5px',
};

export const subHeaderStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '700',
  marginTop: '15px',
  marginBottom: '8px',
  color: '#000',
  display: 'block',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.2', 
  fontSize: '0.9rem', 
  color: '#444',
  cursor: 'pointer',
  fontWeight: '400',
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '35px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};
