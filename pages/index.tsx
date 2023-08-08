import type { NextPage } from 'next'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import Title from '../components/title'
import { CarouselLight } from '../components/projectCards'
import { MyCarousel } from '../components/CarouselReactResponsive'
import GitHubSession from '../components/githubSession'
import Footer from '../components/footer'
import { BackgroundWave } from '../components/BackgroundWave'
import { Tunes } from '../components/TunesPlayer'
import YourPage from '../components/myPage'
import { ListReact95 } from '../components/listReact95'
// import BackgroundAnimation from '../components/audioAnimationBack'

const Home: NextPage = () => {
  return (
    <div className="isolate flex min-h-screen flex-col items-center justify-center bg-gray-300 py-2 dark:bg-gray-900">
      <Header />
      <div className="space-y-40">
        <Title />
        <ListReact95 />
        <Tunes />
        <CarouselLight />
        <MyCarousel projectType={'mobile'} />

        <GitHubSession />
        <BackgroundWave />
        <Contact />

        <Footer />

        <YourPage />
      </div>
    </div>
  )
}

export default Home
