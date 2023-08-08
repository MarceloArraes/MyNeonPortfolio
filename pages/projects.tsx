import type { NextPage } from 'next'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import Title from '../components/title'
import { CarouselLight } from '../components/projectCards'
import { MyCarousel } from '../components/CarouselReactResponsive'
import Footer from '../components/footer'
import { ThemeToggle } from '../components/ThemeToggle'

const Projects: NextPage = () => {
  return (
    <div className="isolate flex min-h-screen flex-col items-center justify-center bg-gray-300 py-2 dark:bg-gray-900">
      <Header />
      <div className="space-y-40">
        <ThemeToggle />
        <CarouselLight />

        <MyCarousel projectType={'mobile'} />

        <Footer />
      </div>
    </div>
  )
}

export default Projects
