import { VideoPlayer } from '@components'
import { CustomLayoutAnimalStickerBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-sticker-book/2.png',
    sources: [
      {
        src: '/videos/animal-sticker-book/2.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <h2>Hazel&apos;s Animal Sticker Book - Chapter 2</h2>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalStickerBook
