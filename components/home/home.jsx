import Link from 'next/link';
import { Layout } from '@components';

export default function Home() {
  const wrapperClasses = [
    'content-center',
    'md:divide-y-0',
    'md:divide-x',
    'md:grid-cols-2',
    'divide-y',
    'divide-light/[.5]',
    'grid',
    'justify-center',
    'min-h-screen',
    'text-center',
  ].join(' ');
  const linkClasses = [
    'transition-all',
    'active:bg-secondary/[.8]',
    'hover:bg-secondary/[.6]',
    'hover:text-light',
    'bg-secondary/[.4]',
    'content-center',
    'font-medium',
    'justify-center',
    'md:p-8',
    'p-12',
    'text-8xl',
    'text-light',
    'no-underline',
  ].join(' ');
  return (
    <div>
      <div className={wrapperClasses}>
        <Link href="/h">
          <a className={linkClasses}>Hazel</a>
        </Link>
        <Link href="/e">
          <a className={linkClasses}>Eli</a>
        </Link>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout pageName="Home">
      <div cssClasses="bg-gradient-to-t from-primary">{page}</div>
    </Layout>
  );
};
