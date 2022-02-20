import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hazeli</title>
      </Head>
      <div className={styles.app}>{children}</div>
    </>
  )
}
