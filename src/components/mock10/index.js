import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Mock (props) {
  return (
    <BrowserRouter>
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </header>

      <hr />

      <Switch>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Mock
