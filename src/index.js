import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import NotFound from './views/not-found'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={About} path="/about" />
        {/* <Route component={NotFound} path="**" /> */}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
