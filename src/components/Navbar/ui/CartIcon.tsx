'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface CartIconProps {
  count: number;
}

export default function CartIcon({ count }: CartIconProps) {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <ShoppingBag size={22} strokeWidth={1.5} color="#333" />
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-8px',
        backgroundColor: '#d4af37', // Shimmer 品牌金
        color: '#fff',
        fontSize: '10px',
        padding: '2px 5px',
        borderRadius: '10px',
        minWidth: '12px',
        textAlign: 'center'
      }}>
        {count}
      </span>
    </div>
  );
}

