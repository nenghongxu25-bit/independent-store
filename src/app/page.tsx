import React from 'react';
import styles from './page.module.css'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F9F6F4] flex flex-col items-center pt-[60px]">
      
      <div className="text-center max-w-[800px] px-5 mt-[70px]">
        {/* 副标题 */}
        <p className="text-[0.8rem] tracking-[4px] text-[#aaa] uppercase mb-[10px]">
          Handcrafted Excellence
        </p>

        {/* 核心流光标题 */}
        <div className="inline-block relative">
          <h1 className={styles.shimmerTitle}>Shimmer</h1>
        </div>
        
        {/* 品牌后缀 */}
        <h2 className="text-[1.05rem] tracking-[12px] text-[#333] mt-[5px] font-light uppercase">
          Jewelry
        </h2>

        {/* 品牌理念文案 */}
        <div className="mt-[90px]">
          <p className="text-[1rem] text-[#777] leading-[2.2] max-w-[500px] mx-auto font-light tracking-[0.5px]">
            &quot;Modern diamonds for a new generation. <br />
            Ethically grown, brilliantly cut, and designed to last a lifetime.&quot;
          </p>
        </div>

        {/* 交互按钮 */}
        <div className="mt-[70px] flex gap-[30px] justify-center">
          <button className="px-[40px] py-[12px] bg-[#1a1a1a] text-white text-[0.8rem] tracking-[2px] font-medium hover:bg-[#333] transition-colors">
            SHOP ENGAGEMENT
          </button>
          <button className="px-[40px] py-[12px] bg-transparent border border-[#1a1a1a] text-[#1a1a1a] text-[0.8rem] tracking-[2px] font-medium hover:bg-[#f0f0f0] transition-all">
            EXPLORE DIAMONDS
          </button>
        </div>
      </div>

    </main>
  );
}
