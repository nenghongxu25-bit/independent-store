// 1. 定义万能模板组件 (像 C++ 的 Template Class)
function PageTemplate({ 
  children, 
  outerBg = '#f7f7f7', // 边框外的底色
  innerBg = '#ffffff', // 边框内的颜色
  pageNum = "01"       // 自动页码
}) {
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: outerBg, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      scrollSnapAlign: 'start', // 磁吸关键：对齐起点
      padding: '40px'           // 边框的厚度，调大更有高级感
    }}>
      {/* 内部白色“卡片”容器 */}
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid #e0e0e0',
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',    // 给页眉页脚提供定位基准
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)' 
      }}>
        
        {/* 页眉：小字 Logo */}
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '4px', color: '#999', fontWeight: '300' 
        }}>
          SHIMMER JEWELRY
        </div>

        {/* 核心内容区：你的 Title 或产品介绍 */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>

        {/* 页脚：页码与说明 */}
        <div style={{ 
          position: 'absolute', bottom: '30px', left: '40px', right: '40px',
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.7rem', color: '#bbb', fontFamily: 'serif'
        }}>
          <span>LAB-GROWN DIAMOND COLLECTOR</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>

      </div>
    </section>
  );
}

// 2. 主页面 (Main 函数)
export default function Landpage() {
  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      scrollSnapType: 'y mandatory', // 开启 PPT 磁吸模式
      WebkitOverflowScrolling: 'touch' // 优化手机滑动感
    }}>
      
      {/* 第一屏：店招 */}
      <PageTemplate pageNum="01" outerBg="#fff">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'gold', fontSize: '5rem', margin: '0', fontWeight: '200' }}>
            Shimmer
          </h1>
          <p style={{ letterSpacing: '8px', color: '#666', marginTop: '10px' }}>JEWELRY</p>
        </div>
      </PageTemplate>

      {/* 第二屏：产品卖点 (深色调) */}
      <PageTemplate pageNum="02" outerBg="#111" innerBg="#000">
        <div style={{ color: '#fff', textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>科技缔造永恒</h2>
          <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
            我们采用最先进的 CVD 工艺，在实验室中还原钻石生长的极致环境，
            为您呈现与天然钻石物理特性完全一致的顶级珠宝。
          </p>
        </div>
      </PageTemplate>

      {/* 第三屏：认证说明 */}
      <PageTemplate pageNum="03" outerBg="#f0f0f0">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: '#333' }}>IGI & GIA 全球认证</h2>
          <div style={{ marginTop: '30px', border: '1px solid #333', padding: '10px 20px', display: 'inline-block' }}>
            VIEW CERTIFICATE
          </div>
        </div>
      </PageTemplate>

    </main>
  );
}
