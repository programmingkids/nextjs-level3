'use client';

import { displayLocales, locales } from '@/i18n/config';
import { usePathname, useRouter } from '@/components/navigation';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';

export const LangSwitcher = function () {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value as any });
  };

  return (
    <span>
      <select defaultValue={locale} onChange={handleChange}>
        {displayLocales.map((e) => (
          <option key={e.key} value={e.key}>
            {e.language}
          </option>
        ))}
      </select>
    </span>
  );
};
