import clsx from 'clsx';
import { ExtraLayoutProps } from '@components/layout';
import { Button, Icon } from '@components';
import { useRouter } from 'next/router';
import { isHazelSection } from '@helpers';
import {
  GenerateLinkArgs,
  PageNameArgs,
  IsDisabledArgs,
  ButtonClassesArgs,
  ComponentProps,
} from './types';

const MAX_PAGE_BUTTONS = 8;

const getLinkPrefx = (
  collectionType: ExtraLayoutProps['collectionType']
): string => {
  if (collectionType === 'ANIMAL_BOOK') {
    return '/h/animal';
  } else if (collectionType === 'ANIMAL_STICKER_BOOK') {
    return '/h/animal-sticker-book';
  }
  return '/h/bear-show';
};

const getLinkItemTypeString = (
  collectionType: ExtraLayoutProps['collectionType']
): string => {
  if (collectionType === 'BEAR_SHOW') {
    return 'episode';
  }
  return 'chapter';
};

const generateLinkZeroIndexedCollections = ({
  linkType,
  pageIndex,
  pageCount,
  collectionType,
}: GenerateLinkArgs): string => {
  const prefix = getLinkPrefx(collectionType);
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
  if (
    collectionType === 'ANIMAL_BOOK' ||
    collectionType === 'ANIMAL_STICKER_BOOK'
  ) {
    return generateLinkZeroIndexedCollections({
      linkType,
      pageIndex,
      pageCount,
      collectionType,
    });
  }
  const prefix = getLinkPrefx(collectionType);
  const typeStr = getLinkItemTypeString(collectionType);

  if (linkType === 'ARROW_NEXT') {
    return pageIndex === pageCount
      ? '#'
      : `${prefix}/${typeStr}${(pageIndex + 1).toString()}`;
  } else if (linkType === 'ARROW_PREV') {
    return pageIndex === 1 ? '#' : `${prefix}/${typeStr}${pageIndex - 1}`;
  }
  return `${prefix}/${typeStr}${(pageIndex + 1).toString()}`;
};

const pageName = ({ pageIndex, collectionType }: PageNameArgs): string => {
  if (collectionType === 'BEAR_SHOW') {
    return (pageIndex + 1).toString();
  }
  return pageIndex === 0 ? 'Intro' : pageIndex.toString();
};

const isDisabled = ({
  linkType,
  collectionType,
  current,
  pageCount,
}: IsDisabledArgs) => {
  if (linkType === 'ARROW_PREV') {
    return collectionType === 'BEAR_SHOW' ? current === 1 : current === 0;
  } else if (linkType === 'ARROW_NEXT') {
    return collectionType === 'BEAR_SHOW'
      ? current === pageCount
      : current + 1 === pageCount;
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

const showPageBtn = (
  current: number,
  pageIndex: number,
  pageCount: number
): boolean => {
  // Assume 0 based index.
  if (current === pageIndex) {
    return true;
  }

  // always show the last 2 items
  if (pageCount - pageIndex <= 2) {
    return true;
  }

  // always show the first 2 items
  if (pageIndex <= 1) {
    return true;
  }

  for (let i = 1; i <= 1; i++) {
    if (current + i === pageIndex) {
      return true;
    }
    if (current - i === pageIndex) {
      return true;
    }
  }

  return false;
};

export default function Pagination({
  pageCount,
  current,
  className,
  collectionType,
}: ComponentProps) {
  const isHazel = isHazelSection(useRouter());
  const needToCollapsePageBtns = pageCount > MAX_PAGE_BUTTONS;
  let hasShownSkip = false;
  return (
    <nav
      className={clsx(
        'rounded bg-primary-light/20 flex items-center justify-between sm:px-0',
        className
      )}
    >
      <section className="-mt-px w-0 flex-1 flex">
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
          let showBtn = true;
          if (needToCollapsePageBtns) {
            showBtn = showPageBtn(current, pageIndex, pageCount);
          }
          if (!showBtn) {
            const contentToRender = hasShownSkip ? null : (
              <div
                key={`divider_${pageNumber}`}
                className="px-2 inline-flex items-center text-base text-gray"
              >
                ...
              </div>
            );
            hasShownSkip = true;
            return contentToRender;
          }
          return (
            <Button
              key={`paginationButton__p${pageIndex}_${current}`}
              className={getButtonClasses({
                disabled: false,
                isActivePage:
                  collectionType === 'BEAR_SHOW'
                    ? current === pageNumber
                    : current === pageIndex,
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
        })}
      </section>
      <section className="-mt-px w-0 flex-1 flex justify-end">
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
