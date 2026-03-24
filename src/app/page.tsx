'use client';

import React from 'react';

export default function Home() {
  // 极致丝滑、摊开的钻石光泽动画
  const diamondFireKeyframes = `
    /* 1. 极致缓慢的流光：范围拉大到 800%，实现“似有若无”的流动 */
    @keyframes diamondMove {
      0% { background-position: 400% 50%; }
      100% { background-position: -400% 50%; }
    }

    /* 2. 更加微弱的呼吸感闪烁 */
    @keyframes diamondSparkle {
      0%, 100% { filter: brightness(1) contrast(1); }
      50% { filter: brightness(1.08) contrast(1.02); }
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

        {/* --- 标题区域：流光摊开，速度极慢 --- */}
        <div style={{
          display: 'inline-block',
          position: 'relative',
          animation: 'diamondSparkle 6s ease-in-out infinite', 
        }}>
          <h1 style={{ 
            fontSize: '8.5rem', 
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            margin: '0',
            fontWeight: '400',
            lineHeight: '0.85',
            textTransform: 'none',
            
            /* 渐变优化：
               1. background-size 设为 800%，让光带极度稀释。
               2. 加入了更多的过渡节点 (#e5c05b, #f0faff)，让色彩不再聚集。
            */
            background: 'linear-gradient(90deg, 
              #d4af37 0%, 
              #d4af37 35%, 
              #e5c05b 45%, 
              #fff 50%, 
              #f0faff 52%, 
              #fff 55%, 
              #fdf2f0 65%, 
              #d4af37 80%, 
              #d4af37 100%)',
            backgroundSize: '800% auto', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            
            /* 25秒循环，极慢的缓慢流淌 */
            animation: 'diamondMove 25s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite', 
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
