import styled from 'styled-components'
import FooterLinkList from './FooterLinkList'

const FooterContainer = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin: 0 10px;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLinkList />
      <a
        href="https://ghibliapi.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Ghibli API
      </a>
    </FooterContainer>
  )
}

export default Footer
