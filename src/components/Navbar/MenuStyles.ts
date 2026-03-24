import React from 'react';

export const megaMenuStyles: React.CSSProperties = {
  position: 'fixed',
  top: '80px', 
  left: 0,
  width: '100vw',
  backgroundColor: '#fff',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0 60px 0', 
  color: '#333',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  borderTop: '1px solid #f2f2f2',
};

export const containerStyles: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px', 
  gap: '40px',
  padding: '0 20px',
};

// 对应截图中的大标题 (如 Design Your Own)
export const headerStyles: React.CSSProperties = {
  fontSize: '1.25rem', // 缩小到 1.25，Shane Co. 并不追求夸张的大标题
  marginBottom: '20px',
  fontWeight: '400',
  fontFamily: '"Playfair Display", serif', // 建议引入该字体
  color: '#000',
  letterSpacing: '0.5px',
};

// 对应截图中的加粗项 (如 Shop All)
export const subHeaderStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '700',
  marginTop: '15px',
  marginBottom: '8px',
  color: '#000',
  display: 'block',
};

// 列表项文字
export const listStyles: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2.2', // 宽裕的行高创造简约感
  fontSize: '0.9rem', // 关键修改：回归 0.9rem，这才是高级感的标准字号
  color: '#444',
  cursor: 'pointer',
  fontWeight: '400',
};

// 右侧浅色提示框 (Helpful Topics & Tools)
export const cardStyles: React.CSSProperties = {
  backgroundColor: '#f9f6f4',
  padding: '35px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};
