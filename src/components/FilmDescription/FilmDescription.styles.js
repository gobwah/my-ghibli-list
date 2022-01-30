import styled from 'styled-components'

export const Wrapper = styled.section`
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
    margin: 0 5vw;

    .synopsis {
      text-align: justify;
    }

    .metadata {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        
        @media(max-width: 600px) {
          flex-direction: column;
          align-items; center;
        }

        p {
            width: 30%;
        }
    }
  }
`
