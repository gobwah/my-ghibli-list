import styled from 'styled-components'
import Home from '../pages/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Film from '../pages/Film'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../components/misc/Error'
import People from '../pages/People'
import Species from '../pages/Species'
import Locations from '../pages/Locations'
import Vehicles from '../pages/Vehicles'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`

const Main = styled.main`
  @media (min-width: 600px) {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #15171b;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
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
        <Main id="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/film/:filmId">
              <Film />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/species">
              <Species />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
            <Route path="/vehicles">
              <Vehicles />
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
