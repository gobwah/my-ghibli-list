import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import FilmCard from './FilmCard'
import Loader from '../misc/Loader'
import { useState } from 'react'
import colors from '../../utils/colors'
import Error from '../misc/Error'

const Wrapper = styled.div`
  padding: 0;
  text-align: center;
`

const Filter = styled.input`
  margin: 1rem;
  padding: 5px 1rem;
  border: 1px black solid;
  border-radius: 5% / 50%;
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  max-width: 50%;
  min-width: 30%;
  outline: ${colors.secondary} 1px solid;

  &:focus {
    border: ${colors.primary} 1px solid;
    outline: ${colors.primary} 1px solid;
  }
`

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

function FilmList() {
  const { isLoading, data, error } = useFetch(
    url.films.getAll('id,title,image')
  )
  const [filter, setFilter] = useState('')

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
      <Filter
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <List>
        {data
          .filter((film) =>
            film.title.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((film1, film2) => film1.title.localeCompare(film2.title, 'en'))
          .map((film) => (
            <FilmCard
              key={film.id}
              image={film.image}
              title={film.title}
              id={film.id}
            />
          ))}
      </List>
    </Wrapper>
  )
}

export default FilmList
