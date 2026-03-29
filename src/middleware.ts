import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // 重点：一定要把首页和你的 AI 接口设为公开，否则用户还没说话就被拦截了
  publicRoutes: ["/", "/api/chat", "/api/(.*)"],
});

export const config = {
  // 这段正则的意思是：除了静态文件，所有的路由都要经过 Clerk 检查
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};