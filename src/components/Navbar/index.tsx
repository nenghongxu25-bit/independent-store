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
    /* 整个导航栏容器，设为 flex-direction column 确保没有间隙 */
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Logo 层 */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 60px',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
           <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>📍</span>
           <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>❓</span>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '4px', fontWeight: '400', fontFamily: 'serif', margin: 0 }}>SHIMMER</h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: '2px', margin: 0, color: '#666' }}>YOUR FRIEND & JEWELER</p>
        </div>

        <div style={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}>
            <span style={{ fontSize: '0.8rem', color: '#999' }}>Search</span>
          </div>
          <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🛍️</span>
        </div>
      </nav>

      {/* 2. 二级菜单区 - 强行固定高度 45px，不给任何空隙机会 */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '35px', 
          height: '45px', 
          backgroundColor: '#fff',
          borderBottom: activeMenu ? 'none' : '1px solid #eee'
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {navItems.map((item) => (
          <div 
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id)}
            style={{
              cursor: 'pointer',
              fontSize: '0.85rem',
              color: '#333',
              fontWeight: activeMenu === item.id ? '600' : '400',
              display: 'flex',
              alignItems: 'center',
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

      {/* 3. 弹窗区 - 使用绝对定位紧贴顶部 */}
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
