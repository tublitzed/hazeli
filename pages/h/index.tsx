import Link from 'next/link';
import { PageTitle, Icon } from '@components';

export default function Index() {
  const cardStyles = [
    'px-6 py-20',
    'text-center',
    'text-gray',
    'font-medium',
    'rounded',
    'border',
    'bg-white',
    'drop-shadow-sm',
    'border-gray-100/50',
    'hover:bg-primary-light hover:drop-shadow hover:text-primary',
    'active:bg-primary/25',
    'active:text-white',
    'transition-colors',
    'group',
  ].join(' ');

  const iconStyles = [
    'mb-4',
    'text-gray/25',
    'group-hover:text-white',
    'transition-colors',
  ].join(' ');

  const iconSize = '2xl';
  return (
    <>
      <PageTitle title="Hazeli TV" />
      <div className="grid md:grid-cols-3 gap-3 text-primary">
        <Link href="/h/animal">
          <a className={cardStyles}>
            <Icon name="book" className={iconStyles} size={iconSize} />
            <span>Animal Book</span>
          </a>
        </Link>

        <Link href="/h/animal-sticker-book">
          <a className={cardStyles}>
            <Icon name="horse-head" className={iconStyles} size={iconSize} />
            <span>Hazel&apos;s Animal Sticker Book</span>
          </a>
        </Link>

        <Link href="/h/bear-show">
          <a className={cardStyles}>
            <Icon name="paw" className={iconStyles} size={iconSize} />
            <span>The Bear Show</span>
          </a>
        </Link>

        <Link href="/h/phoebe">
          <a className={cardStyles}>
            <Icon name="shoe-prints" className={iconStyles} size={iconSize} />
            <span>Phoebe Stories</span>
          </a>
        </Link>

        <Link href="/h/the-book">
          <a className={cardStyles}>
            <Icon name="book-open" className={iconStyles} size={iconSize} />
            <span>The Book</span>
          </a>
        </Link>

        <Link href="/h/adventures">
          <a className={cardStyles}>
            <Icon name="plane" className={iconStyles} size={iconSize} />
            <span>The Adventures</span>
          </a>
        </Link>
      </div>
    </>
  );
}
