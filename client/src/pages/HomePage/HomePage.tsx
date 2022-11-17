import { useState } from 'react'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Loader from '../../components/Loader/Loader'
import { images } from '../../constants/images'

const HomePage = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <div className="h-screen w-screen brightness-50 blur-sm flex justify-start items-center">
        <img
          src={images.ghibliHero}
          alt="Ghibli Wallpaper"
          className={`h-[100%] w-[100%] object-cover ${loaded ? '' : 'hidden'}`}
          onLoad={() => {
            setLoaded(true)
          }}
        />
      </div>

      {loaded ? (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-center p-3">
          <Header />
          <Hero />
          <Footer />
        </div>
      ) : (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  )
}

export default HomePage
