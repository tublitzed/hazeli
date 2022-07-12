import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

// import { ButtonType } from '@types';
// type Props = ButtonType;

interface Props {
  children: JSX.Element | string;
  download?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  clearDefaultCss?: boolean;
}
class Button extends React.Component<Props> {
  render() {
    const { children, className, clearDefaultCss, disabled, href, onClick } =
      this.props;
    const cssClasses = clsx(
      className,
      clearDefaultCss
        ? ''
        : 'py-2 px-6 border no-underline border-transparent text-sm font-medium rounded-md text-white transition-all',
      disabled
        ? clearDefaultCss
          ? ''
          : 'bg-gray-300'
        : clearDefaultCss
        ? ''
        : 'bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 shadow-md'
    );
    if (href) {
      return (
        <Link href={href}>
          <a className={cssClasses}>{children}</a>
        </Link>
      );
    }
    return (
      <button onClick={onClick} className={cssClasses} disabled={disabled}>
        {children}
      </button>
    );
  }
}

export default Button;
