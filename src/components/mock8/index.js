import MenuBar from './MenuBar'
import './style.scoped.css'
import { useState } from 'react'
import getItems from './items'

function Mock (props) {
  const [items, setItems] = useState(getItems())

  const onHandleClick = d => {
    items.forEach(b => (b.active = false))
    d.active = true
    setItems([...items])
  }

  return (
    <div className='frame menuwrapper'>
      <MenuBar handleClick={onHandleClick} items={items} />
    </div>
  )
}

export default Mock
