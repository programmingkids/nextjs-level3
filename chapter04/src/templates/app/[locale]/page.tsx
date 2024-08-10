import { useTranslations } from 'next-intl';
import { Link } from '@/components/navigation';

export default function Home() {
  const t = useTranslations('page');
  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">{t('home')}</h1>
      <div className="p-4">{t('home_title')}</div>
    </div>
  );
}
