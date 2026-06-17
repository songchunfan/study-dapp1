import {getTranslations} from 'next-intl/server';
export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}