import { ReactElement } from 'react';
import clsx from 'clsx';
import { useRouter, NextRouter } from 'next/router';
import { Header, Collection } from '@components';
import { isHazelSection } from '@helpers';

const getRootClasses = (router: NextRouter, pageName?: string): string => {
  const sectionClass =
    pageName !== 'Home'
      ? isHazelSection(router)
        ? 'section--hazel'
        : 'section--eli'
      : '';
  const rootClasses = [
    'antialiased',
    'bg-gray-50 min-h-screen',
    sectionClass,
    pageName ? `page--${pageName.toLowerCase()}` : '',
  ].join(' ');
  return rootClasses;
};

export interface ExtraLayoutProps {
  collectionType?:
    | 'ANIMAL_STICKER_BOOK'
    | 'BEAR_SHOW'
    | 'ANIMAL_BOOK'
    | 'PHOEBE'
    | 'THE_BOOK';
  collectionItem?: number;
  pageName?: 'Home';
}

interface LayoutProps extends ExtraLayoutProps {
  children: ReactElement | ReactElement[];
}

export default function Layout({
  children,
  pageName,
  collectionType,
  collectionItem,
}: LayoutProps) {
  const router = useRouter();
  const isCollection = collectionItem !== undefined && collectionType;
  return (
    <>
      <div className={getRootClasses(router, pageName)}>
        <div
          className={pageName === 'Home' ? 'bg-gradient-to-t from-primary' : ''}
        >
          {pageName !== 'Home' ? <Header /> : ''}
          <main className={clsx(pageName !== 'Home' ? 'px-6 py-4' : '')}>
            {isCollection ? (
              <Collection
                collectionItem={collectionItem}
                collectionType={collectionType}
              />
            ) : (
              children
            )}
          </main>
        </div>
      </div>
    </>
  );
}
