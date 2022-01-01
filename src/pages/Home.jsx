import FilmList from '../components/FilmList'
import { useEffect, useState } from 'react'

function Home() {
  const [scroll, setScroll] = useState(0)

  function scrollCallback(e) {
    setScroll(e.target.scrollTop)
  }

  useEffect(() => {
    const mainEl = document.getElementById('main')
    mainEl.addEventListener('scroll', scrollCallback)

    return () => {
      window.sessionStorage.setItem('lastY', scroll)
      mainEl.removeEventListener('scroll', scrollCallback)
    }
  })

  useEffect(() => {
    const prevY = window.sessionStorage.getItem('lastY')
    const mainEl = document.getElementById('main')
    setTimeout(() => mainEl.scroll(0, Number(prevY)), 250)
  }, [])

  return (
    <div>
      <FilmList />
    </div>
  )
}

export default Home
