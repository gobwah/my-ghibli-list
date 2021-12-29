import logo from '../assets/logo.png'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  @media (max-width: 700px) {
    justify-content: center;
  }
  align-items: center;
  margin: 2rem;
`

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo MyGhibliList" height={50} width={50} />
      <h1 style={{ margin: '0 10px' }}>MyGhibliList</h1>
    </Container>
  )
}

export default Header
