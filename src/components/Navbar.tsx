'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(10, 2, 16, 0.95)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', // 确保三段式分布
        padding: '0 40px', 
        zIndex: 1000, 
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#d4af37'
      }}>
        
        {/* 左侧：Logo */}
        <div style={{ flex: 1, fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '4px' }}>
          SHIMMER
        </div>

        {/* 中间：菜单区 */}
        <div style={{ 
          display: 'flex', 
          flex: 2, 
          justifyContent: 'center', 
          gap: '30px',
          fontSize: '0.75rem', 
          letterSpacing: '4px' 
        }}>
          <div style={{ cursor: 'pointer' }} onMouseEnter={() => setIsOpen(true)}>ENGAGEMENT</div>
          <div style={{ cursor: 'pointer' }}>WEDDING</div>
          <div style={{ cursor: 'pointer' }}>EDUCATION</div>
        </div>

        {/* 右侧：功能区 (搜索+购物车) */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          gap: '20px' 
        }}>
          
          {/* 搜索框 - 样式修复 */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            borderBottom: '1px solid rgba(212, 175, 55, 0.4)', 
            paddingBottom: '2px' 
          }}>
            <input 
              type="text" 
              placeholder="SEARCH" 
              style={{ 
                background: 'transparent', border: 'none', outline: 'none', 
                color: '#d4af37', fontSize: '0.65rem', width: '80px', letterSpacing: '1px'
              }} 
            />
            {/* 搜索图标 */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* 购物车 - 颜色与可见性修复 */}
          <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {/* 购物车数量角标 */}
            <span style={{
              position: 'absolute', top: '-5px', right: '-8px',
              backgroundColor: '#d4af37', color: '#0a0210',
              fontSize: '9px', padding: '1px 4px', borderRadius: '50%', 
              fontWeight: 'bold', minWidth: '14px', textAlign: 'center'
            }}>0</span>
          </div>

        </div>
      </nav>

      {/* Mega Menu 逻辑保持不变 */}
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
          {/* 这里放你之前的菜单内容 */}
        </div>
      )}
    </>
  );
}
