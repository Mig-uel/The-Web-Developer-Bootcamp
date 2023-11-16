import ShoppingListItem from './shoppinglistitem.component'

const ShoppingList = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem {...i} key={i.id} />
      ))}
    </ul>
  )
}

export default ShoppingList
