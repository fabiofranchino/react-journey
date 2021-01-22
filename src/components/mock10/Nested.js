import { Switch, Route, Link } from 'react-router-dom'

function Nested (props) {
  return (
    <div>
      <ul>
        <li>
          <Link to='/contact/a'>A</Link>
        </li>
        <li>
          <Link to='/contact/b'>B</Link>
        </li>
        <li>
          <Link to='/contact/c'>C</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/contact/a'>
          <h1>R1</h1>
        </Route>
        <Route path='/contact/b'>
          <h1>R2</h1>
        </Route>
        <Route path='/contact/c'>
          <h1>R3</h1>
        </Route>
      </Switch>
    </div>

  )
}

export default Nested
