import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  /* 80px (上层) + 45px (中层) = 125px */
  /* 如果你的页面还是有 1px 缝隙，就改成 124px */
  top: '125px', 
  left: 0,
  width: '100%',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0 60px 0', 
  color: '#333',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  borderTop: '1px solid #eee',
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
