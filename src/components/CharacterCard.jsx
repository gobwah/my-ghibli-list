import styled from 'styled-components'
import male from '../assets/male.png'
import female from '../assets/female.png'
import neutral from '../assets/neutral.png'
import { useFetch } from '../utils/hooks'
import Loader from './Loader'

const Card = styled.article`
  width: 10vw;
  margin: 0 10px;
`

const Image = styled.img`
  width: 5vw;
`

function CharacterCard({ url }) {
  const { isLoading, error, data } = useFetch(url)

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Image src={neutral} alt="Not Found" />
  ) : data.name ? (
    <Card>
      <Image
        src={
          data.gender === 'Male'
            ? male
            : data.gender === 'Female'
            ? female
            : neutral
        }
        alt={data.gender}
      />
      <h3>{data.name}</h3>
    </Card>
  ) : null
}

export default CharacterCard
