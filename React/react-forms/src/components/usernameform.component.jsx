import { useState } from 'react'

const UsernameForm = () => {
  const [username, setUsername] = useState('')

  const updateUsername = ({ target: { value } }) => {
    setUsername(value)
    console.log(username)
  }

  return (
    <div>
      <input
        onChange={updateUsername}
        type='text'
        name=''
        id=''
        placeholder='username'
        value={username}
      />
      <button>Submit</button>
    </div>
  )
}

export default UsernameForm
