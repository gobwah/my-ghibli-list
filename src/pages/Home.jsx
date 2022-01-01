import FilmList from '../components/FilmList'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    const prevY = window.sessionStorage.getItem('lastY')
    setTimeout(() => window.scroll(0, Number(prevY)), 250)
  }, [])

  return (
    <div>
      <FilmList />
    </div>
  )
}

export default Home
