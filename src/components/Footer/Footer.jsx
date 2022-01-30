import { Wrapper } from './Footer.styles'
import { links } from '../../utils/misc'

const Footer = () => {
  return (
    <Wrapper>
      <div>
        {links &&
          links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              title={link.title}
              target="_blank"
              rel="noreferrer"
            >
              <img src={link.src} alt={link.title} />
            </a>
          ))}
      </div>
      <a
        href="https://ghibliapi.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Ghibli API
      </a>
    </Wrapper>
  )
}

export default Footer
