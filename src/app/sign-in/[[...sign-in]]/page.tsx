import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <SignIn 
        routing="path" 
        path="/sign-in" 
        // 🚀 就是这一行！加上它，登录框底部就会出现 "Don't have an account? Sign up"
        signUpUrl="/sign-up" 
        afterSignInUrl="/account"
      />
    </div>
  );
}