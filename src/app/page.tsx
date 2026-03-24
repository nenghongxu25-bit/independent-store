'use client';

import React from 'react';

export default function Home() {
  // 更加丝滑的钻石光泽动画
  const diamondFireKeyframes = `
    /* 1. 丝滑流光：使用更大的位移范围配合 ease-in-out */
    @keyframes diamondMove {
      0% { background-position: 250% 50%; }
      100% { background-position: -150% 50%; }
    }

    /* 2. 呼吸式闪烁：让亮度变化更柔和 */
    @keyframes diamondSparkle {
      0%, 100% { filter: brightness(1) contrast(1); }
      50% { filter: brightness(1.1) contrast(1.05); }
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

        {/* --- 标题区域 --- */}
        <div style={{
          display: 'inline-block',
          position: 'relative',
          /* 使用 4秒一轮的呼吸感闪烁 */
          animation: 'diamondSparkle 4s ease-in-out infinite', 
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
               1. 极大幅度拉宽中间的白色和彩虹色过渡区域。
               2. 使用重复色值来确保光束边缘完全“隐身”。
            */
            background: 'linear-gradient(90deg, #d4af37 0%, #d4af37 20%, #e5c05b 35%, #fff 45%, #f0faff 50%, #fff 55%, #fdf2f0 65%, #d4af37 80%, #d4af37 100%)',
            backgroundSize: '400% auto', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            
            /* 关键修改：
               - 时间延长至 12s，让动作慢下来。
               - 使用 cubic-bezier 替代 linear，实现“蓄势待发-加速流过-缓缓消失”的效果。
            */
            animation: 'diamondMove 12s cubic-bezier(0.4, 0, 0.2, 1) infinite', 
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
