'use client';

import React from 'react';
import styles from './MenuItems.module.css';

interface MenuItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem({ children, href, onClick }: MenuItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <li className={styles.menuItem} onClick={handleClick}>
      {children}
    </li>
  );
}