// 🛑 注意：从 '@clerk/nextjs' 直接导入，不要带 /server
import { authMiddleware } from "@clerk/nextjs"; 

export default authMiddleware({
  // 允许所有人访问首页和 AI 聊天接口，不强制登录
  publicRoutes: ["/", "/api/chat", "/api/(.*)"],
});

export const config = {
  // 这里的正则配置非常关键，确保不拦截静态资源
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};