import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

export const Wrapper = styled.header`
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    flex-shrink = 0;

    @media (max-width: 600px), (max-height: 400px) {
      justify-content: center;
    }
`

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  img {
    max-height: 10vh;
    object-fit: scale-down;

    @media (max-height: 400px) {
      max-height: 15vh;
    }
  }

  h1 {
    margin: 0 10px;
  }

  &:hover > h1 {
    @media (min-width: 600px) {
      text-shadow: ${colors.primary} 0 0 10px;
    }
  }
`
