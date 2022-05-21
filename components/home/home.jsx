import Link from 'next/link';
import { Layout } from '@components';

export default function Home() {
  const linkClasses = 'text-8xl p-8 font-medium ';
  return (
    <div>
      <div className="grid grid-cols-2 content-center justify-center text-center min-h-screen divide-x divide-light/[.25]">
        <Link href="/h">
          <a className={`${linkClasses}`}>Hazel</a>
        </Link>
        <Link href="/e">
          <a className={`${linkClasses}`}>Eli</a>
        </Link>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      pageName="Home"
      cssClasses="bg-gradient-to-t from-primary to-primary-light"
    >
      {page}
    </Layout>
  );
};
