'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  // 解决 Next.js 服务端渲染与客户端不一致的报错 (Hydration Error)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 如果还没在浏览器挂载，先返回一个纯净背景，防止报错
  if (!mounted) {
    return <main style={{ minHeight: '100vh', background: '#FFFFFF' }} />;
  }

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: '#FFFFFF', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      paddingTop: '100px',
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <style>{`
        @keyframes fire-shimmer {
          0% { background-position: 150% 50%; }
          100% { background-position: -50% 50%; }
        }
        .shimmer-title {
          font-size: 8.5rem;
          font-style: italic;
          /* 这里去掉引号，直接写字体名，兼容性最好 */
          font-family: Georgia, serif; 
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
        
        /* 增加按钮悬停动画，更有珠宝品牌的高级感 */
        .shop-button {
          padding: 12px 30px;
          background-color: #1a1a1a;
          color: #fff;
          border: none;
          font-size: 0.7rem;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .shop-button:hover {
          background-color: #d4af37;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }
      `}</style>
      
      <div style={{ textAlign: 'center' }}>
        <p style={{ 
          fontSize: '0.8rem', 
          letterSpacing: '4px', 
          color: '#aaa', 
          textTransform: 'uppercase', 
          marginBottom: '10px' 
        }}>
          Handcrafted Excellence
        </p>
        
        <h1 className="shimmer-title">Shimmer</h1>
        
        <h2 style={{ 
          fontSize: '1.05rem', 
          letterSpacing: '12px', 
          color: '#333', 
          marginTop: '10px', 
          fontWeight: '300', 
          textTransform: 'uppercase' 
        }}>
          Jewelry
        </h2>
        
        <div style={{ marginTop: '80px' }}>
          <button className="shop-button">
            SHOP NOW
          </button>
        </div>
      </div>
    </main>
  );
}