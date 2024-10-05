
import React, {useContext} from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/blogs/1.png';
import pic2 from '../assets/sectionimages/blogs/2.png';
import pic3 from '../assets/sectionimages/blogs/3.png';
import pic4 from '../assets/sectionimages/blogs/4.png';

const BlogsSection = () => {

  const blogs = [
    {
      id: 1,
      title: 'Automated React Deployment with GitHub Actions',
      description: 'In this blog post, we\'ll explore how to leverage GitHub Actions for Automated React Deployment with GitHub Actions',
      link: 'https://codeparrot.ai/blogs/automated-react-deployment-with-github-actions',
      image: pic1, 
      alt: 'Introduction to DevOps with GitHub',
    },
    {
      id: 2,
      title: 'Optimizing ReactJS App Deployment with Docker and Nginx',
      description: 'In this blog post, we’ll explore how to Dockerize a ReactJS app for production using Nginx for better performance and load balancing.',
      link: 'https://www.geeksforgeeks.org/how-to-dockerize-a-reactjs-app/',
      image: pic2, 
      alt: 'Version Control Best Practices',
    },
    {
      id: 3,
      title: 'React Router not working with Github Pages Solution',
      description: 'In this blog post, we’ll explore how to use HashRouter instead of BrowserRouter from react-router package when deploying on github pages.',
      link: 'https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages',
      image: pic3, 
      alt: 'React Router not working with Github Pages',
    },
    {
      id: 4,
      title: 'Top 50+ Linux Commands You MUST Know',
      description: 'We’ll look at 50+ Linux commands you must know. The commands listed below are some of the most useful and most frequently used commands.',
      link: 'https://www.digitalocean.com/community/tutorials/linux-commands',
      image: pic4, 
      alt: 'Top 50+ Linux Commands You MUST Know',
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
          {/* //styles will change after theme */}
          <Card style={{ backgroundColor: "#121212", color: "#fff"}}>
            <CardMedia
              component="img"
              height="100%"
              image={image}
              alt={alt}
              sx={{
                backgroundColor: isDarkMode ? '#333' : '#333',
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
                  //switch '' second to create theme
                  backgroundColor: isDarkMode? '#333':'#333',
                  color: isDarkMode? '#fff':'',
                  padding: '10px 20px',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    //switch 1b3887 second to create theme
                    backgroundColor: isDarkMode? '#262626':'#000',
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
