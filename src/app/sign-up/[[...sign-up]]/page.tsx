import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <SignUp 
        routing="path" 
        path="/sign-up" 
        // 🚀 加上这一行，注册页底部会有 "Already have an account? Sign in"
        signInUrl="/sign-in" 
        afterSignUpUrl="/account"
      />
    </div>
  );
}