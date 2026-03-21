// 定义分类对象的形状
export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  image?: string; // 加个问号表示这个字段是可选的
}
import { Category } from "@/types/navigation";

// 明确告诉 TS：这个数组里必须全是 Category 类型的对象
export const CATEGORY_DATA: Category[] = [
  { slug: "engagement-rings", title: "订婚戒指", subtitle: "见证承诺与心动时刻" },
  { slug: "wedding-rings", title: "结婚戒指", subtitle: "陪伴一生的经典之选" },
  { slug: "gifts", title: "礼品", subtitle: "把重要心意送给重要的人" },
  { slug: "birthstones", title: "生辰石", subtitle: "用专属宝石表达个性" },
];
