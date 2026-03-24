'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // 导航配置数据
  const navItems = [
    { id: 'engagement', label: 'ENGAGEMENT RINGS' },
    { id: 'wedding', label: 'WEDDING BANDS' },
    { id: 'diamonds', label: 'DIAMONDS' },
    { id: 'gemstones', label: 'GEMSTONES' },
    { id: 'fine-jewelry', label: 'FINE JEWELRY' },
    { id: 'personalize', label: 'PERSONALIZE' },
    { id: 'support', label: 'SUPPORT CENTER' }
  ];

  return (
    <>
      <nav style={navBarStyle}>
        <div style={topContainerStyle}>
          {/* 1. Logo */}
          <div style={logoStyle}>SHIMMER</div>

          {/* 2. 主菜单 */}
          <div style={menuContainerStyle} onMouseLeave={() => setActiveMenu(null)}>
            {navItems.map((item) => (
              <div 
                key={item.id}
                style={{ 
                  ...menuItemStyle,
                  borderBottom: activeMenu === item.id ? '1px solid #d4af37' : '1px solid transparent'
                }} 
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* 3. 右侧功能区 */}
          <div style={iconGroupStyle}>
            <div style={searchBoxStyle}>
              <input type="text" placeholder="SEARCH" style={searchInputStyle} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span style={badgeStyle}>0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 全量 Mega Menu 展开层 --- */}
      <div onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)}>
        
        {/* 1. ENGAGEMENT */}
        {activeMenu === 'engagement' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Design Your Own</h4>
                <ul style={listStyles}>
                  <li style={{ fontWeight: 'bold' }}>Shop all Engagement Rings</li>
                  <li style={subHeaderStyles}>Start with a Setting</li>
                  <li>Engagement Ring Settings</li><li>Matching Wedding Sets</li>
                  <li style={subHeaderStyles}>Start with a Stone</li>
                  <li>Lab-Grown Diamonds</li><li>Natural Diamonds</li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Featured Styles</h4>
                <ul style={listStyles}><li>Halo</li><li>Vintage</li><li>Solitaire</li><li>Classic</li><li>New Arrivals</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Metal Types</h4>
                <ul style={listStyles}><li>White Gold</li><li>Yellow Gold</li><li>Platinum</li><li>Rose Gold</li></ul>
              </div>
              <div style={{ flex: 1.2, ...cardStyles }}>
                <h4 style={cardTitleStyle}>Helpful Topics</h4>
                <ul style={listStyles}><li>How to Pick a Ring</li><li>Ring Style Quiz</li><li>Real Proposals</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* 2. WEDDING */}
        {activeMenu === 'wedding' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop All Bands</h4>
                <ul style={listStyles}><li>Women&apos;s Bands</li><li>Men&apos;s Bands</li><li>Couples Bands</li><li>Wedding Sets</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop by Style</h4>
                <ul style={listStyles}><li>Diamond</li><li>Sapphire</li><li>Yellow Gold</li><li>Platinum</li><li>More Metals</li></ul>
              </div>
              <div style={{ flex: 1.2, ...cardStyles }}>
                <h4 style={cardTitleStyle}>Wedding Tools</h4>
                <ul style={listStyles}><li>Wedding Band Guide</li><li>Custom Band Builder</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* 3. DIAMONDS */}
        {activeMenu === 'diamonds' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop All Diamonds</h4>
                <ul style={listStyles}><li>Natural Diamonds</li><li>Lab-Grown Diamonds</li><li>Color Diamonds</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Specialty Diamonds</h4>
                <ul style={listStyles}><li>Shane Classic Natural</li><li>Stargazer Lab-Grown</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Diamond Jewelry</h4>
                <ul style={listStyles}><li>Stud Earrings</li><li>Necklaces</li><li>Bracelets</li></ul>
              </div>
              <div style={{ flex: 1.2, ...cardStyles }}>
                <h4 style={cardTitleStyle}>Diamond Education</h4>
                <ul style={listStyles}><li>Diamond Buying Guide</li><li>About Lab-Grown</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. GEMSTONES */}
        {activeMenu === 'gemstones' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop All Gemstones</h4>
                <ul style={listStyles}><li>Sapphires</li><li>Ruby</li><li>Emerald</li><li>Morganite</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop by Style</h4>
                <ul style={listStyles}><li>Rings</li><li>Necklaces</li><li>Bracelets</li><li>Birthstones</li></ul>
              </div>
              <div style={{ flex: 1.2, ...cardStyles }}>
                <h4 style={cardTitleStyle}>Gemstone Guides</h4>
                <ul style={listStyles}><li>Pearl Guide</li><li>Gemstone Guide</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* 5. FINE JEWELRY */}
        {activeMenu === 'fine-jewelry' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Shop by Category</h4>
                <ul style={listStyles}><li>Necklaces</li><li>Rings</li><li>Earrings</li><li>Bracelets</li><li>Men&apos;s</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Popular Styles</h4>
                <ul style={listStyles}><li>Gold Essentials</li><li>Hoop Earrings</li><li>Tennis Bracelets</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Gifts</h4>
                <ul style={listStyles}><li>Anniversary Rings</li><li>Family Jewelry</li><li>Gift Cards</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* 6. PERSONALIZE */}
        {activeMenu === 'personalize' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Pick Your Gem</h4>
                <ul style={listStyles}><li>Single-Stone Pendants</li><li>Multi-Stone Rings</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Engravable Styles</h4>
                <ul style={listStyles}><li>Necklaces</li><li>Rings</li><li>Lockets</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Symbolic Styles</h4>
                <ul style={listStyles}><li>Charms</li><li>Zodiac</li><li>Birthstones</li></ul>
              </div>
            </div>
          </div>
        )}

        {/* 7. SUPPORT */}
        {activeMenu === 'support' && (
          <div style={megaMenuStyles}>
            <div style={containerStyles}>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Help & Services</h4>
                <ul style={listStyles}><li>Contact Us</li><li>Free 60-Day Returns</li><li>Find a Store</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>Education & Tools</h4>
                <ul style={listStyles}><li>FAQs</li><li>Ring Sizing</li><li>Financing Options</li></ul>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={headerStyles}>About Shimmer</h4>
                <ul style={listStyles}><li>About Us</li><li>The Loupe Blog</li><li>Careers</li></ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

// --- 样式定义 ---
const navBarStyle: React.CSSProperties = { position: 'fixed', top: 0, left: 0, width: '100%', height: '70px', backgroundColor: 'rgba(10, 2, 16, 0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backdropFilter: 'blur(10px)', color: '#d4af37' };
const topContainerStyle: React.CSSProperties = { width: '100%', maxWidth: '1400px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px' };
const logoStyle: React.CSSProperties = { flex: 1, fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '4px' };
const menuContainerStyle: React.CSSProperties = { display: 'flex', flex: 3, justifyContent: 'center', gap: '25px' };
const menuItemStyle: React.CSSProperties = { cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '2px', paddingBottom: '5px', transition: 'all 0.3s' };
const iconGroupStyle: React.CSSProperties = { flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' };
const searchBoxStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.4)', paddingBottom: '2px' };
const searchInputStyle: React.CSSProperties = { background: 'transparent', border: 'none', outline: 'none', color: '#d4af37', fontSize: '0.6rem', width: '70px' };
const badgeStyle: React.CSSProperties = { position: 'absolute', top: '-6px', right: '-10px', backgroundColor: '#d4af37', color: '#0a0210', fontSize: '8px', padding: '1px 4px', borderRadius: '50%', fontWeight: 'bold' };
const megaMenuStyles: React.CSSProperties = { position: 'fixed', top: '70px', left: 0, width: '100vw', backgroundColor: '#fff', zIndex: 999, display: 'flex', justifyContent: 'center', padding: '40px 0', color: '#1a0525', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' };
const containerStyles: React.CSSProperties = { display: 'flex', width: '100%', maxWidth: '1200px', gap: '40px' };
const headerStyles: React.CSSProperties = { fontSize: '0.85rem', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '8px', fontWeight: 'bold' };
const subHeaderStyles: React.CSSProperties = { fontWeight: 'bold', color: '#999', marginTop: '10px', fontSize: '0.75rem' };
const listStyles: React.CSSProperties = { listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '0.75rem', cursor: 'pointer' };
const cardStyles: React.CSSProperties = { backgroundColor: '#f9f7f5', padding: '25px', borderRadius: '4px' };
const cardTitleStyle: React.CSSProperties = { fontSize: '0.95rem', marginBottom: '15px', fontFamily: 'serif' };
