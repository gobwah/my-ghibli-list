import styled from 'styled-components'
import { links } from '../utils/misc'

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
`

const Link = styled.p`
  margin: 3px;
`

const LinkImg = styled.img`
  width: 2rem;
  height: 2rem;
`

function FooterLinkList() {
  return (
    <Container>
      {links &&
        links.map((link) => (
          <Link key={link.id}>
            <a
              href={link.href}
              title={link.title}
              target="_blank"
              rel="noreferrer"
            >
              <LinkImg src={link.src} alt={link.title} />
            </a>
          </Link>
        ))}
    </Container>
  )
}

export default FooterLinkList
