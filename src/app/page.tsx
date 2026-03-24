import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import './globals.css'; 

export default function Page() {
  return (
    <main className="mainContainer">
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* 第一屏：品牌封面 */}
        <PageTemplate pageNum="01">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="shimmerText">Shimmer</h1>
            <p style={{ letterSpacing: '8px', fontSize: '0.8rem', opacity: 0.8, color: '#d4af37', marginTop: '-20px' }}>
              JEWELRY
            </p>
          </div>
        </PageTemplate>

        {/* 第二屏：产品展示 */}
        <PageTemplate pageNum="02">
          <div style={{ textAlign: 'center', maxWidth: '1000px', width: '100%', padding: '0 20px' }}>
            
            {/* 严格等尺寸图片展示区 */}
            <div className="jewelry-grid">
              <div className="jewelry-item">
                <div className="image-container borderGlow">
                  <img src="/pic1.jpg" alt="Diamond {111} Plane" />
                </div>
                <p className="font-serif italic text-[10px] tracking-widest mt-4 uppercase opacity-60">
                  {111} Plane Micro
                </p>
              </div>

              <div className="jewelry-item">
                <div className="image-container borderGlow">
                  <img src="/pic2.jpg" alt="Diamond {100} Plane" />
                </div>
                <p className="font-serif italic text-[10px] tracking-widest mt-4 uppercase opacity-60">
                  {100} Plane Control
                </p>
              </div>

              <div className="jewelry-item">
                <div className="image-container borderGlow">
                  <img src="/pic3.jpg" alt="Growth Process" />
                </div>
                <p className="font-serif italic text-[10px] tracking-widest mt-4 uppercase opacity-60">
                  HPHT Growth
                </p>
              </div>
            </div>

            <h2 style={{ 
              fontFamily: 'var(--font-cormorant)', 
              color: '#d4af37', 
              fontSize: '2.5rem', 
              fontWeight: '300',
              margin: '40px 0 20px'
            }}>
              科技缔造永恒
            </h2>
            <p style={{ 
              color: '#d4af37', 
              opacity: 0.7, 
              lineHeight: '2', 
              fontSize: '1rem',
              letterSpacing: '1px' 
            }}>
              精选顶级实验室培育钻石，每一颗都经过精密的 HPHT 或 CVD 工艺生长，<br/>
              只为呈现超越自然的纯净火彩。
            </p>
          </div>
        </PageTemplate>

      </div>
    </main>
  );
}
