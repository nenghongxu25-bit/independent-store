import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shimmer Jewelry",
  description: "Jewelry storefront",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body
        style={{
          margin: 0,
          background: "#0b0b0b",
          color: "#d4af37",
          minHeight: "100vh",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <header
          style={{
            padding: 16,
            borderBottom: "1px solid #d4af37",
            background: "rgba(0,0,0,0.35)",
          }}
        >
          <Link href="/" style={{ color: "#d4af37", textDecoration: "none", fontWeight: 800 }}>
            独立商店
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}

