import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Wrapper = (props: React.PropsWithChildren) => (
  <main className="flex flex-col justify-between items-center m-2 sm:m-7 lg:m-10 xl:m-20">
    <Header />
    {props.children}
    <Footer />
  </main>
)

export default Wrapper
