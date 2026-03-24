'use client';

import React, { useState } from 'react';
import EngagementMenu from './EngagementMenu';
import WeddingMenu from './WeddingMenu';
import DiamondsMenu from './DiamondsMenu';
import GemstonesMenu from './GemstonesMenu';
import FineJewelryMenu from './FineJewelryMenu';
import PersonalizeMenu from './PersonalizeMenu'; // 如果还没写，可以先注释
import SupportMenu from './SupportMenu';

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
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff' }}>
      {/* 顶部主导航 */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 60px',
        borderBottom: '1px solid #eee'
      }}>
        {/* 左侧功能图标区 (仿 Shane Co.) */}
        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
           <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>📍</span>
           <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>❓</span>
        </div>

        {/* 中间 Logo (SHIMMER) */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '1.8rem', 
            letterSpacing: '4px', 
            fontWeight: '400', 
            fontFamily: 'serif',
            margin: 0,
            cursor: 'pointer'
          }}>
            SHIMMER
          </h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: '2px', margin: 0, color: '#666' }}>
            YOUR FRIEND & JEWELER
          </p>
        </div>

        {/* 右侧工具栏 */}
        <div style={{ flex: 1, textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#999' }}>Search</span>
          </div>
          <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🛍️</span>
        </div>
      </nav>

      {/* 下面这一排是真正的二级菜单触发区 */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '35px', 
          padding: '10px 0',
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
              fontSize: '0.85rem', // 关键：使用 0.85 这种精细的尺寸
              color: '#333',
              fontWeight: activeMenu === item.id ? '600' : '400',
              paddingBottom: '5px',
              borderBottom: activeMenu === item.id ? '2px solid #333' : '2px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* 渲染子菜单 */}
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
