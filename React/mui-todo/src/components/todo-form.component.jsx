import { ListItem, TextField, IconButton, InputAdornment } from '@mui/material'
import Create from '@mui/icons-material/Create'
import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleChange = ({ target: { value } }) => setText(value)
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)

    setText('')
  }

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id='outlined-basic'
          label='Todo'
          variant='outlined'
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='create todo' edge='end' type='submit'>
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  )
}

export default TodoForm
