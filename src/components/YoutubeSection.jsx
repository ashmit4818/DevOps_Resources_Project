
import React, {useContext} from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/yt/1.jpg';
import pic2 from '../assets/sectionimages/yt/2.jpg';
import pic3 from '../assets/sectionimages/yt/3.jpg';
import pic4 from '../assets/sectionimages/yt/4.jpg';

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
    },
    {
      id: 3,
      title: 'Master DevOps from Beginner to Advanced Levels with Industrial Practices and Real-World Tools.',
      description: 'Complete DevOps bootcamp to get you from beginner to advance in the field. ',
      link: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak',
      image: pic3, // Replace with your image
      alt: 'Complete DevOps Bootcamp by Kunal Kushwaha',
    },
    {
      id: 4,
      title: 'How To Deploy React App(with reactrouter) to gh-pages (Simplest Way) - gh-pages issue fixed',
      description: 'Explained step-by-step how you can host your reactjs project on gh pages for free.',
      link: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak',
      image: pic4, // Replace with your image
      alt: 'Deploy React App(with reactrouter) to gh-pages',
    }
  ];
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        Youtube
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
                sx={{
                  backgroundColor: isDarkMode ? '#333' : '#fff', // Set background color for dark mode
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom align="center">
                  {title}
                </Typography>
                <Typography variant="body2" align="center">
                  {description}
                </Typography>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: '10px',
                    backgroundColor: isDarkMode? '#333':'',
                    color: isDarkMode? '#fff':'',
                    padding: '10px 20px',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: isDarkMode? '#262626':'#1b3887', // Change hover color to black
                    },
                  }}
                >
                  View on Youtube
                </Button>
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
