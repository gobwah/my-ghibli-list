import { Wrapper } from './FilmDescription.styles'

const FilmDescription = ({ data }) => {
  return (
    <Wrapper>
      <aside>
        <img src={data.image} alt={data.title} />
      </aside>
      <article>
        <div className="synopsis">
          <h3>Synopsis</h3>
          <p>{data.description}</p>
        </div>
        <div className="metadata">
          <p>
            <b>{`Director${data.director.includes(',') ? 's' : ''}:`}</b>
            <br />
            {data.director}
          </p>
          <p>
            <b>{`Producer${data.producer.includes(',') ? 's' : ''}:`}</b>
            <br />
            {data.producer}
          </p>
          <p>
            <b>Release date:</b>
            <br />
            {data.release_date}
          </p>
          <p>
            <b>Release date:</b>
            <br />
            {data.running_time}min
          </p>
          <p>
            <b>Score:</b>
            <br />
            {data.rt_score}/100
          </p>
        </div>
      </article>
    </Wrapper>
  )
}

export default FilmDescription
