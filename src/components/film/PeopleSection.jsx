import styled from 'styled-components'
import CardCarousel from '../misc/CardCarousel'
import CharacterCard from './CharacterCard'

const Wrapper = styled.section`
  width: 80%;
`

function PeopleSection({ people }) {
  return (
    <Wrapper>
      <h3>Characters</h3>
      <CardCarousel>
        {people.map((character, index) => (
          <CharacterCard key={`character-${index}`} url={character} />
        ))}
      </CardCarousel>
    </Wrapper>
  )
}

export default PeopleSection
