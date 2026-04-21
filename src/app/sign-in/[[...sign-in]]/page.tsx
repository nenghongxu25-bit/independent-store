import Link from 'next/link';

export default function SignInPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', marginBottom: '20px', letterSpacing: '4px' }}>SIGN IN</h1>
      <p style={{ color: '#888', marginBottom: '30px' }}>Clerk 未配置，登录功能暂不可用。</p>
      <Link
        href="/"
        style={{ color: '#d4af37', border: '1px solid #d4af37', padding: '10px 30px', borderRadius: '30px', textDecoration: 'none', letterSpacing: '2px', fontSize: '12px' }}
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
