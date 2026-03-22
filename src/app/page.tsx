// 首页组件
// 用途：显示网站的主页内容，包含英雄区和分类展示
// 作为网站的入口页面

// 标记为客户端组件，因为使用了客户端组件Hero和Categories
'use client';

// 导入必要的模块
import Hero from "../components/Hero"; // 英雄区组件，显示网站的主要宣传内容
import Categories from "../components/Categories"; // 分类组件，显示产品分类卡片
import { styles } from "../lib/theme"; // 样式配置

// 首页组件
export default function HomePage() {
  return (
    <main style={styles.container}> {/* 主容器，应用样式 */}
      {/* 英雄区组件，显示网站的主要宣传内容 */}
      <Hero />
      
      {/* 分类组件，显示产品分类卡片 */}
      <Categories />
    </main>
  );
}
