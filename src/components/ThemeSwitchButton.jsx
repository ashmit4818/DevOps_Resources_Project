// src/components/ThemeSwitchButton.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Fab } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitchButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Fab
      color="primary"
      onClick={toggleTheme}
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </Fab>
  );
};

export default ThemeSwitchButton;
