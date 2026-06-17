import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'hi', 'zh-HK', 'ja-JP'], // 支持语言
  defaultLocale: 'zh',    // 默认语言
  localePrefix: 'always', // 始终添加语言前缀
});