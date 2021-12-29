import styled from 'styled-components'
import FooterLinkList from './FooterLinkList'

const FooterContainer = styled.footer`
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLinkList />
      <p>
        Powered by{' '}
        <a
          href="https://ghibliapi.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Ghibli API
        </a>
      </p>
    </FooterContainer>
  )
}

export default Footer
