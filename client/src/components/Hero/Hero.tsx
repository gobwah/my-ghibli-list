import Button from '../Button/Button'

const Hero = () => {
  return (
    <main className="flex flex-1 flex-col justify-center items-center w-full my-5">
      <h2 className="font-bold text-3xl leading-snug text-center w-full m-3 mb-28">
        Let's start exploring Ghibli universe!
      </h2>
      <div className="flex justify-around gap-5 items-center w-full">
        <Button
          text="See list"
          onClick={() => window.open('/movies', '_self')}
        />
        <Button
          text="Pick random"
          onClick={() => window.open('/movies', '_self')}
        />
      </div>
    </main>
  )
}

export default Hero
