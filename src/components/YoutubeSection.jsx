
import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import placeholderImage from '../assets/yt.png';

const YoutubeSection = () => {
  const playlists = [
    {
      id: 1,
      title: 'Introduction to DevOps with GitHub',
      description: 'Learn the basics of DevOps and how GitHub plays a role in version control and collaboration.',
      link: 'https://github.com/article1',
      image: placeholderImage, // Replace with your image
      alt: 'Introduction to DevOps with GitHub',
    },
    {
      id: 2,
      title: 'Version Control Best Practices',
      description: 'Best practices for version control using Git and GitHub in DevOps workflows.',
      link: 'https://github.com/article2',
      image: placeholderImage, // Replace with your image
      alt: 'Version Control Best Practices',
    },
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
