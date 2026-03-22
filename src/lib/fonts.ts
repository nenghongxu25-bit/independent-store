import { Cormorant_Garamond } from "next/font/google";

// 主要字体
export const cormorantGaramond = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

// 字体相关的工具函数
export const fontClasses = {
  heading: cormorantGaramond.className,
};
