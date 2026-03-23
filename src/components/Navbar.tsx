'use client'; // 必须声明为客户端组件，因为导航栏通常有交互

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 顶部固定导航栏 */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(10, 2, 16, 0.95)', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#d4af37', letterSpacing: '4px', fontSize: '0.75rem'
      }}>
        <div 
          style={{ cursor: 'pointer', padding: '0 20px' }}
          onMouseEnter={() => setIsOpen(true)}
        >
          ENGAGEMENT
        </div>
        <div style={{ cursor: 'pointer', padding: '0 20px' }}>WEDDING</div>
        <div style={{ cursor: 'pointer', padding: '0 20px' }}>EDUCATION</div>
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
          {/* 这里就是你发的那张图的布局 */}
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
            <div style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0', marginBottom: '15px' }}>
              {/* 后续可以放一张钻戒图 */}
            </div>
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
