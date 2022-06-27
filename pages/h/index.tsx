import Link from 'next/link'
import { PageTitle } from '@components'
export default function Index() {
  const linkStyles = [
    'underline',
    'hover:no-underline',
  ].join(' ')
  return (
    <>
      <PageTitle>Hazel&apos;s Page</PageTitle>
      <ul>
        <li className={linkStyles}>
          <Link href="/h/animal">Animal Book</Link>
        </li>
        <li className={linkStyles}>
          <Link href="/h/animal-sticker-book">
            Hazel&apos;s Animal Sticker Book
          </Link>
        </li>
        <li className={linkStyles}>
          <Link href="/h/bear-show">The Bear Show</Link>
        </li>
      </ul>
    </>
  )
}
