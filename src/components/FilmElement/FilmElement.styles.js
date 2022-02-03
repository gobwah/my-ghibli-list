import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  text-align: center;

  h2 {
    text-transform: capitalize;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 5px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 30%;
      height: 175px;

      @media (max-width: 600px), (max-height: 400px) {
        height: 125px;
      }

      img {
        width: 50px;
        object-fit: contain;

        @media (max-width: 600px) {
          width: 30px;
        }
      }

      h3 {
        font-size: 0.75rem;

        @media (max-width: 600px), (max-height: 400px) {
          font-size: 0.6rem;
        }
      }
    }
  }
`
