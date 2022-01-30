import { Wrapper } from './FilmBanner.styles'

const FilmBanner = ({ data }) => {
  return (
    <Wrapper img={data.movie_banner}>
      <div className="banner"></div>
      <h2>
        {data.title}
        <br />
        {data.original_title}
        <br />
        {data.original_title_romanised}
      </h2>
    </Wrapper>
  )
}

export default FilmBanner
