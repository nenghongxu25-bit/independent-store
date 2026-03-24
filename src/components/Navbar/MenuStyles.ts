import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  top: '45px', // 刚好是二级导航的高度
  left: 0,
  width: '100vw',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0 60px 0', 
  boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
  borderTop: '1px solid #f2f2f2',
  marginTop: '-1px', // 向上偏移 1px 覆盖住导航栏底部，消除白缝
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '60px',
  padding: '0 40px',
};

// ... headerStyles, listStyles, cardStyles 保持你原来的设置不变 ...
export const headerStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  marginBottom: '15px',
  fontWeight: '400',
  fontFamily: '"Playfair Display", serif',
  color: '#000',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.2', 
  fontSize: '0.9rem', 
  color: '#444',
  cursor: 'pointer',
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '35px',
  flex: '0 0 300px',
  display: 'flex',
  flexDirection: 'column',
};
