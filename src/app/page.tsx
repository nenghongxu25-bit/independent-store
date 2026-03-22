import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const firstSection = [
  { slug: "engagement-rings", title: "订婚戒指", subtitle: "见证承诺与心动时刻" },
  { slug: "wedding-rings", title: "结婚戒指", subtitle: "陪伴一生的经典之选" },
  { slug: "gifts", title: "礼品", subtitle: "把重要心意送给重要的人" },
  { slug: "birthstones", title: "生辰石", subtitle: "用专属宝石表达个性" },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: 24 }}>
      <div style={{ textAlign: "center", margin: "24px 0 32px" }}>
        <h1
          className={greatVibes.className}
          style={{
            margin: 0,
            fontSize: "clamp(100px, 18vw, 220px)",
            lineHeight: 0.9,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontWeight: 400,
            background: "linear-gradient(180deg, #fff2bf 0%, #e7c86a 45%, #a87b1e 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 40px rgba(212,175,55,0.4), 0 6px 24px rgba(0,0,0,0.55)",
          }}
        >
          SHIMMER
        </h1>
        <p
          style={{
            margin: "16px auto 0",
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "#e8d5a3",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          珠宝 · 闪耀每一刻
        </p>
        <div
          style={{
            margin: "16px auto 0",
            width: 220,
            height: 1,
            background: "linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%)",
          }}
        />
      </div>

      <section>
        <h2 style={{ marginBottom: 16, fontSize: 24 }}>精选分类</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
              <Link href={`/products/${item.slug}`} prefetch style={{ color: "#d4af37" }}>
                查看系列
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

