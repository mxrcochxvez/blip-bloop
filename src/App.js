import React from 'react';
import Home from './components/Home';
import { AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';

function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
      <div>
          <IconButton edge='end' color="inherit" onClick={handleClick}>
              <MenuIcon fontSize='large' />
          </IconButton>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  backgroundColor: '#8b90cc',
                  color: '#fff',
                }
              }}
          >
              <MenuItem onClick={handleClose} className='menu-text'>Home</MenuItem>
              <Divider variant='center' />
              <MenuItem onClick={handleClose} className='menu-text'>About Us</MenuItem>
          </Menu>
      </div>
  );
}

function App() {
  return (
    <div>
      <AppBar style={{ backgroundColor: '#7289DA' }}>
        <Toolbar>
          <NavMenu />
        </Toolbar>
      </AppBar>
      <Home />
    </div>
  );
}

export default App;
