import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '@components';
import { ExtraLayoutProps } from '@components/layout/layout';
import { Analytics } from '@helpers';

import '@styles/index.css';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & {
    layoutProps?: ExtraLayoutProps;
  };
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      Analytics.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Hazeli</title>
      </Head>
      <Layout {...(Component.layoutProps || {})}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
