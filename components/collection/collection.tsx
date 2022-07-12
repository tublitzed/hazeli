import * as React from 'react';
import { ExtraLayoutProps as Props } from '@components/layout';
import { VideoPlayer, PageTitle, Pagination, Sidebar } from '@components';
import { S3_BUCKET_PREFIX } from '@constants';
import { SIDEBAR_ALL_BOOKS } from '@components/sidebar/helpers';

interface CollectionProps {
  collectionType: Props['collectionType'];
  collectionItem: Props['collectionItem'];
}
class Collection extends React.Component<CollectionProps> {
  get titleComponents(): string[] {
    const { collectionItem, collectionType } = this.props;
    const title =
      SIDEBAR_ALL_BOOKS.pages.find((p) => p.collectionType === collectionType)
        ?.name || '';

    // Collections without intros:
    if (this.hasIntro) {
      return [title, `Episode ${collectionItem}`];
    }

    // Collections with intros:
    return [
      title,
      collectionItem === 0 ? 'Intro' : `Chapter ${collectionItem}`,
    ];
  }

  get hasIntro(): boolean {
    const { collectionType } = this.props;
    return (
      collectionType === 'ANIMAL_BOOK' ||
      collectionType === 'ANIMAL_STICKER_BOOK'
    );
  }

  get collectionTotal(): number {
    const { collectionType } = this.props;
    return (
      SIDEBAR_ALL_BOOKS.pages.find((p) => p.collectionType === collectionType)
        ?.count || 0
    );
  }

  get src() {
    const { collectionType, collectionItem } = this.props;
    const prefix = SIDEBAR_ALL_BOOKS.pages.find(
      (p) => p.collectionType === collectionType
    )?.srcPrefix;
    if (this.hasIntro) {
      return `${S3_BUCKET_PREFIX}${prefix}/${
        collectionItem === 0 ? 'intro' : collectionItem
      }.mp4`;
    }
    return `${S3_BUCKET_PREFIX}${prefix}/e${collectionItem}.mp4`;
  }

  get poster() {
    const { collectionType, collectionItem } = this.props;
    if (collectionType === 'BEAR_SHOW') {
      return `/img/bear-show/${collectionItem}.png`;
    } else if (collectionType === 'ANIMAL_BOOK') {
      return `/img/animal-book/${collectionItem}.png`;
    }
    return `/img/animal-sticker-book/${collectionItem}.png`;
  }

  get videoJsOptions() {
    return {
      poster: this.poster,
      sources: [
        {
          src: this.src,
          type: 'video/mp4',
        },
      ],
    };
  }

  render() {
    const { collectionItem, collectionType } = this.props;
    return (
      <>
        <PageTitle
          title={this.titleComponents[0]}
          subtitle={this.titleComponents[1]}
        />
        <div className="flex-none grid md:flex">
          <div className="order-last md:order-first mt-4 md:mt-0 border-y p-2 border-gray-100 md:border-none">
            <Sidebar
              layoutProps={{
                collectionItem,
                collectionType,
              }}
              config={SIDEBAR_ALL_BOOKS}
            />
          </div>
          <div className="md:container md:mx-auto grid">
            <VideoPlayer
              {...this.videoJsOptions}
              className="order-last md:order-first"
            />
            <Pagination
              className="mt-0 mb-4 md:mt-4 order-first md:order-last"
              collectionType={collectionType}
              current={collectionItem!}
              pageCount={this.collectionTotal}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Collection;
