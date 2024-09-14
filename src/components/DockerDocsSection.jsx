import React, { useContext } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/docker/1.png';
import pic2 from '../assets/sectionimages/docker/2.png';
import pic3 from '../assets/sectionimages/docker/3.png';
const cardData = [
  {
    id: 1,
    title: "Docker architecture",
    description: "Docker follows Client-Server architecture, which includes the three main components that are Docker Client, Docker Host, and Docker Registry.",
    image: pic1,
    alt: "Overview of Docker Architecture.",
    link: 'https://docs.docker.com/get-started/docker-overview/#docker-architecture' 
  },
  {
    id: 2,
    title: "Publishing and exposing ports",
    description: "Containers provide isolation for your application that is great for security and managing dependencies, but it also means you can’t access them directly.",
    image: pic2,
    alt: "Publishing and exposing ports in Docker Containers",
    link: 'https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/'
  },
  {
    id: 3,
    title: "What is a container?",
    description: "Docker container is a software package containing all elements needed to run an application, including the code, configuration files, and dependencies.",
    image: pic3,
    alt: "What is a container?",
    link: 'https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/'
  },
];

const DockerDocsSection = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Container style={{ padding: '20px', paddingTop: '5%', paddingBottom: '5%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: '5%' }}>
        Docker Docs Resources
      </Typography>
      <Grid container spacing={3}>
        {cardData.map(({ id, title, description, image, alt, link }) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            <Card>
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
                  Read on Docker Docs
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

export default DockerDocsSection;
