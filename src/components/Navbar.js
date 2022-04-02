import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {IsAuthenticatingContext} from "../providers/isAuthenticatingProvider";

const Navbar = () => {
  let history = useHistory();

  const { isAuthenticating, setIsAuthenticating } = useContext(IsAuthenticatingContext)

  const handleLoginAttempt = () => {
    if (isAuthenticating) {
      history.push("/")
      setIsAuthenticating()
      return
    }
    history.push("/authentication")
    setIsAuthenticating()
  }

  return (<>
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Nazwa strony
          </Typography>
          <Button color="inherit" onClick={() => {
           handleLoginAttempt()
          }}>{!isAuthenticating ? "Login" : "Back" }</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>);
}

export default Navbar;