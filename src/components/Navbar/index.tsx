'use client';

import React, { useState, useMemo } from 'react';
import EngagementMenu from './menus/EngagementMenu';
import WeddingMenu from './menus/WeddingMenu';
import DiamondsMenu from './menus/DiamondsMenu';
import GemstonesMenu from './menus/GemstonesMenu';
import FineJewelryMenu from './menus/FineJewelryMenu';
import PersonalizeMenu from './menus/PersonalizeMenu';
import SupportMenu from './menus/SupportMenu';
import SearchBar from './ui/SearchBar';
import CartIcon from './ui/CartIcon';
import { megaMenuStyles } from './MenuStyles';

const MENU_COMPONENTS: Record<string, React.ComponentType> = {
  'engagement': EngagementMenu,
  'wedding': WeddingMenu,
  'diamonds': DiamondsMenu,
  'gemstones': GemstonesMenu,
  'fine-jewelry': FineJewelryMenu,
  'personalize': PersonalizeMenu,
  'support': SupportMenu,
};

const NAV_ITEMS = [
  { id: 'engagement', label: 'Engagement Rings' },
  { id: 'wedding', label: 'Wedding Bands' },
  { id: 'diamonds', label: 'Diamonds' },
  { id: 'gemstones', label: 'Gemstones' },
  { id: 'fine-jewelry', label: 'Fine Jewelry' },
  { id: 'personalize', label: 'Personalize' },
  { id: 'support', label: 'Support Center' }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const ActiveMenuComponent = useMemo(() => 
    activeMenu ? MENU_COMPONENTS[activeMenu] : null
  , [activeMenu]);

  return (
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff', width: '100%' }}>
      
      {/* 1. 顶部 Logo 层 (高度 80px) */}
      <nav style={{ 
        height: '80px', display: 'flex', alignItems: 'center', 
        justifyContent: 'space-between', padding: '0 60px', borderBottom: '1px solid #f2f2f2' 
      }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '4px', fontFamily: 'serif', margin: 0, cursor: 'pointer' }}>SHIMMER</h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: '2px', margin: 0, color: '#666' }}>YOUR FRIEND & JEWELER</p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
          <SearchBar isFocused={searchFocused} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
          <CartIcon count={0} />
        </div>
      </nav>

      {/* 2. 一级导航层 (高度 45px) */}
      {/* 注意：增加 position: 'relative' 作为二级菜单的定位基准 */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '35px', 
          height: '45px', 
          backgroundColor: '#fff', 
          position: 'relative' 
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {NAV_ITEMS.map((item) => (
          <div 
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id)}
            style={{
              cursor: 'pointer', fontSize: '0.8rem', color: '#333',
              letterSpacing: '1px', textTransform: 'uppercase',
              fontWeight: activeMenu === item.id ? '700' : '400',
              display: 'flex', alignItems: 'center', height: '100%',
              borderBottom: activeMenu === item.id ? '2px solid #000' : '2px solid transparent',
              boxSizing: 'border-box'
            }}
          >
            {item.label}
          </div>
        ))}

        {/* 3. 二级菜单弹窗层 */}
        {ActiveMenuComponent && (
          <div 
            style={{
              ...megaMenuStyles,
              position: 'absolute', // 确保是绝对定位
              top: '45px',          // 刚好在一级导航条(45px)下方
              left: 0,
              width: '100vw',
              animation: 'navFadeIn 0.2s ease-out forwards'
            }} 
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <ActiveMenuComponent />
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
