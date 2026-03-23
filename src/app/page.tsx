// src/app/page.tsx
import React from 'react';
// 关键：这行代码告诉程序去 components 文件夹里找 PageTemplate
import PageTemplate from '@/components/PageTemplate';

export default function Page() {
  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      // 背景：从“几乎黑”到“深暗紫”的渐变
      background: 'linear-gradient(135deg, #0a0210 0%, #1a0525 100%)',
      backgroundAttachment: 'fixed',
    }}>
      {/* 之前的 <style> 里的 .shimmer-text 保持不变 */}
      
      <PageTemplate pageNum="01">
        <h1 className="shimmer-text">Shimmer</h1>
      </PageTemplate>

      <PageTemplate pageNum="02">
        <h2 style={{ color: '#d4af37', fontSize: '2.5rem', fontWeight: '300' }}>
          科技缔造永恒
        </h2>
      </PageTemplate>
    </main>
  );
}
