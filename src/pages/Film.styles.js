import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .elements {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 100%;

    @media (max-width: 600px), (max-height: 400px) {
      grid-template-columns: repeat(2, 50%);
    }
  }
`
