import Head from 'next/head';
import { Header, Sidebar } from '@components';
import { SIDEBAR_ANIMAL_BOOK, SIDEBAR_ANIMAL_STICKER_BOOK } from '@helpers';

export function CustomLayoutAnimalBook(page) {
  return (
    <Layout pageName="animalBook">
      <Sidebar config={SIDEBAR_ANIMAL_BOOK} />
      <section className="content-with-sidebar">{page}</section>
    </Layout>
  );
}

export function CustomLayoutAnimalStickerBook(page) {
  return (
    <Layout pageName="animalStickerBook">
      <Sidebar config={SIDEBAR_ANIMAL_STICKER_BOOK} />
      <section className="content-with-sidebar">{page}</section>
    </Layout>
  );
}

export default function Layout({ children, pageName, cssClasses }) {
  const globalClasses = ['antialiased'].join(' ');
  return (
    <>
      <Head>
        <title>Hazeli</title>
      </Head>
      <div className={`${globalClasses} ${cssClasses}`}>
        <div className="container mx-auto">
          {pageName !== 'Home' ? <Header /> : ''}
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
