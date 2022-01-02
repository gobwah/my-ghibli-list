import styled from 'styled-components'

const LEFT = 'max-scroll-left'
const RIGHT = 'max-scroll-right'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &::before,
    &::after {
      content: '';
      position: sticky;
      height: auto;
      min-width: 2.5vw;
      background: rgb(0, 0, 0);
      opacity: 0.5;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &.${LEFT}::before, &.${RIGHT}::after {
      background: transparent;
    }
  }
`

function scrollCallback(e) {
  const el = e.target
  const scrollW = el.scrollWidth
  const scrollL = Math.round(el.scrollLeft)
  const clientW = el.clientWidth

  if (scrollL < 1) {
    el.className += ' ' + LEFT
  } else if (scrollL + clientW + 1 >= scrollW) {
    el.className += ' ' + RIGHT
  } else {
    el.className = el.className.replace(' ' + RIGHT, '').replace(' ' + LEFT, '')
  }
}

function CardCarousel({ children }) {
  return (
    <Container
      className={children.length > 3 ? LEFT : `${RIGHT} ${LEFT}`}
      onScroll={scrollCallback}
    >
      {children}
    </Container>
  )
}

export default CardCarousel
