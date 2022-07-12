import React from 'react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';
// import styles from './videoPlayer.module.scss';

export const VIDEO_PLAYER_CONFIG = {
  // anything that should be used for all vids.
};

type Source = {
  src: string;
  type: string;
};
type Props = {
  sources: Source[];
  poster?: string;
  className?: string;
};
export default class VideoPlayer extends React.Component<Props> {
  render() {
    const { className } = this.props;
    const url = this.props.sources[0].src;
    if (!ReactPlayer.canPlay(url)) {
      console.error(`Cannot play url: ${url}`);
    }
    return (
      <div
        className={clsx(`video-player rounded overflow-hidden`, className)}
        style={{ height: '500px' }}
      >
        <ReactPlayer
          url={url}
          className="video-player-inner"
          width="100%"
          height="100%"
          controls={true}
          pip={true}
        />
      </div>
    );
  }
}
