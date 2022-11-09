import totoro from '../../assets/totoro.png'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error: any = useRouteError()

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-8xl font-poppins">404.</h2>
        <p className="font-poppins text-2xl text-center m-3">
          You might have lost yourself... Go back{' '}
          <a href="/" className="decoration-solid underline">
            home
          </a>
          ?
        </p>
        {error && (
          <p className="font-poppins text-2xl m-5">
            <i>{error.statusText || error.message}</i>
          </p>
        )}
        <div className="flex flex-1 justify-center items-center max-w-[300px] max-h-[500px]">
          <img
            src={totoro}
            alt="Totoro"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
