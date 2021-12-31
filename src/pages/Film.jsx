import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getFilmUrl } from '../api/ghibliApi'
import { useFetch } from '../utils/hooks'
import Loader from '../components/Loader'
import Error from '../components/Error'

const Wrapper = styled.section`
  display: flex;
  flex-flow column;
  justify-content: center;
  height: 100%;
`
const HEIGHT = 25
const MARGIN = 2.5
const UNIT = 'vh'

const TitleSection = styled.section`
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
  width: 99vw;
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

const Decription = styled.section`
  margin: 5vh 10vw;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const About = styled.article`
  margin: 0 5vw;
`

const Aside = styled.aside`
  & > img {
    height: 40vh;
  }
`

const Synopsis = styled.div`
  text-align: justify;
`

const MetaData = styled.div`
  display: flex;
  @media(max-width: 600px) {
    flex-direction: column;
    align-items; center;
  }
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`

function Film() {
  const { filmId } = useParams()
  const { isLoading, error, data } = useFetch(getFilmUrl(filmId))

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error />
  ) : (
    <Wrapper>
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
      <Decription>
        <Aside>
          <img src={data.image} alt={data.title} />
        </Aside>
        <About>
          <Synopsis>
            <h3>Synopsis</h3>
            <p>{data.description}</p>
          </Synopsis>
          <MetaData>
            <p>
              <b>Director{data.director.includes(',') ? 's' : ''}:</b>{' '}
              {data.director}
            </p>
            <p>
              <b>Producer{data.producer.includes(',') ? 's' : ''}:</b>{' '}
              {data.producer}
            </p>
            <p>
              <b>Release date:</b> {data.release_date}
            </p>
            <p>
              <b>Release date:</b> {data.running_time}min
            </p>
            <p>
              <b>Score:</b> {data.rt_score}/100
            </p>
          </MetaData>
        </About>
      </Decription>
    </Wrapper>
  )
}

export default Film
