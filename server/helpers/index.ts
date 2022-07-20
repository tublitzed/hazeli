import { stuff } from 'server/stuff';

export const something = (str: string) => {
  return `something: ${str}, ${stuff(str)}`;
};
