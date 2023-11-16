import '../styles/properties.css'

const Property = ({ name, rating, price }) => {
  return (
    <div className='property-container'>
      <h2 className='name'>{name}</h2>
      <h3 className='price'>{price}/night</h3>
      <div className='rating'>{rating}⭐</div>
    </div>
  )
}

export default Property
