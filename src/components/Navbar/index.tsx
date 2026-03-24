'use client';

import React, { useState } from 'react';
import EngagementMenu from './EngagementMenu';
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

  // 主导航栏单项样式
  const menuItemStyle: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: '1.1rem',      // 顶部字体放大
    fontWeight: '600',       // 增加厚度
    letterSpacing: '2.5px',  // 增加高级感间距
    color: '#d4af37',        // 保持金色主题
    padding: '25px 0',       // 增加高度
    transition: 'all 0.3s ease',
    borderBottom: '3px solid transparent',
  };

  return (
    <div style={{ position: 'relative', zIndex: 1000 }}>
      {/* 顶部主条 */}
      <nav style={{ 
        backgroundColor: '#000', // 假设你的背景是黑色
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 40px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div style={{ flex: 1, fontSize: '1.8rem', fontWeight: 'bold', color: '#d4af37', fontFamily: 'serif' }}>
          SHIMMER
        </div>

        <div 
          style={{ display: 'flex', flex: 4, justifyContent: 'center', gap: '40px' }}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {navItems.map((item) => (
            <div 
              key={item.id}
              style={{
                ...menuItemStyle,
                borderBottom: activeMenu === item.id ? '3px solid #d4af37' : '3px solid transparent'
              }} 
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div style={{ flex: 1, textAlign: 'right', color: '#fff', fontSize: '0.9rem' }}>
          SEARCH / BAG
        </div>
      </nav>

      {/* 下拉菜单容器 */}
      <div 
        onMouseEnter={() => setActiveMenu(activeMenu)} 
        onMouseLeave={() => setActiveMenu(null)}
      >
        {activeMenu === 'engagement' && <EngagementMenu />}
        {activeMenu === 'wedding' && <WeddingMenu />}
        {activeMenu === 'diamonds' && <DiamondsMenu />}
        {activeMenu === 'gemstones' && <GemstonesMenu />}
        {activeMenu === 'fine-jewelry' && <FineJewelryMenu />}
        {activeMenu === 'support' && <SupportMenu />}
      </div>
    </div>
  );
}
