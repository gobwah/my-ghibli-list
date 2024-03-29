import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Wrapper = (props: React.PropsWithChildren) => (
  <main className="flex flex-col justify-between items-center p-3">
    <Header />
    {props.children}
    <Footer />
  </main>
)

export default Wrapper
