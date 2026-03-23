// 1. 先定义“零件”：Title 组件
// 注意：这里不需要写 export default，因为它只是给下面的 Landpage 调用的“子函数”
function Title() {
  const shopname = "Shimmer Jewelry"; 
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'gold', fontSize: '6rem', margin: '0' }}>
        {shopname}
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>顶级实验室钻石定制</p>
    </div>
  );
}

// 2. 再定义“主程序”：Landpage 组件
// 这才是 Vercel 真正运行的入口（main 函数）
export default function Landpage() {
  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      scrollSnapType: 'y mandatory', // 开启垂直 PPT 磁吸
      backgroundColor: '#fff' 
    }}>
      
      {/* 第一屏：画布设置 */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        scrollSnapAlign: 'start' 
      }}>
        <Title /> {/* <--- 在这里“调用”上面定义的 Title */}
      </section>

      {/* 第二屏：画布设置 */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000', // 换个颜色区分
        color: '#fff',
        scrollSnapAlign: 'start' 
      }}>
        <h2 style={{ fontSize: '3rem' }}>科技缔造永恒</h2>
        <p>每一颗实验室钻石都拥有 IGI 国际证书</p>
      </section>

    </main>
  );
}
