import styled from 'styled-components'
import neutral from '../../assets/neutral.png'
import location from '../../assets/location.png'
import specy from '../../assets/specy.png'
import vehicle from '../../assets/vehicle.png'
import { useFetch } from '../../utils/hooks'
import Loader from '../../components/misc/Loader'

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

function CharacterCard({ url, type }) {
  const { isLoading, error, data } = useFetch(url)
  let img, alt
  switch (type) {
    case 'people':
      img = neutral
      alt = 'People'
      break

    case 'species':
      img = specy
      alt = 'Specy'
      break

    case 'locations':
      img = location
      alt = 'Location'
      break

    case 'vehicles':
      img = vehicle
      alt = 'Vehicle'
      break

    default:
      img = alt = ''
      break
  }

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Image src={img} alt="Not Found" />
  ) : data.name ? (
    <Card>
      <Image src={img} alt={alt} />
      <h2>{data.name}</h2>
    </Card>
  ) : null
}

export default CharacterCard
