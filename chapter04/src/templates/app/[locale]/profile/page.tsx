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
      <hr className="my-4 border-1 border-sky-400" />
      <div>
        <div>{count}</div>
        <div className="mt-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            {t('count_up')}
          </button>
        </div>
      </div>
    </div>
  );
}
