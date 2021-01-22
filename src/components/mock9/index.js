import { useState } from 'react'
import './style.scoped.css'

function Mock (props) {
  const [points, setPoints] = useState('')
  const [radius, setRadius] = useState(40)

  const handleClick = () => {
    let str = ''

    str += (Math.random() * 250) + ' ' + (Math.random() * 250) + ','
    str += (250 + Math.random() * 250) + ' ' + (Math.random() * 250) + ','
    str += (250 + Math.random() * 250) + ' ' + (250 + Math.random() * 250) + ','
    str += (Math.random() * 250) + ' ' + (250 + Math.random() * 250)

    setPoints(str)
    setRadius(Math.random() * 150)
  }

  const handleChange = e => {
    setRadius(e.target.value)
  }

  return (
    <div className='frame'>
      <h1>Transform SVG elements using states</h1>
      <svg viewBox='0 0 500 500'>
        <polygon points={points} />
        <circle r={radius} cx='250' cy='250' fill='red' />
      </svg>
      <div className='toolbar'>
        <button onClick={handleClick}>Click</button>
        <input type='range' min='0' max='150' value={radius} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Mock
