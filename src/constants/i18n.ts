// 多语言数据
interface LanguageData {
  [key: string]: {
    [key: string]: string;
  };
}

export const LANGUAGES: LanguageData = {
  en: {
    title: "SHIMMER",
    subtitle: "Jewelry · Shine Every Moment",
    categories: "Featured Categories",
    engagementRings: "Engagement Rings",
    engagementRingsSubtitle: "Witness commitment and heartfelt moments",
    weddingRings: "Wedding Rings",
    weddingRingsSubtitle: "Classic choices for a lifetime",
    gifts: "Gifts",
    giftsSubtitle: "Give important sentiments to important people",
    birthstones: "Birthstones",
    birthstonesSubtitle: "Express personality with exclusive gems",
    viewCollection: "View Collection",
    backToCategories: "← Back to Categories",
    allCategories: "All Categories",
    exploreCollections: "Explore our curated jewelry collections, each carrying unique meaning.",
  },
  zh: {
    title: "SHIMMER",
    subtitle: "珠宝 · 闪耀每一刻",
    categories: "精选分类",
    engagementRings: "订婚戒指",
    engagementRingsSubtitle: "见证承诺与心动时刻",
    weddingRings: "结婚戒指",
    weddingRingsSubtitle: "陪伴一生的经典之选",
    gifts: "礼品",
    giftsSubtitle: "把重要心意送给重要的人",
    birthstones: "生辰石",
    birthstonesSubtitle: "用专属宝石表达个性",
    viewCollection: "查看系列",
    backToCategories: "← 返回分类",
    allCategories: "全部分类",
    exploreCollections: "探索我们的精选珠宝系列，每一件都承载着独特的意义。",
  },
};

export type Language = "en" | "zh";
