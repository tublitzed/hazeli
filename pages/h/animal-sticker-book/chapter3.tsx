import { VideoPlayer, PageTitle } from '@components'
import { CustomLayoutAnimalStickerBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-sticker-book/3.png',
    sources: [
      {
        src: '/videos/animal-sticker-book/3.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <PageTitle>Hazel&apos;s Animal Sticker Book - Chapter 3</PageTitle>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalStickerBook
