import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  // リクエスト情報のローケルの妥当性をチェックする
  if (!locales.includes(locale as any)) {
    // 適合しないので、NotFound
    notFound();
  }

  // 辞書の読み込み
  const messages = {
    ...(await import(`@/dictionary/${locale}/common.json`)).default,
    ...(await import(`@/dictionary/${locale}/page.json`)).default,
  };
  return {
    messages,
  };
});
