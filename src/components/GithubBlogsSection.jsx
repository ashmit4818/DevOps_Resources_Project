import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/github/1.png'; // Replace with your placeholder image path

const githubBlogs = [
  {
    id: 1,
    title: 'Understanding GitHub Actions',
    description: 'Learn the basics of GitHub Actions, including core concepts and essential terminology.',
    link: 'https://docs.github.com/en/actions/about-github-actions/understanding-github-actions',
    image: pic1, // Replace with your image
    alt: 'Understanding GitHub Actions',
  },
  {
    id: 2,
    title: 'About workflows in Github Actions',
    description: 'Get a high-level overview of GitHub Actions workflows, including triggers, syntax, and advanced features.',
    link: 'https://docs.github.com/en/actions/writing-workflows/about-workflows',
    image: pic1, // Replace with your image
    alt: 'About workflows in Github Actions',
  },
];

const GithubBlogsSection = () => {
  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        GitHub
      </Typography>
      <Grid container spacing={3}>
        {githubBlogs.map(({ id, title, description, link, image, alt }) => (
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
                    Read on GitHub
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

export default GithubBlogsSection;
