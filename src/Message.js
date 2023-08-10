import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Message = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="white" variant='h5' component='h2'>
          {props.userName}: {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Message