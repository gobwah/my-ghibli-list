import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

export const Wrapper = styled.header`
    height: 10vh;
    flex-shrink = 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;

    @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    }
`

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  @media (max-width: 600) {
    justify-content: center;
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
