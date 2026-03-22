// 产品分类页面服务端入口
// 用途：导出 generateStaticParams 函数，供 Next.js 在构建时使用
// 这个文件是服务端模块，不包含客户端代码

// 从数据文件导入静态参数生成函数
export { generateStaticParams } from './data';
