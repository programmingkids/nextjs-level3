import { Link } from '@/components/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common');
  const tpage = useTranslations('page');
  return (
    <div className="main">
      <h1 className="p-4 bg-gray-500 text-white text-xl">
        {t('not_found_message1')}
      </h1>
      <div className="p-4">{t('not_found_message2')}</div>
      <div className="p-4">{t('not_found_message3')}</div>
      <Link href="/" className="text-link">
        {tpage('home')}
      </Link>
    </div>
  );
}
