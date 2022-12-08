import { useParams } from 'react-router-dom'
import Wrapper from '../../components/Wrapper/Wrapper'
import { useFetch } from '../../constants/hooks'
import { links } from '../../constants/links'
import { GhibliMovie } from '../../constants/types'
import ErrorPage from '../ErrorPage/ErrorPage'
import LoadingPage from '../LoadingPage/LoadingPage'

const MoviePage = () => {
  const { movieId } = useParams()
  const { data, error } = useFetch<GhibliMovie>(
    `${links.ghibliApi}/films/${movieId}`
  )

  if (error) {
    return <ErrorPage customText="An error occured..." />
  }

  if (!data) {
    return <LoadingPage />
  }

  console.log(`movie_banner: ${data.movie_banner}`)

  return (
    <Wrapper>
      <main className="relative w-full">
        <section className="w-full">
          <img
            src={data.movie_banner}
            alt={data.title}
            className="w-full h-full object-cover blur-sm"
          />
        </section>

        <section className="absolute top-0 right-0 bottom-0 left-0">
          <ul className="text-xl font-bold list-none flex flex-col justify-center items-center">
            <li>
              <h2>{data.title}</h2>
            </li>
            <li>
              <h2>{data.original_title}</h2>
            </li>
            <li>
              <h2>{data.original_title_romanised}</h2>
            </li>
          </ul>
        </section>
      </main>
    </Wrapper>
  )
}

export default MoviePage
