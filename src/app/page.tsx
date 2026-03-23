// src/app/page.tsx
export default function Page() {
  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      // 皇家紫金渐变：深紫到暗紫的斜向过渡
      background: 'linear-gradient(135deg, #1a0525 0%, #3d0e5a 50%, #1a0525 100%)',
      backgroundAttachment: 'fixed', // 背景固定，不随滚动条走
    }}>
      <style>{`
        /* 之前的 shimmer 动画继续保留 */
        .shimmer-text { ... } 
      `}</style>

      <PageTemplate pageNum="01">
        <h1 className="shimmer-text">Shimmer</h1>
      </PageTemplate>

      <PageTemplate pageNum="02">
        <h2 style={{ color: '#d4af37', fontSize: '2.5rem' }}>科技缔造永恒</h2>
      </PageTemplate>
    </main>
  );
}
