import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  top: '105px', // 70px + 35px = 105px 严丝合缝
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  /* 重点：减少顶部 padding，让弹窗文字上移 */
  padding: '20px 0 50px 0', 
  color: '#333',
  boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
  borderTop: '1px solid #f2f2f2',
  marginTop: '-1px', 
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '50px',
  padding: '0 40px',
};

export const headerStyles: React.CSSProperties = {
  fontSize: '1.1rem', // 进一步缩小标题，让间距看起来更小
  marginBottom: '15px', // 减少标题下方的空行
  fontWeight: '500',
  fontFamily: 'serif',
  color: '#000',
  letterSpacing: '0.5px',
};

export const subHeaderStyles: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: '700',
  marginTop: '10px',
  marginBottom: '5px',
  color: '#000',
  display: 'block',
  textTransform: 'uppercase',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.0', // 稍微收紧行高
  fontSize: '0.85rem',
  color: '#555',
  cursor: 'pointer',
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '30px',
  flex: '0 0 280px',
  display: 'flex',
  flexDirection: 'column',
};
