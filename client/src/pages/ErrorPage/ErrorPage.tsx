import { useRouteError } from 'react-router-dom'

import totoro from '../../assets/totoro.png'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function ErrorPage() {
  const error: any = useRouteError()

  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main className="flex justify-center items-center">
        <section>
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
        </section>
        <div className="flex flex-1 justify-center items-center max-w-[300px] max-h-[500px]">
          <img
            src={totoro}
            alt="Totoro"
            className="h-full w-full object-contain"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
