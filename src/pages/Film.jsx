import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { url } from '../api/ghibliApi'
import { useFetch } from '../utils/hooks'
import Loader from '../components/misc/Loader'
import Error from '../components/misc/Error'
import FilmTitle from '../components/film/FilmTitle'
import FilmDescription from '../components/film/FilmDescription'
import PeopleSection from '../components/film/PeopleSection'
import SpeciesSection from '../components/film/SpeciesSection'
import LocationsSection from '../components/film/LocationsSection'
import VehiclesSection from '../components/film/VehiclesSection'

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
      <PeopleSection people={data.people} filmId={filmId} />
      <SpeciesSection species={data.species} filmId={filmId} />
      <LocationsSection locations={data.locations} filmId={filmId} />
      <VehiclesSection vehicles={data.vehicles} filmId={filmId} />
    </Wrapper>
  )
}

export default Film
