import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import { useApiSearch } from '../../utils/hooks'
import CardCarousel from '../misc/CardCarousel'
import SpecyCard from './SpecyCard'

const Wrapper = styled.section`
  width: 80%;
`

function SpeciesSection({ filmId, species }) {
  const result = useApiSearch('films', 'species', filmId, species)

  return result.length && result[0] !== url.species.getSimpleAll() ? (
    <Wrapper>
      <h3>
        Species <sub>{result.length}</sub>
      </h3>
      <CardCarousel>
        {result.map((specy, index) => (
          <SpecyCard key={`specy-${index}`} url={specy} />
        ))}
      </CardCarousel>
    </Wrapper>
  ) : null
}

export default SpeciesSection
