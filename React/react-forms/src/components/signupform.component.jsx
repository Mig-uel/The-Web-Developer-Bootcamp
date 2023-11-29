import { useState } from 'react'

const SignupForm = () => {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')

  const updateFName = ({ target: { value } }) => setFName(value)
  const updateLName = ({ target: { value } }) => setLName(value)

  const handleSubmit = () => console.log(fName, lName)

  return (
    <div>
      <label htmlFor='fname'>Enter first name:</label>
      <input
        type='text'
        name='fname'
        id='fname'
        placeholder='John'
        onChange={updateFName}
      />

      <label htmlFor='lname'>Enter last name:</label>
      <input
        type='text'
        name='lname'
        id='lname'
        placeholder='Appleseed'
        onChange={updateLName}
      />

      <p>
        Name: {fName} {lName}
      </p>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignupForm
