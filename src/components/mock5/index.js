import { useRef } from 'react'
import FChild from './FChild'
import CChild from './CChild'

function Mock (props) {
  const fref = useRef()
  const cref = useRef()

  const handleClick = e => {
    fref.current.setFromOutside('HELLO from Parent')
    cref.current.setFromOutside('HELLO from Parent')
  }
  return (
    <div className='frame'>
      <h1>Call a Child Component Method from Parent</h1>
      <button onClick={handleClick}>Show Me!</button>
      <FChild ref={fref} />
      <CChild ref={cref} />
    </div>
  )
}

export default Mock
