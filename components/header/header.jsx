import Link from 'next/link';
import { useRouter } from 'next/router';

const headerLinkClasses = [
  'text-light',
  'hover:text-primary-light',
  'no-underline',
].join(' ');

const breadcrumbLink = (path) => {
  const isRootDir = path === '/h' || path === '/e';
  const isHazelSection = path.startsWith('/h');
  const pageName = isHazelSection ? 'Hazel' : 'Eli';
  if (isRootDir) {
    return pageName;
  }
  return (
    <Link href={isHazelSection ? '/h' : '/e'}>
      <a className={headerLinkClasses}>{pageName}</a>
    </Link>
  );
};

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  const hasBreadcrumbs = path !== '/';
  const headerClasses = [
    'bg-primary',
    'text-light',
    'text-xl',
    'font-bold',
    'tracking-wide',
    'p-6',
  ].join(' ');
  return (
    <header className={headerClasses}>
      <Link href="/">
        <a className={headerLinkClasses}>Hazeli</a>
      </Link>
      {hasBreadcrumbs ? (
        <div className="breadcrumbs font-light">
          <span>&gt;</span>
          <span>{breadcrumbLink(path)}</span>
        </div>
      ) : (
        ''
      )}
    </header>
  );
}
