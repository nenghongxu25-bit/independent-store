import Link from "next/link";
import { Category } from "../types/navigation";

// 定义组件接收的参数类型
interface CategoryCardProps {
  item: Category;
}

export default function CategoryCard({ item }: CategoryCardProps) {
  return (
    <article style={{
      border: "1px solid #d4af37",
      borderRadius: 10,
      background: "rgba(212, 175, 55, 0.06)",
      padding: 14,
    }}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{item.title}</h3>
      <p style={{ margin: "8px 0 12px", color: "#f2df9f", fontSize: 13 }}>{item.subtitle}</p>
      <Link href={`/products/${item.slug}`} style={{ color: "#d4af37" }}>
        查看系列
      </Link>
    </article>
  );
}
