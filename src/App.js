import React, { useState } from 'react'
import './App.css'
import Mock1 from './components/mock1/'
import Mock2 from './components/mock2/'
import Mock3 from './components/mock3/'
import Mock4 from './components/mock4/'
import Mock5 from './components/mock5/'
import Mock6 from './components/mock6/'
import Mock7 from './components/mock7/'
import Mock8 from './components/mock8/'
import Mock9 from './components/mock9/'
import Mock10 from './components/mock10/'

function App () {
  const [mock, setMock] = useState(9)
  const mocks = [
    { label: 'Scoped CSS', comp: <Mock1 /> },
    { label: 'A Class Component', comp: <Mock2 /> },
    { label: 'A Functional Component', comp: <Mock3 /> },
    { label: 'Component communication basic', comp: <Mock4 /> },
    { label: 'Call Child method from Parent', comp: <Mock5 /> },
    { label: 'Simple TO-DO List', comp: <Mock6 /> },
    { label: 'Markdown Editor', comp: <Mock7 /> },
    { label: 'Menu Bar', comp: <Mock8 /> },
    { label: 'SVG Mod', comp: <Mock9 /> },
    { label: 'Router', comp: <Mock10 /> }
  ]

  const handleChange = (e) => {
    const index = e.target.value
    setMock(index)
    document.title = mocks[index].label
  }

  return (
    <div className='app'>

      {mocks[mock].comp}

      <div className='selector'>
        <select value={mock} onChange={handleChange}>
          {
            mocks.map((d, i) => (
              <option key={d.label} value={i}>{d.label}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default App
