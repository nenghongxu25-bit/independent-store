'use client';

import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F6F4 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '80px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
        
        <p style={{ 
          fontSize: '0.9rem', 
          letterSpacing: '3px', 
          color: '#888', 
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          Handcrafted Excellence
        </p>

        {/* --- 核心修复区域 --- */}
        <h1 style={{ 
          fontSize: '7rem',          // 调大一点，气场更强
          // 关键：如果你没有特定字体包，使用 italic 模拟原本的手写感
          fontStyle: 'italic',       
          fontFamily: 'Georgia, serif', // Georgia 这种字体斜体后非常有美感
          color: '#d4af37',          // 换回你原本标志性的金色
          margin: '0',
          fontWeight: '400',
          lineHeight: '0.8',         // 缩短行高，让上下靠得更近
          textTransform: 'none'      // 保持大小写混拼，手写感更好
        }}>
          Shimmer
        </h1>
        
        <h2 style={{ 
          fontSize: '1.2rem', 
          letterSpacing: '8px',      // 增加字间距，显得更简约
          color: '#1a1a1a',          // 下面这个词用深色，形成对比
          marginTop: '20px',         // 增加点距离，别叠在一起
          fontWeight: '300',
          textTransform: 'uppercase'
        }}>
          Jewelry
        </h2>
        {/* --- 修复结束 --- */}

        <p style={{ 
          marginTop: '60px', 
          fontSize: '1.1rem', 
          color: '#555', 
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '60px auto 0',
          fontFamily: 'sans-serif',   // 文案用无衬线体，更现代
          fontWeight: '300'
        }}>
          &quot;Modern diamonds for a new generation. <br />
          Ethically grown, brilliantly cut, and designed to last a lifetime.&quot;
        </p>

        <div style={{ marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{
            padding: '15px 45px',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            SHOP ENGAGEMENT
          </button>
          <button style={{
            padding: '15px 45px',
            backgroundColor: 'transparent',
            color: '#1a1a1a',
            border: '1px solid #1a1a1a',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            EXPLORE DIAMONDS
          </button>
        </div>
      </div>
    </main>
  );
}
