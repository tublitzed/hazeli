var animalSidebar = {
  pages: [
    {
      name: 'Intro',
      url: '/h/animal',
    },
  ],
};
for (var i = 1; i <= 13; i++) {
  animalSidebar.pages.push({
    name: `Chapter ${i}`,
    url: `/h/animal/chapter${i}`,
  });
}
export const SIDEBAR_ANIMAL_BOOK = animalSidebar;
