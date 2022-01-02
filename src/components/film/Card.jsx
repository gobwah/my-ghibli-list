import styled from 'styled-components'
import neutral from '../../assets/people/neutral.png'
import location from '../../assets/locations/location.png'
import specy from '../../assets/species/specy.png'
import vehicle from '../../assets/vehicles/vehicle.png'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25%;
  font-size: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: row;
    width: 40%;
    margin: 0;
    &:nth-child(even) {
      flex-direction: row-reverse;
      text-align: end;
    }
  }
`

const Image = styled.img`
  width: 5vw;
  margin-top: 3vh;
  @media (max-width: 600px) {
    width: 10vw;
    margin: 0 1vw;
  }
`

function CharacterCard({ label, type }) {
  let img
  switch (type) {
    case 'people':
      img = neutral
      break

    case 'species':
      img = specy
      break

    case 'locations':
      img = location
      break

    case 'vehicles':
      img = vehicle
      break

    default:
      img = ''
      break
  }

  return (
    <Card>
      <Image src={img} alt={type || 'Unknown'} />
      <h2>{label}</h2>
    </Card>
  )
}

export default CharacterCard
