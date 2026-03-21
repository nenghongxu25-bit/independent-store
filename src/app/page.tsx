import Link from "next/link";

const firstSection = [
  { slug: "engagement-rings", title: "订婚戒指", subtitle: "见证承诺与心动时刻" },
  { slug: "wedding-rings", title: "结婚戒指", subtitle: "陪伴一生的经典之选" },
  { slug: "gifts", title: "礼品", subtitle: "把重要心意送给重要的人" },
  { slug: "birthstones", title: "生辰石", subtitle: "用专属宝石表达个性" },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: 24 }}>
      <h1 style={{ margin: "0 0 8px" }}>欢迎来到独立商店</h1>
      <p style={{ margin: "0 0 20px", color: "#f0e0a0" }}>第一个板块已更新为你指定的四个类目。</p>

      <section>
        <h2 style={{ marginBottom: 12 }}>精选分类</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 12,
          }}
        >
          {firstSection.map((item) => (
            <article
              key={item.slug}
              style={{
                border: "1px solid #d4af37",
                borderRadius: 10,
                background: "rgba(212, 175, 55, 0.06)",
                padding: 14,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 18 }}>{item.title}</h3>
              <p style={{ margin: "8px 0 12px", color: "#f2df9f", fontSize: 13 }}>{item.subtitle}</p>
              <Link href={`/products/${item.slug}`} style={{ color: "#d4af37" }}>
                查看系列
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

