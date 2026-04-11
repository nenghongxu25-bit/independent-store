'use client';

import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface CartIconProps {
  count?: number;
  onClick?: () => void;
}

export default function CartIcon({ count = 0, onClick }: CartIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hasItems = count > 0;

  return (
    <div 
      style={{ 
        position: 'relative', 
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={{
        position: 'relative',
        padding: '6px'
      }}>
        <ShoppingBag 
          size={24} 
          strokeWidth={2} 
          color={isHovered ? '#d4af37' : '#000000ff'}
          style={{ transition: 'color 0.2s' }}
        />
        
        {hasItems && (
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            color: '#d4af37',  // 金色数字
            fontSize: '10px',   // 更小
            fontWeight: '500',  // 不用粗体
            background: 'transparent',  // 无背景
            padding: '0',
            minWidth: 'auto',
            textAlign: 'center',
          }}>
            {count > 99 ? '99+' : count}
          </span>
        )}
      </div>
    </div>
  );
}