import { useRef, useState, useEffect } from 'react'

function Form (props) {
  const input = useRef()
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleAdd = e => {
    if (value !== '') {
      setValue('')
      input.current.focus()
      props.handleAdd(value)
    }
  }

  const handleKeyUp = e => {
    if (e.keyCode === 13) handleAdd()
  }

  useEffect(() => {
    input.current.focus()
  }, [])

  return (
    <div>
      <input onKeyUp={handleKeyUp} ref={input} value={value} type='text' onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Form
