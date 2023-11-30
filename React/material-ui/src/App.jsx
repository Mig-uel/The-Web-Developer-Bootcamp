import { Button, IconButton } from '@mui/material/'
import './App.css'

import AlarmIcon from '@mui/icons-material/Alarm'

function App() {
  return (
    <div>
      <Button variant='contained'>Contained</Button>

      <IconButton color='secondary' aria-label='add an alarm'>
        <AlarmIcon />
      </IconButton>
    </div>
  )
}

export default App
