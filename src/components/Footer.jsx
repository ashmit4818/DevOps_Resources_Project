import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1b3887',
        color: '#fff',
        py: 2,
        mt: 'auto',
        boxShadow: '0px -3px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Social Media Icons */}
        <Box>
          <IconButton
            component="a"
            href="https://x.com/ashmitdevio"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <XIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://instagram.com/ashhmiit"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/ashmit4818"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/ashmitdwivedi/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Tagline */}
        <Typography variant="body1" >
          Made with ❤️ by Ashmit
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
