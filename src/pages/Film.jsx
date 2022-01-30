import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'
import Loader from '../components/misc/Loader'
import Error from '../components/misc/Error'
import FilmTitle from '../components/FilmBanner/FilmBanner'
import FilmDescription from '../components/FilmDescription/FilmDescription'
import { Wrapper } from './Film.styles'

const Film = () => {
  const { filmId } = useParams()
  const { isLoading, error, data } = useFetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`
  )

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <FilmTitle data={data} />
      <FilmDescription data={data} />
    </Wrapper>
  )
}

export default Film
