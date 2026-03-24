'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 顶部固定导航栏 - 采用三栏布局确保中间居中 */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(10, 2, 16, 0.95)', 
        display: 'flex', alignItems: 'center', 
        justifyContent: 'space-between', // 关键：两端对齐
        padding: '0 40px', 
        zIndex: 1000, borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#d4af37', letterSpacing: '4px', fontSize: '0.75rem'
      }}>
        
        {/* 1. 左侧：占位区（为了平衡右侧，确保中间依然居中） */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          {/* 如果以后有 Logo 可以放这里 */}
        </div>

        {/* 2. 中间：主菜单区（保持你原有的逻辑） */}
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center', fontWeight: '300' }}>
          <div 
            style={{ cursor: 'pointer', padding: '0 20px' }}
            onMouseEnter={() => setIsOpen(true)}
          >
            ENGAGEMENT
          </div>
          <div style={{ cursor: 'pointer', padding: '0 20px' }}>WEDDING</div>
          <div style={{ cursor: 'pointer', padding: '0 20px' }}>EDUCATION</div>
        </div>

        {/* 3. 右侧：新增的搜索与购物车区 */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
          
          {/* 搜索栏 */}
          <div className="search-input-container">
            <input 
              type="text" 
              placeholder="SEARCH" 
              style={{ 
                background: 'transparent', border: 'none', outline: 'none',
                color: '#d4af37', fontSize: '0.7rem', width: '80px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
                paddingBottom: '2px', letterSpacing: '1px'
              }} 
            />
            <svg style={{ marginLeft: '8px', opacity: 0.8 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* 购物车按钮 */}
          <div className="cart-icon" style={{ position: 'relative', cursor: 'pointer' }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span style={{
              position: 'absolute', top: '-8px', right: '-10px',
              backgroundColor: '#d4af37', color: '#0a0210',
              fontSize: '9px', padding: '2px 5px', borderRadius: '50%',
              fontWeight: 'bold', letterSpacing: '0'
            }}>0</span>
          </div>

        </div>
      </nav>

      {/* 巨型菜单层 (Mega Menu) - 保持不变 */}
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
