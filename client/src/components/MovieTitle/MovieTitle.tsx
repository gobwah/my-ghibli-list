import React from 'react'

type MovieTitleProps = {
  title: string
  original_title: string
  original_title_romanised: string
}

const MovieTitle = ({
  title,
  original_title,
  original_title_romanised,
}: MovieTitleProps) => {
  return (
    <div className="flex justify-center items-center">
      <ul className="text-xl font-bold list-none flex flex-col justify-center items-center">
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <h2>{original_title}</h2>
        </li>
        <li>
          <h2>{original_title_romanised}</h2>
        </li>
      </ul>
    </div>
  )
}

export default MovieTitle
