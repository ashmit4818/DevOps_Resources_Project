
import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import placeholderImage from '../assets/medium.png'; 

const MediumArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: 'CI/CD Pipeline with React App using GitHub Actions.',
      description: 'In this tutorial, I will illustrate how to handle CI and CD using GitHub actions and Build and push docker image to DockerHub.',
      link: 'https://faun.pub/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f',
      image: placeholderImage, // Replace with your image
      alt: 'handle CI and CD using GitHub actions and Build and push docker image of React App to DockerHub.',
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
        Medium Articles
      </Typography>
      <Grid container spacing={3}>
        {articles.map(({ id, title, description, link, image, alt }) => (
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
                    Read on Medium
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

export default MediumArticlesSection;
