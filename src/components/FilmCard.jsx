import { Link } from 'react-router-dom'
import colors from '../utils/colors'

const { default: styled } = require('styled-components')

const Card = styled.article`
  width: 13rem;
  height: 20rem;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105%;
  transition: background-size 500ms;

  &:hover a {
    opacity: 1;
  }

  &:hover {
    background-size: 150%;
  }
`

const LinkWrapper = styled(Link)`
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
`

const Content = styled.span`
  background-color: transparent;
  font-size: 8rem;
  color: ${colors.primary};
  cursor: pointer;
  user-select: none;
`

function FilmCard({ id, title, image }) {
  const session = window.sessionStorage
  const saveScrollPos = (e) => {
    session.setItem('lastY', window.scrollY)
  }

  return (
    <Card img={image}>
      <LinkWrapper title={title} to={`/film/${id}`} onClick={saveScrollPos}>
        <Content>+</Content>
      </LinkWrapper>
    </Card>
  )
}

export default FilmCard
