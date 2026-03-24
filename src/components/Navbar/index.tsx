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
    <div style={{ position: 'relative', zIndex: 1000 }}>
      
      {/* 1. Logo 层 - 维持原始风格 */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 60px',
        borderBottom: '1px solid #f2f2f2',
        backgroundColor: '#fff'
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

      {/* 2. 二级菜单区 - 关键点：这个容器现在是漂浮在页面上的 */}
      <div 
        style={{ 
          position: 'absolute', // 变成绝对定位，不占用页面高度
          top: '80px', 
          left: 0,
          width: '100%',
          display: 'flex', 
          justifyContent: 'center', 
          gap: '35px', 
          backgroundColor: '#fff',
          height: '45px', // 导航栏的高度
          zIndex: 1001,
          borderBottom: activeMenu ? 'none' : '1px solid #f2f2f2' // 没弹窗时显示底线
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
              /* 下划线直接压在容器边缘 */
              borderBottom: activeMenu === item.id ? '2px solid #000' : '2px solid transparent',
              boxSizing: 'border-box',
              marginBottom: '-1px'
            }}
          >
            {item.label}
          </div>
        ))}

        {/* 3. 弹窗区 */}
        {activeMenu && (
          <div 
            style={megaMenuStyles}
            onMouseEnter={() => setActiveMenu(activeMenu)} 
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

      {/* 这里没有第4步的占位块了！
        因为二级导航是 absolute，
        所以你需要去你的 src/app/page.tsx 里，
        给最外层的 <main> 或者容器加一个 padding-top: 45px (或者直接加一个 45px 高度的空 div)，
        这样你的流光标题就会被永久固定在 125px (80+45) 的位置。
      */}
    </div>
  );
}
