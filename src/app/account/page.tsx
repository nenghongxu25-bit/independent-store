'use client';

export default function AccountPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ color: '#aa8928', letterSpacing: '4px', fontSize: '18px', fontFamily: 'var(--font-cormorant)' }}>
          MY ACCOUNT
        </h2>
        <p style={{ color: '#888', marginTop: '20px', fontSize: '14px' }}>
          Clerk 未配置，登录功能暂不可用。
        </p>
      </div>
    </div>
  );
}
