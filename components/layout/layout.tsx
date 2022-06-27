import { ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header, Sidebar } from '@components'
import {
  SIDEBAR_ANIMAL_BOOK,
  SIDEBAR_ANIMAL_STICKER_BOOK,
  isHazelSection,
} from '@helpers'

export function CustomLayoutAnimalBook(page: ReactElement) {
  return (
    <Layout pageName="animalBook">
      <Sidebar config={SIDEBAR_ANIMAL_BOOK} />
      <section className="content-with-sidebar">{page}</section>
    </Layout>
  )
}

export function CustomLayoutAnimalStickerBook(page: ReactElement) {
  return (
    <Layout pageName="animalStickerBook">
      <Sidebar config={SIDEBAR_ANIMAL_STICKER_BOOK} />
      <section className="content-with-sidebar">{page}</section>
    </Layout>
  )
}

type LayoutProps = {
  children: ReactElement | ReactElement[];
  pageName?: string;
};
export default function Layout({ children, pageName = '' }: LayoutProps) {
  const router = useRouter()
  const sectionClass =
    pageName !== 'Home'
      ? isHazelSection(router)
        ? 'section--hazel'
        : 'section--eli'
      : ''
  const rootClasses = [
    'antialiased',
    sectionClass,
    `page--${pageName.toLowerCase()}`,
  ].join(' ')
  const contentClasses = [
    'content',
    pageName !== 'Home' ? 'p-6' : '',
  ].join(
    ' ',
  )
  return (
    <>
      <Head>
        <title>Hazeli</title>
      </Head>
      <div className={rootClasses}>
        {pageName !== 'Home' ? <Header /> : ''}
        <main className={contentClasses}>{children}</main>
      </div>
    </>
  )
}
