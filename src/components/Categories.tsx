// 分类组件
// 用途：显示产品分类卡片，提供导航链接
// 从navigation.ts中获取分类数据，生成分类卡片网格

// 标记为客户端组件，因为使用了useTranslation钩子
'use client';

// 导入必要的模块
import { CATEGORY_DATA } from "../constants/navigation"; // 分类数据
import { useTranslation } from "../hooks/useTranslation"; // 多语言支持
import { theme } from "../lib/theme"; // 主题配置
import CategoryCard from "./CategoryCard"; // 分类卡片组件

// 分类组件
export default function Categories() {
  // 获取翻译函数，用于多语言支持
  const { t } = useTranslation();

  return (
    <section> {/* 分类区块 */}
      {/* 分类标题 */}
      <h2 style={{ marginBottom: 16, fontSize: 24 }}>{t.categories}</h2>
      
      {/* 分类卡片网格 */}
      <div
        style={{
          display: "grid", // 使用网格布局
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", // 响应式网格，最小列宽220px
          gap: 12, // 网格间距12px
        }}
      >
        {/* 遍历分类数据，为每个分类创建卡片 */}
        {CATEGORY_DATA.map((item) => (
          <CategoryCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
