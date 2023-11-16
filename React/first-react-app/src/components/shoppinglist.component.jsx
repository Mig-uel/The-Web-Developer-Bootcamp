import ShoppingListItem from './shoppinglistitem.component'

const ShoppingList = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem item={i} key={i.id} />
      ))}
    </ul>
  )
}

export default ShoppingList
