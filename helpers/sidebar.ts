type SidebarPage = {
  name: string;
  url: string;
  shortName: string;
};

export type SidebarConfig = {
  pages: SidebarPage[];
};

const buildChapterBook = (
  bookRootSlug: string,
  numChapters: number,
): SidebarConfig => {
  const chapterBookSidebar = {
    pages: [
      {
        name: 'Intro',
        url: bookRootSlug,
        shortName: 'Intro',
      },
    ],
  }
  for (let i = 1; i <= numChapters; i++) {
    chapterBookSidebar.pages.push({
      name: `Chapter ${i}`,
      shortName: i.toString(),
      url: `${bookRootSlug}/chapter${i}`,
    })
  }
  return chapterBookSidebar
}
export const SIDEBAR_ANIMAL_BOOK = buildChapterBook('/h/animal', 13)

export const SIDEBAR_ANIMAL_STICKER_BOOK = buildChapterBook(
  '/h/animal-sticker-book',
  3,
)
