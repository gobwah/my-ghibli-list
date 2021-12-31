import styled from 'styled-components'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Film from '../pages/Film'
import Error from '../components/Error'
import Header from '../components/Header'
import Footer from '../components/Footer'

const StyledRouter = styled(Router)`
  text-align: center;
  margin: 1rem;
`

function App() {
  return (
    <StyledRouter className="App">
      <Header />
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
      <Footer />
    </StyledRouter>
  )
}

export default App
