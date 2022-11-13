import { GoMarkGithub } from 'react-icons/go'
import { HiExternalLink } from 'react-icons/hi'

import { links } from '../../constants'

const Footer = () => (
  <footer className="flex justify-between items-center w-full">
    <a
      href={links.github}
      title="Github"
      target="_blank"
      rel="noreferrer"
      className="text-lg"
    >
      <GoMarkGithub size="1.5rem" />
    </a>
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
      <p>Ghibli API</p>
      <HiExternalLink />
    </a>
  </footer>
)

export default Footer
