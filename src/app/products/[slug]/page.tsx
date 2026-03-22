import { notFound } from "next/navigation";
import Link from "next/link";

const categories: Record<string, { title: string; description: string; items: string[] }> = {
  "engagement-rings": {
    title: "订婚戒指",
    description: "每一枚订婚戒指都承载着永恒的承诺与爱意",
    items: ["经典钻戒", "玫瑰金戒指", "白金镶嵌", "定制设计"],
  },
  "wedding-rings": {
    title: "结婚戒指",
    description: "陪伴一生的经典之选，见证爱情的永恒",
    items: ["对戒系列", "铂金戒指", "黄金戒指", "镶钻婚戒"],
  },
  gifts: {
    title: "礼品",
    description: "把重要心意送给重要的人",
    items: ["项链", "手链", "耳环", "胸针"],
  },
  birthstones: {
    title: "生辰石",
    description: "用专属宝石表达个性与祝福",
    items: ["一月石榴石", "二月紫水晶", "三月海蓝宝", "四月钻石"],
  },
};

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: 24 }}>
      <Link
        href="/products"
        prefetch
        style={{ color: "#d4af37", textDecoration: "none", fontSize: 14 }}
      >
        ← 返回分类
      </Link>

      <h1 style={{ margin: "16px 0 8px" }}>{category.title}</h1>
      <p style={{ margin: "0 0 24px", color: "#f0e0a0" }}>{category.description}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 12,
        }}
      >
        {category.items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #d4af37",
              borderRadius: 10,
              background: "rgba(212, 175, 55, 0.06)",
              padding: 16,
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 16, color: "#e8d5a3" }}>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
