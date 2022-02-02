import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  main {
    @media (min-width: 600px) {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      justify-content: center;
      overflow: auto;
    }
  }
`
