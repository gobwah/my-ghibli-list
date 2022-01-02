import styled from 'styled-components'
import CardCarousel from '../misc/CardCarousel'
import CharacterCard from './CharacterCard'

const Wrapper = styled.section`
  width: 80%;
`

function PeopleSection({ people }) {
  let anyPeople
  if (people.length === 1) {
    let url = people[0]
    url = url.substring(url.lastIndexOf('/'))
    anyPeople = url.length !== 1
  } else {
    anyPeople = true
  }

  return anyPeople ? (
    <Wrapper>
      <h3>Characters</h3>
      <CardCarousel>
        {people.map((character, index) => (
          <CharacterCard key={`character-${index}`} url={character} />
        ))}
      </CardCarousel>
    </Wrapper>
  ) : null
}

export default PeopleSection
