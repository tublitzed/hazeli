import { PageTitle } from '@components'
import { CustomLayoutAnimalStickerBook } from '@components/layout/layout'

export default function Index() {
  // const videoJsOptions = {
  //   poster: '/img/animal-sticker-book/1.png',
  //   sources: [
  //     {
  //       src: '/videos/animal-sticker-book/1.mp4',
  //       type: 'video/mp4',
  //     },
  //   ],
  // };
  return (
    <>
      <PageTitle>The Bear Show</PageTitle>
      <p>Coming Soon</p>
    </>
  )
}

Index.getLayout = CustomLayoutAnimalStickerBook
