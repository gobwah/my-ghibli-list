import { images } from '../../constants/images'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import Separator from '../Separator/Separator'

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center w-full">
        <Link to={'/'} className="flex justify-start items-center gap-1">
          <div className="w-16 sm:w-20">
            <img src={images.logo} alt="Logo" />
          </div>
          <h1 className="text-xl sm:text-3xl font-bold">MyGhibliList</h1>
        </Link>
        <Navbar />
      </header>
      <Separator />
    </>
  )
}

export default Header
