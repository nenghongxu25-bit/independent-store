'use client';

import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
      <style>{`
        @keyframes fire-shimmer {
          /* 精简位移，确保循环无缝且无漫长等待 */
          0% { background-position: 150% 50%; }
          100% { background-position: -50% 50%; }
        }
        .shimmer-title {
          font-size: 8.5rem;
          font-style: italic;
          font-family: 'Georgia', serif;
          margin: 0;
          line-height: 0.85;
          /* 核心：金色基底 + 极其紧凑的红、白、蓝三色火彩带 */
          background: linear-gradient(90deg, 
            #d4af37 0%, 
            #d4af37 45%, 
            rgba(255, 100, 100, 0.4) 47%, 
            rgba(255, 255, 255, 0.8) 50%, 
            rgba(100, 200, 255, 0.5) 53%, 
            #d4af37 55%, 
            #d4af37 100%
          );
          background-size: 150% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* 35秒匀速：缓慢、连贯、带火彩 */
          animation: fire-shimmer 35s linear infinite;
        }
      `}</style>
      
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#aaa', textTransform: 'uppercase', marginBottom: '10px' }}>
          Handcrafted Excellence
        </p>
        <h1 className="shimmer-title">Shimmer</h1>
        <h2 style={{ fontSize: '1.05rem', letterSpacing: '12px', color: '#333', marginTop: '10px', fontWeight: '300', textTransform: 'uppercase' }}>
          Jewelry
        </h2>
        <div style={{ marginTop: '80px' }}>
          <button style={{ padding: '12px 30px', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', fontSize: '0.7rem', letterSpacing: '2px', cursor: 'pointer' }}>
            SHOP NOW
          </button>
        </div>
      </div>
    </main>
  );
}
