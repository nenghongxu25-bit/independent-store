'use client';

import React from 'react';

export default function Home() {
  const cssText = `
    @keyframes diamond-move {
      0% { background-position: 150% 50%; }
      100% { background-position: -150% 50%; }
    }
    .shimmer-text {
      font-size: 8.5rem;
      font-style: italic;
      font-family: 'Georgia', serif;
      margin: 0;
      line-height: 0.85;
      background: linear-gradient(90deg, #d4af37 0%, #d4af37 45%, #b19343 48%, rgba(224, 247, 250, 0.7) 50%, rgba(243, 229, 245, 0.7) 52%, #b19343 55%, #d4af37 60%, #d4af37 100%);
      background-size: 300% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: diamond-move 60s linear infinite;
    }
  `;

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
      <style>{cssText}</style>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#aaa', textTransform: 'uppercase', marginBottom: '10px' }}>
          Handcrafted Excellence
        </p>
        <h1 className="shimmer-text">Shimmer</h1>
        <h2 style={{ fontSize: '1.05rem', letterSpacing: '12px', color: '#333', marginTop: '10px', fontWeight: '300', textTransform: 'uppercase' }}>
          Jewelry
        </h2>
        <div style={{ marginTop: '80px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ padding: '12px 30px', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', fontSize: '0.7rem', letterSpacing: '2px', cursor: 'pointer' }}>
            SHOP NOW
          </button>
        </div>
      </div>
    </main>
  );
}
