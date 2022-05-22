import Link from 'next/link';
import { Layout } from '@components';

export default function Home() {
  const wrapperClasses = [
    'content-center',
    'divide-light/[.5]',
    'divide-x',
    'grid-cols-2',
    'grid',
    'justify-center',
    'min-h-screen',
    'text-center',
  ].join(' ');
  const linkClasses = [
    'transition-all',
    'active:bg-secondary/[.8]',
    'hover:bg-secondary/[.6]',
    'bg-secondary/[.4]',
    'content-center',
    'font-medium',
    'justify-center',
    'p-8',
    'text-8xl',
    'text-light',
  ].join(' ');
  return (
    <div>
      <div className={wrapperClasses}>
        <Link href="/h">
          <a className="">
            <div className={linkClasses}>Hazel</div>
          </a>
        </Link>
        <Link href="/e">
          <a className="">
            <div className={linkClasses}>Eli</div>
          </a>
        </Link>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout pageName="Home" cssClasses="bg-gradient-to-t from-secondary">
      {page}
    </Layout>
  );
};
