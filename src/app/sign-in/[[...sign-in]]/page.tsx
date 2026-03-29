import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <SignIn 
        // 关键点：加上这一行，登录框底部就会出现 "Don't have an account? Sign up"
        signUpUrl="/sign-up" 
        // 登录成功后直接回账户页
        afterSignInUrl="/account"
      />
    </div>
  );
}