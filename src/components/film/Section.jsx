import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import { useApiSearch } from '../../utils/hooks'
import CardCarousel from '../misc/CardCarousel'
import Card from './Card'

const Wrapper = styled.section`
  width: 80%;
`

function Section({ filmId, type }) {
  const result = useApiSearch('films', type, filmId)

  return result.length && result[0] !== url[type].getSimpleAll() ? (
    <Wrapper>
      <h3 style={{ textTransform: 'capitalize' }}>
        {type} <sub>{result.length}</sub>
      </h3>
      <CardCarousel>
        {result.map((elt, index) => (
          <Card key={`${type}-${index}`} type={type} label={elt.name} />
        ))}
      </CardCarousel>
    </Wrapper>
  ) : null
}

export default Section
