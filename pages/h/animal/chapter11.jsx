import { Layout, VideoPlayer, Sidebar } from '@components';
import { SIDEBAR_ANIMAL_BOOK } from '@helpers/constants';
import { VIDEO_PLAYER_CONFIG } from '@components/video-player/videoPlayer';

export default function Index() {
  const videoJsOptions = {
    ...VIDEO_PLAYER_CONFIG,
    sources: [
      {
        src: '/videos/animal-book/11.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <>
      <h2>Animal Book - Chapter 11</h2>
      <VideoPlayer {...videoJsOptions} />
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar config={SIDEBAR_ANIMAL_BOOK} />
      {page}
    </Layout>
  );
};
