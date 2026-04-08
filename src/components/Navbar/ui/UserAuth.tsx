'use client';

import { SignInButton, UserButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { User } from "lucide-react";

export default function UserAuth() {
  const { user } = useUser();

  const openAccountPage = () => {
    window.open('/account', '_blank');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <SignedOut>
        <SignInButton mode="modal">
          <button style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer',
            display: 'flex', 
            alignItems: 'center', 
            color: '#c0c0c0',
            padding: '6px 10px',
            borderRadius: '4px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#d4af37'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#c0c0c0'; }}>
            <User size={22} strokeWidth={2} />
            <span style={{ fontSize: '13px', marginLeft: '6px', letterSpacing: '1px', fontWeight: '600' }}>LOGIN</span>
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* 自定义账户按钮，点击打开新窗口 */}
          <button
            onClick={openAccountPage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: '20px',
              transition: 'all 0.2s',
              color: '#c0c0c0'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(192, 192, 192, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <User size={20} strokeWidth={2} />
            <span style={{ fontSize: '12px', fontWeight: '500' }}>
              {user?.firstName || 'Account'}
            </span>
          </button>
          
          {/* 登出按钮单独保留 */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}