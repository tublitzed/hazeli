import Link from 'next/link';

import { Layout } from '../../components';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <a href="/h" className={styles.hazel}><span>Hazel</span></a>
      <a href="/e" className={styles.eli}><span>Eli</span></a>
    </div>
  );
}
