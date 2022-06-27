import { NextRouter } from 'next/router'
export { default as Analytics } from './analytics'
export { SIDEBAR_ANIMAL_BOOK, SIDEBAR_ANIMAL_STICKER_BOOK } from './sidebar'

export const isHazelSection = (router: NextRouter): boolean => {
  return router.pathname.startsWith('/h')
}
