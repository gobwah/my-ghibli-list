import styled from 'styled-components'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import neutral from '../../assets/neutral.png'
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
      <h2>{data.name}</h2>
    </Card>
  ) : null
}

export default CharacterCard
