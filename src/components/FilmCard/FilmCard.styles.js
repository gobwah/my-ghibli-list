import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

const RATIO = 900 / 600
/**
 *
 * @param numOfRows
 * @returns Size in vw (depending on width)
 */
const calcH = (numOfRows) => `${(100 * RATIO) / numOfRows}vw`

export const Wrapper = styled.article`
  height: ${calcH(6)};
  width: 16.66%;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    height: ${calcH(5)};
    width: 20%;
  }
  @media (max-width: 1000px) {
    height: ${calcH(4)};
    width: 25%;
  }
  @media (max-width: 800px) {
    height: ${calcH(3)};
    width: 33.33%;
  }
  @media (max-width: 600px) {
    height: ${calcH(2)};
    width: 50%;
  }
  @media (max-width: 400px) {
    height: ${calcH(1)};
    width: 100%;
  }

  &:hover a {
    opacity: 1;
  }
`

export const LinkWrapper = styled(Link)`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.applyAlpha(colors.secondary, 0.8)};
  transition: opacity 500ms;
  text-decoration: none;

  span {
    background-color: transparent;
    font-size: 8rem;
    color: ${colors.primary};
    cursor: pointer;
    user-select: none;
  }
`
