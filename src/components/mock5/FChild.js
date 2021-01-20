import { useState, forwardRef, useImperativeHandle } from 'react'

function Child (props, ref) {
  const [message, setMessage] = useState('Func Comp Waiting')

  useImperativeHandle(ref, () => ({
    setFromOutside (msg) {
      setMessage(msg)
    }
  }), [])

  return (
    <h1>{message}</h1>
  )
}

export default forwardRef(Child)
