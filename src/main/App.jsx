import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Film from '../pages/Film'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Error from '../components/misc/Error'
import { Wrapper } from './App.styles'
import Films from '../pages/Films'

const App = () => {
  return (
    <Wrapper>
      <Router className="App">
        <Header />
        <main id="main">
          <Switch>
            <Route exact path="/">
              <Films />
            </Route>
            <Route path="/film/:filmId">
              <Film />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </Wrapper>
  )
}

export default App
