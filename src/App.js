import React, { useState } from 'react'
import './App.css'
import Mock1 from './components/mock1/index.js'
import Mock2 from './components/mock2/index.js'
import Mock3 from './components/mock3/index.js'

function App () {
  const [mock, setMock] = useState('0')
  const mocks = [<Mock1 />, <Mock2 />, <Mock3 />]

  const handleChange = (e) => {
    setMock(e.target.value)
  }

  return (
    <div className='app'>
      <select value={mock} onChange={handleChange}>
        <option value='0'>Mock1</option>
        <option value='1'>Mock2</option>
        <option value='2'>Mock3</option>
      </select>
      {mocks[mock]}
    </div>
  )
}

export default App
