import styled from 'styled-components'
import { links } from '../utils/misc'

const FooterContainer = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin: 0 10px;
`
const LinkContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Link = styled.a`
  margin: 0 3px;
`

const LinkImg = styled.img`
  width: 2rem;
  height: 2rem;
`

function Footer() {
  return (
    <FooterContainer>
      <LinkContainer>
        {links &&
          links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              title={link.title}
              target="_blank"
              rel="noreferrer"
            >
              <LinkImg src={link.src} alt={link.title} />
            </Link>
          ))}
      </LinkContainer>
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
