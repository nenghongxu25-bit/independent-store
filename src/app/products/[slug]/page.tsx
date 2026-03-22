// 动态产品分类页面
// 用途：根据 URL 参数显示不同的产品分类内容
// 支持通过 slug 参数动态加载不同分类的产品列表

// 导入必要的模块
import { categories, generateStaticParams as generateStaticParamsUtil } from "./data"; // 导入分类数据和静态参数生成函数
import CategoryContent from "./CategoryContent"; // 导入客户端内容组件

// 静态参数生成函数
// 用途：告诉 Next.js 预先生成哪些 slug 的页面，提高性能
// 在构建时生成这些页面，而不是在运行时动态生成
export function generateStaticParams() {
  return generateStaticParamsUtil();
}

// 页面组件的属性接口
// 定义组件接收的参数类型
interface Props {
  // params 对象包含从 URL 中提取的动态参数
  params: { 
    // slug 参数，从 URL 中提取的分类标识
    // 例如：访问 /products/engagement-rings 时，slug 为 "engagement-rings"
    slug: string 
  };
}

// 分类页面组件（服务端组件）
// 接收 params 参数，根据 slug 显示对应分类的内容
export default function CategoryPage({ params }: Props) {
  const { slug } = params;
  
  // 渲染客户端内容组件
  return <CategoryContent slug={slug} />;
}
