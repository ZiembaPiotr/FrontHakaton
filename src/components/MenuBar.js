import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import HealingIcon from '@mui/icons-material/Healing';
import WorkIcon from '@mui/icons-material/Work';
import {useContext, useState} from "react";
import {IsAuthenticatingContext} from "../providers/isAuthenticatingProvider";
import {useCycle} from "framer-motion";

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = ({setFilterType}) => {
  const { isAuthenticating } = useContext(IsAuthenticatingContext)

  const [isFiltered, resetFilter] = useState(false)

  const setFilter = (filterName) => {
    if(isFiltered) {
      setFilterType("")
      resetFilter(false)
      return
    }
    setFilterType(filterName)
    resetFilter(true)
  }

  return (
    <>
      {!isAuthenticating ? (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}

            >
              <div onClick={() => setFilter("food")}>
                <RestaurantIcon style={{marginTop: 10}}/>
                <div> Food </div>
              </div>
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}

            >
              <div onClick={() => setFilter("hotels")}>
                <HotelIcon style={{marginTop: 10}}/>
                <div> Hotels </div>
              </div>
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}

            >
              <div onClick={() => setFilter("health")}>
                <HealingIcon style={{marginTop: 10}}/>
                <div> Health care </div>
              </div>
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}

            >
              <div onClick={() => setFilter("work")}>
                <WorkIcon style={{marginTop: 10}}/>
                <div> Workplaces </div>
              </div>
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>) : (<> </>)}
    </>

  );
}

export default SearchBar;