import { Link } from '@/components/navigation';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('page');

  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">{t('about')}</h1>
      <div className="p-4">{t('about_title')}</div>
      <Link href="/" className="text-link">
        {t('home')}
      </Link>
    </div>
  );
}
