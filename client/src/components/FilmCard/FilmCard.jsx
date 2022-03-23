import { Wrapper, LinkWrapper } from './FilmCard.styles'

const FilmCard = ({ id, title, image }) => {
  return (
    <Wrapper img={image}>
      <LinkWrapper title={title} to={`/film/${id}`}>
        <span>+</span>
      </LinkWrapper>
    </Wrapper>
  )
}

export default FilmCard
