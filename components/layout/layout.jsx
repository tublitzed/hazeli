import Head from 'next/head';
import { Header, Sidebar } from '@components';
import { SIDEBAR_ANIMAL_BOOK } from '@constants';
import styles from './layout.module.scss';

export function CustomLayoutAnimalBook(page) {
  return (
    <Layout pageName="animalBook">
      <Sidebar config={SIDEBAR_ANIMAL_BOOK} />
      <section>{page}</section>
    </Layout>
  );
}

export default function Layout({ children, pageName = '' }) {
  const classes = [styles.app, styles[pageName]].join(' ');
  return (
    <>
      <Head>
        <title>Hazeli</title>
      </Head>
      <div className={classes}>
        {pageName !== 'Home' ? <Header /> : ''}
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
}
