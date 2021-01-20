import React, { useState } from 'react'
import './App.css'
import Mock1 from './components/mock1/'
import Mock2 from './components/mock2/'
import Mock3 from './components/mock3/'
import Mock4 from './components/mock4/'
import Mock5 from './components/mock5/'

function App () {
  const [mock, setMock] = useState('4')
  const mocks = [
    <Mock1 />,
    <Mock2 />,
    <Mock3 />,
    <Mock4 />,
    <Mock5 />
  ]

  const handleChange = (e) => {
    setMock(e.target.value)
  }

  return (
    <div className='app'>
      <select value={mock} onChange={handleChange}>
        {
          mocks.map((d, i) => (
            <option key={i.toString()} value={i}>{d.toString()}</option>
          ))
        }

      </select>
      {mocks[mock]}
    </div>
  )
}

export default App
