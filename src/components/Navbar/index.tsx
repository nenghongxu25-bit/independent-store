'use client';

import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react'; // 需要安装：npm install lucide-react
import EngagementMenu from './menus/EngagementMenu';
import WeddingMenu from './menus/WeddingMenu';
import DiamondsMenu from './menus/DiamondsMenu';
import GemstonesMenu from '.menus//GemstonesMenu';
import FineJewelryMenu from './menus/FineJewelryMenu';
import PersonalizeMenu from './menus/PersonalizeMenu';
import SupportMenu from './menus/SupportMenu';
import { megaMenuStyles } from './MenuStyles';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
        justifyContent: 'space-between', // 改为 between，为左右留出空间
        padding: '0 60px',
        borderBottom: '1px solid #f2f2f2' 
      }}>
        {/* 左侧占位（为了让 Logo 居中，左右两边宽度需对称） */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* 这里以后可以放语言切换或门店定位 */}
        </div>

        {/* 中间 Logo */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '4px', fontFamily: 'serif', margin: 0, cursor: 'pointer' }}>SHIMMER</h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: '2px', margin: 0, color: '#666' }}>YOUR FRIEND & JEWELER</p>
        </div>

        {/* 右侧：搜索与购物车 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
          
          {/* 搜索框 */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            borderBottom: searchFocused ? '1px solid #000' : '1px solid #ccc',
            paddingBottom: '2px',
            transition: 'all 0.3s'
          }}>
            <Search size={18} strokeWidth={1.5} color="#333" />
            <input 
              type="text" 
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                border: 'none',
                outline: 'none',
                marginLeft: '8px',
                fontSize: '0.85rem',
                width: searchFocused ? '150px' : '100px', // 聚焦时自动变长
                transition: 'width 0.3s',
                backgroundColor: 'transparent'
              }}
            />
          </div>

          {/* 购物车图标 */}
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingBag size={22} strokeWidth={1.5} color="#333" />
            {/* 购物车角标 */}
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-8px',
              backgroundColor: '#d4af37', // 你的品牌金
              color: '#fff',
              fontSize: '10px',
              padding: '2px 5px',
              borderRadius: '10px',
              minWidth: '12px',
              textAlign: 'center'
            }}>
              0
            </span>
          </div>
        </div>
      </nav>

      {/* 2. 二级导航层 */}
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

        {/* 3. 弹窗层 */}
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
