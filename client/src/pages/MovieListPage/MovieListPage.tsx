import { useState } from 'react'

import MovieCard from '../../components/MovieCard/MovieCard'
import Wrapper from '../../components/Wrapper/Wrapper'
import { useFetch } from '../../constants/hooks'
import { GhibliMovie } from '../../constants/types'
import { links } from '../../constants/links'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'

const MovieListPage = () => {
  const { data, error } = useFetch<GhibliMovie[]>(links.ghibliApi + '/films')
  const [filter, setFilter] = useState('')

  if (error) {
    return <ErrorPage />
  }

  if (!data) {
    return <LoadingPage />
  }

  return (
    <Wrapper>
      <main className="flex flex-col justify-start items-center w-full">
        <section className="m-3 max-w-[90%] min-w-[50%]">
          <input
            type="text"
            className="bg-white border border-gray-300 text-black text-base font-poppins rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Search for a movie..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </section>

        <section className="flex flex-col xs:flex-row flex-wrap justify-start items-center w-full">
          {data
            .filter((movie) =>
              movie.title.toLowerCase().includes(filter.toLowerCase())
            )
            .sort((m1, m2) => m1.title.localeCompare(m2.title))
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
      </main>
    </Wrapper>
  )
}

export default MovieListPage
