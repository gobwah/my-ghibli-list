import { HiExternalLink } from 'react-icons/hi'

import { links } from '../../constants/links'
import { images } from '../../constants/images'

const footerLinks = [
  {
    href: links.github,
    alt: 'Github',
    img: images.github,
  },
  {
    href: links.ghibli,
    alt: 'Ghibli',
    img: images.ghibli,
  },
]

const Footer = () => (
  <footer className="flex justify-between items-center w-full">
    <ul className="list-none flex justify-start items-center gap-1">
      {footerLinks.map((link, index) => (
        <li key={`flink-${index}`} className="w-[25px] h-[25px]">
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-lg"
          >
            <img
              src={link.img}
              alt={link.alt}
              title={link.alt}
              className="w-[100%] h-[100%] object-contain"
            />
          </a>
        </li>
      ))}
    </ul>

    <p className="text-[0.5rem] sm:text[1.25rem] text-center">
      @2022 GOBWAH <br className="sm:hidden" />
      All rights reserved
    </p>

    <a
      href={links.ghibliApi}
      target="_blank"
      rel="noreferrer"
      className="text-xs flex gap-1 items-center"
    >
      <p className="hover:text-primary">Ghibli API</p>
      <HiExternalLink />
    </a>
  </footer>
)

export default Footer
