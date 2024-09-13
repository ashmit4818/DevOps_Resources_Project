import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import pic1 from '../assets/sectionimages/docker/1.png'; // Replace with your placeholder image path

const cardData = [
  {
    id: 1,
    title: "Docker architecture",
    description: "Docker follows Client-Server architecture, which includes the three main components that are Docker Client, Docker Host, and Docker Registry.",
    image: pic1, // Replace with your image
    alt: "Overview of Docker Architecture.",
    link: 'https://docs.docker.com/get-started/docker-overview/#docker-architecture' // Add link property
  },
  {
    id: 2,
    title: "Placeholder 2",
    description: "Description for Placeholder 2.",
    image: pic1, // Replace with your image
    alt: "Placeholder 2",
    link: 'https://example.com/resource2' // Add link property
  },
  {
    id: 3,
    title: "Placeholder 3",
    description: "Description for Placeholder 3.",
    image: pic1, // Replace with your image
    alt: "Placeholder 3",
    link: 'https://example.com/resource3' // Add link property
  },
];

const DockerDocsSection = () => {
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
                    Read on Docker Docs
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

export default DockerDocsSection;
