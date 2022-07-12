import { Home } from '@components';
import { ExtraLayoutProps } from '@components/layout';

export default function Index() {
  return <Home />;
}
const layoutProps: ExtraLayoutProps = {
  pageName: 'Home',
};

Index.layoutProps = layoutProps;
