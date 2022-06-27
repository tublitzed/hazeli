import { VideoPlayer, PageTitle } from '@components'
import { CustomLayoutAnimalBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-book/8.png',
    sources: [
      {
        src: '/videos/animal-book/8.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <PageTitle>Animal Book - Chapter 8</PageTitle>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalBook
