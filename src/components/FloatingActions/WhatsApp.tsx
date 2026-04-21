'use client';

import React from 'react';
import { Phone } from 'lucide-react'; // 记得安装 lucide-react

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7354946908";
  const message = "Hi Shimmer, I'm interested in your jewelry collection.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        width: '50px', height: '50px', backgroundColor: '#25D366', 
        borderRadius: '50%', display: 'flex', alignItems: 'center', 
        justifyContent: 'center', cursor: 'pointer', color: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'transform 0.2s'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Phone size={24} fill="currentColor" />
    </div>
  );
}