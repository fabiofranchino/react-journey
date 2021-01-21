import Item from './Item'

function List (props) {
  return (
    <div>
      <ul>
        {props.items.map((d, i) => (
          <Item
            key={d.title}
            label={d.title}
            isFirst={i === 0}
            isLast={i === props.items.length - 1}
            handleDelete={() => props.handleDelete(i)}
            handleMoveUp={() => props.handleMove(i, 'up')}
            handleMoveDown={() => props.handleMove(i, 'down')}
          />
        ))}
      </ul>
    </div>
  )
}

export default List
