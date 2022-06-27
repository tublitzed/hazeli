import { VideoPlayer } from '@components'
import { CustomLayoutAnimalBook } from '@components/layout/layout'

export default function Index() {
  const videoJsOptions = {
    poster: '/img/animal-book/13.png',
    sources: [
      {
        src: '/videos/animal-book/13.mp4',
        type: 'video/mp4',
      },
    ],
  }
  return (
    <>
      <h2>Animal Book - Chapter 13</h2>
      <VideoPlayer {...videoJsOptions} />
    </>
  )
}

Index.getLayout = CustomLayoutAnimalBook
