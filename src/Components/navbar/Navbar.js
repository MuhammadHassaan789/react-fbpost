import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  const { window, onDarkModeToggle } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDarkModeToggle = () => {
    onDarkModeToggle();
    setDarkMode((prevMode) => !prevMode);
  };

  const toggler = (
    <IconButton color="inherit" onClick={handleDarkModeToggle}>
      {darkMode ? <ToggleOnIcon fontSize='large' sx={{ color: 'white' }} /> : <ToggleOffIcon fontSize='large' sx={{ color: 'black' }} />}
    </IconButton>
  )

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: darkMode ? 'black' : 'white' }}>
      <Typography variant="h6" sx={{ my: 2, color: darkMode ? 'white' : 'black' }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} sx={{ color: darkMode ? 'white' : 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {toggler}
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background: darkMode ? 'rgb(15 23 42)' : '#fff' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: darkMode ? 'rgb(15 23 42)' : '#fff' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: darkMode ? 'white' : 'black' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Logo" style={{ height: 45, marginRight: 10 }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <InputBase
              placeholder="Search"
              startAdornment={<SearchIcon sx={{ color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)', marginRight: 1 }} />}
              sx={{ color: darkMode ? 'inherit' : 'rgba(0, 0, 0, 0.7)', marginLeft: 2, flexGrow: 1 }}
            />
            {navItems.map((item) => (
              <Button key={item} sx={{ color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.7)', marginLeft: 1 }}>
                {item}
              </Button>
            ))}
            {toggler}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: darkMode ? 'black' : 'white' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
