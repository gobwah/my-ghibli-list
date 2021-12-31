import styled from 'styled-components'
import totoro from '../assets/totoro.png'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Error() {
  return (
    <ErrorContainer>
      <h2>404.</h2>
      <p>You might have lost yourself...</p>
      <img src={totoro} alt="Totoro" height="350rem" />
    </ErrorContainer>
  )
}

export default Error
