// 语言上下文
// 用途：管理应用的语言状态，提供语言切换功能
// 为整个应用提供统一的语言管理

// 标记为客户端组件，因为使用了useState和useEffect钩子，意思就是接下来将会导入客户端自带的“文件”
'use client';

// 导入必要的模块
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'; // React钩子和类型
import { Language } from '../constants/i18n'; // 语言类型

// 语言上下文类型
interface LanguageContextType {
  language: Language; // 定义当前语言
  setLanguage: (lang: Language) => void; // 语言切换函数
}

// 创建语言上下文
// 初始值为undefined，需要在LanguageProvider中提供具体值
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 语言上下文提供者组件
// 包裹整个应用，提供语言状态管理
export function LanguageProvider({ children }: { children: ReactNode }) {
  // 语言状态，默认为英文
  const [language, setLanguage] = useState<Language>('en');

  // 从localStorage读取语言设置
  // 当组件挂载时执行，读取用户之前保存的语言偏好
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // 保存语言设置到localStorage
  // 当语言状态变化时执行，确保语言设置持久化
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    // 提供语言上下文，包含当前语言和切换函数
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children} {/* 子组件 */}
    </LanguageContext.Provider>
  );
}

// 语言上下文钩子
// 用于在组件中获取语言状态和切换函数
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // 如果在LanguageProvider之外使用，抛出错误
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}
