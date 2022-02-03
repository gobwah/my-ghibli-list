import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 20px;

  @media (max-height: 400px) {
    height: 40vh;
  }

  div {
    height: 100%;
    margin: 0 auto;

    background-image: ${(props) => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(10px) opacity(90%) grayscale(50%);

    @media (max-width: 600px) {
      background-size: 200%;
    }
  }

  h2 {
    position: relative;
    top: -20vh;
    margin: 0;
    padding: 0;
    height: 20vh;

    @media (max-height: 400px) {
      top: -40vh;
      height: 40vh;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-align: center;
    font-size: 1.5rem;

    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  }
`
