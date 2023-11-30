import { List, Box, Typography } from '@mui/material'

import TodoItem from './todo-item.component'
import TodoForm from './todo-form.component'

import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

  const toggleTodo = (id) =>
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed }
        else return todo
      })
    })

  const addTodo = (text) =>
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: text, id: uuid(), completed: false },
    ])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        m: 3,
      }}
    >
      <Typography variant='h2' component='h1' sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  )
}

export default TodoList
