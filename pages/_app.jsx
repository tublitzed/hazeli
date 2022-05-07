import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '@styles/base.scss';
import { Layout } from '@components';
import { Analytics } from '@helpers';

const getLayout = (page) => {
  return <Layout> {page}</Layout>
};

export default function MyApp({ Component, pageProps }) {
  const layoutType = Component.getLayout || getLayout;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {




      
      Analytics.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return layoutType(<Component {...pageProps} />);
}
