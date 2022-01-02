import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { url } from '../api/ghibliApi'
import { useFetch } from '../utils/hooks'
import Loader from '../components/misc/Loader'
import Error from '../components/misc/Error'
import FilmTitle from '../components/film/FilmTitle'
import FilmDescription from '../components/film/FilmDescription'
import Section from '../components/film/Section'

const Wrapper = styled.section`
  display: flex;
  flex-flow column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`

function Film() {
  const { filmId } = useParams()
  const { isLoading, error, data } = useFetch(url.films.getOne(filmId))

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <FilmTitle data={data} />
      <FilmDescription data={data} />
      <Section array={data.people} filmId={filmId} type="people" />
      <Section array={data.species} filmId={filmId} type="species" />
      <Section array={data.locations} filmId={filmId} type="locations" />
      <Section array={data.vehicles} filmId={filmId} type="vehicles" />
    </Wrapper>
  )
}

export default Film
