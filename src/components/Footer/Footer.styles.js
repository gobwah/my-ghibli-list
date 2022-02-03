import styled from 'styled-components'

export const Wrapper = styled.footer`
  height: 7.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin: 0 10px;

  @media (max-height: 400px) {
    height: 15vh;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0 3px;
    }

    img {
      max-height: 4vh;
      object-fit: contain;

      @media (max-height: 400px) {
        max-height: 10vh;
      }
    }
  }
`
