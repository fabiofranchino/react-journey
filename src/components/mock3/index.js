import { useState, useEffect, useRef } from 'react'

function Mock (props) {
  const [counter, setCounter] = useState(0)
  const ref = useRef()
  const mounted = useRef(false)

  const handleClickMe = () => {
    setCounter((counter) => counter + 1)
  }

  useEffect(() => {
    if (!mounted.current) {
      console.log('mount')
      console.log(ref)
      mounted.current = true
    } else {
      console.log('update')
    }

    // unmount is triggered on each update!
    return () => {
      console.log('unmount')
    }
  }, [counter])

  return (
    <div className='frame'>
      <h1 ref={ref}>Functional Component {counter}</h1>
      <p>With its internal state and component cycle events</p>
      <button onClick={handleClickMe}>Click Me</button>
    </div>
  )
}

export default Mock
