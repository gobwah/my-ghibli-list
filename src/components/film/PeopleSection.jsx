import styled from 'styled-components'
import { url } from '../../api/ghibliApi'
import { useApiSearch } from '../../utils/hooks'
import CardCarousel from '../misc/CardCarousel'
import CharacterCard from './CharacterCard'

const Wrapper = styled.section`
  width: 80%;
`

function PeopleSection({ filmId, people }) {
  const result = useApiSearch('films', 'people', filmId, people)

  return result.length && result[0] !== url.people.getSimpleAll() ? (
    <Wrapper>
      <h3>
        Characters <sub>{result.length}</sub>
      </h3>
      <CardCarousel>
        {result.map((character, index) => (
          <CharacterCard key={`character-${index}`} url={character} />
        ))}
      </CardCarousel>
    </Wrapper>
  ) : null
}

export default PeopleSection
