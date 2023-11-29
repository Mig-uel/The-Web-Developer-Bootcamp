import { useState } from 'react'
import ShoppingListForm from './shopping-list-form.component'

import { v4 as uuid } from 'uuid'

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: uuid(), product: 'Ham', qty: 2 },
    { id: uuid(), product: 'Eggs', qty: 1 },
  ])

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item, id: uuid() }])
  }

  return (
    <div>
      <ShoppingListForm addItem={addItem} />
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.qty}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
