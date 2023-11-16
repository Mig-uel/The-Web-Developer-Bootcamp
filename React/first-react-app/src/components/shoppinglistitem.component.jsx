const ShoppingListItem = ({ item: { item, qty, completed } }) => {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {item} - {qty}
    </li>
  )
}

export default ShoppingListItem
