import Editor from './Editor'
import Render from './Render'
import './style.scoped.css'
import { useState } from 'react'

function Mock (props) {
  const [md, setMd] = useState('## A bare-bones Markdown converter')

  const onChange = src => {
    setMd(src)
  }

  return (
    <div className='frame mark'>
      <Editor src={md} handleChange={onChange} />
      <Render src={md} />
    </div>
  )
}

export default Mock
