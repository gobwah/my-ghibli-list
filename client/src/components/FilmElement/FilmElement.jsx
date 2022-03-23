import { useFetch } from '../../utils/hooks'
import Loader from '../misc/Loader'
import { Wrapper } from './FilmElement.styles'

const FilmElement = ({ filmId, type, image }) => {
  const { data, isLoading, error } = useFetch(
    `https://ghibliapi.herokuapp.com/${type}?limit=250`
  )

  return isLoading ? (
    <Loader />
  ) : error ? null : (
    <Wrapper>
      <h2>{type}</h2>
      <div>
        {data
          .filter((elt) =>
            elt.films.includes(
              `https://ghibliapi.herokuapp.com/films/${filmId}`
            )
          )
          .sort((elt1, elt2) => elt1.name.localeCompare(elt2.name, 'en'))
          .map((elt) => (
            <div key={elt.id}>
              <img src={image} alt={type} />
              <h3>{elt.name}</h3>
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default FilmElement
