import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  /* 关键：100% 会紧贴在上面那个 div 的屁股后面 */
  top: '100%', 
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0 60px 0', 
  color: '#333',
  /* 加强投影和边框对齐 */
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  borderTop: '1px solid #eee',
  /* 强制消除可能残留的 1px 间隙 */
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
  fontSize: '1.25rem',
  marginBottom: '25px',
  fontWeight: '400',
  fontFamily: 'serif',
  color: '#000',
};

export const subHeaderStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '700',
  marginTop: '15px',
  marginBottom: '10px',
  color: '#000',
  display: 'block',
  textTransform: 'uppercase',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.4', 
  fontSize: '0.9rem',
  color: '#444',
  cursor: 'pointer',
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '40px',
  flex: '0 0 300px',
  display: 'flex',
  flexDirection: 'column',
};
