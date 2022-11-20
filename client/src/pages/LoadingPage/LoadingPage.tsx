import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'

const LoadingPage = () => (
  <div className="h-screen flex flex-col justify-start items-center p-3">
    <Header />
    <main className="flex flex-1 flex-col justify-center items-center sm:flex-row">
      <Loader />
    </main>
    <Footer />
  </div>
)

export default LoadingPage
