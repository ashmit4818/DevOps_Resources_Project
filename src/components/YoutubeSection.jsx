
import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/yt/1.jpg';
import pic2 from '../assets/sectionimages/yt/2.jpg'; 
const YoutubeSection = () => {
  const playlists = [
    {
      id: 1,
      title: 'How to Deploy React App (create-react-app) to GitHub Pages via GitHub Actions.',
      description: 'This tutorial will show you how to deploy a React app to Github Pages with Github Actions.',
      link: 'https://www.youtube.com/watch?v=tjV7nVX9CAA',
      image: pic1, // Replace with your image
      alt: 'Deploy React App to GitHub Pages via GitHub Actions',
    },
    {
      id: 2,
      title: 'Deploy React App (Vite) to GitHub Pages and Set up a workflow ofr Github Actions. ',
      description: 'Learn how to configure your project, set up workflow, Vite config, and GitHub Pages. ',
      link: 'https://www.youtube.com/watch?app=desktop&v=Bk28snjHr7c',
      image: pic2, // Replace with your image
      alt: 'Deploy Vite React App to GitHub Pages with Github Actions',
    }
  ];

  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        Youtube Playlists
      </Typography>
      <Grid container spacing={3}>
        {playlists.map(({ id, title, description, link, image, alt }) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            <Card >
              <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={alt}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom align="center">
                  {title}
                </Typography>
                <Typography variant="body2" align="center">
                  {description}
                </Typography>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View on Youtube
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default YoutubeSection;
