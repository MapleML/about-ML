import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import React from 'react';
import NavBar from '@/components/NavBar';

import {getMessages} from 'next-intl/server';

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
      <NavBar />
      {children}
    </NextIntlClientProvider>
  );
}