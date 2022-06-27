import React from 'react'
import ReactPlayer from 'react-player'
// import styles from './videoPlayer.module.scss';

type Source = {
  src: string;
  type: string;
};
type Props = {
  sources: Source[];
  poster?: string;
};
export default class VideoPlayer extends React.Component<Props> {
  render() {
    return (
      <div className="video-player">
        <ReactPlayer
          url={this.props.sources[0].src}
          className="video-player-inner"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    )
  }
}
