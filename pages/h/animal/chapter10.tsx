import { VideoPlayer, PageTitle } from '@components'
import { CustomLayoutAnimalBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-book/10.png',
    sources: [
      {
        src: '/videos/animal-book/10.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <PageTitle>Animal Book - Chapter 10</PageTitle>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalBook
