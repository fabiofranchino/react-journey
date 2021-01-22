import './style.scoped.css'
import marked from 'marked'

function Render (props) {
  let html = ''
  if (props.src) {
    html = marked(props.src)
  }

  return (
    <div className='col render'>
      <div className='area' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Render
