import logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom'
import { Wrapper, CustomLink } from './Header.styles'

const Header = () => {
  const location = useLocation()

  function saveScrollPosAtOrigin() {
    if (location.pathname === '/') {
      const mainEl = document.getElementById('main')
      mainEl.scroll(0, 0)
    } else {
      window.sessionStorage.setItem('lastY', 0)
    }
  }

  return (
    <Wrapper>
      <CustomLink to="/" onClick={saveScrollPosAtOrigin}>
        <img src={logo} alt="Logo MyGhibliList" height={50} />
        <h1>MyGhibliList</h1>
      </CustomLink>
    </Wrapper>
  )
}

export default Header
