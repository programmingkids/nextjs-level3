'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/components/navigation';

export default function Page() {
  const t = useTranslations('page');
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">{t('profile')}</h1>
      <div className="p-4">{t('profile_title')}</div>
      <Link href="/" className="text-link">
        {t('home')}
      </Link>
      <div>
        <div>{count}</div>
        <div>
          <button onClick={() => setCount((c) => c + 1)}>up</button>
        </div>
      </div>
    </div>
  );
}
