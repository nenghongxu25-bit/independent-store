'use client';

import { useLanguage } from "../contexts/LanguageContext";
import { LANGUAGES, Language } from "../constants/i18n";

export function useTranslation() {
  const { language, setLanguage } = useLanguage();
  const t = LANGUAGES[language];

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return {
    t,
    language,
    changeLanguage,
    isEnglish: language === 'en',
    isChinese: language === 'zh',
  };
}
