import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <SignIn 
        // 关键：告诉 Clerk，如果点注册，跳到哪去
        signUpUrl="/sign-up" 
        // 登录成功后，跳回首页或者账户页
        afterSignInUrl="/account" 
      />
    </div>
  );
}