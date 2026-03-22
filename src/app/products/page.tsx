import Link from "next/link";

const categories = [
  { slug: "engagement-rings", title: "订婚戒指", description: "见证承诺与心动时刻" },
  { slug: "wedding-rings", title: "结婚戒指", description: "陪伴一生的经典之选" },
  { slug: "gifts", title: "礼品", description: "把重要心意送给重要的人" },
  { slug: "birthstones", title: "生辰石", description: "用专属宝石表达个性" },
];

export default function ProductsPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: 24 }}>
      <h1 style={{ margin: "0 0 16px" }}>全部商品分类</h1>
      <p style={{ margin: "0 0 24px", color: "#f0e0a0" }}>
        探索我们的精选珠宝系列，每一件都承载着独特的意义。
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            prefetch
            style={{
              display: "block",
              border: "1px solid #d4af37",
              borderRadius: 12,
              background: "rgba(212, 175, 55, 0.08)",
              padding: 20,
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            <h2 style={{ margin: "0 0 8px", color: "#d4af37" }}>{cat.title}</h2>
            <p style={{ margin: 0, color: "#e8d5a3", fontSize: 14 }}>{cat.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
