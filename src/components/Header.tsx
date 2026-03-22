// 头部组件
// 用途：显示网站的导航栏，包含logo和语言切换按钮

// 标记为客户端组件，因为使用了useLanguage钩子
'use client';

// 导入必要的模块
import Link from "next/link"; // 用于创建导航链接
import { useLanguage } from "../contexts/LanguageContext"; // 语言上下文钩子
import { theme, styles } from "../lib/theme"; // 主题和样式

// 头部组件
export default function Header() {
  // 从语言上下文获取当前语言和语言切换函数
  const { language, setLanguage } = useLanguage();

  return (
    <header
      style={{
        padding: theme.spacing.md, // 内边距
        borderBottom: `1px solid ${theme.colors.primary}`, // 底部边框
        background: theme.colors.backgroundLight, // 背景颜色
        display: "flex", // 弹性布局
        justifyContent: "space-between", // 两端对齐
        alignItems: "center", // 垂直居中
      }}
    >
      {/* Logo和网站名称 */}
      <Link 
        href="/" // 链接目标：首页
        style={{ 
          color: theme.colors.primary, // 颜色：金色
          textDecoration: "none", // 无下划线
          fontWeight: 800, // 字体粗细
          fontSize: 20, // 字体大小
          letterSpacing: "0.1em" // 字间距
        }}
      >
        SHIMMER
      </Link>
      
      {/* 语言切换按钮 */}
      <div style={{ display: "flex", gap: theme.spacing.sm }}>
        {/* 英文按钮 */}
        <button
          onClick={() => setLanguage('en')} // 切换到英文
          style={{
            ...styles.button,
            background: language === 'en' ? theme.colors.primary : "transparent", // 当前语言为英文时显示金色背景
            color: language === 'en' ? theme.colors.background : theme.colors.primary, // 当前语言为英文时显示黑色文字
          }}
        >
          EN
        </button>
        
        {/* 中文按钮 */}
        <button
          onClick={() => setLanguage('zh')} // 切换到中文
          style={{
            ...styles.button,
            background: language === 'zh' ? theme.colors.primary : "transparent", // 当前语言为中文时显示金色背景
            color: language === 'zh' ? theme.colors.background : theme.colors.primary, // 当前语言为中文时显示黑色文字
          }}
        >
          中文
        </button>
      </div>
    </header>
  );
}
