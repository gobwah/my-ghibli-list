import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

const ratio = 900 / 600

export const Wrapper = styled.article`
  height: ${(100 * ratio) / 6}vw;
  width: 16.66%;

  @media (max-width: 1200px) {
    height: ${(100 * ratio) / 5}vw;
    width: 20%;
  }
  @media (max-width: 1000px) {
    height: ${(100 * ratio) / 4}vw;
    width: 25%;
  }
  @media (max-width: 800px) {
    height: ${(100 * ratio) / 3}vw;
    width: 33.33%;
  }
  @media (max-width: 600px) {
    height: ${(100 * ratio) / 2}vw;
    width: 50%;
  }
  @media (max-width: 400px) {
    height: ${100 * ratio}vw;
    width: 100%;
  }

  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105%;
  transition: background-size 750ms;

  &:hover a {
    opacity: 1;
  }

  &:hover {
    background-size: 150%;
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
