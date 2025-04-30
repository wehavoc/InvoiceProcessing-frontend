import React from 'react'
import { AppBar, Toolbar } from "@mui/material";


import Logo from '../assets/logo-no-background.svg'


function Header() {
  return (
    <AppBar color="secondary" position="static">
        <Toolbar  >
          <a style={{cursor:'pointer'}} href="http://localhost:5173/">
            <img src={Logo} alt='log' style={{width: 60}} />
          </a>
        </Toolbar>
    </AppBar>
  )
}

export default Header   