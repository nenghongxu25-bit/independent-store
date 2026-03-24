'use client';

import React from 'react';

export default function Home() {
  const diamondFireKeyframes = `
    /* 1. 改为匀速 linear 动画，确保速度始终一致 */
    @keyframes diamondMove {
      0% { background-position: 200% 50%; }
      100% { background-position: -200% 50%; }
    }

    /* 2. 闪烁动画保持轻微 */
    @keyframes diamondSparkle {
      0%, 100% { filter: brightness(1) contrast(1); }
      50% { filter: brightness(1.06) contrast(1.02); }
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

        {/* 标题区域 */}
        <div style={{
          display: 'inline-block',
          position: 'relative',
          animation: 'diamondSparkle 5s ease-in-out infinite', 
        }}>
          <h1 style={{ 
            fontSize: '8.5rem', 
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            margin: '0',
            fontWeight: '400',
            lineHeight: '0.85',
            textTransform: 'none',
            
            /* 调整 backgroundSize 为 600%，既保证了“摊开”感，
               又缩短了光带在外部“空跑”的时间。
            */
            background: 'linear-gradient(90deg, 
              #d4af37 0%, 
              #d4af37 30%, 
              #e5c05b 40%, 
              #fff 50%, 
              #f0faff 52%, 
              #fff 55%, 
              #fdf2f0 65%, 
              #d4af37 75%, 
              #d4af37 100%)',
            backgroundSize: '600% auto', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            
            /* 使用 linear (匀速)，彻底解决一会儿快一会儿慢的问题。
               18s 是平衡了“静谧感”和“可见性”的匀速频率。
            */
            animation: 'diamondMove 18s linear infinite', 
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
            fontWeight: '500'
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
            fontWeight: '500'
          }}>
            EXPLORE DIAMONDS
          </button>
        </div>
      </div>
    </main>
  );
}
