import { useTranslations } from 'next-intl';
import { Link } from '@/components/navigation';

export default function Page() {
  const t = useTranslations('page');
  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">{t('hello')}</h1>
      <div className="p-4">{t('hello_title')}</div>
      <Link href="/" className="text-link">
        {t('home')}
      </Link>
    </div>
  );
}
