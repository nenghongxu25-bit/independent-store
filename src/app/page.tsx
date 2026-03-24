'use client';

import React from 'react';

export default function Home() {
  const css = `
    @keyframes move {
      /* 缩短路程：让光束刚离开右侧就立刻从左侧准备切入 */
      0% { background-position: 150% 50%; }
      100% { background-position: -150% 50%; }
    }
    @keyframes sparkle {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.05); }
    }
  `;

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
      <style>{css}</style>

      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#aaa', textTransform: 'uppercase', marginBottom: '10px' }}>
          Handcrafted Excellence
        </p>

        <div style={{ display: 'inline-block', animation: 'sparkle 5s ease-in-out infinite' }}>
          <h1 style={{ 
            fontSize: '8.5rem', 
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            margin: '0',
            fontWeight: '400',
            lineHeight: '0.85',
            /* 增加金色和白色的过渡长度，减少纯金色的面积 */
            background: 'linear-gradient(90deg, #d4af37 0%, #e5c05b 30%, #fff 50%, #f0faff 52%, #fff 70%, #d4af37 100%)',
            backgroundSize: '600% auto', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            /* 40s 匀速：这是极致缓慢的流淌，几乎像静止但又在动 */
            animation: 'move 40s linear infinite'
          }}>
            Shimmer
          </h1>
        </div>
        
        <h2 style={{ fontSize: '1.05rem', letterSpacing: '12px', color: '#333', marginTop: '10px', fontWeight: '300', textTransform: 'uppercase' }}>
          Jewelry
        </h2>

        <div style={{ marginTop: '80px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ padding: '12px 30px', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', fontSize: '0.7rem', letterSpacing: '2px', cursor: 'pointer' }}>
            SHOP ENGAGEMENT
          </button>
          <button style={{ padding: '12px 30px', backgroundColor: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', fontSize: '0.7rem', letterSpacing: '2px', cursor: 'pointer' }}>
            EXPLORE DIAMONDS
          </button>
        </div>
      </div>
    </main>
  );
}
