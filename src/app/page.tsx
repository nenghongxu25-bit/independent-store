'use client';

import React from 'react';

export default function Home() {
  const css = `
    @keyframes move {
      /* 精准控制路程：光束刚好在文字内部匀速穿过 */
      0% { background-position: 150% 50%; }
      100% { background-position: -150% 50%; }
    }
    @keyframes sparkle {
      /* 极其微弱的呼吸感 */
      0%, 100% { filter: brightness(1) contrast(1); }
      50% { filter: brightness(1.04) contrast(1.01); }
    }
  `;

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' }}>
      <style>{css}</style>

      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#aaa', textTransform: 'uppercase', marginBottom: '10px' }}>
          Handcrafted Excellence
        </p>

        {/* 标题区域 */}
        <div style={{
          display: 'inline-block',
          position: 'relative',
          animation: 'sparkle 6s ease-in-out infinite', 
        }}>
          <h1 style={{ 
            fontSize: '8.5rem', 
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            margin: '0',
            fontWeight: '400',
            lineHeight: '0.85',
            textTransform: 'none',
            
            /* 渐变优化（彻底不白、不聚集）：
               1. 底色使用稳固的金色 (#d4af37, #b19343) 占绝对主导。
               2. 光束核心设为半透明的钻蓝 (#e0f7fa) 和浅紫 (#f3e5f5)，仅占 3%。
            */
            background: 'linear-gradient(90deg, 
              #d4af37 0%, 
              #d4af37 40%, 
              #b19343 45%, 
              rgba(224, 247, 250, 0.6) 48.5%, 
              rgba(243, 229, 245, 0.6) 51.5%, 
              #b19343 55%, 
              #d4af37 60%, 
              #d4af37 100%)',
            /* 缩小背景比例从 600% 到 300%，消除“摊开”感，让光束变细 */
            backgroundSize: '300% auto', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            
            /* 40秒匀速：极致缓慢的细丝流淌 */
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
          <button style={{ padding: '12px 30px', backgroundColor: 'transparent', color: '#1a1a1a', border: '1px solid #1a1a1a', fontSize: '0.7rem',
