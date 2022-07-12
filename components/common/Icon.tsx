import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faArrowLeft,
  faArrowRight,
  faPaw,
  faHorseHead,
  faBookOpen,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons';

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'book-open'
  | 'book'
  | 'horse-head'
  | 'paw'
  | 'shoe-prints';

// TODO: type this
const icons = {
  'arrow-left': faArrowLeft,
  'arrow-right': faArrowRight,
  'book-open': faBookOpen,
  'horse-head': faHorseHead,
  'shoe-prints': faShoePrints,
  book: faBook,
  paw: faPaw,
};

interface Props {
  // anything used needs to be imported and added above via library.add
  name: string;
  className?: string;
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
}
class Icon extends React.Component<Props> {
  render() {
    const { name, className, size = 5 } = this.props;
    return (
      <div className={className}>
        <FontAwesomeIcon
          icon={(icons as any)[name]}
          className={size ? `fa-${size}` : ''}
        />
      </div>
    );
  }
}

export default Icon;
