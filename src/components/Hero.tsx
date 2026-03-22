// 英雄区组件
// 用途：显示网站的主要宣传区域，包含标题、副标题和装饰线
// 作为首页的视觉焦点

// 标记为客户端组件，因为使用了useTranslation钩子
'use client';

// 导入必要的模块
import { useTranslation } from "../hooks/useTranslation"; // 多语言支持
import { cormorantGaramond } from "../lib/fonts"; // 标题字体
import { theme } from "../lib/theme"; // 主题配置

// 英雄区组件
export default function Hero() {
  // 获取翻译函数，用于多语言支持
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center", margin: "24px 0 32px", padding: "0 20px" }}> {/* 容器，居中对齐 */}
      {/* 主标题 */}
      <h1
        className={cormorantGaramond.className} // 应用标题字体
        style={{
          margin: 0, // 去除默认边距
          fontSize: "clamp(60px, 12vw, 150px)", // 响应式字体大小
          lineHeight: 1.1, // 行高
          letterSpacing: "0.03em", // 字间距
          textTransform: "uppercase", // 大写转换
          fontWeight: 400, // 字体粗细
          background: "linear-gradient(180deg, #fff2bf 0%, #e7c86a 45%, #a87b1e 100%)", // 金色渐变背景
          WebkitBackgroundClip: "text", // 背景裁剪到文本
          backgroundClip: "text", // 背景裁剪到文本
          color: "transparent", // 文本颜色透明，显示背景渐变
          textShadow: "0 0 30px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.55)", // 文本阴影
          maxWidth: "100%", // 最大宽度
          overflow: "visible", // 溢出可见
          whiteSpace: "nowrap", // 不换行
          textAlign: "center", // 文本居中
        }}
      >
        {t.title} {/* 翻译后的标题 */}
      </h1>
      
      {/* 副标题 */}
      <p
        style={{
          margin: "24px auto 0", // 上边距24px，水平居中
          fontSize: "clamp(16px, 2.5vw, 24px)", // 响应式字体大小
          color: theme.colors.primaryLight, // 文本颜色：金色
          letterSpacing: "0.15em", // 字间距
          textTransform: "uppercase", // 大写转换
          fontFamily: theme.fonts.heading, // 标题字体
        }}
      >
        {t.subtitle} {/* 翻译后的副标题 */}
      </p>
      
      {/* 装饰线 */}
      <div
        style={{
          margin: "16px auto 0", // 上边距16px，水平居中
          width: 220, // 宽度220px
          height: 1, // 高度1px
          background: "linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%)", // 金色渐变背景
        }}
      />
    </div>
  );
}
