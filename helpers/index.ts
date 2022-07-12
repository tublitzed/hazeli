import { NextRouter } from 'next/router';
import { ExtraLayoutProps } from '@components/layout/layout';
import { SIDEBAR_ALL_BOOKS } from '@components/sidebar/helpers';

export { default as Analytics } from './analytics';

export const isHazelSection = (router: NextRouter): boolean => {
  return router.pathname.startsWith('/h');
};

export const getCollectionItem = (type: ExtraLayoutProps['collectionType']) => {
  return SIDEBAR_ALL_BOOKS.pages.find((p) => p.collectionType === type);
};
