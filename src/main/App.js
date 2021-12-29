import styled from 'styled-components'
import Home from '../pages/Home'

const AppWrapper = styled.div`
  text-align: center;
  margin: 1rem;
`

function App() {
  return (
    <AppWrapper className="App">
      <Home />
    </AppWrapper>
  )
}

export default App
