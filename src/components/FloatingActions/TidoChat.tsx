// src/components/FloatingActions/TidoChat.tsx
'use client'; // 记得加这一行，因为脚本是运行在客户端的

import Script from 'next/script';

export default function TidioChat() {
  return (
    <Script 
      src="//code.tidio.co/a5tnqi7a68fyigr5twhqh6kmgco1dklo.js" 
      strategy="afterInteractive" 
    />//code
  );
}