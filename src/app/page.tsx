export default function Page() {
  // 定义统一的紫金配色参数，方便复用
  const royalPurpleGoldProps = {
    outerBg: "#2d0a42", // 深紫（边框外）
    innerBg: "#fff0ff",  // 浅紫（卡片内）
  };

  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      backgroundColor: '#2d0a42' // 主背景也设为深紫
    }}>
      
      {/* 第一页：调用紫金参数 */}
      <PageTemplate pageNum="01" {...royalPurpleGoldProps}>
        <div style={{ textAlign: 'center' }}>
          {/* 这里把 Shimmer 改成更耀眼的金色 */}
          <h1 style={{ color: '#d4af37', fontSize: '6rem', margin: '0', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Shimmer
          </h1>
          <p style={{ letterSpacing: '8px', color: '#555' }}>JEWELRY</p>
        </div>
      </PageTemplate>

      {/* 第二页：同样调用紫金参数 */}
      <PageTemplate pageNum="02" {...royalPurpleGoldProps}>
        <div style={{ textAlign: 'center', maxWidth: '600px', color: '#333' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>科技缔造永恒</h2>
          <p style={{ lineHeight: '1.8' }}>
            我们采用最先进的 CVD 工艺，在实验室中还原钻石生长的极致环境，
            为您呈现与天然钻石物理特性完全一致的顶级珠宝。
          </p>
        </div>
      </PageTemplate>

      {/* 第三页同理... */}
    </main>
  );
}
