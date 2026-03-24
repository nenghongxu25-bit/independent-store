import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  top: '45px', 
  left: 0,
  width: '100vw',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0 60px 0', 
  boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
  borderTop: '1px solid #f2f2f2',
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
  marginBottom: '15px',
  fontWeight: '400',
  fontFamily: '"Playfair Display", serif',
  color: '#000',
};

/* 补上这个该死的缺失变量 */
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
};

export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '35px',
  flex: '0 0 300px',
  display: 'flex',
  flexDirection: 'column',
};
