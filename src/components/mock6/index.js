import Form from './Form'
import List from './List'
import { useState } from 'react'

function Mock (props) {
  const [items, setItems] = useState([{ title: 'Buy the Milk' }])

  const onHandleAdd = (v) => {
    items.push({ title: v })
    setItems([...items])
  }

  const onHandleDelete = index => {
    items.splice(index, 1)
    setItems([...items])
  }

  const onHandleMove = (index, dir) => {
    let newIndex = 0

    if (dir === 'up') newIndex = index - 1
    if (dir === 'down') newIndex = index + 1

    items.splice(newIndex, 0, items.splice(index, 1)[0])

    setItems([...items])
  }

  return (
    <div className='frame'>
      <h1>A Bare-Bones TO-DO list App</h1>
      <p>There are 3 components, Form, List and Item. The main wrapper handles the state</p>
      <p>Functions are: add, remove, move items, check if the value is not empty, self focus, keyboard shortcut</p>
      <Form handleAdd={onHandleAdd} />
      <List
        handleDelete={onHandleDelete}
        handleMove={onHandleMove}
        items={items}
      />
    </div>
  )
}

export default Mock
