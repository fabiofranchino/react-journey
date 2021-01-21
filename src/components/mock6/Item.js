
function Item (props) {
  return (
    <li>{props.label}

      <button onClick={props.handleDelete}>X</button>
      {props.isFirst ? '' : <button onClick={props.handleMoveUp}>↑</button>}
      {props.isLast ? '' : <button onClick={props.handleMoveDown}>↓</button>}

    </li>
  )
}

export default Item
