import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    @media (min-width: 600px) and (min-height: 400px) {
      display: flex;
      overflow: auto;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
`
