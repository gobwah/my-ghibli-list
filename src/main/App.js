import styled from 'styled-components'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Film from '../pages/Film'
import Error from '../components/Error'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    @media (min-width: 600px) {
      width: 10px;
    }
  }

  &::-webkit-scrollbar-track {
    @media (min-width: 600px) {
      background: #15171b;
      border-radius: 20px;
    }
  }

  &::-webkit-scrollbar-thumb {
    @media (min-width: 600px) {
      background-color: #079dec;
      border-radius: 20px;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Router className="App">
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/film/:filmId">
              <Film />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </Wrapper>
  )
}

export default App
