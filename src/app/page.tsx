export default function Landpage() {
  return (
    <main>
      {/* 第一屏：品牌大头贴 (你现在的店名) */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <h1 style={{ color: 'gold', fontSize: '5rem' }}>Shimmer Jewelry</h1>
      </section>

      {/* 第二屏：产品卖点 (比如 CVD 钻石介绍) */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff' }}>
        <div>
          <h2>科技缔造永恒</h2>
          <p>实验室培育钻石，拥有与天然钻石完全一致的物理特性。</p>
        </div>
      </section>

      {/* 第三屏：信任背书 (比如 IGI 证书) */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4' }}>
        <h2>国际权威认证 (IGI/GIA)</h2>
      </section>
    </main>
  );
}//各个板块

export default function Title() {
  const shopname = "Shimmer Jewelry";

  return (
    < div style={
      { 
        display: 'flex', 
                 justifyContent: 'flexstart', 
                 alignItems: 'center',
                 paddingTop: '0px', 
                 flexDirection: 'column',
                 backgroundColor:'#fff'
      }}>
      <h1 style={
      { 
        textAlign: 'center', 
        color: 'gold', 
        fontSize: '6rem',
        margin:'0'
      }}>
        {shopname}
      </h1>
      <p>顶级实验室钻石定制</p>
    </div>
  );
}//标题
