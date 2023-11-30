import { ListItem, TextField, IconButton, InputAdornment } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
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
          label='Add Todo'
          variant='outlined'
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='create todo' edge='end' type='submit'>
                  <AddIcon />
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
