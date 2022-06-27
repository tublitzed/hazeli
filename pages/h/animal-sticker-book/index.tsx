import { VideoPlayer, PageTitle } from '@components'
import { CustomLayoutAnimalStickerBook } from '@components/layout/layout'
import { VIDEO_PLAYER_CONFIG } from '@components/video-player/videoPlayer'

export default function Index() {
  const videoJsOptions = {
    ...VIDEO_PLAYER_CONFIG,
    poster: '/img/animal-sticker-book/intro.png',
    sources: [
      {
        src: '/videos/animal-sticker-book/intro.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <PageTitle>Hazel&apos;s Animal Sticker Book</PageTitle>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalStickerBook
