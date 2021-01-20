import './style.scoped.css'

import { useState } from 'react'
import Header from './Header'
import Left from './Left'
import Right from './Right'

function Mock (props) {
  const [lCount, setLCount] = useState(0)

  const onLeftClicked = () => {
    setLCount(lCount + 1)
  }

  return (
    <div className='frame grid'>
      <Header className='top' />
      <Left className='left' handleOnClick={onLeftClicked} />
      <Right className='right' count={lCount} />
    </div>
  )
}

export default Mock
