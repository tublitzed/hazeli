import Link from 'next/link'
import { useRouter } from 'next/router'
import { SidebarConfig } from '@helpers/sidebar'

type SidebarProps = {
  config: SidebarConfig;
};
export default function Sidebar({ config }: SidebarProps) {
  const path = useRouter().pathname
  const classNames = [
    'sidebar',
    'bg-primary-light',
    'md:mr-6',
    'mr-2',
    'md:p-6',
    'md:rounded',
    'shadow-sm',
  ].join(' ')

  const linkClassNames = (pageUrl: string) => {
    const isActivePage = path === pageUrl
    return [
      'transition-all',
      isActivePage ? 'bg-primary' : '',
      isActivePage ? 'text-light' : '',
      'hover:bg-primary',
      'hover:text-light',
      'md:font-semibold',
      'md:text-base',
      'text-sm',
      'py-1',
      'md:px-6',
      'px-3',
      'md:mb-1',
      'md:mt-1',
      'rounded',
      'no-underline',
      'text-center',
    ].join(' ')
  }
  return (
    <section className={classNames}>
      {config.pages.map(page => {
        return (
          <Link href={page.url} key={page.url}>
            <a className={linkClassNames(page.url)}>
              <span className="main">{page.name}</span>
              <span className="short">{page.shortName}</span>
            </a>
          </Link>
        )
      })}
    </section>
  )
}
