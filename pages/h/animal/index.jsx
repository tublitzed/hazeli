import Link from 'next/link';
import { VideoPlayer } from '../../../components';

export default function Index() {
  const videoJsOptions = {
    controls: true,
    sources: [
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <main>
      <h2>Animal Book</h2>
      <VideoPlayer {...videoJsOptions} />
    </main>
  );
}
