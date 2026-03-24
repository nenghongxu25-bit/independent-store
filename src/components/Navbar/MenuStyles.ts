import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  /* 关键：使用 absolute 配合 top: 100% 实现无缝拼接 */
  position: 'absolute',
  top: '100%', 
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0 60px 0', 
  color: '#333',
  /* 柔和阴影，增加大牌感 */
  boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
  borderTop: '1px solid #f2f2f2',
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '60px', // 增加间距更有呼吸感
  padding: '0 40px',
};

export const headerStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  marginBottom: '25px',
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
  textTransform: 'uppercase', // 增加一点 Shane Co. 的硬朗感
  letterSpacing: '1px',
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
  flex: '0 0 300px', // 固定宽度
  display: 'flex',
  flexDirection: 'column',
};
