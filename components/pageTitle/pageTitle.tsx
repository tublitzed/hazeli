import React from 'react';
import { useRouter } from 'next/router';
import { isHazelSection } from '@helpers';
import clsx from 'clsx';

type PageTitleProps = {
  title: string;
  subtitle?: string;
};
export default function PageTitle({ title, subtitle }: PageTitleProps) {
  const isHazel = isHazelSection(useRouter());
  return (
    <h2
      className={clsx(
        'text-lg pb-2 mb-4 border-b-2 font-bold text-center',
        isHazel ? 'border-b-primary-light' : 'border-b-secondary-light'
      )}
    >
      {title}
      {subtitle && <span className="font-normal"> - {subtitle}</span>}
    </h2>
  );
}
