import { useFetch } from '../utils/hooks'
import styled from 'styled-components'
import { getAllFilmsUrl } from '../api/ghibliApi'
import { Loader } from '../utils/misc'
import FilmCard from './FilmCard'

const List = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`

const LoaderContainer = styled.div`
  text-align: center;
`

function FilmList() {
  const { isLoading, data, error } = useFetch(getAllFilmsUrl('id,title,image'))

  return (
    <List>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : error && error.trim() ? (
        <h2>Error: {error}</h2>
      ) : (
        data.map((film) => (
          <FilmCard key={film.id} image={film.image} title={film.title} />
        ))
      )}
    </List>
  )
}

export default FilmList
