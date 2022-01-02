import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getFilmUrl } from '../api/ghibliApi'
import { useFetch } from '../utils/hooks'
import Loader from '../components/misc/Loader'
import Error from '../components/misc/Error'
import FilmTitle from '../components/film/FilmTitle'
import FilmDescription from '../components/film/FilmDescription'
import PeopleSection from '../components/film/PeopleSection'

const Wrapper = styled.section`
  display: flex;
  flex-flow column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`

function Film() {
  const { filmId } = useParams()
  const { isLoading, error, data } = useFetch(getFilmUrl(filmId))

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <FilmTitle data={data} />
      <FilmDescription data={data} />
      <PeopleSection people={data.people} />
    </Wrapper>
  )
}

export default Film
