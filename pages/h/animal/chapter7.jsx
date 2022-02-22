import { VideoPlayer } from '@components';
import { CustomLayoutAnimalBook } from '@components/layout/layout';
import { VIDEO_PLAYER_CONFIG } from '@components/video-player/videoPlayer';

export default function Index() {
  const videoJsOptions = {
    ...VIDEO_PLAYER_CONFIG,
    poster: '/img/animal-book/7.png',
    sources: [
      {
        src: '/videos/animal-book/7.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <>
      <h2>Animal Book - Chapter 7</h2>
      <VideoPlayer {...videoJsOptions} />
    </>
  );
}

Index.getLayout = CustomLayoutAnimalBook;
