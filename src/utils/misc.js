import styled, { keyframes } from 'styled-components'
import colors from './colors'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
`

export const links = [
  {
    id: 'github',
    href: 'https://github.com/gobwah/my-ghibli-list',
    title: 'MyGhibliList Github Project',
    src: github,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/vincent-dellalibera/',
    title: 'Contact me',
    src: linkedin,
  },
  {
    id: 'ghibli',
    href: 'http://www.ghibli.jp/',
    title: 'Ghibli Studio',
    src: 'https://www.ghibli.jp/img/home.png',
  },
]
