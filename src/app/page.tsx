'use client';

import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
      <style>{`
        @keyframes fast-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer-title {
          font-size: 8.5rem;
          font-style: italic;
          font-family: 'Georgia', serif;
          margin: 0;
          line-height: 0.85;
          /* 核心改动：缩短比例到 200%，并放两个流光点，让光接连不断 */
          background: linear-gradient(90deg, 
            #d4af37 0%, 
            #e5c05b 20%, 
            rgba(255,255,255,0.4) 25%, 
            #d4af37 30%, 
            #d4af37 70%, 
            rgba(255,255,255,0.4) 75%, 
            #e5c05b 80%, 
            #d4af37 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* 速度调到 12s 匀速，配合 200% 的尺寸，光会走得非常顺滑且频繁 */
          animation: fast-shimmer 12s linear infinite;
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
