import { ExtraLayoutProps } from '@components/layout';
import { IconName } from '@components/common/Icon';

export type SidebarPage = {
  collectionType: ExtraLayoutProps['collectionType'];
  count: number;
  icon: IconName;
  name: string;
  srcPrefix: string;
  url: string;
};

export type SidebarConfig = {
  pages: SidebarPage[];
  root: {
    name: string;
    url: string;
  };
};

export const SIDEBAR_ALL_BOOKS: SidebarConfig = {
  root: {
    name: 'Hazeli TV',
    url: '/h',
  },
  pages: [
    {
      name: 'Animal Book',
      url: '/h/animal',
      collectionType: 'ANIMAL_BOOK',
      count: 14,
      icon: 'book',
      srcPrefix: 'animal-book',
    },
    {
      name: 'Animal Sticker Book',
      url: '/h/animal-sticker-book',
      collectionType: 'ANIMAL_STICKER_BOOK',
      count: 4,
      icon: 'horse-head',
      srcPrefix: 'animal-sticker-book',
    },
    {
      name: 'The Bear Show',
      url: '/h/bear-show',
      collectionType: 'BEAR_SHOW',
      count: 9,
      icon: 'paw',
      srcPrefix: 'bear-show',
    },
    {
      name: 'Phoebe Stories',
      url: '/h/phoebe',
      collectionType: 'PHOEBE',
      count: 1,
      icon: 'shoe-prints',
      srcPrefix: 'phoebe',
    },
    {
      name: 'The Book',
      url: '/h/the-book',
      collectionType: 'THE_BOOK',
      count: 10,
      icon: 'book-open',
      srcPrefix: 'the-book',
    },
  ],
};
