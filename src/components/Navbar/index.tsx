'use client';

import React, { useState } from 'react';
import EngagementMenu from './EngagementMenu';
import WeddingMenu from './WeddingMenu';
import DiamondsMenu from './DiamondsMenu';
import GemstonesMenu from './GemstonesMenu';
import FineJewelryMenu from './FineJewelryMenu';
import SupportMenu from './SupportMenu';
import { megaMenuStyles } from './MenuStyles';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { id: 'engagement', label: 'Engagement Rings' },
    { id: 'wedding', label: 'Wedding Bands' },
    { id: 'diamonds', label: 'Diamonds' },
    { id: 'gemstones', label: 'Gemstones' },
    { id: 'fine-jewelry', label: 'Fine Jewelry' },
    { id: 'personalize', label: 'Personalize' },
    { id: 'support', label: 'Support Center' }
  ];

  return (
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Logo 层 - 保持大气 */}
      <nav style={{ 
        height: '70px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 60px',
        borderBottom: '1px solid #f2f2f2'
      }}>
        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
           <span style={{ cursor: 'pointer', fontSize: '1.1rem' }}>📍</span>
           <span style={{ cursor: 'pointer', fontSize: '1.1rem' }}>❓</span>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.6rem', letterSpacing: '3px', fontWeight: '400', fontFamily: 'serif', margin: 0 }}>SHIMMER</h1>
          <p style={{ fontSize: '0.55rem', letterSpacing: '1px', margin: 0, color: '#888' }}>YOUR FRIEND & JEWELER</p>
        </div>

        <div style={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
          <div style={{ border: '1px solid #eee', borderRadius: '20px', padding: '4px 12px' }}>
            <span style={{ fontSize: '0.75rem', color: '#aaa' }}>Search</span>
          </div>
          <span style={{ cursor: 'pointer', fontSize: '1.1rem' }}>🛍️</span>
        </div>
      </nav>

      {/* 2. 二级菜单区 - 极致压缩高度，让文字贴近底边 */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          height: '35px',  // 强行压到 35px
          backgroundColor: '#fff',
          borderBottom: activeMenu ? 'none' : '1px solid #f2f2f2'
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {navItems.map((item) => (
          <div 
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id)}
            style={{
              cursor: 'pointer',
              fontSize: '0.8rem', // 稍微缩小字号更显精致
              color: '#333',
              fontWeight: activeMenu === item.id ? '600' : '400',
              display: 'flex',
              alignItems: 'flex-end', // 文字对齐到底部
              paddingBottom: '8px',   // 距离底线只有 8px
              height: '100%',
              borderBottom: activeMenu === item.id ? '2px solid #333' : '2px solid transparent',
              boxSizing: 'border-box',
              transition: 'all 0.1s'
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* 3. 弹窗区 */}
      {activeMenu && (
        <div 
          style={megaMenuStyles}
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
      )}
    </div>
  );
}
