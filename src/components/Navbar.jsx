import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      
        <Typography align ='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          facebook
        </Typography>
        <Button color="inherit"><Link to ='/login' style={{color:"white",textDecoration:"none"}}>login </Link></Button>
        <Button color='inherit'><Link to ='/signup' style={{color:"white",textDecoration:"none"}}>signup</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
