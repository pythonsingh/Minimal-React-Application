import React from 'react'
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Nabar() {
    return (
        <>
       <Box sx = {{ flexGrow: 1}}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant='h5' component="div" sx={{flexGrow:1 }}>
              Login Page
            </Typography>
            <Button component={NavLink} to="/" style={({isActive})=>{return{ backgroundColor: isActive ? '#6d1b7b': " " }}} sx={{color:'white' }}>Home</Button>
            <Button component={NavLink} to="content" style={({isActive})=>{return{ backgroundColor: isActive ? '#6d1b7b': " " }}} sx={{color:'white'}}>Content</Button>
            <Button component={NavLink} to="login" style={({isActive})=>{return{ backgroundColor: isActive ? '#6d1b7b': " " }}} sx={{color:'white'}}>Login</Button>
            <Button component={NavLink} to="sign" style={({isActive})=>{return{ backgroundColor: isActive ? '#6d1b7b': " " }}} sx={{color:'white'}}>Signup</Button>
          </Toolbar>
        </AppBar>
       </Box>
      </>
  )
}

export default Nabar