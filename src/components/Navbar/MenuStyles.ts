import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  top: '100%', 
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  /* 顶部间距缩减，让内容靠近线条 */
  padding: '15px 0 60px 0', 
  color: '#333',
  boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
  /* 这一根线就是导航栏文字下方的“承重线” */
  borderTop: '1px solid #eee', 
  /* 暴力大法：强行上移 2 像素，消除所有白缝 */
  marginTop: '-2px', 
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '60px',
  padding: '0 40px',
};

/* 保持你原始的 Playfair 字体和字号，绝不动它 */
export const headerStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  marginBottom: '20px',
  fontWeight: '400',
  fontFamily: '"Playfair Display", serif',
  color: '#000',
  letterSpacing: '0.5px',
};

export const subHeaderStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '700',
  marginTop: '15px',
  marginBottom: '10px',
  color: '#000',
  display: 'block',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.4', 
  fontSize: '0.9rem',
  color: '#444',
  cursor: 'pointer',
  fontWeight: '400',
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '40px',
  flex: '0 0 300px',
  display: 'flex',
  flexDirection: 'column',
};
