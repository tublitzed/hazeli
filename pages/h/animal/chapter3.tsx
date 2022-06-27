import { VideoPlayer } from '@components'
import { CustomLayoutAnimalBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-book/3.png',
    sources: [
      {
        src: '/videos/animal-book/3.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <h2>Animal Book - Chapter 3</h2>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalBook
