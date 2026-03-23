import React, { ReactNode } from 'react'; // 1. 必须引入 ReactNode 类型

// 2. 定义参数的“结构体” (Interface)
interface PageTemplateProps {
  children: ReactNode;      // 告诉 TS：children 是 React 的节点内容
  outerBg?: string;         // ? 代表可选参数
  innerBg?: string;
  pageNum?: string;
}

// 3. 在函数定义时引用这个类型
function PageTemplate({ 
  children, 
  outerBg = '#f7f7f7', 
  innerBg = '#ffffff', 
  pageNum = "01" 
}: PageTemplateProps) { // <--- 关键点：这里指定类型
  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: outerBg, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      scrollSnapAlign: 'start',
      padding: '40px'
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: innerBg,
        border: '1px solid #e0e0e0',
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)' 
      }}>
        
        <div style={{ 
          position: 'absolute', top: '30px', width: '100%', 
          textAlign: 'center', fontSize: '0.75rem', 
          letterSpacing: '4px', color: '#999', fontWeight: '300' 
        }}>
          SHIMMER JEWELRY
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>

        <div style={{ 
          position: 'absolute', bottom: '30px', left: '40px', right: '40px',
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.7rem', color: '#bbb'
        }}>
          <span>LAB-GROWN DIAMOND COLLECTOR</span>
          <span style={{ fontWeight: 'bold' }}>PAGE / {pageNum}</span>
        </div>

      </div>
    </section>
  );
}

// 下面的 Landpage 部分保持不变...
