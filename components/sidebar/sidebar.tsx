import Link from 'next/link';
import clsx from 'clsx';
import { ExtraLayoutProps } from '@components/layout';
import { Icon } from '@components';
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
  // TODO: this doesn't quite seem to work with template strings passed to clsx. If ever
  // needed for secondary scheme, need to fix.
  // const accentColorString = isHazelSection(router) ? 'primary' : 'secondary';
  return (
    <nav
      className="md:pr-4 space-y-4 min-w-[250px] md:max-w-[300px]"
      aria-label="Sidebar"
    >
      {' '}
      {config.root && (
        <Link key="sidebar_root" href={config.root.url}>
          <a className="text-center text-gray font-medium text-base pb-2 hover:underline block">
            {config.root.name}
          </a>
        </Link>
      )}
      {config.pages.map((item) => {
        const isActive = layoutProps.collectionType === item.collectionType;
        return (
          <Link key={`sidebar_${item.collectionType}`} href={item.url}>
            <a
              className={clsx(
                'transition-colors',
                `active:bg-primary/25`,
                `hover:text-gray-700 hover:bg-primary-light`,
                isActive ? `text-primary-dark bg-primary-light` : `text-gray`,
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <Icon
                name={item.icon!}
                className={clsx(
                  `mr-2.5 ml-1 mt-0.5`,
                  isActive ? `text-primary/50` : `text-gray/50`
                )}
                size="sm"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={clsx(
                    isActive
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
        );
      })}
    </nav>
  );
}
