/**
 * 文件：CategoryContent.tsx
 * 作用：产品分类详情页的客户端渲染组件
 * 说明：
 * 1. 使用 'use client' 允许我们在组件中使用 React Hooks (如 useTranslation)。
 * 2. 负责根据 URL 中的 slug 匹配本地数据并渲染对应的珠宝分类。
 */

'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";
import { theme, styles } from "../../../lib/theme";
import { categories } from "./data";

interface Props {
  slug: string; // 从动态路由 [slug] 传入的参数
}

export default function CategoryContent({ slug }: Props) {
  // --- 1. 初始化 Hook ---
  const { t } = useTranslation(); // 获取语言包数据，用于多语言切换
  
  // --- 2. 匹配本地数据 ---
  // 将 slug 断言为 categories 的键，防止 TypeScript 报错
  const category = categories[slug as keyof typeof categories];

  /**
   * 辅助函数：根据 slug 获取翻译后的分类标题
   * @param currentSlug 路径标识符
   */
  const getLocalizedTitle = (currentSlug: string) => {
    switch (currentSlug) {
      case 'engagement-rings': return t.engagementRings; // 订婚戒指
      case 'wedding-rings': return t.weddingRings;    // 结婚戒指
      case 'gifts': return t.gifts;                  // 礼品系列
      case 'birthstones': return t.birthstones;      // 诞生石系列
      default: return currentSlug;
    }
  };

  /**
   * 辅助函数：根据 slug 获取翻译后的副标题/描述
   */
  const getLocalizedDescription = (currentSlug: string) => {
    switch (currentSlug) {
      case 'engagement-rings': return t.engagementRingsSubtitle;
      case 'wedding-rings': return t.weddingRingsSubtitle;
      case 'gifts': return t.giftsSubtitle;
      case 'birthstones': return t.birthstonesSubtitle;
      default: return "";
    }
  };

  // --- 3. 边界处理 (异常保护) ---
  // 如果用户访问了不存在的路径（例如 /products/xyz），这里会拦截并显示错误 UI
  // 这种处理方式比直接调用 notFound() 在客户端更稳定，能避免 Hydration 闪退
  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10">
        <p className="mb-4 text-lg font-bold">Category not found.</p>
        <Link href="/products" className="text-blue-500 underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  // --- 4. 页面主渲染逻辑 ---
  return (
    <main style={styles.container}>
      {/* 返回上一级按钮 */}
      <Link
        href="/products"
        prefetch // 开启预获取，提升点击跳转速度
        style={{ color: theme.colors.primary, textDecoration: "none", fontSize: 14 }}
      >
        {t.backToCategories}
      </Link>

      {/* 动态标题与描述 */}
      <h1 style={{ margin: "16px 0 8px" }}>{getLocalizedTitle(slug)}</h1>
      
      <p style={{ margin: "0 0 24px", color: theme.colors.primaryLight }}>
        {getLocalizedDescription(slug)}
      </p>

      {/* 产品展示网格布局 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // 响应式列宽
          gap: 12,
        }}
      >
        {/* 遍历数据中的 items 数组，渲染每一项产品 */}
        {category.items.map((item, index) => (
          <div
            key={index} // 在 React 循环中必须提供唯一的 key
            style={styles.card}
          >
            <h3 style={{ margin: 0, fontSize: 16, color: theme.colors.primaryLight }}>
              {item}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
}
