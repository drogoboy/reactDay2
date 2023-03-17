import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      
      <Typography variant="h2" component="h3">
        Login to FB
        </Typography>
        <TextField label='email' variant='outlined' />
        <br></br><br></br>
        <TextField label='password' variant='filled' type='password'/>
        <br></br><br></br><br></br>
        <Button variant='contained' color='primary'>Login</Button>

    </div>
  )
}

export default Login
