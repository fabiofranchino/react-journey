import './style.scoped.css'

function MenuBar (props) {
  return (
    <div className='menubar'>
      <ul>
        {props.items.map(d => (
          <li
            onClick={(e) => props.handleClick(d)}
            className={d.active ? 'active' : ''}
            key={d.label}
          >
            {d.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBar
