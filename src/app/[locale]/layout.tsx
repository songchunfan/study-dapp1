import type { Locale } from '@rainbow-me/rainbowkit';
import Providers from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import styles from "@/styles/Home.module.css";

export default async function Layout(props: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { children, params } = props;
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages({locale});

  return (
    <html
      lang={locale} >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Providers locale={locale}>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
          </Providers>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}