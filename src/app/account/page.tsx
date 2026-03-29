'use client';

import React, { useState } from 'react';
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [active, setActive] = useState('dashboard');

  // 1. 加载状态：防止闪烁
  if (!isLoaded) return <div style={{ color: '#fff', padding: '100px', textAlign: 'center' }}>LOADING...</div>;

  // 2. 越权拦截：没登录想直接进 /account 的，通通打回首页
  if (!isSignedIn) {
    if (typeof window !== 'undefined') router.push('/');
    return null;
  }

  const menuItems = [
    { id: 'dashboard', n: 'DASHBOARD' },
    { id: 'orders', n: 'MY ORDERS' },
    { id: 'settings', n: 'SETTINGS' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#333' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '80px' }}>
        
        {/* 左侧导航 */}
        <aside style={{ width: '200px', flexShrink: 0 }}>
          <h2 style={{ color: '#aa8928', letterSpacing: '4px', fontSize: '18px', marginBottom: '40px', fontFamily: 'var(--font-cormorant)' }}>
            MY ACCOUNT
          </h2>
          <nav>
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setActive(item.id)} 
                style={{ 
                  padding: '15px 0', cursor: 'pointer', fontSize: '12px', letterSpacing: '2px',
                  color: active === item.id ? '#aa8928' : '#333',
                  borderBottom: '1px solid #f2f2f2'
                }}
              >
                {item.n}
              </div>
            ))}
            <div 
              onClick={() => signOut(() => router.push("/"))} 
              style={{ marginTop: '40px', color: '#ff4d4f', fontSize: '12px', cursor: 'pointer', fontWeight: '600' }}
            >
              SIGN OUT
            </div>
          </nav>
        </aside>

        {/* 右侧内容 */}
        <main style={{ flexGrow: 1 }}>
          <h1 style={{ fontSize: '14px', letterSpacing: '4px', marginBottom: '30px' }}>{active.toUpperCase()}</h1>
          
          {active === 'dashboard' && (
            <div>
              <p style={{ fontSize: '20px', fontFamily: 'var(--font-cormorant)' }}>Welcome back, {user?.firstName}!</p>
              <p style={{ color: '#888', marginTop: '10px' }}>Your jewelry collection awaits.</p>
            </div>
          )}
          
          {active === 'settings' && (
            <div style={{ lineHeight: '2' }}>
              <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
              <p><strong>Status:</strong> Premium Member</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}