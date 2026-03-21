import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "独立商店",
  description: "独立站示例项目",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body
        style={{
          margin: 0,
          background: "#0b0b0b",
          color: "#d4af37",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            padding: 16,
            borderBottom: "1px solid #d4af37",
            background: "rgba(0, 0, 0, 0.35)",
          }}
        >
          <Link href="/" style={{ fontWeight: 800, color: "#d4af37" }}>
            独立商店
          </Link>
          <nav style={{ marginTop: 8, display: "flex", gap: 16 }}>
            <Link href="/products" style={{ color: "#d4af37", textDecoration: "none" }}>
              商品
            </Link>
            <Link href="/cart" style={{ color: "#d4af37", textDecoration: "none" }}>
              购物车
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

