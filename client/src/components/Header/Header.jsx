import logo from '../../assets/logo.png'
import { Wrapper, CustomLink } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <CustomLink to="/">
        <img src={logo} alt="Logo MyGhibliList" />
        <h1>MyGhibliList</h1>
      </CustomLink>
    </Wrapper>
  )
}

export default Header
