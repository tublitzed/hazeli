import { useRouter } from 'next/router'
import { isHazelSection } from '@helpers'

type PageTitleProps = {
  children: string;
};
export default function PageTitle({ children }: PageTitleProps) {
  const isHazel = isHazelSection(useRouter())
  const CssClasses = [
    'font-bold',
    'text-lg',
    'pb-2',
    'mb-4',
    'border-b-2',
    isHazel ? 'border-b-primary-light' : 'border-b-secondary-light',
  ].join(' ')
  return <h2 className={CssClasses}>{children}</h2>
}
