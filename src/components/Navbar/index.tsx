'use client';

import React, { useState, useMemo } from 'react';
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { User } from 'lucide-react'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
  engagement: EngagementMenu,
  wedding: WeddingMenu,
  diamonds: DiamondsMenu,
  gemstones: GemstonesMenu,
  'fine-jewelry': FineJewelryMenu,
  personalize: PersonalizeMenu,
  support: SupportMenu,
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
  const { user } = useUser(); // 获取用户信息（头像等）
  const router = useRouter();

  const ActiveMenuComponent = useMemo(() => (activeMenu ? MENU_COMPONENTS[activeMenu] : null), [activeMenu]);

  return (
    <div style={{ position: 'relative', zIndex: 1000, backgroundColor: '#fff', width: '100%' }}>
      {/* 1. Logo 层 */}
      <nav style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 60px', 
        borderBottom: '1px solid #f2f2f2' 
      }}>
        
        {/* --- 左侧：纯跳转账户入口 (无弹窗版) --- */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          
          {/* 未登录：点一下直接去登录页，不准弹窗 */}
          <SignedOut>
            <div 
              onClick={() => router.push('/account')} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}
            >
              <User size={18} strokeWidth={1.5} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '1.5px', fontWeight: '500' }}>ACCOUNT</span>
            </div>
          </SignedOut>

          {/* 已登录：点击头像或文字直接 push 到 /account，绝不弹窗 */}
          <SignedIn>
            <div 
              onClick={() => router.push('/account')} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {user?.imageUrl ? (
                <img 
                  src={user.imageUrl} 
                  alt="profile" 
                  style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #eee' }} 
                />
              ) : (
                <User size={18} strokeWidth={1.5} />
              )}
              <span style={{ fontSize: '0.65rem', letterSpacing: '1.5px', color: '#aa8928', fontWeight: '600' }}>MY PANEL</span>
            </div>
          </SignedIn>
        </div>

        {/* --- 中间：Logo --- */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 style={{ fontSize: '1.8rem', letterSpacing: '4px', fontFamily: 'serif', margin: 0, cursor: 'pointer' }}>SHIMMER</h1>
            <p style={{ fontSize: '0.55rem', letterSpacing: '2px', margin: 0, color: '#999' }}>YOUR FRIEND & JEWELER</p>
          </Link>
        </div>

        {/* --- 右侧：工具栏 --- */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
          <SearchBar isFocused={searchFocused} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
          <CartIcon count={0} />
        </div>
      </nav>

      {/* 2. 一级导航层 */}
      <div 
        style={{ display: 'flex', justifyContent: 'center', gap: '35px', height: '45px', backgroundColor: '#fff', position: 'relative' }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {NAV_ITEMS.map((item) => (
          <div 
            key={item.id}
            onMouseEnter={() => setActiveMenu(item.id)}
            style={{
              cursor: 'pointer', fontSize: '0.75rem', color: '#333', letterSpacing: '1px', textTransform: 'uppercase',
              padding: '0 10px',
              fontWeight: activeMenu === item.id ? '700' : '400',
              display: 'flex', alignItems: 'center', height: '100%',
              borderBottom: activeMenu === item.id ? '2px solid #000' : '2px solid transparent',
              boxSizing: 'border-box'
            }}
          >
            {item.label}
          </div>
        ))}

        {ActiveMenuComponent && (
          <div 
            style={{ ...megaMenuStyles, position: 'absolute', top: '45px', left: 0, width: '100vw' }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <ActiveMenuComponent />
          </div>
        )}
      </div>
    </div>
  );
}