'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/components/navigation';

const links = [{ title: 'home', href: '/' }];

export const Header = function () {
  const t = useTranslations('common');
  const tpage = useTranslations('page');
  const pathName = usePathname();

  return (
    <div className="main p-4 bg-blue-300">
      <h1 className="p-2 text-2xl">{t('app_title')}</h1>
      <div className="flex justify-around flex-wrap p-2">
        {links.map((e, i) => (
          <Link
            key={i}
            href={e.href}
            className={
              pathName === e.href
                ? 'text-red-600 hover:text-red-600'
                : 'text-blue-600 underline hover:text-red-600'
            }
          >
            {tpage(e.title)}
          </Link>
        ))}
      </div>
    </div>
  );
};
