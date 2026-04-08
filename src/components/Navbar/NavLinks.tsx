'use client';
import React from 'react';

interface NavLinksProps {
  items: { id: string, label: string }[];
  activeMenu: string | null;
  setActiveMenu: (id: string | null) => void;
}

export default function NavLinks({ items, activeMenu, setActiveMenu }: NavLinksProps) {
  return (
    <>
      {items.map((item) => (
        <div 
          key={item.id}
          onMouseEnter={() => setActiveMenu(item.id)}
          style={{ 
            cursor: 'pointer', 
            color: '#c0c0c0',  // 👈 银色
            fontSize: '0.75rem', 
            fontWeight: 500, 
            textTransform: 'uppercase',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            borderBottom: activeMenu === item.id ? '2px solid #c0c0c0' : '2px solid transparent',
            transition: 'all 0.2s'
          }}
        >
          {item.label}
        </div>
      ))}
    </>
  );
}