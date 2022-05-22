const buildChapterBook = (bookRootSlug, numChapters) => {
  let chapterBookSidebar = {
    pages: [
      {
        name: 'Intro',
        url: bookRootSlug,
        shortName: 'Intro',
      },
    ],
  };
  for (let i = 1; i <= numChapters; i++) {
    chapterBookSidebar.pages.push({
      name: `Chapter ${i}`,
      shortName: i,
      url: `${bookRootSlug}/chapter${i}`,
    });
  }
  return chapterBookSidebar;
};
export const SIDEBAR_ANIMAL_BOOK = buildChapterBook('/h/animal', 13);

export const SIDEBAR_ANIMAL_STICKER_BOOK = buildChapterBook(
  '/h/animal-sticker-book',
  3
);
