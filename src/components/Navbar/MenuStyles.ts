// src/components/Navbar/MenuStyles.ts
import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'fixed', 
  top: '70px', 
  left: 0, 
  width: '100vw', 
  backgroundColor: '#fff', 
  zIndex: 999, 
  display: 'flex', 
  justifyContent: 'center', 
  padding: '50px 0 80px 0', // 增加底部留白，更有大牌感
  color: '#333', 
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  borderTop: '1px solid #eee'
};

export const containerStyles: React.CSSProperties = { 
  display: 'flex', 
  width: '100%', 
  maxWidth: '1250px', 
  gap: '60px',
  padding: '0 40px'
};

// 对应截图中的大标题（如 Design Your Own）
export const headerStyles: React.CSSProperties = { 
  fontSize: '1.4rem', 
  marginBottom: '25px', 
  fontWeight: '400',
  fontFamily: 'serif', // 使用衬线体提升高级感
  color: '#222'
};

// 对应截图中的加粗小标题（如 Start with a Setting）
export const subHeaderStyles: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: '700',
  marginTop: '20px',
  marginBottom: '10px',
  color: '#111',
  display: 'block'
};

export const listStyles: React.CSSProperties = { 
  listStyle: 'none', 
  padding: 0, 
  lineHeight: '2.4', 
  fontSize: '1.05rem', // 字体调大，对标截图
  color: '#555',
  cursor: 'pointer' 
};

// 侧边浅色卡片区域
export const cardStyles: React.CSSProperties = { 
  backgroundColor: '#f9f6f4', // 暖色调背景
  padding: '45px', 
  flex: 1.2,
  minHeight: '350px'
};
