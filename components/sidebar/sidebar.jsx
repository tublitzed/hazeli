import Link from 'next/link';
import styles from './sidebar.module.scss';

export default function Sidebar({ config }) {
  return (
    <section className={styles.sidebar}>
      {config.pages.map((page) => {
        return (
          <Link href={page.url} key={page.url}>
            <a>{page.name}</a>
          </Link>
        );
      })}
    </section>
  );
}
