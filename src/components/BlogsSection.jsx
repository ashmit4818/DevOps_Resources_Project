
import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/blogs/1.png';
import pic2 from '../assets/sectionimages/blogs/2.png';
// Replace with your placeholder image path

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Automated React Deployment with GitHub Actions',
      description: 'In this blog post, we\'ll explore how to leverage GitHub Actions for Automated React Deployment with GitHub Actions',
      link: 'https://codeparrot.ai/blogs/automated-react-deployment-with-github-actions',
      image: pic1, // Replace with your image
      alt: 'Introduction to DevOps with GitHub',
    },
    {
      id: 2,
      title: 'Optimizing ReactJS App Deployment with Docker and Nginx',
      description: 'In this blog post, we’ll explore how to Dockerize a ReactJS app for production using Nginx for better performance and load balancing.',
      link: 'https://www.geeksforgeeks.org/how-to-dockerize-a-reactjs-app/',
      image: pic2, // Replace with your image
      alt: 'Version Control Best Practices',
    },
  ];

  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        Blogs
      </Typography>
      <Grid container spacing={3}>
        {blogs.map(({ id, title, description, link, image, alt }) => (
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
                    Read
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

export default BlogsSection;
