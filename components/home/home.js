import Link from 'next/link';
import { Layout } from '../../components';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Link href="/h">
        <a className={styles.hazel}>
          <span>Hazel</span>
        </a>
      </Link>
      <Link href="/e">
        <a className={styles.eli}>
          <span>Eli</span>
        </a>
      </Link>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout pageName="Home">{page}</Layout>;
};
