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

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

  const toggleTodo = (id) =>
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed }
        else return todo
      })
    })

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={() => removeTodo(todo.id)}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      ))}
    </List>
  )
}

export default TodoList
