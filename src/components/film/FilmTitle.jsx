import styled from 'styled-components'

const HEIGHT = 25
const MARGIN = 2.5
const UNIT = 'vh'

const TitleSection = styled.section`
  width: 100%;
  height: ${HEIGHT + 2 * MARGIN + UNIT};
`

const TitleBackground = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-size: 150%;
  @media (max-width: 600px) {
    background-size: 200%;
  }
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(10px) opacity(90%) grayscale(50%);
  height: ${HEIGHT + UNIT};
  margin: ${MARGIN + UNIT} auto;
`

const Title = styled.h2`
  text-align: center;
  position: relative;
  top: -${HEIGHT + 2 * MARGIN + UNIT};
  background: transparent;
  font-size: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
  height: ${HEIGHT + 2 * MARGIN + UNIT};
  margin: ${MARGIN + UNIT} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

function FilmTitle({ data }) {
  return (
    <TitleSection>
      <TitleBackground img={data.movie_banner} />
      <Title>
        {data.title}
        <br />
        {data.original_title}
        <br />
        {data.original_title_romanised}
      </Title>
    </TitleSection>
  )
}

export default FilmTitle
