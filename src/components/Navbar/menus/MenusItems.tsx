'use client';

import React, { useState } from 'react';

interface MenuItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem({ children, href, onClick }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // 将样式对象定义为 React.CSSProperties，防止 TS 类型报错
  const styles: React.CSSProperties = {
    listStyle: 'none',
    padding: '0 8px', // 稍微给点左右间距，防止放大时切断
    lineHeight: '2.5',
    fontSize: '0.95rem',
    color: isHovered ? '#FFD700' : '#000000',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '500',
    backgroundColor: 'transparent',
    
    // --- 核心修改点 ---
    display: 'block',    // 这里必须改成 block，才能实现纵向自动换行分布
    width: '100%',       // 让它占满父容器宽度
    // ----------------
    
    // 放大效果：如果是 block 元素，scale 会以中心缩放，建议配合 transformOrigin
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    transformOrigin: 'left center', // 从左侧开始缩放，排版更整齐
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <li
      style={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}