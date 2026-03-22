// 客户端产品分类页面组件
// 用途：处理需要客户端交互的部分（如语言切换）
// 这个组件会被 [slug]/page.tsx 导入和使用

'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";
import { theme, styles } from "../../../lib/theme";

// 分类产品数据
const categories: Record<string, { items: string[] }> = {
  "engagement-rings": {
    items: ["经典钻戒", "玫瑰金戒指", "白金镶嵌", "定制设计"],
  },
  "wedding-rings": {
    items: ["对戒系列", "铂金戒指", "黄金戒指", "镶钻婚戒"],
  },
  gifts: {
    items: ["项链", "手链", "耳环", "胸针"],
  },
  birthstones: {
    items: ["一月石榴石", "二月紫水晶", "三月海蓝宝", "四月钻石"],
  },
};

interface ClientCategoryPageProps {
  slug: string;
}

export default function ClientCategoryPage({ slug }: ClientCategoryPageProps) {
  const { t } = useTranslation();
  const category = categories[slug];

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
    <>
      <Link
        href="/products"
        prefetch
        style={{ color: theme.colors.primary, textDecoration: "none", fontSize: 14 }}
      >
        {t.backToCategories}
      </Link>

      <h1 style={{ margin: "16px 0 8px" }}>{getLocalizedTitle(slug)}</h1>
      
