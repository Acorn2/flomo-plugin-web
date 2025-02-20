export type Language = 'zh' | 'en';

// 定义语言配置接口
export interface LanguageConfig {
  switchText: string;
  switchPath: string;
}

// 语言配置映射
export const translations: Record<Language, LanguageConfig> = {
  zh: {
    switchText: 'English',
    switchPath: '/en'
  },
  en: {
    switchText: '中文',
    switchPath: '/'
  }
};

// 获取当前语言的配置
export function getLanguageConfig(lang: Language): LanguageConfig {
  return translations[lang];
} 