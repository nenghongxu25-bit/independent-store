// 导入必要的模块
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "SHIMMER | Jewelry",
  description: "Shimmer Jewelry Store - Engagement Rings, Wedding Rings, Gifts, Birthstones",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 1. html 标签必须在最外面
    <html lang="en"> 
      <body
        style={{
          margin: 0,
          background: "#0b0b0b",
          color: "#d4af37",
          minHeight: "100vh",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
        }}
      >
        {/* 2. Provider 应该包裹具体的内容组件 */}
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
