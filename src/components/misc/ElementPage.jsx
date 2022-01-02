import styled from 'styled-components'
import { getImage } from '../../utils/misc'

const Card = styled.article`
  padding: 2%;
  flex-grow: 1;
  flex-basis: 16%;
  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`

const Image = styled.img`
  max-width: 10vw;
`

function ElementPage({ type, elt }) {
  return (
    <Card>
      <Image src={getImage(type, elt)} alt={type || 'Not found'} />
      <h2>{(elt && elt.name) || 'Unknown'}</h2>
    </Card>
  )
}

export default ElementPage
