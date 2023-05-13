import React from 'react';
import { render, act, findAllByText } from '@testing-library/react';
import Collection, { CollectionProps } from '@components/collection/collection';
import '@testing-library/jest-dom/extend-expect';

// Mock the NextRouter object
const mockRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  isFallback: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
};
// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('Collection', () => {
  it('what!? robots writing my tests (sort of) -- wow', async () => {
    const props: CollectionProps = {
      collectionType: 'ANIMAL_BOOK',
      collectionItem: 1,
    };

    const { container, getByText } = await act(async () => {
      return render(<Collection {...props} />);
    });

    const animalBooks = await findAllByText(container, 'Animal Book');
    expect(animalBooks.length).toBeGreaterThan(0);
    expect(getByText('Intro')).toBeInTheDocument();
  });
});
