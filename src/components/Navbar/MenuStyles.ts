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
  /* 极致紧凑：顶部 padding 缩减到 15px */
  padding: '15px 0 50px 0', 
  color: '#333',
  boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
  /* 这一条线就是导航栏文字下方的承重线 */
  borderTop: '1px solid #333', 
  marginTop: '-1px', 
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '60px',
  padding: '0 40px',
};

export const headerStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  marginBottom: '10px', // 减少标题间距
  fontWeight: '600',
  fontFamily: 'serif',
  color: '#000',
};

export const subHeaderStyles: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: '700',
  marginTop: '8px',
  marginBottom: '4px',
  color: '#000',
  display: 'block',
  textTransform: 'uppercase',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '1.8', // 进一步收紧列表行高
  fontSize: '0.85rem',
  color: '#444',
  cursor: 'pointer',
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '25px',
  flex: '0 0 280px',
  display: 'flex',
  flexDirection: 'column',
};
