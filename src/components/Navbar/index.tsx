'use client';

import React, { useState } from 'react';
import EngagementMenu from './EngagementMenu'; // 记得按你拆分的写
import WeddingMenu from './WeddingMenu';
import DiamondsMenu from './DiamondsMenu';
import GemstonesMenu from './GemstonesMenu';
import FineJewelryMenu from './FineJewelryMenu';
import SupportMenu from './SupportMenu';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { id: 'engagement', label: 'ENGAGEMENT RINGS' },
    { id: 'wedding', label: 'WEDDING BANDS' },
    { id: 'diamonds', label: 'DIAMONDS' },
    { id: 'gemstones', label: 'GEMSTONES' },
    { id: 'fine-jewelry', label: 'FINE JEWELRY' },
    { id: 'support', label: 'SUPPORT CENTER' }
  ];

  return (
    <>
      <nav style={{ /* 之前的 navBarStyle */ }}>
        <div style={{ /* 之前的 topContainerStyle */ }}>
          <div style={{ flex: 1 }}>SHIMMER</div>
          <div style={{ display: 'flex', flex: 3, justifyContent: 'center', gap: '25px' }} onMouseLeave={() => setActiveMenu(null)}>
            {navItems.map((item) => (
              <div 
                key={item.id}
                style={{ cursor: 'pointer', fontSize: '0.65rem' }} 
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>{/* 搜索和购物车 */}</div>
        </div>
      </nav>

      <div onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)}>
        {activeMenu === 'engagement' && <EngagementMenu />}
        {activeMenu === 'wedding' && <WeddingMenu />}
        {activeMenu === 'diamonds' && <DiamondsMenu />}
        {activeMenu === 'gemstones' && <GemstonesMenu />}
        {activeMenu === 'fine-jewelry' && <FineJewelryMenu />}
        {activeMenu === 'support' && <SupportMenu />}
      </div>
    </>
  );
}
