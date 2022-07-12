import { ExtraLayoutProps } from '@components/layout';

export type LinkType =
  | 'ARROW_NEXT'
  | 'ARROW_PREV'
  | 'PAGE'
  | 'LINK_NEXT_PAGE'
  | 'LINK_PREV_PAGE';

export interface GenerateLinkArgs {
  linkType: LinkType;
  collectionType: ExtraLayoutProps['collectionType'];
  pageIndex: number;
  pageCount: number;
}

export interface PageNameArgs {
  pageIndex: number;
  collectionType?: ExtraLayoutProps['collectionType'];
}

export interface IsDisabledArgs {
  linkType?: LinkType;
  collectionType?: ExtraLayoutProps['collectionType'];
  current: number;
  pageCount: number;
}

export interface ButtonClassesArgs {
  isActivePage: boolean;
  isHazelSection: boolean;
  disabled?: boolean;
  linkType: LinkType;
}

export type ComponentProps = {
  pageCount: number;
  current: number;
  className?: string;
  collectionType?: ExtraLayoutProps['collectionType'];
};
