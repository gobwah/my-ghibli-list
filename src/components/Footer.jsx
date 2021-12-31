import styled from 'styled-components'
import FooterLinkList from './FooterLinkList'

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FooterLeft = styled.p`
  padding: 0 10px;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLinkList />
      <FooterLeft>
        Powered by{' '}
        <a
          href="https://ghibliapi.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Ghibli API
        </a>
      </FooterLeft>
    </FooterContainer>
  )
}

export default Footer
