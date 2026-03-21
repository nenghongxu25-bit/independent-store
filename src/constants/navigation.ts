// 1. 定义数据结构（这就相当于数据库的 Table Schema）
export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  image?: string;
}

// 2. 导出数据（这就是你的数据库内容）
export const CATEGORY_DATA: Category[] = [
  { slug: "engagement-rings", title: "订婚戒指", subtitle: "见证承诺与心动时刻" },
  { slug: "wedding-rings", title: "结婚戒指", subtitle: "陪伴一生的经典之选" },
  { slug: "gifts", title: "礼品", subtitle: "把重要心意送给重要的人" },
  { slug: "birthstones", title: "生辰石", subtitle: "用专属宝石表达个性" },
];
