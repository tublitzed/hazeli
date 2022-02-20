import '../assets/global.css';
import { Layout } from '../components';

const getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default function MyApp({ Component, pageProps }) {
  const layoutType = Component.getLayout || getLayout;
  return layoutType(<Component {...pageProps} />);
}
