import { useState, useEffect, useRef } from 'react'

function Mock (props) {
  const [counter, setCounter] = useState(0)
  const ref = useRef()

  const handleClickMe = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log('func mounted')
    console.log(ref)

    return () => {
      console.log('func unmounted')
    }
  }, [])

  return (
    <div className='frame'>
      <h1 ref={ref}>Functional Component {counter}</h1>
      <p>With its internal state and component cycle events</p>
      <button onClick={handleClickMe}>Click Me</button>
    </div>
  )
}

export default Mock
