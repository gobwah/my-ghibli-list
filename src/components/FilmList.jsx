import { useFetch } from '../utils/hooks'
import styled from 'styled-components'
import { getAllFilmsUrl } from '../api/ghibliApi'
import { Loader } from '../utils/misc'

const List = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`

const FilmCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoaderContainer = styled.div`
  text-align: center;
`

const FilmImage = styled.img`
  width: 15rem;
  height: 20rem;
`

const FilmTitle = styled.h2`
  max-width: 10rem;
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
          <FilmCard key={film.id}>
            <FilmImage src={film.image} alt={film.title} />
            <FilmTitle>{film.title}</FilmTitle>
          </FilmCard>
        ))
      )}
    </List>
  )
}

export default FilmList
