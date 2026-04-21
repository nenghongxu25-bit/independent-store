'use client';

import { User } from 'lucide-react';
// Clerk 暂时注释，降级为简单登录按钮
// import { SignInButton, UserButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function UserAuth() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          color: '#000000ff',
          padding: '6px 10px',
          borderRadius: '4px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#d4af37'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#000000ff'; }}
        onClick={() => alert('Clerk 未配置，登录功能暂不可用')}
      >
        <User size={22} strokeWidth={2} />
        <span style={{ fontSize: '13px', marginLeft: '6px', letterSpacing: '1px', fontWeight: '600' }}>LOGIN</span>
      </button>
    </div>
  );
}
