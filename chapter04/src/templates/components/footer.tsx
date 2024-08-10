import { useTranslations } from 'next-intl';

export const Footer = function () {
  const t = useTranslations('common');
  return (
    <div className="main mt-4 p-4 bg-indigo-600">
      <h2 className="p-2 text-lg text-white">
        ---- {t('footer_message1')} ----
      </h2>
      <h3 className="p-2 text-normal text-white">{t('footer_message2')}</h3>
    </div>
  );
};
