'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(10, 2, 16, 0.98)', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)', color: '#d4af37'
      }}>
        {/* 限制最大宽度，防止图标太靠边 */}
        <div style={{
          width: '100%', maxWidth: '1400px', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between', padding: '0 60px'
        }}>
          
          {/* 1. 左侧 Logo */}
          <div style={{ flex: 1, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '4px' }}>
            SHIMMER
          </div>

          {/* 2. 中间主菜单 */}
          <div style={{ 
            display: 'flex', flex: 2, justifyContent: 'center', gap: '40px',
            fontSize: '0.75rem', letterSpacing: '3px' 
          }}>
            <div 
              style={{ cursor: 'pointer', borderBottom: isOpen ? '1px solid #d4af37' : '1px solid transparent', paddingBottom: '5px' }} 
              onMouseEnter={() => setIsOpen(true)}
            >
              ENGAGEMENT
            </div>
            <div style={{ cursor: 'pointer' }}>WEDDING</div>
            <div style={{ cursor: 'pointer' }}>EDUCATION</div>
          </div>

          {/* 3. 右侧功能区 */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
            {/* 搜索栏 */}
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.4)', paddingBottom: '2px' }}>
              <input 
                type="text" placeholder="SEARCH" 
                style={{ background: 'transparent', border: 'none', outline: 'none', color: '#d4af37', fontSize: '0.65rem', width: '80px' }} 
              />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            {/* 购物车 */}
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span style={{ position: 'absolute', top: '-6px', right: '-10px', backgroundColor: '#d4af37', color: '#0a0210', fontSize: '9px', padding: '1px 5px', borderRadius: '50%', fontWeight: 'bold' }}>0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 全新多列 Mega Menu */}
      {isOpen && (
        <div 
          onMouseLeave={() => setIsOpen(false)}
          style={{
            position: 'fixed', top: '70px', left: 0, width: '100vw',
            backgroundColor: '#fff', zIndex: 999, display: 'flex', justifyContent: 'center',
            padding: '50px 0', color: '#1a0525', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{ display: 'flex', width: '100%', maxWidth: '1200px', gap: '60px' }}>
            
            {/* 第一列：设计引导 */}
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Design Your Own</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5', fontSize: '0.85rem' }}>
                <li style={{ fontWeight: 'bold', cursor: 'pointer' }}>Shop all Engagement Rings</li>
                <li style={{ fontWeight: 'bold', color: '#888', marginTop: '10px' }}>Start with a Setting</li>
                <li style={{ cursor: 'pointer' }}>Engagement Ring Settings</li>
                <li style={{ cursor: 'pointer' }}>Matching Wedding Sets</li>
                <li style={{ fontWeight: 'bold', color: '#888', marginTop: '10px' }}>Start with a Stone</li>
                <li style={{ cursor: 'pointer' }}>Lab-Grown Diamonds</li>
                <li style={{ cursor: 'pointer' }}>Natural Diamonds</li>
              </ul>
            </div>

            {/* 第二列：风格分类 */}
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Featured Styles</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5', fontSize: '0.85rem', cursor: 'pointer' }}>
                <li>Halo</li>
                <li>Vintage</li>
                <li>Solitaire</li>
                <li>Classic</li>
                <li>Perfectly Preset</li>
                <li>New Arrivals</li>
              </ul>
            </div>

            {/* 第三列：材质选择 */}
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Metal Types</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5', fontSize: '0.85rem', cursor: 'pointer' }}>
                <li>White Gold</li>
                <li>Yellow Gold</li>
                <li>Platinum</li>
                <li>Rose Gold</li>
              </ul>
            </div>

            {/* 第四列：右侧工具卡片 (对应图中灰色区域) */}
            <div style={{ flex: 1.2, backgroundColor: '#f9f7f5', padding: '30px', borderRadius: '4px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-cormorant)' }}>Helpful Topics & Tools</h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.8', fontSize: '0.9rem', color: '#444' }}>
                <li style={{ cursor: 'pointer', textDecoration: 'underline' }}>How to Pick a Ring</li>
                <li style={{ cursor: 'pointer', textDecoration: 'underline' }}>Diamond Buying Guide</li>
                <li style={{ cursor: 'pointer', textDecoration: 'underline' }}>Ring Style Quiz</li>
                <li style={{ cursor: 'pointer', textDecoration: 'underline' }}>Real Proposals</li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
