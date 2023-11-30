import {
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemIcon,
} from '@mui/material'

import CommentIcon from '@mui/icons-material/Comment'

const TodoItem = ({ todo: { id, text, completed } }) => {
  const labelId = `checkbox-list-label-${id}`

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton edge='end' aria-label='comments'>
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        // onClick={handleToggle(value)}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoItem
