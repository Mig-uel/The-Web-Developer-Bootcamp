import { useState } from 'react'

const ShoppingListForm = ({ addItem }) => {
  const [formData, setFormData] = useState({ product: '', qty: 0 })

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addItem(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Shopping Form</h1>
      <label htmlFor='product'>Product Name:</label>
      <input
        type='text'
        name='product'
        value={formData.product}
        placeholder='Tomatoes'
        onChange={handleChange}
        id='product'
      />

      <label htmlFor='qty'>Quantity</label>
      <input
        type='number'
        name='qty'
        value={formData.qty}
        placeholder='2'
        onChange={handleChange}
        id='qty'
      />

      <button>Add Item</button>
    </form>
  )
}

export default ShoppingListForm
