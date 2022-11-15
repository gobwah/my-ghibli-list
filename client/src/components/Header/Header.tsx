import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'

import { images } from '../../constants/images'
import { Link } from 'react-router-dom'

const links = [
  { text: 'home', route: '/' },
  { text: 'movies', route: '/movies' },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="flex justify-center items-center">
      <div className="sm:hidden" onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <CgClose size={25} /> : <GiHamburgerMenu size={25} />}
      </div>

      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-secondary-gradient`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {links.map((link, index) => (
            <li
              key={`${link}-${index}`}
              className={`font-normal cursor-pointer text-white ${
                index === links.length - 1 ? 'mb-0' : 'mb-4'
              }`}
            >
              <Link to={link.route} className="uppercase">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="hidden list-none sm:flex justify-start items-center gap-5">
        {links.map((link, index) => (
          <li
            key={`${link}-${index}`}
            className="font-normal cursor-pointer text-white hover:text-primary"
          >
            <Link to={link.route} className="uppercase">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full">
      <Link to={'/'} className="flex justify-start items-center gap-1">
        <div className="w-16 sm:w-20">
          <img src={images.logo} alt="Logo" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold">MyGhibliList</h1>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
