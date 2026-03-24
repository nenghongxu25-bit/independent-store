'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
        backgroundColor: 'rgba(10, 2, 16, 0.98)', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        backdropFilter: 'blur(10px)', color: '#d4af37'
      }}>
        <div style={{
          width: '100%', maxWidth: '1400px', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between', padding: '0 60px'
        }}>
          
          {/* 1. Logo */}
          <div style={{ flex: 1, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '4px' }}>
            SHIMMER
          </div>

          {/* 2. 动态主菜单 */}
          <div 
            style={{ display: 'flex', flex: 3, justifyContent: 'center', gap: '30px', fontSize: '0.7rem', letterSpacing: '2px' }}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {[
              { id: 'engagement', label: 'ENGAGEMENT RINGS' },
              { id: 'wedding', label: 'WEDDING BANDS' },
              { id: 'diamonds', label: 'DIAMONDS' },
              { id: 'gemstones', label: 'GEMSTONES' },
              { id: 'fine-jewelry', label: 'FINE JEWELRY' },
              { id: 'personalize', label: 'PERSONALIZE' },
              { id: 'support', label: 'SUPPORT CENTER' }
            ].map((item) => (
              <div 
                key={item.id}
                style={{ 
                  cursor: 'pointer', 
                  borderBottom: activeMenu === item.id ? '1px solid #d4af37' : '1px solid transparent', 
                  paddingBottom: '5px',
                  transition: 'all 0.3s'
                }} 
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* 3. 右侧功能区 */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.4)', paddingBottom: '2px' }}>
              <input type="text" placeholder="SEARCH" style={{ background: 'transparent', border: 'none', outline: 'none', color: '#d4af37', fontSize: '0.65rem', width: '60px' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span style={{ position: 'absolute', top: '-6px', right: '-10px', backgroundColor: '#d4af37', color: '#0a0210', fontSize: '8px', padding: '1px 4px', borderRadius: '50%', fontWeight: 'bold' }}>0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 全量 Mega Menu 内容渲染 --- */}
      <div onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)}>
        {activeMenu === 'diamonds' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop All Diamonds</h4>
                <ul style={listStyles}>
                  <li style={{ fontWeight: 'bold' }}>Shop All</li>
                  <li>Natural Diamonds</li>
                  <li>Lab-Grown Diamonds</li>
                  <li>Color Lab-Grown Diamonds</li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Specialty Diamonds</h4>
                <ul style={listStyles}>
                  <li>Shane Classic Natural</li>
                  <li>Stargazer Lab-Grown</li>
                  <li>Padma Lab-Grown</li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Diamond Jewelry</h4>
                <ul style={listStyles}>
                  <li>Stud Earrings</li><li>Rings</li><li>Necklaces</li><li>Bracelets</li>
                </ul>
              </div>
              <div style={{ flex: 1.2, ...cardStyles }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '15px' }}>Helpful Topics</h4>
                <ul style={listStyles}>
                  <li style={{ textDecoration: 'underline' }}>Diamond Buying Guide</li>
                  <li style={{ textDecoration: 'underline' }}>About Natural Diamonds</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* GEMSTONES 菜单 (对应图片内容) */}
        {activeMenu === 'gemstones' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop All Gemstones</h4>
                <ul style={listStyles}><li>Sapphires</li><li>Ruby</li><li>Amethyst</li><li>Morganite</li><li>Aquamarine</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Color Gemstone Jewelry</h4>
                <ul style={listStyles}><li>Sapphire</li><li>Emerald</li><li>Pearl</li><li>Opal</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop by Style</h4>
                <ul style={listStyles}><li>Stud Earrings</li><li>Necklaces</li><li>Birthstones</li></ul>
              </div>
              <div style={{ flex: 1.2, ...cardStyles }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '15px' }}>Guides</h4>
                <ul style={listStyles}><li>Pearl Guide</li><li>Gemstone Guide</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* SUPPORT CENTER 菜单 (对应图片内容) */}
        {activeMenu === 'support' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Help & Services</h4>
                <ul style={listStyles}><li>Contact Us</li><li>Free 60-Day Returns</li><li>Find a Store</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Education & Tools</h4>
                <ul style={listStyles}><li>Easy Trade-Up Program</li><li>FAQs</li><li>Ring Sizing</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>About Shane Co.</h4>
                <ul style={listStyles}><li>Careers</li><li>About Us</li><li>The Loupe Blog</li></ul>
              </div>
            </div>
          </div>
        )}
        
        {/* 其他菜单 (Engagement, Wedding, Fine Jewelry, Personalize) 的结构类似，你可以根据参考图继续填充 */}
      </div>
    </>
  );
}

// 统一样式定义
const megaMenuStyles: React.CSSProperties = {
  position: 'fixed', top: '70px', left: 0, width: '100vw', backgroundColor: '#fff', 
  zIndex: 999, display: 'flex', justifyContent: 'center', padding: '40px 0', 
  color: '#1a0525', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
};

const containerStyles: React.CSSProperties = { display: 'flex', width: '100%', maxWidth: '1200px', gap: '40px' };
const headerStyles: React.CSSProperties = { fontSize: '0.9rem', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' };
const listStyles: React.CSSProperties = { listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '0.8rem', cursor: 'pointer' };
const cardStyles: React.CSSProperties = { backgroundColor: '#f9f7f5', padding: '25px', borderRadius: '4px' };
