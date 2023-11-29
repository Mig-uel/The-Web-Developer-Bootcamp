import { useState } from 'react'
import ShoppingListForm from './shopping-list-form.component'

const ShoppingList = () => {
  const [items, setItems] = useState([
    { id: 1, product: 'Ham', qty: 2 },
    { id: 2, product: 'Eggs', qty: 1 },
  ])

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item, id: 3 }])
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
