'use client';

import React, { useState } from 'react';
import EngagementMenu from './EngagementMenu';
import WeddingMenu from './WeddingMenu';
import DiamondsMenu from './DiamondsMenu';
import { megaMenuStyles } from './MenuStyles';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { id: 'engagement', label: 'Engagement Rings' },
    { id: 'wedding', label: 'Wedding Bands' },
    { id: 'diamonds', label: 'Diamonds' },
    { id: 'gemstones', label: 'Gemstones' },
    { id: 'fine-jewelry', label: 'Fine Jewelry' },
    { id: 'support', label: 'Support Center' }
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff' }}>
      {/* 1. Logo 层 */}
      <nav style={{ 
        height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid #f2f2f2' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '4px', fontFamily: 'serif', margin: 0 }}>SHIMMER</h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: '2px', margin: 0, color: '#666' }}>YOUR FRIEND & JEWELER</p>
        </div>
      </nav>

      {/* 2. 二级导航层 - 紧贴 Logo，没有任何间隙 */}
      <div 
        style={{ 
          display: 'flex', justifyContent: 'center', gap: '35px', height: '45px',
          backgroundColor: '#fff', position: 'relative'
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {navItems.map((item) => (
          <div 
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id)}
            style={{
              cursor: 'pointer', fontSize: '0.9rem', color: '#333',
              fontWeight: activeMenu === item.id ? '700' : '400',
              display: 'flex', alignItems: 'center', height: '100%',
              borderBottom: activeMenu === item.id ? '2px solid #000' : '2px solid transparent',
              boxSizing: 'border-box',
              marginBottom: '-1px' // 压死底线，防止 1px 缝隙
            }}
          >
            {item.label}
          </div>
        ))}

        {/* 3. 弹窗层 - 这里是唯一的绝对定位入口 */}
        {activeMenu && (
          <div style={megaMenuStyles} onMouseEnter={() => setActiveMenu(activeMenu)}>
            {activeMenu === 'engagement' && <EngagementMenu />}
            {activeMenu === 'diamonds' && <DiamondsMenu />}
            {/* ... 其他组件同理 */}
          </div>
        )}
      </div>
    </div>
  );
}
