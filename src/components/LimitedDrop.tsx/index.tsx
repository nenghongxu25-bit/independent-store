const LimitedDrop = ({ story, title, image }) => {
  return (
    <section style={{ 
      width: '100%',
      padding: '100px 5%', 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '60px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }}>
      
      {/* 左侧：视觉区域（自适应高度） */}
      <div style={{ 
        flex: '1 1 500px', // 👈 至少500px宽，多了平分，少了换行
        position: 'relative'
      }}>
        <img src={image} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* 右侧：文案区域（弹性增长） */}
      <div style={{ 
        flex: '1 1 400px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
      }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3rem' }}>{title}</h2>
        
        {/* 这里的 p 标签不管是一行还是十行，容器都会优雅地撑开 */}
        <p style={{ lineHeight: '1.8', margin: '20px 0', color: '#666' }}>
          {story}
        </p>

        <button className="shop-button" style={{ alignSelf: 'flex-start' }}>
          DISCOVER
        </button>
      </div>

    </section>
  );
};