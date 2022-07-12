import { NextRouter } from 'next/router';

export { default as Analytics } from './analytics';

export const isHazelSection = (router: NextRouter): boolean => {
  return router.pathname.startsWith('/h');
};
