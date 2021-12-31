import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../utils/colors'

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 600px) {
    justify-content: center;
  }
  align-items: center;
`

const CustomLink = styled(Link)`
  margin: 0px 10px;
  display: flex;
  @media (max-width: 600) {
    justify-content: center;
  }
  align-items: center;
  text-decoration: none;
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
  return (
    <Container>
      <CustomLink to="/">
        <img src={logo} alt="logo MyGhibliList" height={50} width={50} />
        <Title>MyGhibliList</Title>
      </CustomLink>
    </Container>
  )
}

export default Header
