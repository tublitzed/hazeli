import React from 'react';
import ReactPlayer from 'react-player';
import styles from './videoPlayer.module.scss';

export default class VideoPlayer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.videoPlayer}>
        <ReactPlayer
          url={this.props.sources[0].src}
          className={styles.videoPlayerInner}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    );
  }
}
