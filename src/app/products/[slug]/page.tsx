// 动态产品分类页面
// 用途：根据 URL 参数显示不同的产品分类内容
// 支持通过 slug 参数动态加载不同分类的产品列表

// 标记为客户端组件，因为使用了 useTranslation 钩子
'use client';

// 导入必要的模块
import { notFound } from "next/navigation"; // 用于处理 404 错误，当找不到分类时使用
import Link from "next/link"; // 用于创建导航链接，返回分类列表页
import { useTranslation } from "../../../hooks/useTranslation"; // 多语言支持，用于翻译文本
import { theme, styles } from "../../../lib/theme"; // 主题和样式配置

// 分类产品数据
// 注意：这里暂时重复定义了分类数据，后续可优化为使用navigation.ts中的数据
// 使用Record类型，键为slug字符串，值为包含items数组的对象
const categories: Record<string, { items: string[] }> = {
  // 订婚戒指分类的产品列表
  "engagement-rings": {
    items: ["经典钻戒", "玫瑰金戒指", "白金镶嵌", "定制设计"],
  },
  
  // 结婚戒指分类的产品列表
  "wedding-rings": {
    items: ["对戒系列", "铂金戒指", "黄金戒指", "镶钻婚戒"],
  },
  
  // 礼品分类的产品列表
  gifts: {
    items: ["项链", "手链", "耳环", "胸针"],
  },
  
  // 生辰石分类的产品列表
  birthstones: {
    items: ["一月石榴石", "二月紫水晶", "三月海蓝宝", "四月钻石"],
  },
};

// 页面组件的属性接口
// 定义组件接收的参数类型
interface Props {
  // params对象包含从URL中提取的动态参数
  params: { 
    // slug参数，从URL中提取的分类标识
    // 例如：访问 /products/engagement-rings 时，slug为 "engagement-rings"
    slug: string 
  };
}

// 分类页面组件
// 接收params参数，根据slug显示对应分类的内容
export default function CategoryPage({ params }: Props) {
  // 从params中解构出slug参数
  const { slug } = params;
  
  // 根据slug查找对应的分类数据
  // 例如：slug为 "engagement-rings" 时，获取对应的产品列表
  const category = categories[slug];
  
  // 获取翻译函数，用于多语言支持
  const { t } = useTranslation();

  // 如果找不到对应分类，返回404页面
  // 例如：访问 /products/non-existent-category 时，会显示404
  if (!category) {
    notFound();
  }

  // 根据分类slug获取对应的多语言标题
  // 用于在页面上显示本地化的分类标题
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

  // 根据分类slug获取对应的描述
  // 用于在页面上显示分类的描述信息
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

  // 渲染页面内容
  return (
    <main style={styles.container}>
      {/* 返回分类列表页的链接 */}
      <Link
        href="/products" // 链接目标：产品列表页
        prefetch // 预加载，提高性能
        style={{ color: theme.colors.primary, textDecoration: "none", fontSize: 14 }} // 链接样式
      >
        {t.backToCategories} {/* 翻译后的"返回分类"文本 */}
      </Link>

      {/* 分类标题 */}
      <h1 style={{ margin: "16px 0 8px" }}>{getLocalizedTitle(slug)}</h1>
      
      {/* 分类描述 */}
      <p style={{ margin: "0 0 24px", color: theme.colors.primaryLight }}>{getLocalizedDescription(slug)}</p>

      {/* 产品列表网格 */}
      <div
        style={{
          display: "grid", // 使用网格布局
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // 响应式网格，最小列宽200px
          gap: 12, // 网格间距12px
        }}
      >
        {/* 遍历分类中的产品项 */}
        {category.items.map((item, index) => (
          <div
            key={index} // 唯一键，使用索引
            style={styles.card} // 卡片样式
          >
            {/* 产品名称 */}
            <h3 style={{ margin: 0, fontSize: 16, color: theme.colors.primaryLight }}>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
