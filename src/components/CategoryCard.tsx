// 分类卡片组件
// 用途：显示单个产品分类的卡片，包含标题、副标题和查看链接
// 通常在分类列表中使用

// 标记为客户端组件，因为使用了useTranslation钩子
'use client';

// 导入必要的模块
import Link from "next/link"; // 用于创建导航链接
import { Category } from "../constants/navigation"; // 分类类型
import { useTranslation } from "../hooks/useTranslation"; // 多语言支持
import { theme, styles } from "../lib/theme"; // 主题和样式

// 分类卡片属性接口
// 定义组件接收的参数类型
interface CategoryCardProps {
  item: Category; // 分类数据
}

// 分类卡片组件
export default function CategoryCard({ item }: CategoryCardProps) {
  // 获取翻译函数，用于多语言支持
  const { t } = useTranslation();

  // 根据分类slug获取对应的多语言标题
  // 用于在卡片上显示本地化的分类标题
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
        return item.title;
    }
  };

  // 根据分类slug获取对应的多语言副标题
  // 用于在卡片上显示本地化的分类副标题
  const getLocalizedSubtitle = (slug: string) => {
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
        return item.subtitle;
    }
  };

  return (
    <article style={styles.card}> {/* 卡片容器 */}
      {/* 分类标题 */}
      <h3 style={{ margin: 0, fontSize: 18 }}>{getLocalizedTitle(item.slug)}</h3>
      
      {/* 分类副标题 */}
      <p style={{ margin: "8px 0 12px", color: theme.colors.textLight, fontSize: 13 }}>{getLocalizedSubtitle(item.slug)}</p>
      
      {/* 查看链接 */}
      <Link href={`/products/${item.slug}`} style={{ color: theme.colors.primary }}>
        {t.viewCollection} {/* 翻译后的"查看系列"文本 */}
      </Link>
    </article>
  );
}
