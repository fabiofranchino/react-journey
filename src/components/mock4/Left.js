import './style.scoped.css'

function Left (props) {
  return (
    <div className={props.className}>
      <h1>Left</h1>
      <button onClick={props.handleOnClick}>Click</button>
    </div>
  )
}

export default Left
