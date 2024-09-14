import React, {useContext} from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/github/1.png'; // Replace with your placeholder image path
import pic2 from '../assets/sectionimages/github/2.jpg';
import pic3 from '../assets/sectionimages/github/3.jpg';
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
    description: 'Get a high-level overview of GitHub workflows, including triggers, syntax, and advanced features.',
    link: 'https://docs.github.com/en/actions/writing-workflows/about-workflows',
    image: pic2, // Replace with your image
    alt: 'About workflows in Github Actions',
  },
  {
    id: 3,
    title: 'DevOps and SRE Excercises',
    description: ' This repo contains questions and exercises on various technical topics, related to DevOps and SRE',
    link: 'https://github.com/bregman-arie/devops-exercises',
    image: pic3, // Replace with your image
    alt: 'DevOps and SRE Excercises',
  },
];


const GithubBlogsSection = () => {
  const { isDarkMode } = useContext(ThemeContext);
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
                  Read on Github
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

export default GithubBlogsSection;
