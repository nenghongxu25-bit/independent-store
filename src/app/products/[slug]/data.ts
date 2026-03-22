// 产品分类数据配置
// 用途：存储产品分类数据并提供静态参数生成函数
// 这个文件是服务端模块，可以被客户端组件导入使用

// 分类产品数据
// 使用 Record 类型，键为 slug 字符串，值为包含 items 数组的对象
export const categories: Record<string, { items: string[] }> = {
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

// 静态参数生成函数
// 用途：告诉 Next.js 预先生成哪些 slug 的页面，提高性能
// 在构建时生成这些页面，而不是在运行时动态生成
export function generateStaticParams() {
  // 从 categories 对象中提取所有 slug 作为静态参数
  // 这样 Next.js 会为每个 slug 预先生成页面
  return Object.keys(categories).map((slug) => ({ slug }));
}
