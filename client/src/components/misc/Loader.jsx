import styled, { keyframes } from 'styled-components'
import colors from '../../utils/colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 80vh;

  div {
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
  }
`

const Loader = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  )
}

export default Loader
