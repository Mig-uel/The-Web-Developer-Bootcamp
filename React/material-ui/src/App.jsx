import { Button, IconButton } from '@mui/material/'
import AlarmIcon from '@mui/icons-material/Alarm'
import RatingDemo from './rating-demo.component'

import './App.css'

function App() {
  return (
    <div>
      <Button variant='contained'>Contained</Button>

      <IconButton color='secondary' aria-label='add an alarm'>
        <AlarmIcon />
      </IconButton>

      <RatingDemo />
    </div>
  )
}

export default App
