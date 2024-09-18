
import React, {useContext} from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/fcc/1.png';
import pic2 from '../assets/sectionimages/fcc/2.png';
import pic3 from '../assets/sectionimages/fcc/3.jpg';
import pic4 from '../assets/sectionimages/fcc/4.png';
import pic5 from '../assets/sectionimages/fcc/5.png';

const FccBlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'What is DevOps? How Development + Operations Helps Teams Work More Efficiently',
      description: 'In this tutorial, we will explore what DevOps is and why organizations should have DevOps specialists.',
      link: 'https://www.freecodecamp.org/news/how-devops-works/',
      image: pic1,
      alt: 'What is DevOps? How Development + Operations Helps Teams Work More Efficiently',
    },
    {
      id: 2,
      title: 'How to Use Git and GitHub – a Guide for Beginners and Experienced Developers',
      description: 'This detailed guide is tailored to help you navigate the world of version control and collaboration.',
      link: 'https://www.freecodecamp.org/news/guide-to-git-github-for-beginners-and-experienced-devs/',
      image: pic2,
      alt: 'Version Control Git Github Tutorial',
    },
    {
      id: 3,
      title: 'A beginner’s comprehensive guide to Docker — how to create your first Docker application',
      description: 'You are a developer and you want to start with Docker? This article is made for you.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-your-first-docker-application-cc03de9b639f/',
      image: pic3,
      alt: 'A beginner’s guide to Docker — how to create your first Docker application',
    },
    {
      id: 4,
      title: 'AWS Basics for DevOps – How to Setup a Linux Machine, How to connect AWS instance using Putty.',
      description: 'In this article, you will learn how to create a server on AWS and connect to it using putty.',
      link: 'https://www.freecodecamp.org/news/aws-basics-for-devops/',
      image: pic4,
      alt: 'AWS Basics for DevOps – How to Setup a Linux Machine, How to connect AWS instance using Putty.',
    },
    {
      id: 5,
      title: 'How to Contribute to Open-Source Projects – Git & GitHub Workflow for Beginners',
      description: 'In this guide, I\'ll walk you by testing basic Git, GitHub workflow when contributing to open-source projects.',
      link: 'https://www.freecodecamp.org/news/git-and-github-workflow-for-open-source/',
      image: pic5,
      alt: 'How to Contribute to Open-Source Projects',
    },
    
  ];
  const { isDarkMode } = useContext(ThemeContext);


  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        FreeCodeCamp Blogs
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
                sx={{
                  backgroundColor: isDarkMode ? '#333' : '#fff',
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
                      backgroundColor: isDarkMode? '#262626':'#1b3887',
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

export default FccBlogsSection;
