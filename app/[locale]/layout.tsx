import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'zh-TW'];

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {children, params} = props;
  const {locale} = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  // 明確傳入 locale
  const messages = await getMessages({locale});



  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}