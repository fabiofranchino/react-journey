import './style.scoped.css'

function Editor (props) {
  const handleChange = e => {
    props.handleChange(e.target.value)
  }
  return (
    <div className='col editor'>
      <textarea defaultValue={props.src} onChange={handleChange} />
    </div>
  )
}

export default Editor
