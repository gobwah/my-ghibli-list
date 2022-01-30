import styled from 'styled-components'

export const Wrapper = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin: 0 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0 3px;
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`
