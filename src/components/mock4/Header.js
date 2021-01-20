import './style.scoped.css'

function Header (props) {
  return (
    <div className={props.className}>
      <h1>Component Communication</h1>
      <p>There is a state in the App that is affected by Left component and that effect is shown in Right component</p>
    </div>
  )
}

export default Header
