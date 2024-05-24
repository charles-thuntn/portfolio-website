import '@/styles/globals.css'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router'
import Footer from '@/common/components/Footer';
import Header from '@/common/components/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LEDRK2KNYE"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LEDRK2KNYE');
          `}
        </script>
      </Head>
      <main className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}>
        <Header />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>

  )
}