import styled from 'styled-components'

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

function FilmDescription({ data }) {
  return (
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
  )
}

export default FilmDescription
