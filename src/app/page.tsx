import { CATEGORY_DATA } from "../constants/navigation";
import CategoryCard from "../components/CategoryCard";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: 24 }}>
      <h1>欢迎来到独立商店</h1>
      
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
      }}>
        {CATEGORY_DATA.map((item) => (
          // 这里 item 会自动推导为 Category 类型
          <CategoryCard key={item.slug} item={item} />
        ))}
      </section>
    </main>
  );
}
