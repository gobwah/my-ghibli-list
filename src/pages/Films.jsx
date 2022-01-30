import { useFetch } from '../utils/hooks'
import FilmCard from '../components/FilmCard/FilmCard'
import Loader from '../components/misc/Loader'
import { useState } from 'react'
import Error from '../components/misc/Error'
import { Wrapper } from './Films.styles'

const Films = () => {
  const { isLoading, data, error } = useFetch(
    `https://ghibliapi.herokuapp.com/films?limit=250&fields=id,title,image`
  )
  const [filter, setFilter] = useState('')

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <section>
        {data
          .filter((film) =>
            film.title.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((film1, film2) => film1.title.localeCompare(film2.title, 'en'))
          .map((film) => (
            <FilmCard
              key={film.id}
              image={film.image}
              title={film.title}
              id={film.id}
            />
          ))}
      </section>
    </Wrapper>
  )
}

export default Films
