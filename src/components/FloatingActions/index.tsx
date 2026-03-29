'use client';

import React from 'react';
import WhatsAppButton from './WhatsApp';
import ChatVikas from './ChatVikas';

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
      <ChatVikas />
    </div>
  );
}