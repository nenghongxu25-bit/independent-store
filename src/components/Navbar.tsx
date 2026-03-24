'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 顶部固定导航栏 */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(10, 2, 16, 0.95)', 
        display: 'flex', alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 40px', 
        zIndex: 1000, borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#d4af37', letterSpacing: '4px', fontSize: '0.75rem'
      }}>
        
        {/* 左侧：Logo 或占位 */}
        <div style={{ flex: 1 }}>
          <span style={{ fontWeight: 'bold', letterSpacing: '2px' }}>SHIMMER</span>
        </div>

        {/* 中间：主菜单 */}
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center' }}>
          <div 
            style={{ cursor: 'pointer', padding: '0 20px' }}
            onMouseEnter={() => setIsOpen(true)}
          >
            ENGAGEMENT
          </div>
          <div style={{ cursor: 'pointer', padding: '0 20px' }}>WEDDING</div>
          <div style={{ cursor: 'pointer', padding: '0 20px' }}>EDUCATION</div>
        </div>

        {/* 右侧：搜索栏 + 购物车 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
          
          {/* 搜索框 */}
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.4)', paddingBottom: '2px' }}>
            <input 
              type="text" 
              placeholder="SEARCH" 
              style={{ 
                background: 'transparent', border: 'none', outline: 'none', 
                color: '#d4af37', fontSize: '0.65rem', width: '70px', letterSpacing: '1px'
              }} 
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* 购物车 */}
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={{
              position: 'absolute', top: '-8px', right: '-8px',
              backgroundColor: '#d4af37', color: '#0a0210',
              fontSize: '8px', padding: '2px 5px', borderRadius: '50%', fontWeight: 'bold'
            }}>0</span>
          </div>

        </div>
      </nav>

      {/* 巨型菜单层 (Mega Menu) */}
      {isOpen && (
        <div 
          onMouseLeave={() => setIsOpen(false)}
          style={{
            position: 'fixed', top: '70px', left: 0, width: '100vw', height: '400px',
            backgroundColor: '#ffffff', zIndex: 999, display: 'flex',
            padding: '40px 10%', color: '#1a0525', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            borderBottom: '2px solid #d4af37'
          }}
        >
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#888', fontSize: '0.65rem', marginBottom: '20px' }}>SHOP BY SHAPE</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
              <span>Round</span>
              <span>Princess</span>
              <span>Emerald</span>
              <span>Pear</span>
              <span>Oval</span>
              <span>Cushion</span>
            </div>
          </div>
          
          <div style={{ flex: 1, borderLeft: '1px solid #eee', paddingLeft: '40px' }}>
            <h4 style={{ color: '#888', fontSize: '0.65rem', marginBottom: '20px' }}>DESIGN STUDIO</h4>
            <div style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0', marginBottom: '15px' }}></div>
            <button style={{ 
              width: '100%', padding: '12px', border: '1px solid #1a0525', 
              background: 'none', cursor: 'pointer', fontWeight: 'bold' 
            }}>
              START WITH A SETTING
            </button>
          </div>
        </div>
      )}
    </>
  );
}
