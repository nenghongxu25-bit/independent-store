'use client';

import React, { useState, useMemo, memo } from 'react';
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

// 1. 配置映射表：增加新分类只需在这里加一行
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

// 2. 性能优化：NavItem 只有在状态改变时才重新渲染
const NavItem = memo(({ item, isActive, onEnter }: any) => (
  <div 
    onMouseEnter={() => onEnter(item.id)}
    style={{
      cursor: 'pointer', fontSize: '0.8rem', color: '#333',
      letterSpacing: '1px', textTransform: 'uppercase',
      fontWeight: isActive ? '700' : '400',
      display: 'flex', alignItems: 'center', height: '100%',
      borderBottom: isActive ? '2px solid #000' : '2px solid transparent',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease-in-out'
    }}
  >
    {item.label}
  </div>
));
NavItem.displayName = 'NavItem';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);

  // 3. 动态获取组件逻辑
  const ActiveMenuComponent = useMemo(() => 
    activeMenu ? MENU_COMPONENTS[activeMenu] : null
  , [activeMenu]);

  return (
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff', width: '100%' }}>
      
      {/* Logo & Icons 层 */}
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

      {/* 导航条层 */}
      <div 
        style={{ display: 'flex', justifyContent: 'center', gap: '35px', height: '45px', backgroundColor: '#fff' }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {NAV_ITEMS.map((item) => (
          <NavItem 
            key={item.id} 
            item={item} 
            isActive={activeMenu === item.id} 
            onEnter={setActiveMenu} 
          />
        ))}

        {/* 4. 弹窗层：添加淡入动画 */}
        {ActiveMenuComponent && (
          <div 
            style={{
              ...megaMenuStyles,
              animation: 'navFadeIn 0.25s ease-out forwards'
            }} 
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <ActiveMenuComponent />
          </div>
        )}
      </div>

      {/* 5. 注入动画 CSS (为了方便直接写在 style 里) */}
      <style jsx global>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
