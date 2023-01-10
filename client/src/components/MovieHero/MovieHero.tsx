import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'

type MovieHeroProps = {
  img: {
    src: string
    alt: string
  }
  rt_score: number
  release_date: number
  running_time: number
}

const getRtScoreBgColor = (score: number) => {
  if (score > 75) {
    return 'green'
  } else if (score <= 75 && score > 50) {
    return 'yellow'
  } else if (score <= 50 && score > 25) {
    return 'orange'
  } else {
    return 'red'
  }
}

const MovieHero = ({
  img,
  rt_score,
  release_date,
  running_time,
}: MovieHeroProps) => {
  return (
    <div className="relative w-full">
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-[100px] object-cover blur-sm"
      />
      <ul className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center">
        <li
          className="flex justify-center items-center p-2 aspect-square rounded-full text-xs gap-1"
          style={{ backgroundColor: getRtScoreBgColor(rt_score) }}
        >
          {rt_score}
          <sub>/100</sub>
        </li>
        <li className="flex justify-center items-center p-2 aspect-square rounded-full text-xs bg-gray-600 bg-opacity-50 gap-1">
          <AiFillCalendar color="blue" />
          {release_date}
        </li>
        <li className="flex justify-center items-center p-2 aspect-square rounded-full text-xs bg-gray-600 bg-opacity-50 gap-1">
          <p>{running_time}</p>
          <p>min</p>
        </li>
      </ul>
    </div>
  )
}

export default MovieHero
