'use client';

import React from 'react';

export default function Home() {
  // 定义流光动画的 CSS
  const shimmerKeyframes = `
    @keyframes slowShimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F6F4 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', // 改为从顶部开始排列
      paddingTop: '60px' // 调整整体顶距
    }}>
      <style>{shimmerKeyframes}</style>

      <div style={{ 
        textAlign: 'center', 
        maxWidth: '800px', 
        padding: '0 20px',
        marginTop: '80px' // 这里的间距决定了标题距离导航栏的高度
      }}>
        
        <p style={{ 
          fontSize: '0.8rem', 
          letterSpacing: '4px', 
          color: '#aaa', 
          textTransform: 'uppercase',
          marginBottom: '15px'
        }}>
          Handcrafted Excellence
        </p>

        {/* --- 核心流光标题区域 --- */}
        <h1 style={{ 
          fontSize: '8rem',
          fontStyle: 'italic',
          fontFamily: 'Georgia, serif',
          margin: '0',
          fontWeight: '400',
          lineHeight: '0.9',
          textTransform: 'none',
          
          // 流光效果核心代码
          background: 'linear-gradient(90deg, #d4af37 0%, #fff 50%, #d4af37 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'slowShimmer 8s linear infinite', // 8秒一轮，非常缓慢
        }}>
          Shimmer
        </h1>
        
        <h2 style={{ 
          fontSize: '1.1rem', 
          letterSpacing: '10px',
          color: '#333',
          marginTop: '10px',
          fontWeight: '300',
          textTransform: 'uppercase'
        }}>
          Jewelry
        </h2>
        {/* --- 结束 --- */}

        <div style={{ marginTop: '80px' }}>
          <p style={{ 
            fontSize: '1.05rem', 
            color: '#666', 
            lineHeight: '2',
            maxWidth: '550px',
            margin: '0 auto',
            fontFamily: 'sans-serif',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            &quot;Modern diamonds for a new generation. <br />
            Ethically grown, brilliantly cut, and designed to last a lifetime.&quot;
          </p>
        </div>

        <div style={{ marginTop: '60px', display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <button style={{
            padding: '12px 35px',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            fontSize: '0.8rem',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            SHOP ENGAGEMENT
          </button>
          <button style={{
            padding: '12px 35px',
            backgroundColor: 'transparent',
            color: '#1a1a1a',
            border: '1px solid #1a1a1a',
            fontSize: '0.8rem',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            EXPLORE DIAMONDS
          </button>
        </div>
      </div>
    </main>
  );
}
