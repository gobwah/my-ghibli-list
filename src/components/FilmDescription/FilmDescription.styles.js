import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 5vh 10vw;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  aside > img {
    height: 40vh;
  }

  article {
    margin: 0 25px;

    .synopsis {
      text-align: justify;
    }

    .metadata {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      text-align: center;

      @media (max-width: 600px) {
        align-items: flex-start;
      }

      p {
        width: 30%;
        padding: 5px;
      }
    }
  }
`
