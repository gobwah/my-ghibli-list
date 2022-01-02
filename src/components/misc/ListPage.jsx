import { useState } from 'react'
import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import colors from '../../utils/colors'
import { useFetch } from '../../utils/hooks'
import ElementPage from './ElementPage'
import Error from './Error'
import Loader from './Loader'

const Wrapper = styled.div`
  padding: 0;
  margin: 0 1vw;
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

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

function ListPage({ type }) {
  const { isLoading, data, error } = useFetch(url[type].getAll())
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
          .filter((elt) =>
            elt.name.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((elt1, elt2) => elt1.name.localeCompare(elt2.name, 'en'))
          .map((elt, index) => (
            <ElementPage key={`type-${index}`} elt={elt} type={type} />
          ))}
      </List>
    </Wrapper>
  )
}

export default ListPage
