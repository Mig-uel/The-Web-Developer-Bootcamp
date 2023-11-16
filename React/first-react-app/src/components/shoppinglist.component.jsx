const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
        >
          {item.item} - {item.qty}
        </li>
      ))}
    </ul>
  )
}

export default ShoppingList
