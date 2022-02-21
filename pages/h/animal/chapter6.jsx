import { VideoPlayer } from '@components';
import { CustomLayoutAnimalBook } from '@components/layout/layout';
import { VIDEO_PLAYER_CONFIG } from '@components/video-player/videoPlayer';

export default function Index() {
  const videoJsOptions = {
    ...VIDEO_PLAYER_CONFIG,
    sources: [
      {
        src: '/videos/animal-book/6.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <>
      <h2>Animal Book - Chapter 6</h2>
      <VideoPlayer {...videoJsOptions} />
    </>
  );
}

Index.getLayout = CustomLayoutAnimalBook;
