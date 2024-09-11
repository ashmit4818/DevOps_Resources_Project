import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import placeholderImage from '../assets/docker.png'; // Replace with your placeholder image path

const cardData = [
  {
    id: 1,
    title: "Placeholder 1",
    description: "Description for Placeholder 1.",
    image: placeholderImage, // Replace with your image
    alt: "Placeholder 1",
    link: 'https://example.com/resource1' // Add link property
  },
  {
    id: 2,
    title: "Placeholder 2",
    description: "Description for Placeholder 2.",
    image: placeholderImage, // Replace with your image
    alt: "Placeholder 2",
    link: 'https://example.com/resource2' // Add link property
  },
  {
    id: 3,
    title: "Placeholder 3",
    description: "Description for Placeholder 3.",
    image: placeholderImage, // Replace with your image
    alt: "Placeholder 3",
    link: 'https://example.com/resource3' // Add link property
  },
  {
    id: 4,
    title: "Placeholder 4",
    description: "Description for Placeholder 4.",
    image: placeholderImage, // Replace with your image
    alt: "Placeholder 4",
    link: 'https://example.com/resource4' // Add link property
  },
  {
    id: 5,
    title: "Placeholder 5",
    description: "Description for Placeholder 5.",
    image: placeholderImage, // Replace with your image
    alt: "Placeholder 5",
    link: 'https://example.com/resource5' // Add link property
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
