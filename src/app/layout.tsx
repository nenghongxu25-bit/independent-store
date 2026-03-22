// 根布局组件
// 用途：定义整个应用的基本结构，包含头部和全局样式
// 提供语言上下文，支持多语言功能

// 导入必要的模块
import type { Metadata } from "next"; // 元数据类型
import type { ReactNode } from "react"; // React节点类型
import { LanguageProvider } from "../contexts/LanguageContext"; // 语言上下文提供者
import Header from "../components/Header"; // 头部组件

// 应用元数据
// 用于设置网站的标题和描述，对SEO有重要影响
export const metadata: Metadata = {
  title: "SHIMMER | Jewelry", // 网站标题
  description: "Shimmer Jewelry Store - Engagement Rings, Wedding Rings, Gifts, Birthstones", // 网站描述
};

// 根布局组件
// 接收子组件作为参数，包裹整个应用
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 语言提供者，包裹整个应用，提供语言上下文
    <LanguageProvider>
      <html lang="en"> {/* 默认语言为英文 */}
        <body
          style={{
            margin: 0, // 去除默认边距
            background: "#0b0b0b", // 背景颜色：黑色
            color: "#d4af37", // 文本颜色：金色
            minHeight: "100vh", // 最小高度：视口高度
            fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial", // 字体
          }}
        >
          {/* 头部组件 */}
          <Header />
          
          {/* 主内容区域，显示子组件 */}
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}

