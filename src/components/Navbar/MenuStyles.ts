import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'fixed',
  top: '80px', // 根据你的 Navbar 高度微调
  left: 0,
  width: '100vw',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '60px 0 90px 0', 
  color: '#222',
  boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
  borderTop: '1px solid #f0f0f0',
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1350px', // 稍微加宽，容纳更多大字
  gap: '80px',
  padding: '0 50px',
};

// 对应截图中的大标题（如 Design Your Own）
export const headerStyles: React.CSSProperties = {
  fontSize: '1.6rem', // 显著放大
  marginBottom: '30px',
  fontWeight: '400',
  fontFamily: 'serif', 
  color: '#000',
  letterSpacing: '0.5px',
};

// 对应截图中的加粗项（如 Start with a Setting）
export const subHeaderStyles: React.CSSProperties = {
  fontSize: '1.15rem',
  fontWeight: '700',
  marginTop: '25px',
  marginBottom: '12px',
  color: '#111',
  display: 'block',
};

// 所有的列表文字
export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.8', // 宽裕的行高
  fontSize: '1.15rem', // 关键修改：大号字体
  color: '#444',
  cursor: 'pointer',
};

// 侧边浅色卡片
export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '50px',
  flex: 1.3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};
