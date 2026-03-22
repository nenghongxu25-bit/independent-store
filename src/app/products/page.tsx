// 产品列表页面
// 用途：显示所有产品分类的入口页面
// 包含分类卡片网格和页面标题

// 标记为客户端组件，因为使用了useTranslation钩子
'use client';

// 导入必要的模块
import Link from "next/link"; // 用于创建导航链接
import { useTranslation } from "../../hooks/useTranslation"; // 多语言支持
import { theme, styles } from "../../lib/theme"; // 主题和样式

// 产品列表页面组件
export default function ProductsPage() {
  // 获取翻译函数，用于多语言支持
  const { t } = useTranslation();

  // 分类数据
  // 包含每个分类的slug、标题键和描述键
  const categories = [
    { slug: "engagement-rings", titleKey: "engagementRings", descriptionKey: "engagementRingsSubtitle" },
    { slug: "wedding-rings", titleKey: "weddingRings", descriptionKey: "weddingRingsSubtitle" },
    { slug: "gifts", titleKey: "gifts", descriptionKey: "giftsSubtitle" },
    { slug: "birthstones", titleKey: "birthstones", descriptionKey: "birthstonesSubtitle" },
  ];

  return (
    <main style={styles.container}> {/* 主容器，应用样式 */}
      {/* 页面标题 */}
      <h1 style={{ margin: "0 0 16px" }}>{t.allCategories}</h1>
      
      {/* 页面描述 */}
      <p style={{ margin: "0 0 24px", color: theme.colors.primaryLight }}>
        {t.exploreCollections}
      </p>

      {/* 分类卡片网格 */}
      <div
        style={{
          display: "grid", // 使用网格布局
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // 响应式网格，最小列宽260px
          gap: 16, // 网格间距16px
        }}
      >
        {/* 遍历分类数据，为每个分类创建卡片 */}
        {categories.map((cat) => (
          <Link
            key={cat.slug} // 唯一键，使用分类的slug
            href={`/products/${cat.slug}`} // 构建分类链接，指向动态路由
            prefetch // 预加载，提高性能
            style={{
              display: "block",
              ...styles.card,
              borderRadius: theme.borderRadius.lg,
              background: "rgba(212, 175, 55, 0.08)", // 金色半透明背景
              padding: 20, // 内边距
              textDecoration: "none", // 无下划线
              color: "inherit", // 继承文本颜色
              transition: "transform 0.2s, box-shadow 0.2s", // 过渡效果
            }}
          >
            {/* 分类标题 */}
            <h2 style={{ margin: "0 0 8px", color: theme.colors.primary }}>{t[cat.titleKey as keyof typeof t]}</h2>
            
            {/* 分类描述 */}
            <p style={{ margin: 0, color: theme.colors.primaryLight, fontSize: 14 }}>{t[cat.descriptionKey as keyof typeof t]}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
