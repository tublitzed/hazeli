import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { isHazelSection } from '@helpers'

const headerLinkClasses = [
  'text-light',
  'hover:text-primary-light',
  'no-underline',
].join(' ')

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
      <a className={headerLinkClasses}>{pageName}</a>
    </Link>
  )
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
  ]
  headerClasses.push(isHazelSection(router) ? 'bg-primary' : 'bg-secondary')
  return (
    <header className={headerClasses.join(' ')}>
      <Link href="/">
        <a className={headerLinkClasses}>Hazeli</a>
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
