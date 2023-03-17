import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>signup form</h1>
        <Typography variant="h1" component="h2">
        </Typography>
        <TextField label='email' variant='outlined' />
        <br></br><br></br>
        <TextField label='password' variant='filled' type='password'/>
        <br></br><br></br><br></br>
        <Button variant='contained' color='primary'>Signup</Button>
    </div>
  )
}

export default Signup
