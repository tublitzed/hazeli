import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './sidebar.module.scss';

export default function Sidebar({ config }) {
  const path = useRouter().pathname;
  return (
    <section className={styles.sidebar}>
      {config.pages.map((page) => {
        return (
          <Link href={page.url} key={page.url}>
            <a className={path === page.url ? styles.active : ''}>
              {page.name}
            </a>
          </Link>
        );
      })}
    </section>
  );
}
