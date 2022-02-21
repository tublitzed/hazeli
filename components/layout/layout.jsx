import Head from 'next/head';
import { Header } from '@components';
import styles from './layout.module.scss';

export default function Layout({ children, pageName = '' }) {
  const classes = [styles.app, styles[pageName]].join(' ');
  return (
    <>
      <Head>
        <title>Hazeli</title>
      </Head>
      <div className={classes}>
        {pageName !== 'Home' ? <Header /> : ''}
        <main className={styles.appContent}>{children}</main>
      </div>
    </>
  );
}
