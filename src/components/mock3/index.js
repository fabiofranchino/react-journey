import { useState, useEffect, useRef } from 'react'

function Mock (props) {
  const [counter, setCounter] = useState(0)
  const ref = useRef()

  const handleClickMe = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log('mounted')
    console.log(ref)
  }, [])

  return (
    <div className='frame'>
      <h1 ref={ref}>Functional Component {counter}</h1>
      <button onClick={handleClickMe}>Click Me</button>
    </div>
  )
}

export default Mock
