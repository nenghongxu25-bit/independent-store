'use client';

import React, { useState } from 'react';
import EngagementMenu from './menus/EngagementMenu';
import WeddingMenu from './menus/WeddingMenu';
import DiamondsMenu from './menus/DiamondsMenu';
import GemstonesMenu from './menus/GemstonesMenu';
import FineJewelryMenu from './menus/FineJewelryMenu';
import PersonalizeMenu from './menus/PersonalizeMenu';
import SupportMenu from './menus/SupportMenu';
// 1. 导入你新建立的 UI 组件
import SearchBar from './ui/SearchBar';
import CartIcon from './ui/CartIcon';
import { megaMenuStyles } from './MenuStyles';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  // searchFocused 状态留在父组件，用来控制交互逻辑（如果需要的话）
  const [searchFocused, setSearchFocused] = useState(false);

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
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff', width: '100%' }}>
      
      {/* 1. Logo & Icons 层 */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 60px',
        borderBottom: '1px solid #f2f2f2' 
      }}>
        {/* 左侧留白 */}
        <div style={{ flex: 1 }}></div>

        {/* 中间 Logo */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '4px', fontFamily: 'serif', margin: 0, cursor: 'pointer' }}>SHIMMER</h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: '2px', margin: 0, color: '#666' }}>YOUR FRIEND & JEWELER</p>
        </div>

        {/* 右侧：使用新组件替代原来的那一坨代码 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
          
          {/* 2. 使用抽离后的搜索组件 */}
          <SearchBar 
            isFocused={searchFocused} 
            onFocus={() => setSearchFocused(true)} 
            onBlur={() => setSearchFocused(false)} 
          />

          {/* 3. 使用抽离后的购物车组件 */}
          <CartIcon count={0} />

        </div>
      </nav>

      {/* 二级导航层保持不变 */}
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
              cursor: 'pointer', fontSize: '0.8rem', color: '#333',
              letterSpacing: '1px', textTransform: 'uppercase',
              fontWeight: activeMenu === item.id ? '700' : '400',
              display: 'flex', alignItems: 'center', height: '100%',
              borderBottom: activeMenu === item.id ? '2px solid #000' : '2px solid transparent',
              boxSizing: 'border-box',
              marginBottom: '-1px'
            }}
          >
            {item.label}
          </div>
        ))}

        {activeMenu && (
          <div style={megaMenuStyles} onMouseEnter={() => setActiveMenu(activeMenu)}>
            {activeMenu === 'engagement' && <EngagementMenu />}
            {activeMenu === 'wedding' && <WeddingMenu />}
            {activeMenu === 'diamonds' && <DiamondsMenu />}
            {activeMenu === 'gemstones' && <GemstonesMenu />}
            {activeMenu === 'fine-jewelry' && <FineJewelryMenu />}
            {activeMenu === 'personalize' && <PersonalizeMenu />}
            {activeMenu === 'support' && <SupportMenu />}
          </div>
        )}
      </div>
    </div>
  );
}
