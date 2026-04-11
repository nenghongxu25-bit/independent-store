import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'absolute',
  top: '45px',
  left: 0,
  width: '100vw',
  backgroundColor: 'transparent',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '30px 0 60px 0',
  boxShadow: 'none',
  borderTop: 'none',
  animation: 'fadeInUp 0.25s ease-out',
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  gap: '60px',
  padding: '0 40px',
  backgroundColor: 'transparent',
};

export const headerStyles: React.CSSProperties = {
  fontSize: '1.2rem',
  marginBottom: '15px',
  fontWeight: '700',
  color: '#000000ff',
  letterSpacing: '1px',
  textShadow: 'none',
  backgroundColor: 'transparent',
  transition: 'all 0.2s ease',
};

export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: 'transparent',
};

export const cardStyles: React.CSSProperties = {
  width: '200px',
  backgroundColor: 'transparent',
};

export const subHeaderStyles: React.CSSProperties = {
  width: '200px',
  backgroundColor: 'transparent',
};