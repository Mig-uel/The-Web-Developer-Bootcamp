import properties from '../assets/properties'
import Property from './property.component'
import '../styles/properties.css'

const PropertiesList = () => {
  return (
    <div className='properties-container'>
      {properties.map((p) => (
        <Property {...p} key={p.id} />
      ))}
    </div>
  )
}

export default PropertiesList
