import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // 这里的路由不要求登录
  publicRoutes: ["/", "/api/chat", "/api/(.*)"],
});

export const config = {
  // 这里的正则配置是 Clerk 官方 v5 的标准写法
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};