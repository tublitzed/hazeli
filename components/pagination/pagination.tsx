import React from 'react';
import clsx from 'clsx';
import { ExtraLayoutProps } from '@components/layout';
import { Button, Icon, Collection } from '@components';
import { useRouter } from 'next/router';
import { isHazelSection, getCollectionItem } from '@helpers';
import {
  GenerateLinkArgs,
  PageNameArgs,
  IsDisabledArgs,
  ButtonClassesArgs,
  ComponentProps,
} from './types';

const MAX_PAGE_BUTTONS = 8;

const getLinkPrefix = (
  collectionType: ExtraLayoutProps['collectionType']
): string => {
  return getCollectionItem(collectionType)?.url || '';
};

const getLinkItemTypeString = (
  collectionType: ExtraLayoutProps['collectionType']
): string => {
  if (
    collectionType === 'ANIMAL_BOOK' ||
    collectionType === 'ANIMAL_STICKER_BOOK'
  ) {
    return 'chapter';
  }
  return 'episode';
};

const generateLinkZeroIndexedCollections = ({
  linkType,
  pageIndex,
  pageCount,
  collectionType,
}: GenerateLinkArgs): string => {
  const prefix = getLinkPrefix(collectionType);
  const typeStr = getLinkItemTypeString(collectionType);
  let targetIndex = pageIndex === 0 ? null : pageIndex;
  if (linkType === 'ARROW_NEXT') {
    return pageIndex === pageCount
      ? '#'
      : `${prefix}/${typeStr}${(pageIndex + 1).toString()}`;
  } else if (linkType === 'ARROW_PREV') {
    targetIndex = pageIndex === 1 ? null : pageIndex - 1;
    return pageIndex === 0
      ? '#'
      : `${prefix}/${targetIndex ? typeStr : ''}${
          targetIndex ? targetIndex.toString() : ''
        }`;
  } else if (linkType === 'LINK_NEXT_PAGE' || linkType === 'LINK_PREV_PAGE') {
    const currentPage = getCurrentPage(pageIndex + 1);
    const targetPage =
      linkType === 'LINK_NEXT_PAGE'
        ? MAX_PAGE_BUTTONS * currentPage + 1
        : MAX_PAGE_BUTTONS * (currentPage - 1);
    return `${prefix}/${typeStr}${(targetPage - 1).toString()}`;
  }
  return `${prefix}/${targetIndex ? typeStr : ''}${
    targetIndex ? targetIndex.toString() : ''
  }`;
};

export const generateLink = ({
  linkType,
  collectionType,
  pageIndex,
  pageCount,
}: GenerateLinkArgs): string => {
  if (Collection.hasIntro(collectionType)) {
    return generateLinkZeroIndexedCollections({
      linkType,
      pageIndex,
      pageCount,
      collectionType,
    });
  }

  const prefix = getLinkPrefix(collectionType);
  const typeStr = getLinkItemTypeString(collectionType);

  if (linkType === 'ARROW_NEXT') {
    return pageIndex === pageCount
      ? '#'
      : `${prefix}/${typeStr}${(pageIndex + 1).toString()}`;
  } else if (linkType === 'ARROW_PREV') {
    return pageIndex === 1 ? '#' : `${prefix}/${typeStr}${pageIndex - 1}`;
  } else if (linkType === 'LINK_NEXT_PAGE' || linkType === 'LINK_PREV_PAGE') {
    const currentPage = getCurrentPage(pageIndex);
    const targetPage =
      linkType === 'LINK_NEXT_PAGE'
        ? MAX_PAGE_BUTTONS * currentPage + 1
        : MAX_PAGE_BUTTONS * (currentPage - 1);
    return `${prefix}/${typeStr}${targetPage.toString()}`;
  }
  return `${prefix}/${typeStr}${(pageIndex + 1).toString()}`;
};

const pageName = ({ pageIndex, collectionType }: PageNameArgs): string => {
  if (Collection.hasIntro(collectionType)) {
    return pageIndex === 0 ? 'Intro' : pageIndex.toString();
  }
  return (pageIndex + 1).toString();
};

const isDisabled = ({
  linkType,
  collectionType,
  current,
  pageCount,
}: IsDisabledArgs) => {
  const hasIntro = Collection.hasIntro(collectionType);
  if (linkType === 'ARROW_PREV') {
    return hasIntro ? current === 0 : current === 1;
  } else if (linkType === 'ARROW_NEXT') {
    return hasIntro ? current + 1 === pageCount : current === pageCount;
  }
  return false; // PAGE
};

const getButtonClasses = ({
  isActivePage,
  isHazelSection,
  disabled,
  linkType,
}: ButtonClassesArgs): string => {
  const common = [
    'inline-flex items-center text-sm transition-all py-2',
    linkType === 'PAGE' ? 'px-3 lg:px-5' : 'px-5',
  ].join(' ');
  if (disabled) {
    return clsx(common, 'text-gray-300/60', 'cursor-not-allowed');
  }
  return clsx(
    common,
    isActivePage
      ? isHazelSection
        ? 'text-primary bg-primary-light/25'
        : 'text-secondary'
      : '',
    isActivePage ? 'font-bold' : '',
    isHazelSection
      ? 'hover:text-primary-dark hover:border-primary-300 active:bg-primary-light/75 hover:bg-primary-light/25'
      : 'hover:text-gray-700 hover:border-gray-300',
    !isActivePage ? 'border-transparent text-gray-500' : ''
  );
};

type PageLinkType = 'PAGE_BTN' | 'LINK_PREV_PAGE' | 'LINK_NEXT_PAGE' | 'SKIP';

const getCurrentPage = (current: number): number => {
  // dumbest thing ever. TM
  if (current <= MAX_PAGE_BUTTONS) {
    return 1;
  } else if (current < MAX_PAGE_BUTTONS * 2) {
    return 2;
  } else if (current < MAX_PAGE_BUTTONS * 3) {
    return 3;
  }
  return 4;
};

const getPageLinkType = (
  current: number,
  pageIndex: number,
  pageCount: number,
  collectionType: ExtraLayoutProps['collectionType']
): PageLinkType => {
  if (pageCount < MAX_PAGE_BUTTONS) {
    return 'PAGE_BTN';
  }

  // This is terrible. Clean up when time.
  const hasIntro = Collection.hasIntro(collectionType);
  const currentPage = getCurrentPage(hasIntro ? current + 1 : current);
  if (currentPage === 1) {
    if (pageIndex < MAX_PAGE_BUTTONS) {
      return 'PAGE_BTN';
    }
    if (pageIndex === MAX_PAGE_BUTTONS) {
      return 'LINK_NEXT_PAGE';
    }
  } else if (currentPage === 2) {
    if (pageIndex === MAX_PAGE_BUTTONS - 1) {
      return 'LINK_PREV_PAGE';
    }
    if (pageIndex >= MAX_PAGE_BUTTONS && pageIndex < MAX_PAGE_BUTTONS * 2) {
      return 'PAGE_BTN';
    }
  }
  return 'SKIP';
};

export default function Pagination({
  pageCount,
  current,
  className,
  collectionType,
}: ComponentProps) {
  const hasIntro = Collection.hasIntro(collectionType);
  const isHazel = isHazelSection(useRouter());
  return (
    <nav
      className={clsx(
        'rounded bg-primary-light/20 flex items-center justify-between sm:px-0',
        className
      )}
    >
      <section className="-mt-px flex-1 flex">
        <Button
          className={getButtonClasses({
            linkType: 'ARROW_PREV',
            disabled: isDisabled({
              collectionType,
              current,
              linkType: 'ARROW_PREV',
              pageCount,
            }),
            isActivePage: false,
            isHazelSection: isHazel,
          })}
          clearDefaultCss={true}
          href={generateLink({
            collectionType,
            linkType: 'ARROW_PREV',
            pageCount,
            pageIndex: current,
          })}
          disabled={isDisabled({
            collectionType,
            current,
            linkType: 'ARROW_PREV',
            pageCount,
          })}
        >
          <span className="flex">
            <Icon className="mt-0.5 mr-3 text-gray-400" name="arrow-left" />
            Previous
          </span>
        </Button>
      </section>
      <section className="hidden md:-mt-px md:flex">
        {Array.from(Array(pageCount).keys()).map((pageIndex) => {
          const pageNumber = pageIndex + 1;
          const pageLinkType = getPageLinkType(
            current,
            pageIndex,
            pageCount,
            collectionType
          );
          if (pageLinkType === 'PAGE_BTN') {
            return (
              <Button
                key={`paginationButton__p${pageIndex}_${current}`}
                className={getButtonClasses({
                  disabled: false,
                  isActivePage: hasIntro
                    ? current === pageIndex
                    : current === pageNumber,
                  isHazelSection: isHazel,
                  linkType: 'PAGE',
                })}
                clearDefaultCss={true}
                href={generateLink({
                  collectionType,
                  linkType: 'PAGE',
                  pageCount,
                  pageIndex,
                })}
              >
                {pageName({
                  pageIndex,
                  collectionType,
                })}
              </Button>
            );
          } else if (
            pageLinkType === 'LINK_NEXT_PAGE' ||
            pageLinkType === 'LINK_PREV_PAGE'
          ) {
            return (
              <Button
                key={`paginationButton__${pageLinkType}`}
                className={
                  'px-2 text-2xl text-gray leading-none hover:bg-primary-light/25 active:bg-primary-light/75'
                }
                clearDefaultCss={true}
                href={generateLink({
                  linkType: pageLinkType,
                  collectionType,
                  pageCount,
                  pageIndex: current,
                })}
              >
                ...
              </Button>
            );
          }
          // pageLinkType === 'SKIP
          return null;
        })}
      </section>
      <section className="-mt-px flex-1 flex justify-end">
        <Button
          className={getButtonClasses({
            linkType: 'ARROW_NEXT',
            disabled: isDisabled({
              collectionType,
              current,
              linkType: 'ARROW_NEXT',
              pageCount,
            }),
            isActivePage: false,
            isHazelSection: isHazel,
          })}
          clearDefaultCss={true}
          href={generateLink({
            collectionType,
            linkType: 'ARROW_NEXT',
            pageCount,
            pageIndex: current,
          })}
          disabled={isDisabled({
            collectionType,
            current,
            linkType: 'ARROW_NEXT',
            pageCount,
          })}
        >
          <span className="flex">
            Next
            <Icon className="ml-3 text-gray-400" name="arrow-right" />
          </span>
        </Button>
      </section>
    </nav>
  );
}
