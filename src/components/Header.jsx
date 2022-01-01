import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../utils/colors'
import { useLocation } from 'react-router-dom'

const Container = styled.header`
  height: 10vh;
  flex-shrink = 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

const CustomLink = styled(Link)`
  margin: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  @media (max-width: 600) {
    justify-content: center;
  }

  &:hover > h1 {
    @media (min-width: 600px) {
      text-shadow: ${colors.primary} 0 0 10px;
    }
  }
`

const Title = styled.h1`
  margin: 0 10px;
`

function Header() {
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
    <Container>
      <CustomLink to="/" onClick={saveScrollPosAtOrigin}>
        <img src={logo} alt="logo MyGhibliList" height={50} />
        <Title>MyGhibliList</Title>
      </CustomLink>
    </Container>
  )
}

export default Header
