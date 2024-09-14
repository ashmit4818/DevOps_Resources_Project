
import React, {useContext} from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/blogs/1.png';
import pic2 from '../assets/sectionimages/blogs/2.png';
import pic3 from '../assets/sectionimages/blogs/3.png';
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
    {
      id: 3,
      title: 'React Router not working with Github Pages Solution',
      description: 'In this blog post, we’ll explore how to use HashRouter instead of BrowserRouter from react-router package when deploying on github pages.',
      link: 'https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages',
      image: pic3, // Replace with your image
      alt: 'React Router not working with Github Pages',
    },
  ];
  const { isDarkMode } = useContext(ThemeContext);



  return (

    
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        Blogs
      </Typography>
      <Grid container spacing={3}>
        {blogs.map(({ id, title, description, link, image, alt }) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            <Card
             >
              <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={alt}
                sx={{
                  backgroundColor: '#fff', // Set background color for dark mode
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
                  Read
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

export default BlogsSection;
