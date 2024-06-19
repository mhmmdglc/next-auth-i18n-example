import {NextIntlClientProvider, useMessages} from 'next-intl';
import {ReactNode} from 'react';
import '@mantine/core/styles.css';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default function LocaleLayout({children, params: {locale}}: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <title>next-intl & next-auth</title>
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider defaultColorScheme="dark">
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
