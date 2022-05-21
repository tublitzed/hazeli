import Link from 'next/link';
import { useRouter } from 'next/router';

const breadcrumbLink = (path) => {
  const isRootDir = path === '/h' || path === '/e';
  const isHazelSection = path.startsWith('/h');
  const pageName = isHazelSection ? 'Hazel' : 'Eli';
  if (isRootDir) {
    return pageName;
  }
  return <Link href={isHazelSection ? '/h' : '/e'}>{pageName}</Link>;
};

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header>
      <Link href="/">Hazeli</Link>
      {path !== '/' ? (
        <div>
          <span>&gt;</span>
          <span>{breadcrumbLink(path)}</span>
        </div>
      ) : (
        ''
      )}
    </header>
  );
}
