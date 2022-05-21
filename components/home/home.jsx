import Link from 'next/link';
import { Layout } from '@components';

export default function Home() {
  return (
    <div>
      <Link href="/h">
        <a>
          <span>Hazel</span>
        </a>
      </Link>
      <Link href="/e">
        <a>
          <span>Eli</span>
        </a>
      </Link>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout pageName="Home">{page}</Layout>;
};
