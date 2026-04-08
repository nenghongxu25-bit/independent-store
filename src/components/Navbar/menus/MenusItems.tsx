'use client';

import React, { useState } from 'react';

interface MenuItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem({ children, href, onClick }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2.5',
    fontSize: '0.95rem',
    color: isHovered ? '#FFD700' : '#C0C0C0',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: '500',
    backgroundColor: 'transparent',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    display: 'inline-block',
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}