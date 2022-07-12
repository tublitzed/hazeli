import { ExtraLayoutProps } from '@components/layout';

export default function Page() {
  // LayoutProps below is what determines the structure of pages like this. See layout.ts
  return <></>;
}

const layoutProps: ExtraLayoutProps = {
  collectionType: 'PHOEBE',
  collectionItem: 1,
};

Page.layoutProps = layoutProps;
