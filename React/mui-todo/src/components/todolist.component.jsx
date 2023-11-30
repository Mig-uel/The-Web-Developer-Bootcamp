import { List } from '@mui/material'

import { useState } from 'react'
import TodoItem from './todo-item.component'

const initialTodos = [
  { id: 1, text: 'Walk the dog', completed: false },
  { id: 2, text: 'Walk the cat', completed: false },
  { id: 3, text: 'Feed the fish', completed: true },
  { id: 4, text: 'Feed the chickens', completed: false },
]

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos)

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList
