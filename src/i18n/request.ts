import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from './routing';
import { hasLocale } from 'next-intl';

export const locales = routing.locales;

export default getRequestConfig(async ({requestLocale}) => {
  // console.log('locale:',requestLocale)

  let locale = await requestLocale;
  if (!routing.locales.includes(locale as any)) notFound();
    
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});