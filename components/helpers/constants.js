const buildChapterBook = (bookRootSlug, numChapters) => {
  var chapterBookSidebar = {
    pages: [
      {
        name: 'Intro',
        url: bookRootSlug,
      },
    ],
  };
  for (var i = 1; i <= numChapters; i++) {
    chapterBookSidebar.pages.push({
      name: `Chapter ${i}`,
      url: `${bookRootSlug}chapter${i}`,
    });
  }
};
export const SIDEBAR_ANIMAL_BOOK = buildChapterBook('h/animal/', 13);

export const SIDEBAR_ANIMAL_STICKER_BOOK = buildChapterBook(
  'h/animal-sticker-book/',
  2
);
