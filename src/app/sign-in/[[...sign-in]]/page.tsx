import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* 登录框 */}
      <SignIn 
        routing="path" 
        path="/sign-in" 
        signUpUrl="/sign-up"
        afterSignInUrl="/account"
      />
      
      {/* 强制显示的注册入口 */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 mb-2">没有账号？</p>
        <Link 
          href="/sign-up" 
          className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          立即注册 Shimmer 会员
        </Link>
      </div>
    </div>
  );
}