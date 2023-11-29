import { useState } from 'react'

const EnhancedSignupForm = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '' })

  const handleUser = ({ target: { name, value } }) => {
    setUser((prevUser) => {
      // prevUser[name] = value
      return { ...prevUser, [name]: value } // computed value, reads the variable instead of literally making new key and value pair
    })
  }

  return (
    <div>
      <label htmlFor='firstName'>First Name:</label>
      <input
        type='text'
        name='firstName'
        id='firstName'
        onChange={handleUser}
        value={user.firstName}
      />

      <label htmlFor='lastName'>Last Name</label>
      <input
        type='text'
        name='lastName'
        id='lastName'
        onChange={handleUser}
        value={user.lastName}
      />

      <p>
        Name: {user.firstName} {user.lastName}
      </p>

      <button>Submit</button>
    </div>
  )
}

export default EnhancedSignupForm
