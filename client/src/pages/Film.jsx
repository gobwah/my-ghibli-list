import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'
import Loader from '../components/misc/Loader'
import Error from '../components/misc/Error'
import FilmBanner from '../components/FilmBanner/FilmBanner'
import FilmDescription from '../components/FilmDescription/FilmDescription'
import { Wrapper } from './Film.styles'
import FilmElement from '../components/FilmElement/FilmElement'
import people from '../assets/people.png'
import location from '../assets/location.png'
import specy from '../assets/specy.png'
import vehicle from '../assets/vehicle.png'

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
      <FilmBanner data={data} />
      <FilmDescription data={data} />
      <div className="elements">
        <FilmElement filmId={filmId} type="people" image={people} />
        <FilmElement filmId={filmId} type="locations" image={location} />
        <FilmElement filmId={filmId} type="species" image={specy} />
        <FilmElement filmId={filmId} type="vehicles" image={vehicle} />
      </div>
    </Wrapper>
  )
}

export default Film
