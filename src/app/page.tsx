import Link from "next/link";

const products = [
  { id: "1", name: "示例商品 A", price: "99.00" },
  { id: "2", name: "示例商品 B", price: "149.00" },
  { id: "3", name: "示例商品 C", price: "199.00" },
];

export default function HomePage() {
  return (
    <main style={{ padding: 16, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>欢迎来到独立商店</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>现在可以正常访问路由了（之前因为缺少 `page.tsx` 导致 404）。</p>

      <h2 style={{ marginBottom: 12 }}>热门商品</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 700 }}>{p.name}</div>
            <div style={{ color: "#666", marginTop: 6 }}>￥{p.price}</div>
            <div style={{ marginTop: 10 }}>
              <Link href={`/products/${p.id}`}>查看详情</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

