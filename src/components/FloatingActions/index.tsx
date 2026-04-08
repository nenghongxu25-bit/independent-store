'use client';

import React from 'react';//引入React库
import WhatsAppButton from './WhatsApp';//引入WhatsApp按钮组件
import TidioChat from './TidoChat';//引入Tidio客服组件
/*import ChatVikas from './ChatVikas';*/

export default function FloatingActions() {
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '30px', 
      right: '30px', 
      zIndex: 9999, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '15px',
      alignItems: 'center'
    }}>
      <WhatsAppButton />
      <TidioChat />
    </div>
  );
}//悬浮组件设置