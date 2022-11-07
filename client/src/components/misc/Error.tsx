import totoro from '../../assets/totoro.png'

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>404.</h2>
      <p>You might have lost yourself...</p>
      <div className="flex flex-1 justify-center items-center w-[300px]">
        <img src={totoro} alt="Totoro" className="h-[100%] w-[100%]" />
      </div>
    </div>
  )
}

export default Error
