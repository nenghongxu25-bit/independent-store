// 产品分类页面客户端内容组件
// 用途：处理需要客户端功能的 UI 渲染（如语言切换）
// 这个文件是客户端组件，可以使用 useTranslation 钩子

'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "../../hooks/useTranslation";
import { theme, styles } from "../../lib/theme";
import { categories } from "./data";

interface Props {
  slug: string;
}

export default function CategoryContent({ slug }: Props) {
  const category = categories[slug];
  const { t } = useTranslation();

  if (!category) {
    notFound();
  }

  const getLocalizedTitle = (slug: string) => {
    switch (slug) {
      case 'engagement-rings':
        return t.engagementRings;
      case 'wedding-rings':
        return t.weddingRings;
      case 'gifts':
        return t.gifts;
      case 'birthstones':
        return t.birthstones;
      default:
        return slug;
    }
  };

  const getLocalizedDescription = (slug: string) => {
    switch (slug) {
      case 'engagement-rings':
        return t.engagementRingsSubtitle;
      case 'wedding-rings':
        return t.weddingRingsSubtitle;
      case 'gifts':
        return t.giftsSubtitle;
      case 'birthstones':
        return t.birthstonesSubtitle;
      default:
        return "";
    }
  };

  return (
    <main style={styles.container}>
      <Link
        href="/products"
        prefetch
        style={{ color: theme.colors.primary, textDecoration: "none", fontSize: 14 }}
      >
        {t.backToCategories}
      </Link>

      <h1 style={{ margin: "16px 0 8px" }}>{getLocalizedTitle(slug)}</h1>
      
      <p style={{ margin: "0 0 24px", color: theme.colors.primaryLight }}>{getLocalizedDescription(slug)}</p>

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
            style={styles.card}
          >
            <h3 style={{ margin: 0, fontSize: 16, color: theme.colors.primaryLight }}>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}