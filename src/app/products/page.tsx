import Link from "next/link";

const products = [
  { id: "1", name: "示例商品 A", price: "99.00", desc: "高性价比的示例商品。" },
  { id: "2", name: "示例商品 B", price: "149.00", desc: "适合送礼的示例商品。" },
  { id: "3", name: "示例商品 C", price: "199.00", desc: "更高级一点的示例商品。" },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: 16, maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>商品列表</h1>
      <p style={{ color: "#666", marginBottom: 16 }}>你可以点进商品查看详情。</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 700 }}>{p.name}</div>
            <div style={{ color: "#666", marginTop: 6 }}>￥{p.price}</div>
            <div style={{ color: "#666", marginTop: 6, fontSize: 13 }}>{p.desc}</div>
            <div style={{ marginTop: 10 }}>
              <Link href={`/products/${p.id}`}>查看详情</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

