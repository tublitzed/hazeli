import { VideoPlayer, PageTitle } from '@components'
import { CustomLayoutAnimalBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-book/9.png',
    sources: [
      {
        src: '/videos/animal-book/9.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <PageTitle>Animal Book - Chapter 9</PageTitle>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalBook
