import { useEffect, ReactElement } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Layout } from '@components'
import { Analytics } from '@helpers'

import '@styles/index.css'

const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
}
export default function MyApp({ Component, pageProps }: MyAppProps) {
  const layoutType = Component.getLayout || getLayout
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      Analytics.pageview(url)
    }
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return layoutType(<Component {...pageProps} />)
}
