'use client';

import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { User } from "lucide-react"; // 使用 lucide 图标保持风格统一

export default function UserAuth() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* 情况 A：用户未登录，显示登录图标 */}
      <SignedOut>
        <SignInButton mode="modal">
          <button style={{ 
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', color: '#333' 
          }}>
            <User size={22} strokeWidth={1.5} />
            <span style={{ fontSize: '11px', marginLeft: '5px', letterSpacing: '1px' }}>LOGIN</span>
          </button>
        </SignInButton>
      </SignedOut>

      {/* 情况 B：用户已登录，显示圆形头像菜单 */}
      <SignedIn>
        <UserButton 
          afterSignOutUrl="/" 
          appearance={{
            elements: {
              avatarBox: { width: '32px', height: '32px' }
            }
          }}
        />
      </SignedIn>
    </div>
  );
}