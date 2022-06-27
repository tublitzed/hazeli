import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { isHazelSection } from '@helpers'

const breadcrumbLink = (router: NextRouter) => {
  const path = router.pathname
  const isRootDir = path === '/h' || path === '/e'
  const hazelSection = isHazelSection(router)
  const pageName = hazelSection ? 'Hazel' : 'Eli'
  if (isRootDir) {
    return pageName
  }
  return (
    <Link href={hazelSection ? '/h' : '/e'}>
      <a className={headerLinkClasses(router)}>{pageName}</a>
    </Link>
  )
}

const headerLinkClasses = (router: NextRouter) => {
  return [
    'text-light',
    isHazelSection(router)
      ? 'hover:text-primary-light'
      : 'hover:text-secondary-light',
    'no-underline',
  ].join(' ')
}
export default function Header() {
  const router = useRouter()
  const path = router.pathname
  const hasBreadcrumbs = path !== '/'
  const headerClasses = [
    'text-light',
    'text-xl',
    'font-bold',
    'tracking-wide',
    'p-6',
    isHazelSection(router) ? 'bg-primary' : 'bg-secondary',
  ].join(' ')
  return (
    <header className={headerClasses}>
      <Link href="/">
        <a className={headerLinkClasses(router)}>Hazeli</a>
      </Link>
      {hasBreadcrumbs
        ? (
            <div className="breadcrumbs font-light">
              <span>&gt;</span>
              <span>{breadcrumbLink(router)}</span>
            </div>
          )
        : (
            ''
          )}
    </header>
  )
}
