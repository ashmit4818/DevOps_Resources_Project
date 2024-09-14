import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { RiGithubLine, RiHome3Line, RiYoutubeLine, RiMediumLine } from 'react-icons/ri'; // Import icons from react-icons/ri
import { LiaDocker } from 'react-icons/lia'; // Import Docker icon from react-icons/lia
import { PiNotebookBold } from "react-icons/pi";
import { LiaFreeCodeCamp } from "react-icons/lia";
import DevOpsIcon from '../assets/devops.png'; // Custom DevOps icon

const Navbar = ({ isMobile }) => {

  const { isDarkMode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Toggle drawer for mobile navigation
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Apply active link styles based on current location
  const isActive = (path) => location.pathname === path ? { backgroundColor: isDarkMode ?  '#333' : '#064cae' , color: '#fff' } : {};

  // Drawer content for mobile view
  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: isDarkMode ? '#000' : '#1b3887',
        color: '#fff',
        height: '100%',
        paddingTop: '20px',
      }}
    >
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle} style={isActive('')}>
          <ListItemIcon>
            <RiHome3Line style={{ color: 'white', fontSize: 28 }} /> {/* Updated Home icon */}
          </ListItemIcon>
          <ListItemText primary="Home" style={{ color: 'white' }}/>
        </ListItem>

        <ListItem button component={Link} to="/youtube" onClick={handleDrawerToggle} style={isActive('/youtube')}>
          <ListItemIcon>
            <RiYoutubeLine style={{ color: 'white', fontSize: 28 }} /> {/* Updated YouTube icon */}
          </ListItemIcon>
          <ListItemText primary="YouTube" style={{ color: 'white' }}/>
        </ListItem>

        <ListItem button component={Link} to="/docker-docs" onClick={handleDrawerToggle} style={isActive('/docker-docs')}>
          <ListItemIcon>
            <LiaDocker style={{ color: 'white', fontSize: 28 }} /> {/* Updated Docker icon */}
          </ListItemIcon>
          <ListItemText primary="Docker Docs" style={{ color: 'white' }} />
        </ListItem>

        <ListItem button component={Link} to="/blogs" onClick={handleDrawerToggle} style={isActive('/blogs')}>
          <ListItemIcon>
            <LiaFreeCodeCamp style={{ color: 'white', fontSize: 28 }} /> {/* Updated FreeCodeCamp Blogs icon */}
          </ListItemIcon>
          <ListItemText primary="FreeCodeCamp Blogs" style={{ color: 'white' }} /> {/* Updated label */}
        </ListItem>

        <ListItem button component={Link} to="/medium-articles" onClick={handleDrawerToggle} style={isActive('/medium-articles')}>
          <ListItemIcon>
            <RiMediumLine style={{ color: 'white', fontSize: 28 }} /> {/* Updated Medium Articles icon */}
          </ListItemIcon>
          <ListItemText primary="Medium Articles" style={{ color: 'white' }}/>
        </ListItem>
        <ListItem button component={Link} to="/github" onClick={handleDrawerToggle} style={isActive('/github')}>
          <ListItemIcon>
            <RiGithubLine style={{ color: 'white', fontSize: 28 }} /> {/* Updated Github icon */}
          </ListItemIcon>
          <ListItemText primary="Github" style={{ color: 'white' }}/>
        </ListItem>
        <ListItem button component={Link} to="/random-blogs" onClick={handleDrawerToggle} style={isActive('/random-blogs')}>
          <ListItemIcon>
            <PiNotebookBold style={{ color: 'white', fontSize: 28 }} /> {/* Updated Blogs Section icon */}
          </ListItemIcon>
          <ListItemText primary="Blogs" style={{ color: 'white' }}/>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* AppBar with linear gradient */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: isDarkMode ? '#000' : '#1b3887',
          color: '#fff',
          mb : isMobile ? '8%' : '0',
        }}
      >
        <Toolbar>
          {/* DevOps SVG Icon */}
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ ml: 2, mr: 2 }} component={Link} to="">
            <img src={DevOpsIcon} alt="DevOps Icon" style={{ height: 50, width: 'auto', filter: 'brightness(0) invert(1)' }} />
          </IconButton>

          {/* App title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          {/* Hamburger menu for mobile view */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Links for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/" sx={isActive('')}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/youtube" sx={isActive('/youtube')}>
              YouTube
            </Button>
            <Button color="inherit" component={Link} to="/docker-docs" sx={isActive('/docker-docs')}>
              Docker Docs
            </Button>
            <Button color="inherit" component={Link} to="/blogs" sx={isActive('/blogs')}>
              FreeCodeCamp
            </Button>
            <Button color="inherit" component={Link} to="/medium-articles" sx={isActive('/medium-articles')}>
              Medium Articles
            </Button>
            <Button color="inherit" component={Link} to="/github" sx={isActive('/github')}>
              Github
            </Button>
            <Button color="inherit" component={Link} to="/random-blogs" sx={isActive('/random-blogs')}>
              Blogs Section
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
