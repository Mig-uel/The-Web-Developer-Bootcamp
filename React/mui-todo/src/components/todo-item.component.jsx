import {
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemIcon,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

const TodoItem = ({
  todo: { id, text, completed },
  removeTodo,
  toggleTodo,
}) => {
  const labelId = `checkbox-list-label-${id}`

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton edge='end' aria-label='comments' onClick={removeTodo}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onChange={toggleTodo}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoItem
