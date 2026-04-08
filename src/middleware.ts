import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // 这里的路由不要求登录
  publicRoutes: ["/", "/api/chat", "/api/(.*)"],
});

export const config = {
  
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};