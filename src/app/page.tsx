'use client';

import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      // 这里的颜色对标 Shane Co. 的极简主义，使用淡淡的米灰色渐变
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9F6F4 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '80px' // 为导航栏留出空间
    }}>
      {/* 核心展示区 */}
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
        
        {/* 品牌副标题：北美客户看重情感链接 */}
        <p style={{ 
          fontSize: '0.9rem', 
          letterSpacing: '3px', 
          color: '#888', 
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          Handcrafted Excellence
        </p>

        {/* 主 Logo 区域 */}
        <h1 style={{ 
          fontSize: '5rem', 
          fontFamily: 'serif', // 建议确保安装了衬线体
          color: '#1a1a1a', 
          margin: '0',
          fontWeight: '400',
          lineHeight: '1'
        }}>
          Shimmer
        </h1>
        
        <h2 style={{ 
          fontSize: '1.2rem', 
          letterSpacing: '6px', 
          color: '#d4af37', // 你的品牌金
          marginTop: '10px',
          fontWeight: '300',
          textTransform: 'uppercase'
        }}>
          Jewelry
        </h2>

        {/* 增加一段富有感染力的文案（Slogan） */}
        <p style={{ 
          marginTop: '40px', 
          fontSize: '1.1rem', 
          color: '#555', 
          lineHeight: '1.8',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic'
        }}>
          &quot;Modern diamonds for a new generation. <br />
          Ethically grown, brilliantly cut, and designed to last a lifetime.&quot;
        </p>

        {/* 操作按钮 (CTA) */}
        <div style={{ marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{
            padding: '15px 40px',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}>
            SHOP ENGAGEMENT
          </button>
          <button style={{
            padding: '15px 40px',
            backgroundColor: 'transparent',
            color: '#1a1a1a',
            border: '1px solid #1a1a1a',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}>
            EXPLORE DIAMONDS
          </button>
        </div>

      </div>

      {/* 底部装饰线 */}
      <div style={{ 
        marginTop: '100px', 
        width: '1px', 
        height: '60px', 
        backgroundColor: '#d4af37' 
      }}></div>
    </main>
  );
}
