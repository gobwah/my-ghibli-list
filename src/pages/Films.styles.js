import colors from '../utils/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;

  input {
    margin: 10px 0;
    padding: 5px 1rem;
    border: 1px black solid;
    border-radius: 5% / 50%;
    font-size: 2rem;
    max-width: 50%;
    min-width: 30%;
    outline: white 2px solid;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }

    &:focus {
      border: ${colors.primary} 1px solid;
      outline: ${colors.primary} 1px solid;
    }
  }

  section {
    display: flex;
    flex-wrap: wrap;
  }
`
