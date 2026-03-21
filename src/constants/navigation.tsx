// 定义分类对象的形状
export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  image?: string; // 加个问号表示这个字段是可选的
}
