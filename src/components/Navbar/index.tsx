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
    /* 锁定背景色，防止透底 */
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff' }}>
      
      {/* 1. Logo 层 - 保持你原始的 80px 布局 */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 60px',
        borderBottom: '1px solid #f2f2f2'
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

      {/* 2. 二级菜单区 - 关键：高度固定，去掉 border */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '35px', 
          backgroundColor: '#fff',
          height: '45px' // 给一个固定高度方便弹窗定位
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {navItems.map((item) => (
          <div 
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id)}
            style={{
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: '#333',
              fontWeight: activeMenu === item.id ? '700' : '400',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              /* 文字下划线：通过 position 让它浮在最底层，方便跟弹窗线合体 */
              borderBottom: activeMenu === item.id ? '2px solid #000' : '2px solid transparent',
              boxSizing: 'border-box',
              zIndex: 1001, // 确保文字在弹窗线上方
              transition: 'all 0.1s'
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* 3. 弹窗区 - 这次真的贴死了 */}
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
