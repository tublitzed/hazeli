import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ExtraLayoutProps } from '@components/layout';
import { Icon } from '@components';
import { isHazelSection } from '@helpers';
import { SidebarConfig, SidebarPage } from './helpers';

interface SidebarProps {
  config: SidebarConfig;
  layoutProps: ExtraLayoutProps;
}

const showCurrentNumber = (
  layoutProps: ExtraLayoutProps,
  item: SidebarPage
) => {
  if (layoutProps.collectionItem === undefined) {
    return false;
  }
  if (layoutProps.collectionItem === 0) {
    // explicitly hide for 0 based index
    return false;
  }
  return layoutProps.collectionType === item.collectionType;
};
export default function Sidebar({ config, layoutProps }: SidebarProps) {
  const router = useRouter();
  const path = router.pathname;
  const accentColorString = isHazelSection(router) ? 'primary' : 'secondary';
  return (
    <nav
      className="md:pr-4 space-y-4 min-w-[250px] md:max-w-[300px]"
      aria-label="Sidebar"
    >
      {' '}
      {config.root && (
        <Link key={config.root.name} href={config.root.url}>
          <a className="text-center text-gray font-medium text-base pb-2 hover:underline block">
            {config.root.name}
          </a>
        </Link>
      )}
      {config.pages.map((item) => (
        <Link key={item.name} href={item.url}>
          <a
            className={clsx(
              'transition-colors',
              `active:bg-primary/25`,
              `hover:text-gray-700 hover:bg-${accentColorString}-light`,
              path === item.url
                ? `text-${accentColorString}-dark bg-${accentColorString}-light`
                : `text-gray`,
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
            )}
          >
            <Icon
              name={item.icon!}
              className={clsx(
                `mr-2.5 ml-1 mt-0.5`,
                path === item.url
                  ? `text-${accentColorString}/50`
                  : `text-gray/50`
              )}
              size="sm"
            />
            <span className="flex-1">{item.name}</span>
            {item.count ? (
              <span
                className={clsx(
                  path === item.url
                    ? 'bg-white'
                    : 'bg-gray-100/50 group-hover:bg-white text-gray',
                  'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                )}
              >
                {showCurrentNumber(layoutProps, item)
                  ? `${layoutProps.collectionItem}/`
                  : ''}
                {item.count}
              </span>
            ) : null}
          </a>
        </Link>
      ))}
    </nav>
  );
}
