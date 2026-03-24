'use client';

import React from 'react';

export default function Home() {
  // 优化后的 CSS 动画
  const diamondFireKeyframes = `
    /* 1. 窄比例流光动画：让光带更聚焦 */
    @keyframes diamondMove {
      0% { background-position: 150% 0; }
      100% { background-position: -150% 0; }
    }

    /* 2. 模拟火彩闪烁 */
    @keyframes diamondSparkle {
      0%, 100% { opacity: 1; filter: brightness(1); }
      50% { opacity: 0.98; filter: brightness(1.15); }
    }
  `;

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F6F4 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      paddingTop: '60px'
    }}>
      <style>{diamondFireKeyframes}</style>

      <div style={{ 
        textAlign: 'center', 
        maxWidth: '800px', 
        padding: '0 20px',
        marginTop: '70px' 
      }}>
        
        <p style={{ 
          fontSize: '0.8rem', 
          letterSpacing: '4px', 
          color: '#aaa', 
          textTransform: 'uppercase',
          marginBottom: '10px'
        }}>
          Handcrafted Excellence
        </p>

        {/* --- 标题区域：流光范围已收窄 --- */}
        <div style={{
          display: 'inline-block',
          position: 'relative',
          animation: 'diamondSparkle 3s ease-in-out infinite', 
        }}>
          <h1 style={{ 
            fontSize: '8.5rem', 
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            margin: '0',
            fontWeight: '400',
            lineHeight: '0.85',
            textTransform: 'none',
            
            /* 核心修改：
               将彩虹色集中在 48%-52% 之间，其余部分留给主色调。
               这样光束经过时会非常细碎、闪耀，而不是大面积变色。
            */
            background: 'linear-gradient(90deg, #d4af37 0%, #d4af37 45%, #fff 48%, #e0f7fa 50%, #fbe9e7 52%, #fff 55%, #d4af37 60%, #d4af37 100%)',
            backgroundSize: '300% auto', // 增大背景尺寸，使光束更窄
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            
            animation: 'diamondMove 10s linear infinite', 
          }}>
            Shimmer
          </h1>
        </div>
        
        <h2 style={{ 
          fontSize: '1.05rem', 
          letterSpacing: '12px', 
          color: '#333',
          marginTop: '5px',
          fontWeight: '300',
          textTransform: 'uppercase'
        }}>
          Jewelry
        </h2>
        {/* --- 结束 --- */}

        <div style={{ marginTop: '90px' }}>
          <p style={{ 
            fontSize: '1rem', 
            color: '#777', 
            lineHeight: '2.2',
            maxWidth: '500px',
            margin: '0 auto',
            fontFamily: 'sans-serif',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            &quot;Modern diamonds for a new generation. <br />
            Ethically grown, brilliantly cut, and designed to last a lifetime.&quot;
          </p>
        </div>

        <div style={{ marginTop: '70px', display: 'flex', gap: '30px', justifyContent: 'center' }}>
          <button style={{
            padding: '12px 40px',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            fontSize: '0.8rem',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'background-color 0.3s'
          }}>
            SHOP ENGAGEMENT
          </button>
          <button style={{
            padding: '12px 40px',
            backgroundColor: 'transparent',
            color: '#1a1a1a',
            border: '1px solid #1a1a1a',
            fontSize: '0.8rem',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.3s'
          }}>
            EXPLORE DIAMONDS
          </button>
        </div>
      </div>
    </main>
  );
}
