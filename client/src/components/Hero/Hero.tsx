import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <main className="flex flex-1 flex-col justify-center items-center w-full my-5">
      <h2 className="font-bold text-3xl leading-snug text-center w-full m-3 mb-28">
        Let's start exploring Ghibli universe!
      </h2>
      <div className="flex justify-around gap-5 items-center w-full">
        <Button text="See list" onClick={() => navigate('/movies')} />
        <Button text="Pick random" onClick={() => navigate('/movies/54')} />
      </div>
    </main>
  )
}

export default Hero
