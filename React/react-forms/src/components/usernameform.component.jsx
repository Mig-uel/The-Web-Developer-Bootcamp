import { useState } from 'react'

const UsernameForm = () => {
  const [username, setUsername] = useState('')

  const updateUsername = ({ target: { value } }) => {
    setUsername(value)
    console.log(username)
  }

  return (
    <div>
      <label htmlFor='username'>Enter a username:</label>
      <input
        onChange={updateUsername}
        type='text'
        name=''
        id='username'
        placeholder='username'
        value={username}
      />
      <p>Username: {username}</p>
      <button>Submit</button>
    </div>
  )
}

export default UsernameForm
